const whatsappNumber = "+201033662370"; // إضافة الكود الدولي +20

const productsData = [
  { 
    id: 1, 
    name: "ماديلية خشبية علي شكل حصان", 
    price: 35, 
    img: "https://i.postimg.cc/2S37xLtg/photo-2025-09-04-22-32-00.jpg", 
    category: "اكسسورات", 
    details: "حصان خشبي مصنوع يدويًا من خشب الزان، بأبعاد 20x30 سم، مثالي لتزيين المكاتب.", 
    images: [
      "https://i.postimg.cc/2S37xLtg/photo-2025-09-04-22-32-00.jpg",
      "https://i.postimg.cc/SRcLVncp/photo-2025-09-05-06-59-02.jpg"
    ],
    dimensions: "20 × 30 سم",
    video: "https://files.catbox.moe/hlznb6.mp4"
  },
  { 
    id: 2, 
    name: "استاند تليفون", 
    price: 70, 
    img: "https://i.postimg.cc/GmGkyMfN/photo-2025-09-07-05-29-55.jpg", 
    category: "اكسسورات", 
    details: "كلمة خشبية مزخرفة، مثالية كهدية شخصية، مصنوعة من خشب الماهوجني.", 
    images: [
      "https://i.postimg.cc/rmbkKrvc/photo-2025-09-04-22-35-04.jpg",
      "https://i.postimg.cc/6471s8Pp/photo-2.jpg", 
      "https://i.postimg.cc/NFw0GMQn/photo-4.jpg"
    ],
    dimensions: "15 × 10 سم",
    video: "https://files.catbox.moe/hlznb6.mp4"
  },
  { 
    id: 3, 
    name: "ماديلية خشبية علي شكل علامة مرسيدس", 
    price: 35, 
    img: "https://i.postimg.cc/h4TDfCP5/photo-2025-09-04-22-37-25.jpg", 
    category: "اكسسورات", 
    details: "منتج خشبي متعدد الاستخدامات للديكور المنزلي، بأبعاد 15x15 سم.", 
    images: ["https://i.postimg.cc/pyyS5SdM/photo-3.jpg"],
    dimensions: "15 × 15 سم",
    video: null
  },
  { 
    id: 4, 
    name: "لعبه x.o", 
    price: 99, 
    img: "https://i.postimg.cc/gj9TCqCw/photo.jpg", 
    category: "العاب", 
    details: "حصان خشبي صغير مصنوع يدويًا، مثالي كهدية تذكارية.", 
    images: ["https://i.postimg.cc/900jZxJw/photo-2025-09-05-02-44-18.jpg"],
    dimensions: "يختلف حسب الطلب",
    video: "https://files.catbox.moe/hlznb6.mp4"
  },
  { 
    id: 5, 
    name: "كوستر", 
    price: 30, 
    img: "https://i.postimg.cc/1zwCpNns/photo-2025-09-04-22-39-53.jpg", 
    category: "ادوات منزلية", 
    details: "مكعب خشبي مزخرف بتصميم فريد، مصنوع من خشب الصنوبر.", 
    images: [
      "https://i.postimg.cc/1zwCpNns/photo-2025-09-04-22-39-53.jpg",
      "https://i.postimg.cc/NFw0GMQn/photo-4.jpg", 
      "https://i.postimg.cc/4nMS61K7/photo.jpg"
    ],
    dimensions: "يختلف حسب الطلب",
    video: null
  },
  { 
    id: 6, 
    name: "كوستر", 
    price: 30, 
    img: "https://i.postimg.cc/rsfwL0Yx/photo-2025-09-05-02-41-16.jpg", 
    category: "ادوات منزلية", 
    details: "مكعب خشبي مزخرف بتصميم فريد، مصنوع من خشب الصنوبر.", 
    images: [
      "https://i.postimg.cc/rsfwL0Yx/photo-2025-09-05-02-41-16.jpg",
      "https://i.postimg.cc/NFw0GMQn/photo-4.jpg", 
      "https://i.postimg.cc/4nMS61K7/photo.jpg"
    ],
    dimensions: "يختلف حسب الطلب",
    video: null
  },
  { 
    id: 7, 
    name: "كوستر", 
    price: 30, 
    img: "https://i.postimg.cc/pdKVL162/photo-2025-09-05-02-42-09.jpg", 
    category: "ادوات منزلية", 
    details: "مكعب خشبي مزخرف بتصميم فريد، مصنوع من خشب الصنوبر.", 
    images: [
      "https://i.postimg.cc/pdKVL162/photo-2025-09-05-02-42-09.jpg",
      "https://i.postimg.cc/NFw0GMQn/photo-4.jpg", 
      "https://i.postimg.cc/4nMS61K7/photo.jpg"
    ],
    dimensions: "يختلف حسب الطلب",
    video: null
  },
  { 
    id: 8, 
    name: "ديكور خشبي علي شكل كف", 
    price: 75, 
    img: "https://i.postimg.cc/0ND2gZ3m/photo-2025-09-04-22-20-43.jpg", 
    category: "ديكور", 
    details: "ديكور خشبي بتصميم عقاب، مثالي لعشاق الديكورات الفريدة.", 
    images: ["https://i.postimg.cc/QxfjwSKw/photo.jpg"],
    dimensions: "يختلف حسب الطلب",
    video: null
  },
   { 
    id: 9, 
    name: "ديكور خشبي علي شكل كف", 
    price: 75, 
    img: "https://i.postimg.cc/GmGkyMfN/photo-2025-09-07-05-29-55.jpg", 
    category: "ديكور", 
    details: "ديكور خشبي بتصميم عقاب، مثالي لعشاق الديكورات الفريدة.", 
    images: ["https://i.postimg.cc/QxfjwSKw/photo.jpg"],
    dimensions: "يختلف حسب الطلب",
    video: null
  },
  { 
    id: 10, 
    name: "كوستر 'Everyday is More Better'", 
    price: 55, 
    img: "https://i.postimg.cc/bJV5mfTR/photo-2025-09-04-22-26-03.jpg", 
    category: "ادوات منزلية", 
    details: "لوحة خشبية تحمل عبارة ملهمة، بأبعاد 25x35 سم.", 
    images: [
      "https://i.postimg.cc/bJV5mfTR/photo-2025-09-04-22-26-03.jpg",
      "https://i.postimg.cc/mDW4C5Kz/photo-3.jpg", 
      "https://i.postimg.cc/6471s8Pp/photo-2.jpg"
    ],
    dimensions: "25 × 35 سم",
    video: null
  }
];

let cartData = JSON.parse(localStorage.getItem('mahfourCart')) || [];

function renderProducts(products) {
  const container = document.querySelector('.products');
  if (!container) return;
  const productCards = container.querySelectorAll('.product-card');
  productCards.forEach(card => card.remove());

  products.forEach(product => {
    container.insertAdjacentHTML('beforeend', `
      <div class="product-card" data-name="${product.name}" data-price="${product.price}" data-category="${product.category}">
        <a href="product-details.html?id=${product.id}">
          <img src="${product.img}" alt="${product.name} مصنوع يدويًا" loading="lazy">
          <h3>${product.name}</h3>
        </a>
        <p>سعر: ${product.price} جنيه</p>
        <div class="quantity-control" data-id="${product.id}">
          <button class="qty-btn minus" data-id="${product.id}">-</button>
          <span class="product-quantity" data-id="${product.id}">1</span>
          <button class="qty-btn plus" data-id="${product.id}">+</button>
        </div>
        <div class="buttons">
          <a href="#" class="btn add-to-cart" data-name="${product.name}" data-price="${product.price}" data-id="${product.id}"><i class="fas fa-cart-plus"></i> أضف إلى السلة</a>
          <a href="#" class="btn order-now">اطلب الآن</a>
        </div>
      </div>
    `);
  });

  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      const isPlus = e.target.classList.contains('plus');
      const quantityElement = document.querySelector(`.product-quantity[data-id="${id}"]`);
      let quantity = parseInt(quantityElement.textContent);
      if (isPlus) {
        quantity++;
      } else {
        quantity = Math.max(1, quantity - 1);
      }
      quantityElement.textContent = quantity;
    });
  });

  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = btn.dataset.name;
      const price = Number(btn.dataset.price);
      const id = btn.dataset.id;
      const quantity = parseInt(document.querySelector(`.product-quantity[data-id="${id}"]`).textContent);
      addToCart(name, price, id, quantity);
    });
  });

  document.querySelectorAll('.order-now').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = e.target.closest('.product-card').dataset.name;
      const price = Number(e.target.closest('.product-card').dataset.price);
      const id = e.target.closest('.product-card').querySelector('.add-to-cart').dataset.id;
      const quantity = parseInt(document.querySelector(`.product-quantity[data-id="${id}"]`).textContent);
      Swal.fire({
        title: 'بيانات الطلب',
        html: `
          <input id="swal-full-name" class="swal2-input" placeholder="الاسم الثلاثي" required>
          <input id="swal-address" class="swal2-input" placeholder="العنوان بالتفصيل" required>
          <input id="swal-location-link" class="swal2-input" placeholder="رابط الموقع (اختياري)">
          <input id="swal-phone-number" class="swal2-input" placeholder="رقم الهاتف" pattern="\\d{11}" required>
        `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'إرسال الطلب',
        cancelButtonText: 'إلغاء',
        preConfirm: () => {
          const fullName = document.getElementById('swal-full-name').value.trim();
          const address = document.getElementById('swal-address').value.trim();
          const phoneNumber = document.getElementById('swal-phone-number').value.trim();
          const locationLink = document.getElementById('swal-location-link').value.trim();
          if (!fullName || !address || !phoneNumber || !/^\d{11}$/.test(phoneNumber)) {
            Swal.showValidationMessage('يرجى ملء كل الحقول الإلزامية ورقم الهاتف يجب أن يكون 11 رقمًا.');
            return;
          }
          return { fullName, address, phoneNumber, locationLink };
        }
      }).then(result => {
        if (result.isConfirmed) {
          const { fullName, address, phoneNumber, locationLink } = result.value;
          let message = `طلب منتج:\nالمنتج: ${name}\nالسعر: ${price} جنيه\nالكمية: ${quantity}\nالاسم: ${fullName}\nالعنوان: ${address}\nرقم الهاتف: ${phoneNumber}\n`;
          if (locationLink) message += `رابط الموقع: ${locationLink}\n`;
          const encodedMessage = encodeURIComponent(message).replace(/%0A/g, '%0D%0A'); // تنظيف إضافي للإنترات
          const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
          window.open(url, '_blank');
          let orders = JSON.parse(localStorage.getItem('mahfourOrders')) || [];
          const orderNumber = orders.length + 1;
          orders.push({ orderNumber, message });
          localStorage.setItem('mahfourOrders', JSON.stringify(orders));
          Swal.fire({
            icon: 'success',
            title: `تم إرسال الطلب رقم ${orderNumber} عبر واتساب`,
            showConfirmButton: false,
            timer: 2000
          });
        }
      });
    });
  });
}

function filterAndSortProducts() {
  const sortValue = document.getElementById('sort-products')?.value;
  const filterValue = document.getElementById('filter-category')?.value;
  const searchTerm = document.getElementById('search-products')?.value.trim();

  let filtered = [...productsData];
  if (searchTerm) {
    filtered = filtered.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  if (filterValue && filterValue !== 'all') {
    filtered = filtered.filter(product => product.category === filterValue);
  }
  if (sortValue === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProducts(filtered);
}

function addToCart(name, price, id, quantity) {
  const existingItem = cartData.find(item => item.id === id);
  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1) + quantity;
  } else {
    cartData.push({ id, name, price, quantity, img: productsData.find(p => p.id === parseInt(id)).img });
  }
  renderCart();
  Swal.fire({
    icon: 'success',
    title: `✅ تم إضافة ${quantity} من ${name} للسلة`,
    showConfirmButton: false,
    timer: 1500
  });
}

function renderCart() {
  const cartItems = document.querySelector('.cart-items');
  if (!cartItems) return;
  cartItems.innerHTML = '';
  let total = 0;
  cartData.forEach((item, index) => {
    const itemTotal = item.price * (item.quantity || 1);
    total += itemTotal;
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="item-name" data-id="${item.id}">${item.name}</span>
      <span class="item-price">${item.price} جنيه</span>
      <button class="qty-btn minus" data-index="${index}">-</button>
      <span class="item-quantity">x${item.quantity || 1}</span>
      <button class="qty-btn plus" data-index="${index}">+</button>
      <span class="item-total">= ${itemTotal} جنيه</span>
      <button class="remove" data-index="${index}">❌</button>
    `;
    cartItems.appendChild(li);
  });
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');
  if (cartCount) cartCount.textContent = cartData.reduce((sum, item) => sum + (item.quantity || 1), 0);
  if (cartTotal) cartTotal.textContent = total;
  localStorage.setItem('mahfourCart', JSON.stringify(cartData));

  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const index = e.target.dataset.index;
      const isPlus = e.target.classList.contains('plus');
      if (isPlus) {
        cartData[index].quantity = (cartData[index].quantity || 1) + 1;
      } else {
        cartData[index].quantity = (cartData[index].quantity || 1) - 1;
        if (cartData[index].quantity < 1) cartData[index].quantity = 1;
      }
      renderCart();
    });
  });

  document.querySelectorAll('.item-name').forEach(nameSpan => {
    nameSpan.addEventListener('click', () => {
      const productId = nameSpan.dataset.id;
      if (productId) {
        window.location.href = `product-details.html?id=${productId}`;
      }
    });
  });

  document.querySelectorAll('.remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const index = e.target.dataset.index;
      cartData.splice(index, 1);
      renderCart();
    });
  });
}

function renderOrders() {
  const ordersList = document.getElementById('orders-list');
  if (!ordersList) return;
  const orders = JSON.parse(localStorage.getItem('mahfourOrders')) || [];
  ordersList.innerHTML = '';
  orders.forEach(order => {
    const li = document.createElement('li');
    li.classList.add('order-item');
    li.innerHTML = `
      <h3>طلب رقم ${order.orderNumber}</h3>
      <pre>${order.message}</pre>
    `;
    ordersList.appendChild(li);
  });
  if (orders.length === 0) {
    ordersList.innerHTML = '<p>لا توجد طلبات سابقة.</p>';
  }
}

function sanitizeInput(input) {
  return input.replace(/[<>&]/g, '');
}

function setupCart() {
  const cartBtn = document.getElementById('cart-btn');
  const cart = document.getElementById('cart');
  const closeCart = document.getElementById('close-cart');
  const clearCartBtn = document.getElementById('clear-cart');
  const orderCartBtn = document.getElementById('order-cart');

  if (cartBtn) cartBtn.addEventListener('click', () => cart.classList.add('open'));
  if (closeCart) closeCart.addEventListener('click', () => cart.classList.remove('open'));

  if (clearCartBtn) {
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
  }

  if (orderCartBtn) {
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
      const encodedMessage = encodeURIComponent(message).replace(/%0A/g, '%0D%0A'); // تنظيف إضافي للإنترات
      const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      
      window.open(url, '_blank');
      let orders = JSON.parse(localStorage.getItem('mahfourOrders')) || [];
      const orderNumber = orders.length + 1;
      orders.push({ orderNumber, message });
      localStorage.setItem('mahfourOrders', JSON.stringify(orders));
      cartData = [];
      renderCart();
      Swal.fire({
        icon: 'success',
        title: `تم إرسال الطلب رقم ${orderNumber} عبر واتساب`,
        showConfirmButton: false,
        timer: 2000
      });
    });
  }
}

function setupProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));
  const product = productsData.find(p => p.id === productId);

  if (!product) {
    const productDetails = document.querySelector('.product-details-container');
    if (productDetails) productDetails.innerHTML = '<p>المنتج غير موجود</p>';
    return;
  }

  const mainImage = document.getElementById('main-image');
  const thumbnailsContainer = document.querySelector('.thumbnail-container');
  const productName = document.getElementById('product-name');
  const productDescription = document.getElementById('product-description');
  const productPrice = document.getElementById('product-price');
  const productCategory = document.getElementById('product-category');
  const productDimensions = document.getElementById('product-dimensions');
  const quantityElement = document.getElementById('product-quantity');
  const minusButton = document.querySelector('.qty-btn.minus');
  const plusButton = document.querySelector('.qty-btn.plus');
  const addToCartButton = document.querySelector('.add-to-cart');
  const orderNowButton = document.querySelector('.order-now');
  const videoContainer = document.querySelector('.video-container');

  if (productName) productName.textContent = product.name;
  if (productDescription) productDescription.textContent = product.details;
  if (productPrice) productPrice.textContent = `سعر: ${product.price} جنيه`;
  if (productCategory) productCategory.textContent = product.category;
  if (productDimensions) productDimensions.textContent = product.dimensions || "يختلف حسب الطلب";
  if (mainImage) {
    mainImage.src = product.img;
    mainImage.alt = product.name;
  }

  if (videoContainer && product.video) {
    videoContainer.innerHTML = `
      <video class="product-video" controls>
        <source src="${product.video}" type="video/mp4">
        متصفحك لا يدعم تشغيل الفيديو.
      </video>
    `;
  } else if (videoContainer) {
    videoContainer.style.display = 'none';
  }

  if (thumbnailsContainer) {
    product.images.forEach((imgSrc, index) => {
      const thumbnail = document.createElement('img');
      thumbnail.src = imgSrc;
      thumbnail.alt = `${product.name} - صورة ${index + 1}`;
      thumbnail.classList.add('thumbnail');
      if (index === 0) thumbnail.classList.add('active');
      thumbnail.addEventListener('click', () => {
        mainImage.src = imgSrc;
        document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
        thumbnail.classList.add('active');
      });
      thumbnailsContainer.appendChild(thumbnail);
    });
  }

  let quantity = 1;
  if (quantityElement) quantityElement.textContent = quantity;

  if (minusButton) {
    minusButton.addEventListener('click', () => {
      if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;
      }
    });
  }

  if (plusButton) {
    plusButton.addEventListener('click', () => {
      quantity++;
      quantityElement.textContent = quantity;
    });
  }

  if (addToCartButton) {
    addToCartButton.addEventListener('click', () => {
      addToCart(product.name, product.price, product.id, quantity);
      quantity = 1;
      quantityElement.textContent = quantity;
    });
  }

  if (orderNowButton) {
    orderNowButton.addEventListener('click', () => {
      Swal.fire({
        title: 'بيانات الطلب',
        html: `
          <input id="swal-full-name" class="swal2-input" placeholder="الاسم الثلاثي" required>
          <input id="swal-address" class="swal2-input" placeholder="العنوان بالتفصيل" required>
          <input id="swal-location-link" class="swal2-input" placeholder="رابط الموقع (اختياري)">
          <input id="swal-phone-number" class="swal2-input" placeholder="رقم الهاتف" pattern="\\d{11}" required>
        `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'إرسال الطلب',
        cancelButtonText: 'إلغاء',
        preConfirm: () => {
          const fullName = document.getElementById('swal-full-name').value.trim();
          const address = document.getElementById('swal-address').value.trim();
          const phoneNumber = document.getElementById('swal-phone-number').value.trim();
          const locationLink = document.getElementById('swal-location-link').value.trim();
          if (!fullName || !address || !phoneNumber || !/^\d{11}$/.test(phoneNumber)) {
            Swal.showValidationMessage('يرجى ملء كل الحقول الإلزامية ورقم الهاتف يجب أن يكون 11 رقمًا.');
            return;
          }
          return { fullName, address, phoneNumber, locationLink };
        }
      }).then(result => {
        if (result.isConfirmed) {
          const { fullName, address, phoneNumber, locationLink } = result.value;
          let message = `طلب منتج:\nالمنتج: ${product.name}\nالسعر: ${product.price} جنيه\nالكمية: ${quantity}\nالاسم: ${fullName}\nالعنوان: ${address}\nرقم الهاتف: ${phoneNumber}\n`;
          if (locationLink) message += `رابط الموقع: ${locationLink}\n`;
          const encodedMessage = encodeURIComponent(message).replace(/%0A/g, '%0D%0A'); // تنظيف إضافي للإنترات
          const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
          window.open(url, '_blank');
          let orders = JSON.parse(localStorage.getItem('mahfourOrders')) || [];
          const orderNumber = orders.length + 1;
          orders.push({ orderNumber, message });
          localStorage.setItem('mahfourOrders', JSON.stringify(orders));
          Swal.fire({
            icon: 'success',
            title: `تم إرسال الطلب رقم ${orderNumber} عبر واتساب`,
            showConfirmButton: false,
            timer: 2000
          });
          quantity = 1;
          quantityElement.textContent = quantity;
        }
      });
    });
  }

  let ratings = JSON.parse(localStorage.getItem('mahfourRatings')) || {};
  if (!ratings[product.id]) {
    ratings[product.id] = [];
  }
  const stars = document.querySelectorAll('#rating-stars .fa-star');
  let currentRating = 0;

  // إنشاء معرف عشوائي للمستخدم إذا لم يكن موجودًا
  let userId = localStorage.getItem('userId');
  if (!userId) {
    userId = 'user_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('userId', userId);
  }

  // التحقق من التقييمات السابقة للمستخدم
  let userRatings = JSON.parse(localStorage.getItem('mahfourUserRatings')) || {};
  if (!userRatings[userId]) {
    userRatings[userId] = {};
  }

  function updateAverageRating() {
    const productRatings = ratings[product.id] || [];
    const average = productRatings.length > 0 ? productRatings.reduce((sum, r) => sum + r, 0) / productRatings.length : 0;
    const averageRatingElement = document.getElementById('average-rating');
    if (averageRatingElement) {
      averageRatingElement.textContent = `متوسط التقييم: ${average.toFixed(1)} نجوم (${productRatings.length} تقييمات)`;
    }
  }

  stars.forEach(star => {
    star.addEventListener('mouseover', (e) => {
      const rating = parseInt(e.target.dataset.rating);
      highlightStars(rating);
    });
    star.addEventListener('mouseout', () => {
      highlightStars(currentRating);
    });
    star.addEventListener('click', (e) => {
      // التحقق إذا كان المستخدم قيّم المنتج من قبل
      if (userRatings[userId][product.id]) {
        Swal.fire({
          icon: 'warning',
          title: 'لقد قيّمت هذا المنتج من قبل!',
          text: 'يمكنك تقييم كل منتج مرة واحدة فقط.',
          showConfirmButton: false,
          timer: 2000
        });
        return;
      }

      currentRating = parseInt(e.target.dataset.rating);
      ratings[product.id].push(currentRating);
      userRatings[userId][product.id] = currentRating;
      localStorage.setItem('mahfourRatings', JSON.stringify(ratings));
      localStorage.setItem('mahfourUserRatings', JSON.stringify(userRatings));
      updateAverageRating();
      Swal.fire({
        icon: 'success',
        title: 'شكرًا لتقييمك!',
        showConfirmButton: false,
        timer: 1500
      });
    });
  });

  function highlightStars(rating) {
    stars.forEach((star, index) => {
      if (index < rating) {
        star.classList.add('active');
      } else {
        star.classList.remove('active');
      }
    });
  }

  updateAverageRating();

  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-image');
  const closeModal = document.querySelector('.close-modal');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentImageIndex = 0;

  function openModal(index) {
    currentImageIndex = index;
    modal.style.display = 'block';
    modalImg.src = product.images[currentImageIndex];
  }

  if (closeModal) {
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex - 1 + product.images.length) % product.images.length;
      modalImg.src = product.images[currentImageIndex];
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex + 1) % product.images.length;
      modalImg.src = product.images[currentImageIndex];
    });
  }

  if (mainImage) {
    mainImage.addEventListener('click', () => {
      const currentSrc = mainImage.src;
      const index = product.images.indexOf(currentSrc);
      openModal(index !== -1 ? index : 0);
    });
  }

  thumbnailsContainer.querySelectorAll('.thumbnail').forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      openModal(index);
    });
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

function setupNavToggle() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('#nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts(productsData);
  renderCart();
  renderOrders();
  setupCart();
  setupProductDetails();
  setupNavToggle();

  const searchInput = document.getElementById('search-products');
  const sortSelect = document.getElementById('sort-products');
  const filterSelect = document.getElementById('filter-category');
  const resetFilters = document.getElementById('reset-filters');

  if (searchInput) searchInput.addEventListener('input', filterAndSortProducts);
  if (sortSelect) sortSelect.addEventListener('change', filterAndSortProducts);
  if (filterSelect) filterSelect.addEventListener('change', filterAndSortProducts);
  if (resetFilters) {
    resetFilters.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (sortSelect) sortSelect.value = 'default';
      if (filterSelect) filterSelect.value = 'all';
      renderProducts(productsData);
    });
  }
});
