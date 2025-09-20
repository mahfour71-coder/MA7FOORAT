const whatsappNumber = "+201033662370";

const ADMIN_PASSWORD = "123456789";

const PRODUCTS_PASSWORD = "MOHAND2009MOHAND1907MO09UA07";

let productsData = JSON.parse(localStorage.getItem('mahfourProducts')) || [
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
    video: "https://files.catbox.moe/hlznb6.mp4",
    available: true
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
    video: "https://files.catbox.moe/hlznb6.mp4",
    available: true
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
    video: null,
    available: false
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
    video: "https://files.catbox.moe/hlznb6.mp4",
    available: true
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
    video: null,
    available: true
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
    video: null,
    available: true
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
    video: null,
    available: true
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
    video: null,
    available: true
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
    video: null,
    available: true
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
    video: null,
    available: true
  }
];

let cartData = JSON.parse(localStorage.getItem('mahfourCart')) || [];

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

function verifyProductsPassword() {
  const passwordInput = document.getElementById('products-password-input');
  if (!passwordInput) return;

  const enteredPassword = passwordInput.value.trim();

  if (!enteredPassword) {
    Swal.fire({
      icon: 'error',
      title: 'كلمة مرور مطلوبة',
      text: 'يرجى إدخال كلمة المرور لإدارة المنتجات.',
      showConfirmButton: false,
      timer: 2000
    });
    return false;
  }

  if (enteredPassword === PRODUCTS_PASSWORD) {
    document.getElementById('products-password-modal').style.display = 'none';
    document.getElementById('products-management').style.display = 'block';
    renderProductsManagement();
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

function setupAdminAccess() {
  const adminAccessBtn = document.getElementById('admin-access-btn');
  if (adminAccessBtn) {
    adminAccessBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'admin.html';
    });
  }
}

function renderProducts(products) {
  const container = document.querySelector('.products');
  if (!container) return;
  const productCards = container.querySelectorAll('.product-card');
  productCards.forEach(card => card.remove());

  products.forEach(product => {
    const availabilityClass = product.available ? '' : 'unavailable';
    const availabilityBadge = product.available ? '' : '<span class="unavailable-badge">غير متوفر</span>';
    container.insertAdjacentHTML('beforeend', `
      <div class="product-card ${availabilityClass}" data-name="${product.name}" data-price="${product.price}" data-category="${product.category}">
        <a href="product-details.html?id=${product.id}">
          <div class="image-wrapper">
            <img src="${product.img}" alt="${product.name} مصنوع يدويًا" loading="lazy">
            ${availabilityBadge}
          </div>
          <h3>${product.name}</h3>
        </a>
        <p>سعر: ${product.price} جنيه</p>
        <div class="quantity-control" data-id="${product.id}">
          <button class="qty-btn minus" data-id="${product.id}">-</button>
          <span class="product-quantity" data-id="${product.id}">1</span>
          <button class="qty-btn plus" data-id="${product.id}">+</button>
        </div>
        <div class="buttons">
          <button class="btn add-to-cart" data-name="${product.name}" data-price="${product.price}" data-id="${product.id}">أضف إلى السلة</button>
          <button class="btn order-now" data-id="${product.id}">اطلب الآن</button>
        </div>
      </div>
    `);
  });

  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      const isPlus = e.target.classList.contains('plus');
      const quantityElement = document.querySelector(`.product-quantity[data-id="${id}"]`);
      if (!quantityElement) return;
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
      const id = btn.dataset.id;
      const product = productsData.find(p => p.id === parseInt(id));
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
      const name = btn.dataset.name;
      const price = Number(btn.dataset.price);
      const quantity = parseInt(document.querySelector(`.product-quantity[data-id="${id}"]`).textContent);
      addToCart(name, price, id, quantity);
    });
  });

  document.querySelectorAll('.order-now').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.dataset.id;
      const product = productsData.find(p => p.id === parseInt(id));
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
      const name = product.name;
      const price = product.price;
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
          const encodedMessage = encodeURIComponent(message).replace(/%0A/g, '%0D%0A');
          const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
          window.open(url, '_blank');
          let orders = JSON.parse(localStorage.getItem('mahfourOrders')) || [];
          const orderNumber = orders.length + 1;
          orders.push({ orderNumber, message, timestamp: new Date().toLocaleString('ar-EG') });
          localStorage.setItem('mahfourOrders', JSON.stringify(orders));
          Swal.fire({
            icon: 'success',
            title: `تم إرسال الطلب رقم ${orderNumber} عبر واتساب`,
            showConfirmButton: false,
            timer: 2000
          });
          renderOrders();
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
  const product = productsData.find(p => p.id === parseInt(id));
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
  if (orders.length === 0) {
    ordersList.innerHTML = '<tr><td colspan="3">لا توجد طلبات سابقة.</td></tr>';
    return;
  }
  orders.forEach(order => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${order.orderNumber}</td>
      <td>${order.timestamp}</td>
      <td><pre>${order.message}</pre></td>
    `;
    ordersList.appendChild(row);
  });
}

function renderProductsManagement() {
  const productsGrid = document.getElementById('products-grid');
  if (!productsGrid) return;
  productsGrid.innerHTML = '';
  productsData.forEach(product => {
    const availabilityClass = product.available ? 'available' : 'unavailable';
    const availabilityText = product.available ? 'متوفر' : 'غير متوفر';
    const availabilityColor = product.available ? '#4CAF50' : '#f44336';
    const card = document.createElement('div');
    card.className = `product-management-card ${availabilityClass}`;
    card.innerHTML = `
      <div class="card-image">
        <img src="${product.img}" alt="${product.name}" loading="lazy">
      </div>
      <div class="card-content">
        <h4>${product.name}</h4>
        <p class="category">الفئة: ${product.category}</p>
        <p class="price">السعر: ${product.price} جنيه</p>
        <div class="availability">
          <span class="availability-badge" style="background-color: ${availabilityColor};">${availabilityText}</span>
        </div>
        <div class="card-actions">
          <button class="toggle-availability btn" data-id="${product.id}">تبديل التوفر</button>
          <button class="edit-product btn" data-id="${product.id}">تعديل</button>
          <button class="delete-product btn" data-id="${product.id}">حذف</button>
        </div>
      </div>
    `;
    productsGrid.appendChild(card);
  });

  // Event listeners for cards
  document.querySelectorAll('.toggle-availability').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.dataset.id);
      const product = productsData.find(p => p.id === id);
      product.available = !product.available;
      saveProducts();
      Swal.fire({
        icon: 'success',
        title: `تم تحديث حالة ${product.name}`,
        showConfirmButton: false,
        timer: 1500
      });
      renderProductsManagement(); // Refresh cards
      renderProducts(productsData); // Refresh main page
    });
  });

  document.querySelectorAll('.edit-product').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.dataset.id);
      const product = productsData.find(p => p.id === id);
      document.getElementById('add-product-form').style.display = 'block';
      document.getElementById('edit-product-id').value = product.id;
      document.getElementById('product-name-input').value = product.name;
      document.getElementById('product-price-input').value = product.price;
      document.getElementById('product-img-input').value = product.img;
      document.getElementById('product-category-input').value = product.category;
      document.getElementById('product-details-input').value = product.details;
      document.getElementById('product-dimensions-input').value = product.dimensions;
      document.getElementById('product-images-input').value = product.images.join(',');
      document.getElementById('product-video-input').value = product.video || '';
      document.getElementById('product-available-input').value = product.available ? 'true' : 'false';
    });
  });

  document.querySelectorAll('.delete-product').forEach(btn => {
    btn.addEventListener('click', (e) => {
      Swal.fire({
        icon: 'warning',
        title: 'هل أنت متأكد؟',
        text: 'سيتم حذف المنتج نهائيًا!',
        showCancelButton: true,
        confirmButtonText: 'نعم، احذف',
        cancelButtonText: 'إلغاء'
      }).then(result => {
        if (result.isConfirmed) {
          const id = parseInt(e.target.dataset.id);
          productsData = productsData.filter(p => p.id !== id);
          saveProducts();
          renderProductsManagement(); // Refresh cards
          Swal.fire({ icon: 'success', title: 'تم حذف المنتج', showConfirmButton: false, timer: 1500 });
          renderProducts(productsData); // Refresh main page
        }
      });
    });
  });

  document.getElementById('add-product-btn')?.addEventListener('click', () => {
    document.getElementById('add-product-form').style.display = 'block';
    clearProductForm();
  });

  document.getElementById('cancel-edit')?.addEventListener('click', () => {
    document.getElementById('add-product-form').style.display = 'none';
    clearProductForm();
  });

  document.getElementById('save-product')?.addEventListener('click', () => {
    const id = document.getElementById('edit-product-id').value ? parseInt(document.getElementById('edit-product-id').value) : null;
    const name = document.getElementById('product-name-input').value.trim();
    const price = parseFloat(document.getElementById('product-price-input').value);
    const img = document.getElementById('product-img-input').value.trim();
    const category = document.getElementById('product-category-input').value.trim();
    const details = document.getElementById('product-details-input').value.trim();
    const dimensions = document.getElementById('product-dimensions-input').value.trim();
    const images = document.getElementById('product-images-input').value.trim().split(',').map(i => i.trim()).filter(i => i);
    const video = document.getElementById('product-video-input').value.trim() || null;
    const available = document.getElementById('product-available-input').value === 'true';

    if (!name || !price || !img || !category || !details) {
      Swal.fire({ icon: 'error', title: 'يرجى ملء جميع الحقول الإلزامية', showConfirmButton: false, timer: 2000 });
      return;
    }

    if (isNaN(price) || price <= 0) {
      Swal.fire({ icon: 'error', title: 'السعر يجب أن يكون رقمًا صحيحًا أكبر من 0', showConfirmButton: false, timer: 2000 });
      return;
    }

    if (id) {
      const product = productsData.find(p => p.id === id);
      product.name = name;
      product.price = price;
      product.img = img;
      product.category = category;
      product.details = details;
      product.dimensions = dimensions;
      product.images = images;
      product.video = video;
      product.available = available;
    } else {
      const newId = productsData.length ? Math.max(...productsData.map(p => p.id)) + 1 : 1;
      productsData.push({
        id: newId,
        name,
        price,
        img,
        category,
        details,
        images,
        dimensions: dimensions || 'يختلف حسب الطلب',
        video,
        available
      });
    }

    saveProducts();
    renderProductsManagement(); // Refresh cards
    document.getElementById('add-product-form').style.display = 'none';
    clearProductForm();
    Swal.fire({ icon: 'success', title: 'تم حفظ المنتج', showConfirmButton: false, timer: 1500 });
    renderProducts(productsData); // Refresh main page
  });
}

function saveProducts() {
  localStorage.setItem('mahfourProducts', JSON.stringify(productsData));
}

function clearProductForm() {
  document.getElementById('edit-product-id').value = '';
  document.getElementById('product-name-input').value = '';
  document.getElementById('product-price-input').value = '';
  document.getElementById('product-img-input').value = '';
  document.getElementById('product-category-input').value = '';
  document.getElementById('product-details-input').value = '';
  document.getElementById('product-dimensions-input').value = '';
  document.getElementById('product-images-input').value = '';
  document.getElementById('product-video-input').value = '';
  document.getElementById('product-available-input').value = 'true';
}

function clearOrders() {
  Swal.fire({
    icon: 'warning',
    title: 'هل أنت متأكد؟',
    text: 'سيتم مسح كل الطلبات السابقة!',
    showCancelButton: true,
    confirmButtonText: 'نعم، امسح',
    cancelButtonText: 'إلغاء'
  }).then(result => {
    if (result.isConfirmed) {
      localStorage.setItem('mahfourOrders', JSON.stringify([]));
      renderOrders();
      Swal.fire({
        icon: 'success',
        title: 'تم مسح الطلبات',
        showConfirmButton: false,
        timer: 1500
      });
    }
  });
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
      const encodedMessage = encodeURIComponent(message).replace(/%0A/g, '%0D%0A');
      const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      
      window.open(url, '_blank');
      let orders = JSON.parse(localStorage.getItem('mahfourOrders')) || [];
      const orderNumber = orders.length + 1;
      orders.push({ orderNumber, message, timestamp: new Date().toLocaleString('ar-EG') });
      localStorage.setItem('mahfourOrders', JSON.stringify(orders));
      cartData = [];
      renderCart();
      renderOrders();
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
  if (productPrice) productPrice.textContent = `سعر: ${product.price} جنيه ${product.available ? '' : '(غير متوفر)'}`;
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
      addToCart(product.name, product.price, product.id, quantity);
      quantity = 1;
      quantityElement.textContent = quantity;
    });
  }

  if (orderNowButton) {
    orderNowButton.addEventListener('click', () => {
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
          const encodedMessage = encodeURIComponent(message).replace(/%0A/g, '%0D%0A');
          const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
          window.open(url, '_blank');
          let orders = JSON.parse(localStorage.getItem('mahfourOrders')) || [];
          const orderNumber = orders.length + 1;
          orders.push({ orderNumber, message, timestamp: new Date().toLocaleString('ar-EG') });
          localStorage.setItem('mahfourOrders', JSON.stringify(orders));
          Swal.fire({
            icon: 'success',
            title: `تم إرسال الطلب رقم ${orderNumber} عبر واتساب`,
            showConfirmButton: false,
            timer: 2000
          });
          renderOrders();
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

  let userId = localStorage.getItem('userId');
  if (!userId) {
    userId = 'user_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('userId', userId);
  }

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

  function highlightStars(rating) {
    stars.forEach(star => {
      const starRating = parseInt(star.dataset.rating);
      star.classList.toggle('active', starRating <= rating);
    });
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
      highlightStars(currentRating);
      Swal.fire({
        icon: 'success',
        title: 'تم تسجيل تقييمك!',
        text: `لقد قيّمت هذا المنتج بـ ${currentRating} نجوم`,
        showConfirmButton: false,
        timer: 1500
      });
    });
  });

  updateAverageRating();
}

function setupEventListeners() {
  const verifyPasswordBtn = document.getElementById('verify-password');
  if (verifyPasswordBtn) {
    verifyPasswordBtn.addEventListener('click', verifyPassword);
  }

  const verifyProductsPasswordBtn = document.getElementById('verify-products-password');
  if (verifyProductsPasswordBtn) {
    verifyProductsPasswordBtn.addEventListener('click', verifyProductsPassword);
  }

  const manageProductsBtn = document.getElementById('manage-products-btn');
  if (manageProductsBtn) {
    manageProductsBtn.addEventListener('click', () => {
      document.getElementById('products-password-modal').style.display = 'flex';
    });
  }

  const searchProducts = document.getElementById('search-products');
  if (searchProducts) {
    searchProducts.addEventListener('input', filterAndSortProducts);
  }

  const sortProducts = document.getElementById('sort-products');
  if (sortProducts) {
    sortProducts.addEventListener('change', filterAndSortProducts);
  }

  const filterCategory = document.getElementById('filter-category');
  if (filterCategory) {
    filterCategory.addEventListener('change', filterAndSortProducts);
  }

  const resetFilters = document.getElementById('reset-filters');
  if (resetFilters) {
    resetFilters.addEventListener('click', () => {
      document.getElementById('search-products').value = '';
      document.getElementById('sort-products').value = 'default';
      document.getElementById('filter-category').value = 'all';
      renderProducts(productsData);
    });
  }

  const searchOrders = document.getElementById('search-orders');
  if (searchOrders) {
    searchOrders.addEventListener('input', () => {
      const searchTerm = searchOrders.value.trim().toLowerCase();
      const orders = JSON.parse(localStorage.getItem('mahfourOrders')) || [];
      const filteredOrders = orders.filter(order => 
        order.orderNumber.toString().includes(searchTerm) || 
        order.message.toLowerCase().includes(searchTerm)
      );
      const ordersList = document.getElementById('orders-list');
      ordersList.innerHTML = '';
      if (filteredOrders.length === 0) {
        ordersList.innerHTML = '<tr><td colspan="3">لا توجد طلبات مطابقة.</td></tr>';
        return;
      }
      filteredOrders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${order.orderNumber}</td>
          <td>${order.timestamp}</td>
          <td><pre>${order.message}</pre></td>
        `;
        ordersList.appendChild(row);
      });
    });
  }

  const clearOrdersBtn = document.getElementById('clear-orders');
  if (clearOrdersBtn) {
    clearOrdersBtn.addEventListener('click', clearOrders);
  }

  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-image');
  const closeModal = document.querySelector('.close-modal');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentImageIndex = 0;
  let images = [];

  document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
      images = Array.from(document.querySelectorAll('.thumbnail')).map(t => t.src);
      currentImageIndex = images.indexOf(thumbnail.src);
      modal.style.display = 'block';
      modalImg.src = thumbnail.src;
    });
  });

  if (closeModal) {
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      modalImg.src = images[currentImageIndex];
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      modalImg.src = images[currentImageIndex];
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupAdminAccess();
  setupCart();
  setupProductDetails();
  setupEventListeners();
  renderProducts(productsData);
  renderCart();
  if (window.location.pathname.includes('admin.html')) {
    const adminContent = document.getElementById('admin-content');
    if (adminContent) adminContent.style.display = 'none';
  }
});
