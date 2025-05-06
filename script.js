// ডার্ক মোড টগল
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// ইমেজ গ্যালারি লোড
const gallery = document.querySelector('.gallery');
const products = [
    { name: "চকোলেট কেক", price: "৳800", img: "pimg/product.jpg.jpg" },
    { name: "ভ্যানিলা কাপকেক", price: "৳500", img: "pimg/product1.jpg.jpg" }
];

products.forEach(product => {
    gallery.innerHTML += `
        <div class="product-card">
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="price">${product.price}</div>
        </div>
    `;
});

// লোডার隐藏
window.addEventListener('load', () => {
    document.querySelector('.loader').style.display = 'none';
});