const whatsappNumber = "+201033662370";

const ADMIN_PASSWORD = "123";
const PRODUCTS_PASSWORD = "MOHAND2009MOHAND1907MO09UA07";

// Define productsData with version control
const productsDataDefault = [
  { 
    id: 1, 
    code: "101",
    name: " علب مناديل خشبية", 
    price: 165, 
    discount: 0, 
    img: "https://i.postimg.cc/W4nRLDKp/photo.jpg", 
    category: "ادوات منزلية", 
    details: "علب مناديل خشبية", 
    images: [
      "https://i.postimg.cc/ydgThtFH/photo.jpg",
      "https://i.postimg.cc/pXGY7Pqb/photo.jpg",
      "https://i.postimg.cc/WbW6KsSK/photo-2.jpg",
      "https://i.postimg.cc/wj1cYnbr/photo.jpg",
      "https://i.postimg.cc/jdgQ9RZr/photo-2.jpg",
      "https://i.postimg.cc/SNT75mDb/photo-4.jpg",
      "https://i.postimg.cc/bNCHMq3h/photo-5.jpg",
      "https://i.postimg.cc/90FRcqJm/photo.jpg",
      "https://i.postimg.cc/Zn79nKMb/photo.jpg",
      "https://i.postimg.cc/tJS1JCMp/photo-2.jpg",
      "https://i.postimg.cc/FzWfzsBh/photo-3.jpg",
      "https://i.postimg.cc/WzWDzbH2/photo-4.jpg",
      "https://i.postimg.cc/nrRsrcP7/photo.jpg",
      "https://i.postimg.cc/mkXck25k/photo-2.jpg",
      "https://i.postimg.cc/wMftMTG7/photo-3.jpg",
      "https://i.postimg.cc/qqbtqM5t/photo-4.jpg",
      "https://i.postimg.cc/66Y4YY5m/photo.jpg",
      "https://i.postimg.cc/fy23yTr7/photo-2.jpg",
      "https://i.postimg.cc/SRTXRNv7/photo-3.jpg",
      "https://i.postimg.cc/j2gW2dF4/photo-4.jpg",
      "https://i.postimg.cc/gcNLNNkt/photo-5.jpg",
      "https://i.postimg.cc/sfwGwwDk/photo.jpg",
      "https://i.postimg.cc/xjtNttT7/photo-2.jpg",
      "https://i.postimg.cc/3rn0nnJz/photo-3.jpg",
      "https://i.postimg.cc/bY3S33wX/photo.jpg",
      "https://i.postimg.cc/h4pQpptW/photo.jpg",
      "https://i.postimg.cc/W4nRLDKp/photo.jpg"


    ],
    dimensions: "20 × 30 سم",
    video: null,
    available: true
  },
  { 
    id: 2, 
    code: "202",
    name: " حامل موبايل", 
    price: 65, 
    discount: 0, 
    img: "https://i.postimg.cc/d1PvR7XP/photo-4.jpg", 
    category: "اكسسورات", 
    details: " حامل موبايل وتابلت  ", 
    images: [
      "https://i.postimg.cc/QM6xpxD9/photo.jpg",
      "https://i.postimg.cc/N0rBr8db/photo.jpg", 
      "https://i.postimg.cc/fb0D0783/photo-2.jpg",
      "https://i.postimg.cc/1zNsN0vc/photo-3.jpg",
      "https://i.postimg.cc/SsFqLXPr/photo.jpg",
      "https://i.postimg.cc/CKfSfCcs/photo-2.jpg",
      "https://i.postimg.cc/8CrNrdZ4/photo-3.jpg",
      "https://i.postimg.cc/yd4BhJGT/photo-4.jpg",
      "https://i.postimg.cc/j50K6W1c/photo-5.jpg",
      "https://i.postimg.cc/xCDYGkZg/photo-6.jpg",
      "https://i.postimg.cc/W3GV5NLc/photo.jpg",
      "https://i.postimg.cc/JnVm3yF9/photo-2.jpg",
      "https://i.postimg.cc/bJc80G57/photo-3.jpg",
      "https://i.postimg.cc/d1PvR7XP/photo-4.jpg",
      "https://i.postimg.cc/nzbZKs5t/photo-5.jpg",
      "https://i.postimg.cc/Y967drKw/photo-6.jpg",
      "https://i.postimg.cc/ydmKL14W/photo.jpg",
      "https://i.postimg.cc/50d15HGN/photo-2.jpg",
      "https://i.postimg.cc/FRyvTr5v/photo-3.jpg",
      "https://i.postimg.cc/50BJs4d4/photo-4.jpg",
      "https://i.postimg.cc/7634KH8Z/photo-5.jpg",
      "https://i.postimg.cc/26QY0kR5/photo-6.jpg",
      "https://i.postimg.cc/rm1TfVX5/photo.jpg",
      "https://i.postimg.cc/W3GV5NLc/photo.jpg"
    ],
    dimensions: "15 × 10 سم",
    video: null,
    available: true
  },
  { 
    id: 3, 
    code: "301",
    name: "مقلمة", 
    price: 55, 
    discount: 0, 
    img: "https://i.postimg.cc/NFV7zcwj/photo.jpg", 
    category: "ادوات مكتبية", 
    details: "  مقلمة اطفال ", 
    images: ["https://i.postimg.cc/FRLjkc4h/photo.jpg",
      "https://i.postimg.cc/KcJZgYZt/photo.jpg",
      "https://i.postimg.cc/QxCjgrtF/photo.jpg",
      "https://i.postimg.cc/15Xy0Ztf/photo-3.jpg",
      "https://i.postimg.cc/NFV7zcwj/photo.jpg"
    ],
    dimensions: "15 × 15 سم",
    video: null,
    available: true
  },
  { 
    id: 4, 
    code: "XO004",
    name: "لعبه x.o", 
    price: 99, 
    discount: 0, 
    img: "https://i.postimg.cc/gj9TCqCw/photo.jpg", 
    category: "العاب", 
    details: "حصان خشبي صغير مصنوع يدويًا، مثالي كهدية تذكارية.", 
    images: ["https://i.postimg.cc/900jZxJw/photo-2025-09-05-02-44-18.jpg"],
    dimensions: "يختلف حسب الطلب",
    video: "https://files.catbox.moe/hlznb6.mp4",
    available: true
  },
  { 
    id: 5, 
    code: "CS005",
    name: "كوستر", 
    price: 30, 
    discount: 0, 
    img: "https://i.postimg.cc/1zwCpNns/photo-2025-09-04-22-39-53.jpg", 
    category: "ادوات منزلية", 
    details: "مكعب خشبي مزخرف بتصميم فريد، مصنوع من خشب الصنوبر.", 
    images: [
      "https://i.postimg.cc/1zwCpNns/photo-2025-09-04-22-39-53.jpg",
      "https://i.postimg.cc/NFw0GMQn/photo-4.jpg", 
      "https://i.postimg.cc/4nMS61K7/photo.jpg"
    ],
    dimensions: "يختلف حسب الطلب",
    video: null,
    available: true
  },
  { 
    id: 6, 
    code: "CS006",
    name: "كوستر", 
    price: 30, 
    discount: 0, 
    img: "https://i.postimg.cc/rsfwL0Yx/photo-2025-09-05-02-41-16.jpg", 
    category: "ادوات منزلية", 
    details: "مكعب خشبي مزخرف بتصميم فريد، مصنوع من خشب الصنوبر.", 
    images: [
      "https://i.postimg.cc/rsfwL0Yx/photo-2025-09-05-02-41-16.jpg",
      "https://i.postimg.cc/NFw0GMQn/photo-4.jpg", 
      "https://i.postimg.cc/4nMS61K7/photo.jpg"
    ],
    dimensions: "يختلف حسب الطلب",
    video: null,
    available: true
  },
  { 
    id: 7, 
    code: "CS007",
    name: "كوستر", 
    price: 30, 
    discount: 0, 
    img: "https://i.postimg.cc/pdKVL162/photo-2025-09-05-02-42-09.jpg", 
    category: "ادوات منزلية", 
    details: "مكعب خشبي مزخرف بتصميم فريد، مصنوع من خشب الصنوبر.", 
    images: [
      "https://i.postimg.cc/pdKVL162/photo-2025-09-05-02-42-09.jpg",
      "https://i.postimg.cc/NFw0GMQn/photo-4.jpg", 
      "https://i.postimg.cc/4nMS61K7/photo.jpg"
    ],
    dimensions: "يختلف حسب الطلب",
    video: null,
    available: true
  },
  { 
    id: 8, 
    code: "DC008",
    name: "ديكور خشبي علي شكل كف", 
    price: 75, 
    discount: 0, 
    img: "https://i.postimg.cc/0ND2gZ3m/photo-2025-09-04-22-20-43.jpg", 
    category: "ديكور", 
    details: "ديكور خشبي بتصميم عقاب، مثالي لعشاق الديكورات الفريدة.", 
    images: ["https://i.postimg.cc/QxfjwSKw/photo.jpg"],
    dimensions: "يختلف حسب الطلب",
    video: null,
    available: true
  },
  { 
    id: 9, 
    code: "DC009",
    name: "ديكور خشبي علي شكل كف", 
    price: 75, 
    discount: 0, 
    img: "https://i.postimg.cc/GmGkyMfN/photo-2025-09-07-05-29-55.jpg", 
    category: "ديكور", 
    details: "ديكور خشبي بتصميم عقاب، مثالي لعشاق الديكورات الفريدة.", 
    images: ["https://i.postimg.cc/QxfjwSKw/photo.jpg"],
    dimensions: "يختلف حسب الطلب",
    video: null,
    available: true
  },
  { 
    id: 10, 
    code: "CS010",
    name: "كوستر 'Everyday is More Better'", 
    price: 55, 
    discount: 0, 
    img: "https://i.postimg.cc/bJV5mfTR/photo-2025-09-04-22-26-03.jpg", 
    category: "ادوات منزلية", 
    details: "لوحة خشبية تحمل عبارة ملهمة، بأبعاد 25x35 سم.", 
    images: [
      "https://i.postimg.cc/bJV5mfTR/photo-2025-09-04-22-26-03.jpg",
      "https://postimg.cc/gallery/WFMk9kS", 
      "https://i.postimg.cc//photo-2.jpg"
    ],
    dimensions: "25 × 35 سم",
    video: null,
    available: true
  }
];

// Version control for products data
const DATA_VERSION = "1.3";

let productsData;

// Initialize products data
function initializeProducts() {
  const storedVersion = localStorage.getItem('mahfourDataVersion');
  if (storedVersion !== DATA_VERSION) {
    productsData = productsDataDefault;
    localStorage.setItem('mahfourProducts', JSON.stringify(productsData));
    localStorage.setItem('mahfourDataVersion', DATA_VERSION);
  } else {
    productsData = JSON.parse(localStorage.getItem('mahfourProducts')) || productsDataDefault;
  }
}

let cartData = JSON.parse(localStorage.getItem('mahfourCart')) || [];

// Verify admin password
function verifyPassword() {
  const passwordInput = document.getElementById('password-input');
  if (!passwordInput) return;

  const enteredPassword = passwordInput.value.trim();

  if (!enteredPassword) {
    Swal.fire({
      icon: 'error',
      title: 'كلمة مرور مطلوبة',
      text: 'يرجى إدخال كلمة المرور.',
      showConfirmButton: false,
      timer: 2000
    });
    return false;
  }

  if (enteredPassword === ADMIN_PASSWORD) {
    document.getElementById('password-modal').style.display = 'none';
    document.getElementById('admin-content').style.display = 'block';
    renderOrders();
    updateStats(); // تعديل جديد: تحديث الإحصائيات بعد الدخول
    renderProductsManagement();
    return true;
  } else {
    Swal.fire({
      icon: 'error',
      title: 'كلمة مرور غير صحيحة',
      text: 'يرجى إدخال كلمة المرور الصحيحة.',
      showConfirmButton: false,
      timer: 2000
    });
    passwordInput.value = '';
    return false;
  }
}

// Verify products management password
function verifyProductsPassword() {
  const passwordInput = document.getElementById('products-password-input');
  if (!passwordInput) return;

  const enteredPassword = passwordInput.value.trim();

  if (!enteredPassword) {
    Swal.fire({
      icon: 'error',
      title: 'كلمة مرور مطلوبة',
      text: 'يرجى إدخال كلمة المرور الخاصة بإدارة المنتجات.',
      showConfirmButton: false,
      timer: 2000
    });
    return false;
  }

  if (enteredPassword === PRODUCTS_PASSWORD) {
    document.getElementById('products-password-modal').style.display = 'none';
    document.getElementById('products-management').style.display = 'block';
    document.getElementById('add-product-btn').style.display = 'block';
    renderProductsManagement();
    setupManagementFilters();
    return true;
  } else {
    Swal.fire({
      icon: 'error',
      title: 'كلمة مرور غير صحيحة',
      text: 'يرجى إدخال كلمة المرور الصحيحة لإدارة المنتجات.',
      showConfirmButton: false,
      timer: 2000
    });
    passwordInput.value = '';
    return false;
  }
}

// Render products
function renderProducts(products = productsData) {
  const productsSection = document.querySelector('.products');
  if (!productsSection) return;

  productsSection.innerHTML = '';

  products.forEach(product => {
    const discountedPrice = product.discount > 0 ? (product.price * (1 - product.discount / 100)).toFixed(2) : product.price;
    const priceDisplay = product.discount > 0 
      ? `<span class="original-price">${product.price} جنيه</span><span class="discounted-price">${discountedPrice} جنيه</span>`
      : `<span>${product.price} جنيه</span>`;

    const card = document.createElement('div');
    card.className = `product-card ${product.available ? '' : 'unavailable'}`;
    card.innerHTML = `
      <div class="image-wrapper">
        <img src="${product.img}" alt="${product.name}" loading="lazy">
        ${!product.available ? '<span class="unavailable-badge">غير متوفر</span>' : ''}
      </div>
      <h3>${product.name}</h3>
      <p>${priceDisplay}</p>
      <div class="buttons">
        <button class="btn add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${discountedPrice}">
          <i class="fas fa-cart-plus"></i> أضف إلى السلة
        </button>
        <button class="btn order-now" data-id="${product.id}" data-name="${product.name}" data-price="${discountedPrice}">
          <i class="fas fa-bolt"></i> اطلب الآن
        </button>
        <div class="quantity-control" data-id="${product.id}">
          <button class="qty-btn minus" data-id="${product.id}">-</button>
          <span class="quantity product-quantity" data-id="${product.id}">1</span>
          <button class="qty-btn plus" data-id="${product.id}">+</button>
        </div>
      </div>
    `;
    productsSection.appendChild(card);
  });

  // Update product count
  const productCount = document.getElementById('product-count');
  if (productCount) {
    productCount.textContent = products.length;
  }
}

// Add to cart
function addToCart(productId, quantity = 1) {
  const product = productsData.find(p => p.id === productId);
  if (!product || !product.available) {
    Swal.fire({
      icon: 'warning',
      title: 'المنتج غير متوفر',
      text: 'هذا المنتج غير متوفر حاليًا، سيتوفر في أقرب وقت.',
      showConfirmButton: false,
      timer: 2000
    });
    return;
  }

  const discountedPrice = product.discount > 0 ? product.price * (1 - product.discount / 100) : product.price;
  const existingItem = cartData.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cartData.push({
      id: productId,
      name: product.name,
      code: product.code,
      price: discountedPrice,
      quantity: quantity,
      img: product.img
    });
  }

  localStorage.setItem('mahfourCart', JSON.stringify(cartData));
  updateCart();
  Swal.fire({
    icon: 'success',
    title: 'تمت الإضافة',
    text: `${product.name} تمت إضافته إلى السلة!`,
    showConfirmButton: false,
    timer: 1500
  });
}

// Update cart
function updateCart() {
  const cart = document.getElementById('cart');
  const cartItems = document.querySelector('.cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');

  if (!cart || !cartItems || !cartCount || !cartTotal) return;

  cartItems.innerHTML = '';
  let total = 0;
  let count = 0;

  cartData.forEach(item => {
    const product = productsData.find(p => p.id === item.id);
    if (!product) return;

    count += item.quantity;
    total += item.price * item.quantity;

    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${item.img}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;">
      <span class="item-name" data-id="${item.id}">${item.name} (${item.code})</span>
      <span>${item.price.toFixed(2)} جنيه × ${item.quantity}</span>
      <div>
        <button class="qty-btn minus" data-id="${item.id}">-</button>
        <span class="cart-quantity">${item.quantity}</span>
        <button class="qty-btn plus" data-id="${item.id}">+</button>
        <button class="remove" data-id="${item.id}">×</button>
      </div>
    `;
    cartItems.appendChild(li);
  });

  cartCount.textContent = count;
  cartTotal.textContent = total.toFixed(2);
}

// Render cart
function renderCart() {
  updateCart();
}

// Clear cart
function clearCart() {
  Swal.fire({
    title: 'هل أنت متأكد؟',
    text: 'سيتم مسح جميع العناصر من السلة!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'نعم، امسح السلة',
    cancelButtonText: 'إلغاء'
  }).then((result) => {
    if (result.isConfirmed) {
      cartData = [];
      localStorage.setItem('mahfourCart', JSON.stringify(cartData));
      updateCart();
      Swal.fire({
        icon: 'success',
        title: 'تم مسح السلة',
        showConfirmButton: false,
        timer: 1500
      });
    }
  });
}

// Order via WhatsApp
function orderViaWhatsApp() {
  const fullName = document.getElementById('full-name').value.trim();
  const address = document.getElementById('address').value.trim();
  const locationLink = document.getElementById('location-link').value.trim();
  const phoneNumber = document.getElementById('phone-number').value.trim();

  if (!fullName || !address || !phoneNumber) {
    Swal.fire({
      icon: 'error',
      title: 'بيانات غير مكتملة',
      text: 'يرجى ملء جميع الحقول المطلوبة.',
      showConfirmButton: false,
      timer: 2000
    });
    return;
  }

  if (!/^\d{11}$/.test(phoneNumber)) {
    Swal.fire({
      icon: 'error',
      title: 'رقم هاتف غير صحيح',
      text: 'يرجى إدخال رقم هاتف مكون من 11 رقمًا.',
      showConfirmButton: false,
      timer: 2000
    });
    return;
  }

  let message = `*طلب جديد من متجر MAHFOOR CNC*\n\n`;
  message += `*الاسم:* ${fullName}\n`;
  message += `*العنوان:* ${address}\n`;
  if (locationLink) message += `* لوكيشن استلام الاوردر:* ${locationLink}\n`;
  message += `*رقم الهاتف:* ${phoneNumber}\n\n`;
  message += `*المنتجات:*\n`;

  let total = 0;
  cartData.forEach(item => {
    const product = productsData.find(p => p.id === item.id);
    if (product) {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      message += `- ${item.name}\n  كود المنتج: ${item.code}\n  ${item.quantity} × ${item.price.toFixed(2)} جنيه = ${itemTotal.toFixed(2)} جنيه\n`;
    }
  });

  message += `\n*الإجمالي:* ${total.toFixed(2)} جنيه`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  const order = {
    id: Date.now(),
    date: new Date().toLocaleString('ar-EG'),
    details: message,
    status: 'قيد الانتظار'
  };

  let orders = JSON.parse(localStorage.getItem('mahfourOrders')) || [];
  orders.push(order);
  localStorage.setItem('mahfourOrders', JSON.stringify(orders));

  cartData = [];
  localStorage.setItem('mahfourCart', JSON.stringify(cartData));
  updateCart();

  window.open(whatsappUrl, '_blank');
  Swal.fire({
    icon: 'success',
    title: 'تم إرسال الطلب',
    text: 'سيتم توجيهك إلى واتساب لتأكيد الطلب.',
    showConfirmButton: false,
    timer: 2000
  });
}

// Order now via WhatsApp (for single product)
function orderNowViaWhatsApp(productId, quantity) {
  const product = productsData.find(p => p.id === productId);
  if (!product || !product.available) {
    Swal.fire({
      icon: 'warning',
      title: 'المنتج غير متوفر',
      text: 'هذا المنتج غير متوفر حاليًا، سيتوفر في أقرب وقت.',
      showConfirmButton: false,
      timer: 2000
    });
    return;
  }

  const fullName = document.getElementById('order-now-full-name').value.trim();
  const address = document.getElementById('order-now-address').value.trim();
  const locationLink = document.getElementById('order-now-location-link').value.trim();
  const phoneNumber = document.getElementById('order-now-phone-number').value.trim();

  if (!fullName || !address || !phoneNumber) {
    Swal.fire({
      icon: 'error',
      title: 'بيانات غير مكتملة',
      text: 'يرجى ملء جميع الحقول المطلوبة.',
      showConfirmButton: false,
      timer: 2000
    });
    return;
  }

  if (!/^\d{11}$/.test(phoneNumber)) {
    Swal.fire({
      icon: 'error',
      title: 'رقم هاتف غير صحيح',
      text: 'يرجى إدخال رقم هاتف مكون من 11 رقمًا.',
      showConfirmButton: false,
      timer: 2000
    });
    return;
  }

  const discountedPrice = product.discount > 0 ? (product.price * (1 - product.discount / 100)).toFixed(2) : product.price;
  const itemTotal = discountedPrice * quantity;

  let message = `*طلب جديد من متجر MAHFOOR CNC*\n\n`;
  message += `*الاسم:* ${fullName}\n`;
  message += `*العنوان:* ${address}\n`;
  if (locationLink) message += `* لوكيشن استلام الاوردر:* ${locationLink}\n`;
  message += `*رقم الهاتف:* ${phoneNumber}\n\n`;
  message += `*المنتج:* ${product.name}\n`;
  message += `كود المنتج: ${product.code}\n`;
  message += `- ${quantity} × ${discountedPrice} جنيه = ${itemTotal.toFixed(2)} جنيه\n`;
  message += `\n*الإجمالي:* ${itemTotal.toFixed(2)} جنيه`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  const order = {
    id: Date.now(),
    date: new Date().toLocaleString('ar-EG'),
    details: message,
    status: 'قيد الانتظار'
  };

  let orders = JSON.parse(localStorage.getItem('mahfourOrders')) || [];
  orders.push(order);
  localStorage.setItem('mahfourOrders', JSON.stringify(orders));

  document.getElementById('order-now-modal').style.display = 'none';
  document.getElementById('order-now-full-name').value = '';
  document.getElementById('order-now-address').value = '';
  document.getElementById('order-now-location-link').value = '';
  document.getElementById('order-now-phone-number').value = '';
  document.getElementById('order-product-name').textContent = '';

  window.open(whatsappUrl, '_blank');
  Swal.fire({
    icon: 'success',
    title: 'تم إرسال الطلب',
    text: 'سيتم توجيهك إلى واتساب لتأكيد الطلب.',
    showConfirmButton: false,
    timer: 2000
  });
}

// Render orders
function renderOrders(orders = JSON.parse(localStorage.getItem('mahfourOrders')) || []) {
  const ordersList = document.getElementById('orders-list');
  if (!ordersList) return;

  ordersList.innerHTML = '';

  if (orders.length === 0) {
    ordersList.innerHTML = '<p>لا توجد طلبات حاليًا.</p>';
    return;
  }

  orders.forEach(order => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${order.id}</td>
      <td>${order.date}</td>
      <td><pre>${order.details}</pre></td>
      <td>
        <button class="action-btn delete-order" data-id="${order.id}">حذف</button>
      </td>
    `;
    ordersList.appendChild(tr);
  });
}

// Clear orders
function clearOrders() {
  Swal.fire({
    title: 'هل أنت متأكد؟',
    text: 'سيتم حذف جميع الطلبات!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'نعم، احذف الكل',
    cancelButtonText: 'إلغاء'
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.setItem('mahfourOrders', JSON.stringify([]));
      renderOrders();
      updateStats(); // تعديل جديد: تحديث الإحصائيات بعد المسح
      Swal.fire({
        icon: 'success',
        title: 'تم حذف الطلبات',
        showConfirmButton: false,
        timer: 1500
      });
    }
  });
}

// Search and filter products
function setupFilters() {
  const searchInput = document.getElementById('search-products');
  const sortSelect = document.getElementById('sort-products');
  const filterCategory = document.getElementById('filter-category');
  const resetFilters = document.getElementById('reset-filters');

  if (!searchInput || !sortSelect || !filterCategory || !resetFilters) return;

  function applyFilters() {
    let filteredProducts = [...productsData];

    // Search
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.details.toLowerCase().includes(searchTerm) ||
        product.code.toLowerCase().includes(searchTerm)
      );
    }

    // Filter by category
    const category = filterCategory.value;
    if (category !== 'all') {
      filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    // Sort
    const sortValue = sortSelect.value;
    if (sortValue === 'price-asc') {
      filteredProducts.sort((a, b) => {
        const priceA = a.discount > 0 ? a.price * (1 - a.discount / 100) : a.price;
        const priceB = b.discount > 0 ? b.price * (1 - b.discount / 100) : b.price;
        return priceA - priceB;
      });
    } else if (sortValue === 'price-desc') {
      filteredProducts.sort((a, b) => {
        const priceA = a.discount > 0 ? a.price * (1 - a.discount / 100) : a.price;
        const priceB = b.discount > 0 ? b.price * (1 - b.discount / 100) : b.price;
        return priceB - priceA;
      });
    }

    renderProducts(filteredProducts);
  }

  searchInput.addEventListener('input', applyFilters);
  sortSelect.addEventListener('change', applyFilters);
  filterCategory.addEventListener('change', applyFilters);
  resetFilters.addEventListener('click', () => {
    searchInput.value = '';
    sortSelect.value = 'default';
    filterCategory.value = 'all';
    renderProducts(productsData);
  });
}

// Setup product details page
function setupProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));
  const product = productsData.find(p => p.id === productId);

  if (!product) {
    document.querySelector('.product-details-container').innerHTML = '<p>المنتج غير موجود.</p>';
    return;
  }

  const discountedPrice = product.discount > 0 ? (product.price * (1 - product.discount / 100)).toFixed(2) : product.price;
  const priceDisplay = product.discount > 0 
    ? `<span class="original-price">${product.price} جنيه</span><span class="discounted-price">${discountedPrice} جنيه</span>`
    : `<span>${product.price} جنيه</span>`;

  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-description').textContent = product.details;
  document.getElementById('product-price').innerHTML = priceDisplay;
  document.getElementById('product-discount').textContent = product.discount > 0 ? `خصم ${product.discount}%` : '';
  document.getElementById('product-dimensions').textContent = product.dimensions || 'غير محدد';
  document.getElementById('product-category').textContent = product.category;

  const mainImage = document.getElementById('main-image');
  mainImage.src = product.img;
  mainImage.alt = product.name;

  const thumbnailContainer = document.querySelector('.thumbnail-container');
  thumbnailContainer.innerHTML = '';
  product.images.forEach((img, index) => {
    const thumb = document.createElement('img');
    thumb.src = img;
    thumb.alt = `${product.name} - صورة ${index + 1}`;
    thumb.className = 'thumbnail';
    if (img === product.img) thumb.classList.add('active');
    thumbnailContainer.appendChild(thumb);
  });

  const videoContainer = document.querySelector('.video-container');
  if (product.video) {
    videoContainer.innerHTML = `
      <video class="product-video" controls>
        <source src="${product.video}" type="video/mp4">
        المتصفح لا يدعم تشغيل الفيديو.
      </video>
    `;
  }

  let quantity = 1;
  const quantitySpan = document.getElementById('product-quantity');
  quantitySpan.textContent = quantity;

  document.querySelector('.quantity-control .plus').addEventListener('click', () => {
    if (!product.available) {
      Swal.fire({
        icon: 'warning',
        title: 'المنتج غير متوفر',
        text: 'هذا المنتج غير متوفر حاليًا، سيتوفر في أقرب وقت.',
        showConfirmButton: false,
        timer: 2000
      });
      return;
    }
    quantity++;
    quantitySpan.textContent = quantity;
  });

  document.querySelector('.quantity-control .minus').addEventListener('click', () => {
    if (!product.available) {
      Swal.fire({
        icon: 'warning',
        title: 'المنتج غير متوفر',
        text: 'هذا المنتج غير متوفر حاليًا، سيتوفر في أقرب وقت.',
        showConfirmButton: false,
        timer: 2000
      });
      return;
    }
    if (quantity > 1) {
      quantity--;
      quantitySpan.textContent = quantity;
    }
  });

  document.querySelector('.add-to-cart').addEventListener('click', () => {
    if (!product.available) {
      Swal.fire({
        icon: 'warning',
        title: 'المنتج غير متوفر',
        text: 'هذا المنتج غير متوفر حاليًا، سيتوفر في أقرب وقت.',
        showConfirmButton: false,
        timer: 2000
      });
      return;
    }
    addToCart(product.id, quantity);
    quantity = 1;
    quantitySpan.textContent = quantity;
  });

  document.querySelector('.order-now').addEventListener('click', () => {
    if (!product.available) {
      Swal.fire({
        icon: 'warning',
        title: 'المنتج غير متوفر',
        text: 'هذا المنتج غير متوفر حاليًا، سيتوفر في أقرب وقت.',
        showConfirmButton: false,
        timer: 2000
      });
      return;
    }
    document.getElementById('order-now-modal').style.display = 'flex';
    const orderProductName = document.getElementById('order-product-name');
    if (orderProductName) {
      orderProductName.textContent = `${product.name} (${product.code})`;
    }
    const submitOrderNowBtn = document.getElementById('submit-order-now');
    const closeOrderNowBtn = document.getElementById('close-order-now');

    submitOrderNowBtn.onclick = () => {
      orderNowViaWhatsApp(product.id, quantity);
      quantity = 1;
      quantitySpan.textContent = quantity;
    };
    closeOrderNowBtn.onclick = () => {
      document.getElementById('order-now-modal').style.display = 'none';
      document.getElementById('order-now-full-name').value = '';
      document.getElementById('order-now-address').value = '';
      document.getElementById('order-now-location-link').value = '';
      document.getElementById('order-now-phone-number').value = '';
      if (orderProductName) {
        orderProductName.textContent = '';
      }
      quantity = 1;
      quantitySpan.textContent = quantity;
    };

    document.getElementById('order-now-phone-number').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        orderNowViaWhatsApp(product.id, quantity);
        quantity = 1;
        quantitySpan.textContent = quantity;
      }
    });
  });

  setupImageGallery(product.images);
  setupRatingSystem(product.id);
}

// Setup image gallery
function setupImageGallery(images) {
  const mainImage = document.getElementById('main-image');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const modal = document.getElementById('image-modal');
  const modalImage = document.getElementById('modal-image');
  const closeModal = document.querySelector('.close-modal');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentImageIndex = 0;

  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      currentImageIndex = index;
      mainImage.src = images[currentImageIndex];
      thumbnails.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });

  mainImage.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImage.src = mainImage.src;
    currentImageIndex = images.indexOf(mainImage.src);
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    modalImage.src = images[currentImageIndex];
  });

  nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    modalImage.src = images[currentImageIndex];
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// Setup rating system
function setupRatingSystem(productId) {
  const stars = document.querySelectorAll('#rating-stars .fa-star');
  const averageRating = document.getElementById('average-rating');

  // Generate or retrieve userId
  let userId = localStorage.getItem('mahfourUserId');
  if (!userId) {
    userId = 'user_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('mahfourUserId', userId);
  }

  // Retrieve user ratings for this product
  let userRatings = JSON.parse(localStorage.getItem(`user_ratings_${productId}`)) || {};
  const userHasRated = userId in userRatings;

  function updateAverageRating() {
    const validRatings = Object.values(userRatings).filter(rating => typeof rating === 'number' && rating >= 1 && rating <= 5);
    const average = validRatings.length ? (validRatings.reduce((a, b) => a + b, 0) / validRatings.length).toFixed(1) : 0;
    averageRating.textContent = `متوسط التقييم: ${average} نجوم (${validRatings.length} تقييمات)`;
    stars.forEach(star => star.classList.remove('active'));
    for (let i = 0; i < Math.round(average); i++) {
      stars[i].classList.add('active');
    }
  }

  stars.forEach(star => {
    star.addEventListener('click', () => {
      const rating = parseInt(star.dataset.rating);
      if (rating < 1 || rating > 5) {
        Swal.fire({
          icon: 'error',
          title: 'تقييم غير صالح',
          text: 'يرجى اختيار تقييم بين 1 و5 نجوم.',
          showConfirmButton: false,
          timer: 2000
        });
        return;
      }

      const previousRating = userRatings[userId];
      userRatings[userId] = rating;
      localStorage.setItem(`user_ratings_${productId}`, JSON.stringify(userRatings));
      updateAverageRating();

      if (previousRating) {
        Swal.fire({
          icon: 'success',
          title: 'تم تعديل تقييمك',
          text: `تم تغيير تقييمك إلى ${rating} نجوم!`,
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        Swal.fire({
          icon: 'success',
          title: 'تم تسجيل تقييمك',
          text: `شكرًا لتقييمك ${rating} نجوم!`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  });

  updateAverageRating();
}

// Render products management
function renderProductsManagement(products = productsData) {
  const productsGrid = document.getElementById('products-grid');
  if (!productsGrid) return;

  productsGrid.innerHTML = '';

  products.forEach(product => {
    const discountedPrice = product.discount > 0 ? (product.price * (1 - product.discount / 100)).toFixed(2) : product.price;
    const priceDisplay = product.discount > 0 
      ? `<span class="original-price">${product.price} جنيه</span><br><span class="price">${discountedPrice} جنيه (خصم ${product.discount}%)</span>`
      : `<span class="price">${product.price} جنيه</span>`;

    const card = document.createElement('div');
    card.className = `product-management-card ${product.available ? 'available' : 'unavailable'}`;
    card.innerHTML = `
      <div class="card-image">
        <img src="${product.img}" alt="${product.name}" loading="lazy">
      </div>
      <div class="card-content">
        <h4>${product.name} (${product.code})</h4>
        <p class="category">${product.category}</p>
        <p>${priceDisplay}</p>
        <p class="availability">
          <span class="availability-badge" style="background: ${product.available ? '#4CAF50' : '#f44336'}">
            ${product.available ? 'متوفر' : 'غير متوفر'}
          </span>
        </p>
      </div>
      <div class="card-actions">
        <button class="btn edit-product" data-id="${product.id}">تعديل</button>
        <button class="btn delete-product" data-id="${product.id}">حذف</button>
      </div>
    `;
    productsGrid.appendChild(card);
  });
}

// Save product
function saveProduct() {
  const id = document.getElementById('edit-product-id').value || Date.now();
  const code = document.getElementById('product-code-input').value.trim();
  const name = document.getElementById('product-name-input').value.trim();
  const price = parseFloat(document.getElementById('product-price-input').value);
  const discount = parseFloat(document.getElementById('product-discount-input').value) || 0;
  const img = document.getElementById('product-img-input').value.trim();
  const category = document.getElementById('product-category-input').value.trim();
  const details = document.getElementById('product-details-input').value.trim();
  const dimensions = document.getElementById('product-dimensions-input').value.trim();
  const images = document.getElementById('product-images-input').value.split(',').map(img => img.trim()).filter(img => img);
  const video = document.getElementById('product-video-input').value.trim();
  const available = document.getElementById('product-available-input').value === 'true';

  if (!name || !price || !img || !category || !details || !code) {
    Swal.fire({
      icon: 'error',
      title: 'بيانات غير مكتملة',
      text: 'يرجى ملء جميع الحقول المطلوبة بما في ذلك كود المنتج.',
      showConfirmButton: false,
      timer: 2000
    });
    return;
  }

  const product = {
    id: parseInt(id),
    code,
    name,
    price,
    discount,
    img,
    category,
    details,
    images: images.length ? images : [img],
    dimensions: dimensions || 'غير محدد',
    video: video || null,
    available
  };

  const existingIndex = productsData.findIndex(p => p.id === product.id);
  if (existingIndex !== -1) {
    productsData[existingIndex] = product;
  } else {
    productsData.push(product);
  }

  localStorage.setItem('mahfourProducts', JSON.stringify(productsData));
  renderProducts();
  renderProductsManagement();
  document.getElementById('add-product-form').style.display = 'none';
  clearProductForm();
  Swal.fire({
    icon: 'success',
    title: 'تم حفظ المنتج',
    showConfirmButton: false,
    timer: 1500
  });
}

// Clear product form
function clearProductForm() {
  document.getElementById('edit-product-id').value = '';
  document.getElementById('product-code-input').value = '';
  document.getElementById('product-name-input').value = '';
  document.getElementById('product-price-input').value = '';
  document.getElementById('product-discount-input').value = '';
  document.getElementById('product-img-input').value = '';
  document.getElementById('product-category-input').value = '';
  document.getElementById('product-details-input').value = '';
  document.getElementById('product-dimensions-input').value = '';
  document.getElementById('product-images-input').value = '';
  document.getElementById('product-video-input').value = '';
  document.getElementById('product-available-input').value = 'true';
}

// Delete product
function deleteProduct(productId) {
  Swal.fire({
    title: 'هل أنت متأكد؟',
    text: 'سيتم حذف المنتج نهائيًا!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'نعم، احذف',
    cancelButtonText: 'إلغاء'
  }).then((result) => {
    if (result.isConfirmed) {
      productsData = productsData.filter(p => p.id !== productId);
      localStorage.setItem('mahfourProducts', JSON.stringify(productsData));
      renderProducts();
      renderProductsManagement();
      Swal.fire({
        icon: 'success',
        title: 'تم حذف المنتج',
        showConfirmButton: false,
        timer: 1500
      });
    }
  });
}

// Edit product
function editProduct(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  document.getElementById('edit-product-id').value = product.id;
  document.getElementById('product-code-input').value = product.code;
  document.getElementById('product-name-input').value = product.name;
  document.getElementById('product-price-input').value = product.price;
  document.getElementById('product-discount-input').value = product.discount;
  document.getElementById('product-img-input').value = product.img;
  document.getElementById('product-category-input').value = product.category;
  document.getElementById('product-details-input').value = product.details;
  document.getElementById('product-dimensions-input').value = product.dimensions;
  document.getElementById('product-images-input').value = product.images.join(', ');
  document.getElementById('product-video-input').value = product.video || '';
  document.getElementById('product-available-input').value = product.available.toString();
  document.getElementById('add-product-form').style.display = 'block';
}

// Search and filter products in management section
function setupManagementFilters() {
  const searchInput = document.getElementById('search-management-products');
  const sortSelect = document.getElementById('sort-management-products');
  const filterCategory = document.getElementById('filter-management-category');
  const resetFilters = document.getElementById('reset-management-filters');

  if (!searchInput || !sortSelect || !filterCategory || !resetFilters) return;

  function applyManagementFilters() {
    let filteredProducts = [...productsData];

    // Search
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.details.toLowerCase().includes(searchTerm) ||
        product.code.toLowerCase().includes(searchTerm)
      );
    }

    // Filter by category
    const category = filterCategory.value;
    if (category !== 'all') {
      filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    // Sort
    const sortValue = sortSelect.value;
    if (sortValue === 'price-asc') {
      filteredProducts.sort((a, b) => {
        const priceA = a.discount > 0 ? a.price * (1 - a.discount / 100) : a.price;
        const priceB = b.discount > 0 ? b.price * (1 - b.discount / 100) : b.price;
        return priceA - priceB;
      });
    } else if (sortValue === 'price-desc') {
      filteredProducts.sort((a, b) => {
        const priceA = a.discount > 0 ? a.price * (1 - a.discount / 100) : a.price;
        const priceB = b.discount > 0 ? b.price * (1 - b.discount / 100) : b.price;
        return priceB - priceA;
      });
    }

    renderProductsManagement(filteredProducts);
  }

  searchInput.addEventListener('input', applyManagementFilters);
  sortSelect.addEventListener('change', applyManagementFilters);
  filterCategory.addEventListener('change', applyManagementFilters);
  resetFilters.addEventListener('click', () => {
    searchInput.value = '';
    sortSelect.value = 'default';
    filterCategory.value = 'all';
    renderProductsManagement(productsData);
  });
}

// Initialize
function initialize() {
  initializeProducts();
  renderProducts();
  renderCart();
  setupFilters();

  const cartBtn = document.getElementById('cart-btn');
  const cart = document.getElementById('cart');
  const closeCart = document.getElementById('close-cart');
  const clearCartBtn = document.getElementById('clear-cart');
  const orderCartBtn = document.getElementById('order-cart');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (cartBtn && cart && closeCart) {
    cartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      cart.classList.toggle('open');
    });

    closeCart.addEventListener('click', () => {
      cart.classList.remove('open');
    });
  }

  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', clearCart);
  }

  if (orderCartBtn) {
    orderCartBtn.addEventListener('click', orderViaWhatsApp);
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // Product page specific
  if (window.location.pathname.includes('product-details.html')) {
    setupProductDetails();
  }

  // Admin page specific
  if (window.location.pathname.includes('admin.html')) {
    const verifyPasswordBtn = document.getElementById('verify-password');
    const manageProductsBtn = document.getElementById('manage-products-btn');
    const verifyProductsPasswordBtn = document.getElementById('verify-products-password');
    const addProductBtn = document.getElementById('add-product-btn');
    const saveProductBtn = document.getElementById('save-product');
    const cancelEditBtn = document.getElementById('cancel-edit');
    const clearOrdersBtn = document.getElementById('clear-orders');
    const searchOrders = document.getElementById('search-orders');

    if (verifyPasswordBtn) {
      verifyPasswordBtn.addEventListener('click', verifyPassword);
      document.getElementById('password-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') verifyPassword();
      });
    }

    if (manageProductsBtn) {
      manageProductsBtn.addEventListener('click', () => {
        document.getElementById('products-password-modal').style.display = 'flex';
      });
    }

    if (verifyProductsPasswordBtn) {
      verifyProductsPasswordBtn.addEventListener('click', verifyProductsPassword);
      document.getElementById('products-password-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') verifyProductsPassword();
      });
    }

    if (addProductBtn) {
      addProductBtn.addEventListener('click', () => {
        document.getElementById('add-product-form').style.display = 'block';
        clearProductForm();
      });
    }

    if (saveProductBtn) {
      saveProductBtn.addEventListener('click', saveProduct);
    }

    if (cancelEditBtn) {
      cancelEditBtn.addEventListener('click', () => {
        document.getElementById('add-product-form').style.display = 'none';
        clearProductForm();
      });
    }

    if (clearOrdersBtn) {
      clearOrdersBtn.addEventListener('click', clearOrders);
    }

    if (searchOrders) {
      searchOrders.addEventListener('input', () => {
        const searchTerm = searchOrders.value.trim().toLowerCase();
        const orders = JSON.parse(localStorage.getItem('mahfourOrders')) || [];
        const filteredOrders = orders.filter(order =>
          order.id.toString().includes(searchTerm) ||
          order.details.toLowerCase().includes(searchTerm)
        );
        renderOrders(filteredOrders);
      });
    }
  }

  // Event delegation for product cards and cart
  document.addEventListener('click', (e) => {
    const addToCartBtn = e.target.closest('.add-to-cart');
    const orderNowBtn = e.target.closest('.order-now');
    const imageWrapper = e.target.closest('.image-wrapper');
    const minusBtn = e.target.closest('.minus');
    const plusBtn = e.target.closest('.plus');
    const removeBtn = e.target.closest('.remove');
    const itemName = e.target.closest('.item-name');
    const deleteOrderBtn = e.target.closest('.delete-order');
    const editProductBtn = e.target.closest('.edit-product');
    const deleteProductBtn = e.target.closest('.delete-product');

    if (addToCartBtn) {
      const productId = parseInt(addToCartBtn.dataset.id);
      const product = productsData.find(p => p.id === productId);
      if (!product.available) {
        Swal.fire({
          icon: 'warning',
          title: 'المنتج غير متوفر',
          text: 'هذا المنتج غير متوفر حاليًا، سيتوفر في أقرب وقت.',
          showConfirmButton: false,
          timer: 2000
        });
        return;
      }
      const quantityControl = addToCartBtn.parentElement.querySelector('.quantity-control');
      const quantitySpan = quantityControl.querySelector('.quantity');
      const quantity = parseInt(quantitySpan.textContent);
      addToCart(productId, quantity);
      quantitySpan.textContent = '1';
      quantityControl.style.display = product.available ? 'flex' : 'none';
      addToCartBtn.style.display = 'block';
    }

    if (orderNowBtn) {
      const productId = parseInt(orderNowBtn.dataset.id);
      const product = productsData.find(p => p.id === productId);
      if (!product.available) {
        Swal.fire({
          icon: 'warning',
          title: 'المنتج غير متوفر',
          text: 'هذا المنتج غير متوفر حاليًا، سيتوفر في أقرب وقت.',
          showConfirmButton: false,
          timer: 2000
        });
        return;
      }
      const quantityControl = orderNowBtn.parentElement.querySelector('.quantity-control');
      const quantitySpan = quantityControl.querySelector('.quantity');
      const quantity = parseInt(quantitySpan.textContent);
      document.getElementById('order-now-modal').style.display = 'flex';
      const orderProductName = document.getElementById('order-product-name');
      if (orderProductName) {
        orderProductName.textContent = `${product.name} (${product.code})`;
      }
      const submitOrderNowBtn = document.getElementById('submit-order-now');
      const closeOrderNowBtn = document.getElementById('close-order-now');

      submitOrderNowBtn.onclick = () => {
        orderNowViaWhatsApp(productId, quantity);
        quantitySpan.textContent = '1';
      };
      closeOrderNowBtn.onclick = () => {
        document.getElementById('order-now-modal').style.display = 'none';
        document.getElementById('order-now-full-name').value = '';
        document.getElementById('order-now-address').value = '';
        document.getElementById('order-now-location-link').value = '';
        document.getElementById('order-now-phone-number').value = '';
        if (orderProductName) {
          orderProductName.textContent = '';
        }
        quantitySpan.textContent = '1';
      };

      document.getElementById('order-now-phone-number').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          orderNowViaWhatsApp(productId, quantity);
          quantitySpan.textContent = '1';
        }
      });
    }

    if (imageWrapper) {
      const productCard = imageWrapper.closest('.product-card');
      if (productCard) {
        const productId = parseInt(productCard.querySelector('.add-to-cart').dataset.id);
        window.location.href = `product-details.html?id=${productId}`;
      }
    }

    if (minusBtn) {
      const id = parseInt(minusBtn.dataset.id);
      const product = productsData.find(p => p.id === id);
      if (!product.available) {
        Swal.fire({
          icon: 'warning',
          title: 'المنتج غير متوفر',
          text: 'هذا المنتج غير متوفر حاليًا، سيتوفر في أقرب وقت.',
          showConfirmButton: false,
          timer: 2000
        });
        return;
      }
      // Check if the button is in the cart
      const isInCart = minusBtn.closest('.cart-items');
      if (isInCart) {
        const cartItem = cartData.find(item => item.id === id);
        if (cartItem && cartItem.quantity > 1) {
          cartItem.quantity--;
          localStorage.setItem('mahfourCart', JSON.stringify(cartData));
          updateCart();
        }
      } else {
        const quantityControl = minusBtn.parentElement;
        const quantitySpan = quantityControl.querySelector('.quantity');
        let quantity = parseInt(quantitySpan.textContent);
        if (quantity > 1) {
          quantity--;
          quantitySpan.textContent = quantity;
        }
      }
    }

    if (plusBtn) {
      const id = parseInt(plusBtn.dataset.id);
      const product = productsData.find(p => p.id === id);
      if (!product.available) {
        Swal.fire({
          icon: 'warning',
          title: 'المنتج غير متوفر',
          text: 'هذا المنتج غير متوفر حاليًا، سيتوفر في أقرب وقت.',
          showConfirmButton: false,
          timer: 2000
        });
        return;
      }
      // Check if the button is in the cart
      const isInCart = plusBtn.closest('.cart-items');
      if (isInCart) {
        const cartItem = cartData.find(item => item.id === id);
        if (cartItem) {
          cartItem.quantity++;
          localStorage.setItem('mahfourCart', JSON.stringify(cartData));
          updateCart();
        }
      } else {
        const quantityControl = plusBtn.parentElement;
        const quantitySpan = quantityControl.querySelector('.quantity');
        let quantity = parseInt(quantitySpan.textContent);
        quantity++;
        quantitySpan.textContent = quantity;
      }
    }

    if (removeBtn) {
      const productId = parseInt(removeBtn.dataset.id);
      cartData = cartData.filter(item => item.id !== productId);
      localStorage.setItem('mahfourCart', JSON.stringify(cartData));
      updateCart();
    }

    if (itemName) {
      const productId = parseInt(itemName.dataset.id);
      window.location.href = `product-details.html?id=${productId}`;
    }

    if (deleteOrderBtn) {
      const orderId = parseInt(deleteOrderBtn.dataset.id);
      let orders = JSON.parse(localStorage.getItem('mahfourOrders')) || [];
      orders = orders.filter(order => order.id !== orderId);
      localStorage.setItem('mahfourOrders', JSON.stringify(orders));
      renderOrders();
      updateStats(); // تعديل جديد: تحديث الإحصائيات بعد حذف طلب
    }

    if (editProductBtn) {
      const productId = parseInt(editProductBtn.dataset.id);
      editProduct(productId);
    }

    if (deleteProductBtn) {
      const productId = parseInt(deleteProductBtn.dataset.id);
      deleteProduct(productId);
    }
  });
}

// دالة جديدة لتحديث الإحصائيات
function updateStats() {
  const orders = JSON.parse(localStorage.getItem('mahfourOrders')) || [];
  document.getElementById('total-orders').textContent = orders.length;

  let totalSales = 0;
  const productCounts = {};

  orders.forEach(order => {
    // حساب إجمالي المبيعات من سطر الإجمالي
    const totalMatch = order.details.match(/\*الإجمالي:\* ([\d.]+) جنيه/);
    if (totalMatch) {
      totalSales += parseFloat(totalMatch[1]);
    }

    // حساب عدد الطلبات لكل منتج (للمنتج الأكثر مبيعًا)
    const lines = order.details.split('\n');
    let currentCode = null;
    lines.forEach(line => {
      const stripped = line.trim();
      if (stripped.includes('كود المنتج:')) {
        currentCode = stripped.split(':')[1].trim();
      } else if (/^-?\s*(\d+) ×/.test(stripped)) {
        const qtyMatch = stripped.match(/^-?\s*(\d+) × ([\d.]+) جنيه = ([\d.]+) جنيه/);
        if (qtyMatch && currentCode) {
          const qty = parseInt(qtyMatch[1]);
          productCounts[currentCode] = (productCounts[currentCode] || 0) + qty;
          currentCode = null;
        }
      }
    });
  });

  document.getElementById('total-sales').textContent = totalSales.toFixed(2) + ' جنيه';

  let topProductName = 'لا يوجد';
  if (Object.keys(productCounts).length > 0) {
    const topCode = Object.keys(productCounts).reduce((a, b) => productCounts[a] > productCounts[b] ? a : b);
    const topProduct = productsData.find(p => p.code === topCode);
    if (topProduct) {
      topProductName = topProduct.name;
    }
  }
  document.getElementById('top-product').textContent = topProductName;
}

// Start the application
document.addEventListener('DOMContentLoaded', initialize);
