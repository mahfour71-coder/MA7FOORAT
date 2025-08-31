const productsData = [
  { name: "حصان خشبي", price: 50, img: "https://i.postimg.cc/4nMS61K7/photo.jpg", category: "ديكور" },
  { name: "كلمة خشبية", price: 50, img: "https://i.postimg.cc/6471s8Pp/photo-2.jpg", category: "هدايا" },
  { name: "منتج خشبي", price: 50, img: "https://i.postimg.cc/pyyS5SdM/photo-3.jpg", category: "ديكور" },
  { name: "حصان خشبي صغير", price: 30, img: "https://i.postimg.cc/JzTt3MQy/photo.jpg", category: "هدايا" },
  { name: "مكعب خشبي مزخرف", price: 40, img: "https://i.postimg.cc/NFw0GMQn/photo-4.jpg", category: "ديكور" },
  { name: "ديكور خشبي بعقاب", price: 50, img: "https://i.postimg.cc/QxfjwSKw/photo.jpg", category: "هدايا" },
  { name: "لوحة 'Everyday is More Better'", price: 60, img: "https://i.postimg.cc/mDW4C5Kz/photo-3.jpg", category: "ديكور" }
];

function renderProducts(products) {
  const container = document.querySelector('.products');
  const productCards = container.querySelectorAll('.product-card');
  productCards.forEach(card => card.remove());

  products.forEach(product => {
    container.insertAdjacentHTML('beforeend', `
      <div class="product-card" data-name="${product.name}" data-price="${product.price}" data-category="${product.category}">
        <img src="${product.img}" alt="${product.name} مصنوع يدويًا" loading="lazy">
        <h3>${product.name}</h3>
        <p>سعر: ${product.price} جنيه</p>
        <div class="buttons">
          <a href="#" class="btn add-to-cart" data-name="${product.name}" data-price="${product.price}"><i class="fas fa-cart-plus"></i> أضف إلى السلة</a>
          <a href="#" class="btn order-now">اطلب الآن</a>
        </div>
      </div>
    `);
  });

  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', addToCart);
  });

  document.querySelectorAll('.order-now').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = e.target.closest('.product-card').dataset.name;
      const price = e.target.closest('.product-card').dataset.price;
      const message = `طلب منتج:\nالمنتج: ${name}\nالسعر: ${price} جنيه`;
      const url = `https://wa.me/201033662370?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    });
  });
}

function filterAndSortProducts() {
  const sortValue = document.getElementById('sort-products').value;
  const filterValue = document.getElementById('filter-category').value;
  const searchTerm = document.getElementById('search-products').value.trim();

  let filtered = [...productsData];
  if (searchTerm) {
    filtered = filtered.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  if (filterValue !== 'all') {
    filtered = filtered.filter(product => product.category === filterValue);
  }
  if (sortValue === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProducts(filtered);
}

function addToCart(e) {
  e.preventDefault();
  const name = e.target.dataset.name;
  const price = Number(e.target.dataset.price);
  const existingItem = cartData.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1) + 1;
  } else {
    cartData.push({ name, price, quantity: 1 });
  }
  renderCart();
  cart.classList.add('open');
  Swal.fire({
    icon: 'success',
    title: '✅ تم إضافة المنتج للسلة',
    showConfirmButton: false,
    timer: 1500
  });
}

const cartBtn = document.getElementById('cart-btn');
const cart = document.getElementById('cart');
const closeCart = document.getElementById('close-cart');
const cartItems = document.querySelector('.cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const orderCartBtn = document.getElementById('order-cart');
const printCartBtn = document.getElementById('print-cart');
const clearCartBtn = document.getElementById('clear-cart');

let cartData = JSON.parse(localStorage.getItem('mahfourCart')) || [];

function renderCart() {
  cartItems.innerHTML = '';
  let total = 0;
  cartData.forEach((item, index) => {
    const itemTotal = item.price * (item.quantity || 1);
    total += itemTotal;
    const li = document.createElement('li');
    li.innerHTML = `${item.name} - ${item.price} جنيه x${item.quantity || 1} = ${itemTotal} جنيه <button class="remove" data-index="${index}">❌</button>`;
    cartItems.appendChild(li);
  });
  cartCount.textContent = cartData.reduce((sum, item) => sum + (item.quantity || 1), 0);
  cartTotal.textContent = total;
  localStorage.setItem('mahfourCart', JSON.stringify(cartData));
}

cartItems.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const index = e.target.dataset.index;
    cartData.splice(index, 1);
    renderCart();
  }
});

clearCartBtn.addEventListener('click', () => {
  Swal.fire({
    icon: 'warning',
    title: 'هل أنت متأكد؟',
    text: 'سيتم مسح كل المنتجات من السلة!',
    showCancelButton: true,
    confirmButtonText: 'نعم، امسح',
    cancelButtonText: 'إلغاء'
  }).then(result => {
    if (result.isConfirmed) {
      cartData = [];
      renderCart();
      Swal.fire({
        icon: 'success',
        title: 'تم مسح السلة',
        showConfirmButton: false,
        timer: 1500
      });
    }
  });
});

cartBtn.addEventListener('click', () => cart.classList.add('open'));
closeCart.addEventListener('click', () => cart.classList.remove('open'));

function sanitizeInput(input) {
  return input.replace(/[<>&]/g, '');
}

orderCartBtn.addEventListener('click', () => {
  if (cartData.length === 0) {
    Swal.fire({
      icon: 'warning',
      title: 'السلة فارغة!',
      showConfirmButton: false,
      timer: 1500
    });
    return;
  }

  const fullName = sanitizeInput(document.getElementById('full-name').value.trim());
  const address = sanitizeInput(document.getElementById('address').value.trim());
  const phoneNumber = sanitizeInput(document.getElementById('phone-number').value.trim());
  const locationLink = sanitizeInput(document.getElementById('location-link').value.trim());
  if (!fullName || !address || !phoneNumber || !/^\d{11}$/.test(phoneNumber)) {
    Swal.fire({
      icon: 'error',
      title: 'يرجى ملء كل الحقول الإلزامية ورقم الهاتف يجب أن يكون 11 رقمًا.',
      showConfirmButton: false,
      timer: 2000
    });
    return;
  }

  let message = `بيانات العميل:\nالاسم: ${fullName}\nالعنوان: ${address}\nرقم الهاتف: ${phoneNumber}\n`;
  if (locationLink) message += `رابط الموقع: ${locationLink}\n`;
  message += `\nالمنتجات المطلوبة:\n`;
  cartData.forEach(item => {
    message += `- ${item.name} - ${item.price} جنيه x${item.quantity || 1}\n`;
  });
  const total = cartData.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  message += `\nالإجمالي: ${total} جنيه`;

  Swal.fire({
    icon: 'info',
    title: 'تأكيد البيانات',
    html: `<pre>${message}</pre>`,
    showCancelButton: true,
    confirmButtonText: 'إرسال عبر واتساب',
    cancelButtonText: 'إلغاء'
  }).then(result => {
    if (result.isConfirmed) {
      const orderNumber = (JSON.parse(localStorage.getItem('mahfourOrders')) || []).length + 1;
      const url = `https://wa.me/201033662370?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
      cartData = [];
      renderCart();
      Swal.fire({
        icon: 'success',
        title: `تم إرسال الطلب رقم ${orderNumber}`,
        showConfirmButton: false,
        timer: 2000
      });
    }
  });
});

printCartBtn.addEventListener('click', () => {
  if (cartData.length === 0) {
    Swal.fire({
      icon: 'warning',
      title: 'السلة فارغة!',
      showConfirmButton: false,
      timer: 1500
    });
    return;
  }

  const fullName = sanitizeInput(document.getElementById('full-name').value.trim());
  const address = sanitizeInput(document.getElementById('address').value.trim());
  const phoneNumber = sanitizeInput(document.getElementById('phone-number').value.trim());
  const locationLink = sanitizeInput(document.getElementById('location-link').value.trim());
  if (!fullName || !address || !phoneNumber || !/^\d{11}$/.test(phoneNumber)) {
    Swal.fire({
      icon: 'error',
      title: 'يرجى ملء كل الحقول الإلزامية ورقم الهاتف يجب أن يكون 11 رقمًا.',
      showConfirmButton: false,
      timer: 2000
    });
    return;
  }

  let allOrders = JSON.parse(localStorage.getItem('mahfourOrders')) || [];
  const existingOrder = allOrders.find(order => order.fullName === fullName && order.phoneNumber === phoneNumber);
  if (existingOrder) {
    Swal.fire({
      icon: 'warning',
      title: '⚠️ هذا العميل طلب من قبل!',
      showConfirmButton: false,
      timer: 1500
    });
  }

  const orderNumber = allOrders.length + 1;
  const now = new Date();
  const date = now.toLocaleDateString('ar-EG');
  const time = now.toLocaleTimeString('ar-EG');
  const invoiceId = 'INV' + now.getTime();

  let printContent = `
MAHFOUR_BRAND - فاتورة مشتريات
رقم الطلب: ${orderNumber}
رقم الفاتورة: ${invoiceId}
التاريخ: ${date}
الوقت: ${time}

بيانات المشتري:
الاسم: ${fullName}
العنوان: ${address}
رقم الهاتف: ${phoneNumber}
${locationLink ? 'رابط الموقع: ' + locationLink : ''}

المنتجات:
`;

  cartData.forEach(item => {
    printContent += `- ${item.name} - ${item.price} جنيه x${item.quantity || 1}\n`;
  });

  const total = cartData.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  printContent += `\nالإجمالي: ${total} جنيه`;

  const printWindow = window.open('', '', 'height=600,width=400');
  printWindow.document.write(`<pre style="font-family: Tahoma, sans-serif; direction: rtl;">${printContent}</pre>`);
  printWindow.document.close();
  printWindow.print();

  allOrders.push({
    orderNumber,
    invoiceId,
    fullName,
    address,
    phoneNumber,
    locationLink,
    products: cartData,
    total,
    date,
    time
  });
  localStorage.setItem('mahfourOrders', JSON.stringify(allOrders));
});

renderProducts(productsData);
renderCart();
document.getElementById('search-products').addEventListener('input', filterAndSortProducts);
document.getElementById('sort-products').addEventListener('change', filterAndSortProducts);
document.getElementById('filter-category').addEventListener('change', filterAndSortProducts);

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});
