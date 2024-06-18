const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});



document.addEventListener('DOMContentLoaded', () => {
    const addToCartButton = document.getElementById('addCart');
    const viewProductButton = document.getElementById('viewProduct');

    // Add to cart aleert 

    addToCartButton.addEventListener('click', () => {
        alert('Product added to cart!');
    });
    
});