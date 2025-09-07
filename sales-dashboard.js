document.addEventListener('DOMContentLoaded', () => {
  const loginSection = document.getElementById('login-section');
  const salesDashboard = document.getElementById('sales-dashboard');
  const loginBtn = document.getElementById('login-btn');
  const adminPasswordInput = document.getElementById('admin-password');
  const salesTableBody = document.getElementById('sales-table-body');
  const totalOrdersElement = document.getElementById('total-orders');
  const totalSalesElement = document.getElementById('total-sales');
  const totalCustomersElement = document.getElementById('total-customers');
  const searchOrders = document.getElementById('search-orders');
  const sortOrders = document.getElementById('sort-orders');
  const exportOrdersBtn = document.getElementById('export-orders');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('#nav-menu');

  // كلمة المرور الافتراضية (يمكنك تغييرها لاحقًا)
  const DEFAULT_PASSWORD = 'mahfour123'; // غيرها لو عايز
  const storedPassword = localStorage.getItem('adminPassword') || DEFAULT_PASSWORD;
  localStorage.setItem('adminPassword', storedPassword);

  // التحقق من تسجيل الدخول
  function checkLogin() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      loginSection.style.display = 'none';
      salesDashboard.style.display = 'block';
      renderSales();
    }
  }

  // تسجيل الدخول
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      const password = adminPasswordInput.value.trim();
      if (password === storedPassword) {
        localStorage.setItem('isLoggedIn', 'true');
        loginSection.style.display = 'none';
        salesDashboard.style.display = 'block';
        renderSales();
        Swal.fire({
          icon: 'success',
          title: 'تم تسجيل الدخول بنجاح',
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'كلمة مرور غير صحيحة',
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  }

  // عرض الطلبات
  function renderSales() {
    let orders = JSON.parse(localStorage.getItem('mahfourOrders')) || [];
    const searchTerm = searchOrders?.value.trim().toLowerCase();
    const sortValue = sortOrders?.value;

    // تصفية حسب البحث
    if (searchTerm) {
      orders = orders.filter(order => 
        order.message.toLowerCase().includes(searchTerm) ||
        `طلب رقم ${order.orderNumber}`.includes(searchTerm)
      );
    }

    // الفرز حسب التاريخ
    if (sortValue === 'newest') {
      orders.sort((a, b) => b.orderNumber - a.orderNumber);
    } else if (sortValue === 'oldest') {
      orders.sort((a, b) => a.orderNumber - b.orderNumber);
    }

    // عرض الطلبات في الجدول
    salesTableBody.innerHTML = '';
    orders.forEach(order => {
      const orderDetails = order.message.split('\n');
      const customerName = orderDetails.find(line => line.startsWith('الاسم:'))?.replace('الاسم: ', '') || 'غير معروف';
      const address = orderDetails.find(line => line.startsWith('العنوان:'))?.replace('العنوان: ', '') || 'غير معروف';
      const phone = orderDetails.find(line => line.startsWith('رقم الهاتف:'))?.replace('رقم الهاتف: ', '') || 'غير معروف';
      const products = orderDetails.filter(line => line.startsWith('- ')).join('<br>');
      const total = orderDetails.find(line => line.startsWith('الإجمالي:'))?.replace('الإجمالي: ', '') || '0 جنيه';
      const date = new Date(order.orderNumber * 1000).toLocaleDateString('ar-EG'); // تقريبي للتاريخ

      salesTableBody.insertAdjacentHTML('beforeend', `
        <tr>
          <td>${order.orderNumber}</td>
          <td>${customerName}</td>
          <td>${address}</td>
          <td>${phone}</td>
          <td>${products}</td>
          <td>${total}</td>
          <td>${date}</td>
        </tr>
      `);
    });

    // تحديث الإحصائيات
    totalOrdersElement.textContent = orders.length;
    const totalSales = orders.reduce((sum, order) => {
      const totalLine = order.message.split('\n').find(line => line.startsWith('الإجمالي:'));
      const total = totalLine ? parseFloat(totalLine.replace('الإجمالي: ', '').replace(' جنيه', '')) : 0;
      return sum + total;
    }, 0);
    totalSalesElement.textContent = `${totalSales} جنيه`;
    totalCustomersElement.textContent = new Set(orders.map(order => 
      order.message.split('\n').find(line => line.startsWith('الاسم:'))?.replace('الاسم: ', '')
    )).size;
  }

  // تصدير كـ CSV
  if (exportOrdersBtn) {
    exportOrdersBtn.addEventListener('click', () => {
      let orders = JSON.parse(localStorage.getItem('mahfourOrders')) || [];
      let csvContent = "data:text/csv;charset=utf-8,";
      csvContent += "رقم الطلب,اسم العميل,العنوان,رقم الهاتف,المنتجات,الإجمالي,التاريخ\n";
      
      orders.forEach(order => {
        const orderDetails = order.message.split('\n');
        const customerName = orderDetails.find(line => line.startsWith('الاسم:'))?.replace('الاسم: ', '') || 'غير معروف';
        const address = orderDetails.find(line => line.startsWith('العنوان:'))?.replace('العنوان: ', '') || 'غير معروف';
        const phone = orderDetails.find(line => line.startsWith('رقم الهاتف:'))?.replace('رقم الهاتف: ', '') || 'غير معروف';
        const products = orderDetails.filter(line => line.startsWith('- ')).join(';');
        const total = orderDetails.find(line => line.startsWith('الإجمالي:'))?.replace('الإجمالي: ', '') || '0 جنيه';
        const date = new Date(order.orderNumber * 1000).toLocaleDateString('ar-EG');
        csvContent += `${order.orderNumber},${customerName},${address},${phone},"${products}",${total},${date}\n`;
      });

      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', 'mahfour_sales.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  // إعداد البحث والفرز
  if (searchOrders) searchOrders.addEventListener('input', renderSales);
  if (sortOrders) sortOrders.addEventListener('change', renderSales);

  // تحديث فوري عند تغيير الطلبات
  window.addEventListener('storage', (e) => {
    if (e.key === 'mahfourOrders' && localStorage.getItem('isLoggedIn') === 'true') {
      renderSales();
    }
  });

  // إعداد زر القائمة
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // تحميل البيانات عند فتح الصفحة
  checkLogin();
});