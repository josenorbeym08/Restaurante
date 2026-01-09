const WHATSAPP_NUMBER = '573005979838';

// Generador de base de datos de 80 productos
const categories = ['entradas', 'platos', 'postres', 'bebidas'];
const icons = { entradas: 'fa-cheese', platos: 'fa-utensils', postres: 'fa-ice-cream', bebidas: 'fa-glass-water' };
const menuDB = [];

categories.forEach(cat => {
    for (let i = 1; i <= 20; i++) {
        menuDB.push({
            id: `${cat}-${i}`,
            name: `${cat.charAt(0).toUpperCase() + cat.slice(1)} Especial #${i}`,
            price: Math.floor(Math.random() * (25 - 5) + 5),
            category: cat,
            icon: icons[cat]
        });
    }
});

let cart = [];

// Elementos del DOM
const menuDisplay = document.getElementById('menuDisplay');
const cartCount = document.getElementById('cartCount');
const modal = document.getElementById('modalOverlay');

// Iniciar aplicación
document.addEventListener('DOMContentLoaded', () => {
    renderMenu('entradas');
    setupEvents();
});

function renderMenu(category) {
    const filtered = menuDB.filter(item => item.category === category);
    menuDisplay.innerHTML = filtered.map(item => `
        <div class="product-card">
            <div class="product-icon"><i class="fas ${item.icon}"></i></div>
            <div class="product-info">
                <h4>${item.name}</h4>
                <p>Ingredientes frescos y sabor único.</p>
                <strong>$${item.price.toFixed(2)}</strong>
            </div>
            <button class="btn-add" onclick="addToCart('${item.id}')">+</button>
        </div>
    `).join('');
}

function setupEvents() {
    // Tabs de categoría
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.onclick = (e) => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderMenu(e.target.dataset.cat);
        };
    });

    // Abrir/Cerrar Carrito
    document.getElementById('openCart').onclick = () => {
        updateCartUI();
        modal.classList.add('active');
    };
    document.getElementById('closeCart').onclick = () => modal.classList.remove('active');
    
    // Enviar a WhatsApp
    document.getElementById('btnSend').onclick = sendOrder;
}

function addToCart(id) {
    const product = menuDB.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    
    // Pequeña animación de feedback en el contador
    cartCount.style.transform = "scale(1.3)";
    setTimeout(() => cartCount.style.transform = "scale(1)", 200);
    
    updateCartTotals();
}

function updateCartTotals() {
    const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
    cartCount.innerText = totalItems;
}

function updateCartUI() {
    const container = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding:20px;">Tu carrito está vacío.</p>';
        totalEl.innerText = '$0.00';
        return;
    }

    container.innerHTML = cart.map(item => `
        <div style="display:flex; justify-content:space-between; margin-bottom:15px; border-bottom:1px solid #eee; padding-bottom:10px;">
            <div>
                <strong>${item.name}</strong><br>
                <small>${item.qty} x $${item.price.toFixed(2)}</small>
            </div>
            <strong>$${(item.qty * item.price).toFixed(2)}</strong>
        </div>
    `).join('');

    const total = cart.reduce((acc, item) => acc + (item.qty * item.price), 0);
    totalEl.innerText = `$${total.toFixed(2)}`;
}

function sendOrder() {
    if (cart.length === 0) return alert("Añade productos primero");

    let message = "👋 *Hola, quisiera realizar un pedido:*\n\n";
    cart.forEach(item => {
        message += `• *${item.qty}* x ${item.name} ($${(item.qty * item.price).toFixed(2)})\n`;
    });
    
    const total = document.getElementById('cartTotal').innerText;
    message += `\n💰 *Total a pagar: ${total}*`;
    message += `\n\n📍 _Por favor confirmar disponibilidad._`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}


