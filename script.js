const productsData = [
  { name: "حصان خشبي", price: 50, img: "https://i.postimg.cc/4nMS61K7/photo.jpg", category: "ديكور" },
  { name: "كلمة خشبية", price: 50, img: "https://i.postimg.cc/6471s8Pp/photo-2.jpg", category: "هدايا" },
  { name: "منتج خشبي", price: 50, img: "https://i.postimg.cc/pyyS5SdM/photo-3.jpg", category: "ديكور" }
];

function renderProducts(products) {
  const container = document.getElementById('products');
  container.innerHTML = `
    <div class="filters" style="margin-bottom:10px;">
      <label>فرز حسب: </label>
      <select id="sort-products">
        <option value="default">الافتراضي</option>
        <option value="price-asc">السعر من الأقل للأعلى</option>
        <option value="price-desc">السعر من الأعلى للأقل</option>
      </select>
      <label>الفئة: </label>
      <select id="filter-category">
        <option value="all">الكل</option>
        <option value="ديكور">ديكور</option>
        <option value="هدايا">هدايا</option>
      </select>
    </div>
  `;
  products.forEach(product => {
    container.innerHTML += `
      <div class="product-card" data-name="${product.name}" data-price="${product.price}" data-category="${product.category}">
        <img src="${product.img}" alt="${product.name} مصنوع يدويًا" loading="lazy">
        <h3>${product.name}</h3>
        <p>سعر: ${product.price} جنيه</p>
        <div class="buttons">
          <a href="#" class="btn add-to-cart" data-name="${product.name}" data-price="${product.price}"><i class="fas fa-cart-plus"></i> أضف إلى السلة</a>
          <a href="#" class="btn order-now">اطلب الآن</a>
        </div>
      </div>
    `;
  });

  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', addToCart);
  });

  document.getElementById('sort-products').addEventListener('change', filterAndSortProducts);
  document.getElementById('filter-category').addEventListener('change', filterAndSortProducts);
}

function filterAndSortProducts() {
  const sortValue = document.getElementById('sort-products').value;
  const filterValue = document.getElementById('filter-category').value;

  let filtered = [...productsData];
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
  cartData.push({ name, price });
  renderCart();
  cart.classList.add('open');
  Swal.fire({
    icon: 'success',
    title: '✅ تم إضافة المنتج للسلة',
    showConfirmButton: false,
    timer: 1500
  });
}

// Hero Slider
let slides = document.querySelectorAll('.hero-slide');
let dots = document.querySelectorAll('.slider-dots .dot');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  currentSlide = index;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

document.querySelector('.next').addEventListener('click', () => {
  clearInterval(slideInterval);
  nextSlide();
  slideInterval = setInterval(nextSlide, 5000);
});

document.querySelector('.prev').addEventListener('click', () => {
  clearInterval(slideInterval);
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
  slideInterval = setInterval(nextSlide, 5000);
});

document.querySelectorAll('.slider-dots .dot').forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(slideInterval);
    currentSlide = Number(dot.dataset.slide);
    showSlide(currentSlide);
    slideInterval = setInterval(nextSlide, 5000);
  });
});

document.querySelector('.hero').addEventListener('mouseenter', () => clearInterval(slideInterval));
document.querySelector('.hero').addEventListener('mouseleave', () => slideInterval = setInterval(nextSlide, 5000));

// Cart functionality
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
    total += item.price;
    const li = document.createElement('li');
    li.innerHTML = `${item.name} - ${item.price} جنيه <button class="remove" data-index="${index}">❌</button>`;
    cartItems.appendChild(li);
  });
  cartCount.textContent = cartData.length;
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

// Open/close cart
cartBtn.addEventListener('click', () => cart.classList.add('open'));
closeCart.addEventListener('click', () => cart.classList.remove('open'));

// FAQ toggle
document.querySelectorAll('.faq-item button').forEach(btn => {
  btn.addEventListener('click', () => {
    let answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// Sanitize input for security
function sanitizeInput(input) {
  return input.replace(/[<>&]/g, '');
}

// Order via WhatsApp
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
    message += `- ${item.name} - ${item.price} جنيه\n`;
  });
  const total = cartData.reduce((sum, item) => sum + item.price, 0);
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

// Print invoice
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
    printContent += `- ${item.name} - ${item.price} جنيه\n`;
  });

  const total = cartData.reduce((sum, item) => sum + item.price, 0);
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

// Initialize
renderProducts(productsData);
renderCart();