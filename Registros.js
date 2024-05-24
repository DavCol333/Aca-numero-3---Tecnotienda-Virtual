document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    toggleLoginLink();
});

let cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCartCount();
    updateCartItems();
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

function updateCartItems() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    document.getElementById('cart-total').textContent = total.toFixed(2);
}

function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        localStorage.setItem('isLoggedIn', 'true');
        alert('Inicio de sesión exitoso');
        toggleLoginLink();
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    alert('Sesión cerrada');
    toggleLoginLink();
}

function toggleLoginLink() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    document.getElementById('login-link').style.display = isLoggedIn ? 'none' : 'inline';
    document.getElementById('logout-link').style.display = isLoggedIn ? 'inline' : 'none';
}

document.getElementById('logout-link').addEventListener('click', logout);
