const products = document.querySelectorAll('.product');

products.forEach(product => {
  const productPlus = product.querySelector('.product__quantity-control_inc');
  const productMinus = product.querySelector('.product__quantity-control_dec');
  const productQuantityValue = product.querySelector('.product__quantity-value');

  productPlus.addEventListener('click', (event) => {
    event.preventDefault();

    let quantity = parseInt(productQuantityValue.textContent);
    quantity++;
    productQuantityValue.textContent = quantity;
  });

  productMinus.addEventListener('click', (event) => {
    event.preventDefault();

    let quantity = parseInt(productQuantityValue.textContent);
    if (quantity > 1) {
      quantity--;
      productQuantityValue.textContent = quantity;
    }
  });

  const addCarts = product.querySelectorAll('.product__add');

  addCarts.forEach(addCart => {
    addCart.addEventListener('click', (event) => {
      event.preventDefault();

      const product = addCart.closest('.product');
      const productId = product.getAttribute('data-id');
      const productImage = product.querySelector('.product__image');
      const quantity = parseInt(productQuantityValue.textContent);

      const cartProduct = document.createElement('div');
      cartProduct.classList.add('cart__product');
      cartProduct.dataset.id = productId;

      const cartProductImage = document.createElement('img');
      cartProductImage.classList.add('cart__product-image');
      cartProductImage.src = productImage.src;
      cartProduct.appendChild(cartProductImage);

      const cartProductCount = document.createElement('div');
      cartProductCount.classList.add('cart__product-count');
      cartProductCount.textContent = quantity;
      cartProduct.appendChild(cartProductCount);

      const cartProductsList = document.querySelector('.cart__products');

      const existingCartProduct = cartProductsList.querySelector(`.cart__product[data-id="${productId}"]`);

      if (existingCartProduct) {
        const existingProductCount = parseInt(existingCartProduct.querySelector('.cart__product-count').textContent);
        const newQuantity = existingProductCount + quantity;
        existingCartProduct.querySelector('.cart__product-count').textContent = newQuantity;
      } else {
        cartProductsList.appendChild(cartProduct);
      }

      productQuantityValue.textContent = '1';
    });
  });
});
