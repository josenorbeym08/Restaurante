// Configuración 
const WHATSAPP_NUMBER = '573005979838'; [cite: 101]
let cart = []; [cite: 102]

// Datos del Menú (80 Platos) [cite: 6, 19, 32, 45]
const menuData = {
    entradas: [
        {n: "Bruschetta Clásica", p: 8.50, i: "fa-bread-slice"}, {n: "Ceviche Pescado", p: 12.00, i: "fa-fish"},
        {n: "Empanadas Criollas", p: 6.00, i: "fa-cloud"}, {n: "Calamares Fritos", p: 11.50, i: "fa-shrimp"},
        {n: "Sopa de Cebolla", p: 7.00, i: "fa-bowl-food"}, {n: "Carpaccio de Res", p: 14.00, i: "fa-leaf"},
        {n: "Nachos con Queso", p: 9.00, i: "fa-cheese"}, {n: "Aros de Cebolla", p: 5.50, i: "fa-circle-dot"},
        {n: "Alitas BBQ", p: 10.00, i: "fa-drumstick-bite"}, {n: "Hummus con Pita", p: 7.50, i: "fa-stroopwafel"},
        {n: "Tequeños Queso", p: 6.50, i: "fa-bread-slice"}, {n: "Tacos Entrada", p: 8.00, i: "fa-bolt"},
        {n: "Ensalada Caprese", p: 10.50, i: "fa-apple-whole"}, {n: "Croquetas Jamón", p: 7.00, i: "fa-cookie"},
        {n: "Champiñones Ajo", p: 9.50, i: "fa-mushroom"}, {n: "Provoleta Asada", p: 11.00, i: "fa-cheese"},
        {n: "Yuquitas Fritas", p: 5.00, i: "fa-seedling"}, {n: "Patacones Hogao", p: 6.00, i: "fa-layer-group"},
        {n: "Gazpacho Andaluz", p: 8.00, i: "fa-mug-hot"}, {n: "Tartar de Atún", p: 15.00, i: "fa-water"}
    ],
    platos: [
        {n: "Lomo Saltado", p: 18.00, i: "fa-fire"}, {n: "Salmón Rosado", p: 22.00, i: "fa-fish-vertical"},
        {n: "Ribeye Steak", p: 25.00, i: "fa-bacon"}, {n: "Pasta Carbonara", p: 14.50, i: "fa-spaghetti-monster-flying"},
        {n: "Pollo al Curry", p: 16.00, i: "fa-mortar-pestle"}, {n: "Paella Marinera", p: 28.00, i: "fa-shrimp"},
        {n: "Burger Trufada", p: 15.00, i: "fa-burger"}, {n: "Lasagna Carne", p: 13.50, i: "fa-layer-group"},
        {n: "Risotto Setas", p: 17.00, i: "fa-wheat-awn"}, {n: "Costillas BBQ", p: 19.50, i: "fa-bone"},
        {n: "Pato Naranja", p: 24.00, i: "fa-dove"}, {n: "Bife de Chorizo", p: 23.00, i: "fa-cow"},
        {n: "Pizza Pepperoni", p: 12.00, i: "fa-pizza-slice"}, {n: "Sushi Variado", p: 18.50, i: "fa-shrimp"},
        {n: "Enchiladas", p: 13.00, i: "fa-pepper-hot"}, {n: "Cordero Asado", p: 27.00, i: "fa-cloud"},
        {n: "Raviolis", p: 14.00, i: "fa-leaf"}, {n: "Milanesa Napo", p: 15.50, i: "fa-bread-slice"},
        {n: "Pescado Talla", p: 21.00, i: "fa-fish"}, {n: "Bowl Vegano", p: 12.50, i: "fa-seedling"}
    ],
    postres: [
        {n: "Cheesecake", p: 7.50, i: "fa-cake-candles"}, {n: "Tiramisú", p: 8.00, i: "fa-mug-hot"},
        {n: "Brownie Helado", p: 6.50, i: "fa-ice-cream"}, {n: "Volcán Choco", p: 9.00, i: "fa-volcano"},
        {n: "Flan Casa", p: 5.00, i: "fa-custard"}, {n: "Mousse Maracuyá", p: 6.00, i: "fa-lemon"},
        {n: "Crème Brûlée", p: 8.50, i: "fa-fire-burner"}, {n: "Pie de Limón", p: 6.50, i: "fa-slice"},
        {n: "Helado Artesanal", p: 4.50, i: "fa-ice-cream"}, {n: "Frutas Estación", p: 5.50, i: "fa-apple-whole"},
        {n: "Alfajores", p: 3.50, i: "fa-cookie"}, {n: "Arroz con Leche", p: 4.50, i: "fa-bowl-rice"},
        {n: "Crepas Nutella", p: 7.00, i: "fa-scroll"}, {n: "Tarta Manzana", p: 6.50, i: "fa-apple-whole"},
        {n: "Panna Cotta", p: 7.00, i: "fa-glass-water"}, {n: "Churros", p: 6.00, i: "fa-lines-leaning"},
        {n: "Pavlova Fresa", p: 8.00, i: "fa-cloud"}, {n: "Donas Glaseadas", p: 3.00, i: "fa-circle-dot"},
        {n: "Banoffee Pie", p: 7.50, i: "fa-banana"}, {n: "Gelato Italiano", p: 5.50, i: "fa-ice-cream"}
    ],
    bebidas: [
        {n: "Copa Vino Tinto", p: 9.00, i: "fa-glass-wine"}, {n: "Cerveza Artesan", p: 6.50, i: "fa-beer-mug-empty"},
        {n: "Margarita", p: 10.00, i: "fa-martini-glass-citrus"}, {n: "Mojito Clásico", p: 9.50, i: "fa-glass-citrus"},
        {n: "Limonada Coco", p: 5.50, i: "fa-coconut"}, {n: "Soda Italiana", p: 4.50, i: "fa-bottle-water"},
        {n: "Jugo Naranja", p: 4.00, i: "fa-glass-water"}, {n: "Té Frío", p: 3.50, i: "fa-leaf"},
        {n: "Café Expresso", p: 3.00, i: "fa-mug-hot"}, {n: "Cappuccino", p: 4.50, i: "fa-mug-saucer"},
        {n: "Agua Mineral", p: 2.50, i: "fa-bottle-droplet"}, {n: "Batido Fresa", p: 5.00, i: "fa-blender"},
        {n: "Pisco Sour", p: 11.00, i: "fa-wine-glass"}, {n: "Gin Tonic", p: 12.00, i: "fa-glass-half-full"},
        {n: "Sangría Jarra", p: 22.00, i: "fa-wine-bottle"}, {n: "Whisky Rocks", p: 15.00, i: "fa-glass-whiskey"},
        {n: "Caipirinha", p: 10.00, i: "fa-glass-citrus"}, {n: "Té Matcha", p: 5.50, i: "fa-leaf"},
        {n: "Choco Caliente", p: 4.50, i: "fa-mug-hot"}, {n: "Cerveza Nacional", p: 4.50, i: "fa-beer-mug-empty"}
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    initializeFilters();
    initializeCartLogic();
    showCategory('all');
});

function renderMenu() {
    for (let cat in menuData) {
        const grid = document.getElementById(`grid-${cat}`);
        grid.innerHTML = menuData[cat].map(item => `
            <div class="menu-item">
                <div class="item-image"><i class="fas ${item.i}"></i></div>
                <div class="item-content">
                    <h4>${item.n}</h4>
                    <p>Deliciosa opción preparada al instante.</p>
                    <div class="item-footer">
                        <span class="price">$${item.p.toFixed(2)}</span>
                        <button class="whatsapp-btn" onclick="addToCart('${item.n}', ${item.p})">
                            <i class="fab fa-whatsapp"></i> Pedir
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function initializeFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            showCategory(btn.dataset.filter);
        });
    });
}

function showCategory(category) {
    document.querySelectorAll('.menu-section').forEach(sec => {
        sec.style.display = (category === 'all' || sec.dataset.category === category) ? 'block' : 'none';
    });
}

function addToCart(name, price) {
    const item = cart.find(i => i.name === name);
    if (item) { item.quantity++; } else { cart.push({name, price, quantity: 1}); }
    updateUI();
}

function updateQuantity(name, delta) {
    const item = cart.find(i => i.name === name);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) cart = cart.filter(i => i.name !== name);
    }
    updateUI();
}

function updateUI() {
    const count = cart.reduce((s, i) => s + i.quantity, 0);
    const countEl = document.getElementById('cartCount');
    countEl.textContent = count;
    countEl.classList.toggle('hidden', count === 0);

    const itemsEl = document.getElementById('cartItems');
    if (cart.length === 0) {
        itemsEl.innerHTML = '<p>Tu carrito está vacío</p>';
    } else {
        itemsEl.innerHTML = cart.map(i => `
            <div class="cart-item">
                <span>${i.name} (x${i.quantity})</span>
                <div>
                    <button onclick="updateQuantity('${i.name}', -1)">-</button>
                    <button onclick="updateQuantity('${i.name}', 1)">+</button>
                    <span>$${(i.price * i.quantity).toFixed(2)}</span>
                </div>
            </div>
        `).join('');
    }
    document.getElementById('cartTotal').textContent = cart.reduce((s, i) => s + (i.price * i.quantity), 0).toFixed(2);
}

function initializeCartLogic() {
    document.getElementById('whatsappCart').onclick = () => document.getElementById('cartModal').classList.add('active');
    document.getElementById('closeCart').onclick = () => document.getElementById('cartModal').classList.remove('active');
    document.getElementById('sendWhatsApp').onclick = sendToWhatsApp;
}

function sendToWhatsApp() {
    if (cart.length === 0) return;
    let msg = "🍽️ *NUEVO PEDIDO*\n\n";
    cart.forEach((i, idx) => {
        msg += `${idx + 1}. ${i.name} x${i.quantity} - $${(i.price * i.quantity).toFixed(2)}\n`;
    });
    msg += `\n💰 *Total: $${document.getElementById('cartTotal').textContent}*`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}



