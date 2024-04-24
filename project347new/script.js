let cartItems = [];
let cartTotal = 0;

function addToCart(itemName, price) {
    cartItems.push({ name: itemName, price: price });
    cartTotal += price;

    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    
    cartList.innerHTML = '';
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rp ${item.price}`;
        cartList.appendChild(li);
    });

    cartTotalElement.textContent = cartTotal;
}

