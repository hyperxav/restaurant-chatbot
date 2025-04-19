const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

// Function to generate logo
function generateLogo(size = 300) {
    const canvas = createCanvas(size, size * 0.67);
    const ctx = canvas.getContext('2d');

    // Set background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw border
    ctx.strokeStyle = '#2d4b56';
    ctx.lineWidth = 3;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

    // Add text
    ctx.fillStyle = '#bd9756';
    ctx.font = `bold ${size/6}px 'Arial'`;
    ctx.textAlign = 'center';
    ctx.fillText('Les Chimères', canvas.width/2, canvas.height/2);

    ctx.fillStyle = '#2d4b56';
    ctx.font = `${size/15}px 'Arial'`;
    ctx.fillText('Restaurant & Bar', canvas.width/2, canvas.height/2 + size/10);

    return canvas;
}

// Function to generate QR code
function generateQRCode() {
    const canvas = createCanvas(200, 200);
    const ctx = canvas.getContext('2d');

    // White background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 200, 200);

    // QR code pattern
    ctx.fillStyle = '#000000';
    // Position markers
    ctx.fillRect(20, 20, 40, 40);
    ctx.fillRect(140, 20, 40, 40);
    ctx.fillRect(20, 140, 40, 40);
    
    // Center pattern
    ctx.fillRect(90, 90, 20, 20);

    // Random dots for QR code effect
    for(let i = 0; i < 100; i++) {
        ctx.fillRect(
            Math.random() * 160 + 20,
            Math.random() * 160 + 20,
            4, 4
        );
    }

    return canvas;
}

// Function to generate restaurant interior
function generateInterior() {
    const canvas = createCanvas(600, 400);
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#2d4b56';
    ctx.fillRect(0, 0, 600, 400);

    // Floor
    ctx.fillStyle = '#5a3721';
    ctx.fillRect(0, 250, 600, 150);

    // Tables
    for(let x = 100; x < 500; x += 150) {
        for(let y = 150; y < 350; y += 100) {
            // Table
            ctx.fillStyle = '#bd9756';
            ctx.beginPath();
            ctx.ellipse(x, y, 30, 20, 0, 0, Math.PI * 2);
            ctx.fill();

            // Chairs
            ctx.fillStyle = '#d4af37';
            ctx.fillRect(x-40, y-10, 15, 15);
            ctx.fillRect(x+25, y-10, 15, 15);
        }
    }

    return canvas;
}

// Function to generate map
function generateMap() {
    const canvas = createCanvas(600, 400);
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#e8e8e8';
    ctx.fillRect(0, 0, 600, 400);

    // Roads
    ctx.fillStyle = '#a0a0a0';
    ctx.fillRect(100, 0, 30, 400);  // Vertical road
    ctx.fillRect(0, 200, 600, 30);  // Horizontal road

    // Restaurant location
    ctx.fillStyle = '#bd9756';
    ctx.beginPath();
    ctx.arc(300, 200, 15, 0, Math.PI * 2);
    ctx.fill();

    // Label
    ctx.fillStyle = '#000000';
    ctx.font = '12px Arial';
    ctx.fillText('Les Chimères', 270, 230);

    return canvas;
}

// Function to generate hero background
function generateHeroBackground() {
    const canvas = createCanvas(1200, 800);
    const ctx = canvas.getContext('2d');

    // Gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, 800);
    gradient.addColorStop(0, '#2d4b56');
    gradient.addColorStop(1, '#1a2930');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1200, 800);

    // Add some abstract shapes
    ctx.fillStyle = 'rgba(189, 151, 86, 0.1)';
    for(let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(
            Math.random() * 1200,
            Math.random() * 800,
            Math.random() * 200 + 100,
            0,
            Math.PI * 2
        );
        ctx.fill();
    }

    return canvas;
}

// Create images directory if it doesn't exist
if (!fs.existsSync('images')) {
    fs.mkdirSync('images');
}

// Generate and save all images
const logo = generateLogo(300);
fs.writeFileSync('images/logo.png', logo.toBuffer());

const logoSmall = generateLogo(150);
fs.writeFileSync('images/logo-small.png', logoSmall.toBuffer());

const qrCode = generateQRCode();
fs.writeFileSync('images/qr-code.png', qrCode.toBuffer());

const interior = generateInterior();
fs.writeFileSync('images/restaurant-interior.jpg', interior.toBuffer());

const map = generateMap();
fs.writeFileSync('images/map-placeholder.jpg', map.toBuffer());

const hero = generateHeroBackground();
fs.writeFileSync('images/hero-bg.jpg', hero.toBuffer()); 