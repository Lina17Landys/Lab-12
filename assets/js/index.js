const productCards = document.getElementById('product-cards');

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
        products.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('card');

            const image = document.createElement('img');
            image.src = product.image;
            image.alt = product.title;
            image.classList.add('center');

            card.appendChild(image);

            const title = document.createElement('h2');
            title.textContent = product.title;
            card.appendChild(title);

            const price = document.createElement('p');
            price.textContent = `$${product.price.toFixed(2)}`;
            card.appendChild(price);

            const trashIcon = document.createElement('img');
            trashIcon.src = 'https://raw.githubusercontent.com/Lina17Landys/Lab-12/main/icons/basura.png';
            trashIcon.alt = 'Trash Icon';
            trashIcon.classList.add('icon-trash');

            const buyButton = document.createElement('button');
            buyButton.textContent = 'Comprar';

            const bookmarkIcon = document.createElement('img');
            bookmarkIcon.src = 'https://raw.githubusercontent.com/Lina17Landys/Lab-12/main/icons/bookmark%20empty%20icon.png';
            bookmarkIcon.alt = 'Bookmark Icon';
            bookmarkIcon.classList.add('icon-bookmark');

            const addToCartIcon = document.createElement('img');
            addToCartIcon.src = 'https://raw.githubusercontent.com/Lina17Landys/Lab-12/main/icons/cart.png';
            addToCartIcon.alt = 'Add to Cart Icon';
            addToCartIcon.classList.add('icon-cart');

            const bookmarkHandler = () => {
                if (bookmarkIcon.src.includes('bookmarkfull')) {
                    bookmarkIcon.src = 'https://raw.githubusercontent.com/Lina17Landys/Lab-12/main/icons/bookmark%20empty%20icon.png';
                } else {
                    bookmarkIcon.src = 'https://raw.githubusercontent.com/Lina17Landys/Lab-12/main/icons/bookmarkfull%20icon.png';
                }
            };

            bookmarkIcon.addEventListener('click', bookmarkHandler);

            buyButton.appendChild(bookmarkIcon);
            buyButton.appendChild(addToCartIcon);

            card.appendChild(trashIcon);
            card.appendChild(buyButton);

            productCards.appendChild(card);

            buyButton.addEventListener('click', () => {
                const productTitle = title.textContent;
                const productPrice = parseFloat(price.textContent.replace('$', ''));
                cartItems.push({ title: productTitle, price: productPrice });
                const cartItemElement = document.createElement("li");
                cartItemElement.textContent = `${productTitle} - $${productPrice.toFixed(2)}`;
                cartList.appendChild(cartItemElement);
                const totalPriceValue = cartItems.reduce((total, item) => total + item.price, 0);
                totalPrice.textContent = `Precio total: $${totalPriceValue.toFixed(2)}`;
            });
        });
    });


    const cartButton = document.getElementById("cart-button");
    const cartList = document.getElementById("cart-list");
    const totalPrice = document.getElementById("total-price");
    let cartItems = [];
    
    if (cartButton) {
      cartButton.addEventListener("click", () => {
        const productTitle = this.parentElement.querySelector('h2').textContent;
        const productPrice = this.parentElement.querySelector('p').textContent.slice(1);
        const cartItem = { title: productTitle, price: parseFloat(productPrice) };
        cartItems.push(cartItem);
        const cartItemElement = document.createElement("li");
        cartItemElement.textContent = `${productTitle} - $${productPrice}`;
        cartList.appendChild(cartItemElement);
    
        const totalPriceValue = cartItems.reduce((total, item) => total + item.price, 0);
        totalPrice.textContent = `Precio total: $${totalPriceValue.toFixed(2)}`;
    });
    
    const buyButton = document.getElementById("buy-button");
    
    buyButton.addEventListener("click", () => {
        cartItems = [];
        cartList.innerHTML = "";
        totalPrice.textContent = "Precio total: $0";
    });
}
