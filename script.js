class FlowerBouquetGenerator {
    constructor() {
        // 🌸 BOUQUET SIZE CONTROL - Increase this number to create a meadow!
        this.bouquetSizeMultiplier = 10; // Try 3 for a meadow, 5+ for whole screen coverage
        
        // 🌿 SPACING CONTROL - Adjust flower spacing independently
        this.spacingMultiplierX = 3; // Horizontal spacing (higher = more spread out)
        this.spacingMultiplierY = 1; // Vertical spacing (higher = more spread out)
        
        this.flowerTypes = [
            { 
                name: 'Rose', 
                colors: [
                    { light: '#ffb3d9', dark: '#ff69b4', center: '#8b2252' },
                    { light: '#ffc0cb', dark: '#ff1493', center: '#8b0000' },
                    { light: '#ffb6c1', dark: '#dc143c', center: '#8b0000' },
                    { light: '#ffcccb', dark: '#ff6347', center: '#8b0000' }
                ],
                petalCount: [15, 20],
                petalShape: 'rose'
            },
            { 
                name: 'Tulip', 
                colors: [
                    { light: '#ffb366', dark: '#ff4500', center: '#8b4513' },
                    { light: '#ffcc99', dark: '#ff6347', center: '#8b4513' },
                    { light: '#ffd700', dark: '#ffa500', center: '#8b4513' },
                    { light: '#ffb6c1', dark: '#ff69b4', center: '#8b4513' }
                ],
                petalCount: [6],
                petalShape: 'tulip'
            },
            { 
                name: 'Daisy', 
                colors: [
                    { light: '#ffffff', dark: '#f8f8ff', center: '#ffd700' },
                    { light: '#f0f8ff', dark: '#e6e6fa', center: '#ffa500' },
                    { light: '#fff8dc', dark: '#f5deb3', center: '#ffd700' }
                ],
                petalCount: [12, 15, 18],
                petalShape: 'daisy'
            },
            { 
                name: 'Sunflower', 
                colors: [
                    { light: '#ffff99', dark: '#ffd700', center: '#8b4513' },
                    { light: '#ffeb3b', dark: '#ffb347', center: '#654321' },
                    { light: '#fff176', dark: '#ffa500', center: '#8b4513' }
                ],
                petalCount: [20, 24, 28],
                petalShape: 'sunflower'
            },
            { 
                name: 'Lily', 
                colors: [
                    { light: '#ffffff', dark: '#f8f8ff', center: '#ffd700' },
                    { light: '#fff8dc', dark: '#f5deb3', center: '#ffa500' },
                    { light: '#ffe4e1', dark: '#ffb6c1', center: '#ffd700' }
                ],
                petalCount: [6],
                petalShape: 'lily'
            },
            { 
                name: 'Orchid', 
                colors: [
                    { light: '#e6ccff', dark: '#da70d6', center: '#4b0082' },
                    { light: '#dda0dd', dark: '#ba55d3', center: '#8b008b' },
                    { light: '#d8bfd8', dark: '#9370db', center: '#4b0082' }
                ],
                petalCount: [5, 6],
                petalShape: 'orchid'
            },
            { 
                name: 'Peony', 
                colors: [
                    { light: '#ffb6c1', dark: '#ff1493', center: '#8b008b' },
                    { light: '#ffc0cb', dark: '#ff69b4', center: '#8b008b' },
                    { light: '#ffcccb', dark: '#ffa0a0', center: '#8b008b' }
                ],
                petalCount: [25, 30, 35],
                petalShape: 'peony'
            },
            { 
                name: 'Iris', 
                colors: [
                    { light: '#dda0dd', dark: '#9932cc', center: '#4b0082' },
                    { light: '#d8bfd8', dark: '#8a2be2', center: '#4b0082' },
                    { light: '#e6e6fa', dark: '#9400d3', center: '#4b0082' }
                ],
                petalCount: [6],
                petalShape: 'iris'
            },
            { 
                name: 'Hydrangea', 
                colors: [
                    { light: '#e6f3ff', dark: '#b3d9ff', center: '#87ceeb' },
                    { light: '#f0e6ff', dark: '#dda0dd', center: '#ba55d3' },
                    { light: '#ffe6f0', dark: '#ffb6c1', center: '#ff69b4' },
                    { light: '#e6ffe6', dark: '#98fb98', center: '#90ee90' }
                ],
                petalCount: [20, 25, 30],
                petalShape: 'hydrangea'
            },
            { 
                name: 'Magnolia', 
                colors: [
                    { light: '#fff8dc', dark: '#f5deb3', center: '#daa520' },
                    { light: '#ffe4e1', dark: '#ffb6c1', center: '#ff69b4' },
                    { light: '#f0fff0', dark: '#e6ffe6', center: '#98fb98' }
                ],
                petalCount: [9, 12],
                petalShape: 'magnolia'
            },
            { 
                name: 'Lavender', 
                colors: [
                    { light: '#e6e6fa', dark: '#d8bfd8', center: '#9370db' },
                    { light: '#f0e6ff', dark: '#dda0dd', center: '#ba55d3' },
                    { light: '#e6f3ff', dark: '#b3d9ff', center: '#87ceeb' }
                ],
                petalCount: [4, 6],
                petalShape: 'lavender'
            },
            { 
                name: 'Cherry Blossom', 
                colors: [
                    { light: '#ffe4e1', dark: '#ffb6c1', center: '#ff69b4' },
                    { light: '#fff0f5', dark: '#ffc0cb', center: '#ff1493' },
                    { light: '#f8f8ff', dark: '#e6e6fa', center: '#dda0dd' }
                ],
                petalCount: [5],
                petalShape: 'cherry'
            },
            { 
                name: 'Marigold', 
                colors: [
                    { light: '#fffacd', dark: '#ffd700', center: '#ff8c00' },
                    { light: '#fff8dc', dark: '#f0e68c', center: '#daa520' },
                    { light: '#ffefd5', dark: '#ffb347', center: '#ff6347' }
                ],
                petalCount: [15, 20, 25],
                petalShape: 'marigold'
            },
            { 
                name: 'Gerbera', 
                colors: [
                    { light: '#ffcccb', dark: '#ff6b6b', center: '#dc143c' },
                    { light: '#fff0f5', dark: '#ffb6c1', center: '#ff69b4' },
                    { light: '#ffffe0', dark: '#ffff00', center: '#ffd700' },
                    { light: '#e6ffe6', dark: '#90ee90', center: '#32cd32' }
                ],
                petalCount: [20, 25, 30],
                petalShape: 'gerbera'
            },
            { 
                name: 'Poppy', 
                colors: [
                    { light: '#ffcccc', dark: '#ff4444', center: '#cc0000' },
                    { light: '#ffe6cc', dark: '#ff8800', center: '#ff4400' },
                    { light: '#ffccff', dark: '#ff44ff', center: '#cc00cc' },
                    { light: '#ffffcc', dark: '#ffff44', center: '#cccc00' }
                ],
                petalCount: [4, 6],
                petalShape: 'poppy'
            },
            { 
                name: 'Cosmos', 
                colors: [
                    { light: '#ffe6f3', dark: '#ffb3d9', center: '#ff69b4' },
                    { light: '#e6f3ff', dark: '#b3d9ff', center: '#87ceeb' },
                    { light: '#f0fff0', dark: '#c1ffc1', center: '#90ee90' },
                    { light: '#fff8dc', dark: '#f0e68c', center: '#daa520' }
                ],
                petalCount: [8, 12, 16],
                petalShape: 'cosmos'
            },
            { 
                name: 'Anemone', 
                colors: [
                    { light: '#e6f3ff', dark: '#b3d9ff', center: '#87ceeb' },
                    { light: '#ffe6f3', dark: '#ffb3d9', center: '#ff69b4' },
                    { light: '#f0fff0', dark: '#c1ffc1', center: '#90ee90' },
                    { light: '#fff8dc', dark: '#f0e68c', center: '#daa520' }
                ],
                petalCount: [5, 6, 8],
                petalShape: 'anemone'
            },
            { 
                name: 'Zinnia', 
                colors: [
                    { light: '#ffcccc', dark: '#ff6666', center: '#ff0000' },
                    { light: '#ffffcc', dark: '#ffff66', center: '#ffff00' },
                    { light: '#ccffcc', dark: '#66ff66', center: '#00ff00' },
                    { light: '#ccccff', dark: '#6666ff', center: '#0000ff' }
                ],
                petalCount: [15, 20, 25, 30],
                petalShape: 'zinnia'
            }
        ];
        
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.handleURLParameters();
    }
    
    
    setupEventListeners() {
        const generateBtn = document.getElementById('generateBtn');
        const nameInput = document.getElementById('nameInput');
        
        generateBtn.addEventListener('click', () => this.generateBouquet());
        nameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.generateBouquet();
            }
        });
        
        nameInput.addEventListener('input', (e) => {
            this.updateURL(e.target.value);
        });
    }
    
    handleURLParameters() {
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get('name');
        
        if (name) {
            const nameInput = document.getElementById('nameInput');
            const inputSection = document.querySelector('.input-section');
            
            // Hide the input field when name is in URL
            if (inputSection) {
                inputSection.style.display = 'none';
            }
            
            nameInput.value = name;
            this.updateNameDisplay(name);
            this.generateBouquet();
        } else {
            // Auto-generate with default name if no URL parameter
            this.generateBouquet();
        }
    }
    
    updateURL(name) {
        const url = new URL(window.location);
        if (name && name.trim()) {
            url.searchParams.set('name', name.trim());
        } else {
            url.searchParams.delete('name');
        }
        window.history.replaceState({}, '', url);
    }
    
    updateNameDisplay(name) {
        const nameDisplay = document.getElementById('nameDisplay');
        if (name && name.trim()) {
            nameDisplay.textContent = ` ${name} 🌸 A personalized bouquet just for you.`;
        } else {
            nameDisplay.textContent = 'A personalized bouquet just for you';
        }
    }
    
    
    generateSeed(name) {
        const today = new Date();
        const dateString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
        const seedString = `${name.toLowerCase()}-${dateString}`;
        
        let hash = 0;
        for (let i = 0; i < seedString.length; i++) {
            const char = seedString.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        
        return Math.abs(hash);
    }
    
    seededRandom(seed) {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    }
    
    generateBouquet() {
        const nameInput = document.getElementById('nameInput');
        const name = nameInput.value.trim() || 'Anonymous';
        const seed = this.generateSeed(name);
        
        this.updateNameDisplay(name);
        this.clearBouquet();
        this.createBouquet(seed, name);
    }
    
    clearBouquet() {
        const flowersContainer = document.getElementById('flowers');
        flowersContainer.innerHTML = '';
    }
    
    createBouquet(seed, name) {
        const flowersContainer = document.getElementById('flowers');
        const baseFlowerCount = 12 + Math.floor(this.seededRandom(seed) * 16); // 12-27 flowers
        const flowerCount = Math.floor(baseFlowerCount * this.bouquetSizeMultiplier);
        
        let currentSeed = seed;
        const flowerPositions = [];
        
        // Create a more natural bouquet arrangement
        const centerX = 150; // Keep center fixed
        const centerY = 150; // Keep center fixed
        const baseRadius = 60 * Math.sqrt(this.bouquetSizeMultiplier); // Scale radius more moderately
        
        // Add some flowers in the center (taller flowers)
        const centerFlowers = Math.floor(flowerCount * 0.3);
        for (let i = 0; i < centerFlowers; i++) {
            currentSeed++;
            const angle = (i / centerFlowers) * Math.PI * 2;
            const radius = this.seededRandom(currentSeed) * 30 * Math.sqrt(this.bouquetSizeMultiplier) * this.spacingMultiplierX;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY - 20 - this.seededRandom(currentSeed + 1) * 40 * Math.sqrt(this.bouquetSizeMultiplier) * this.spacingMultiplierY; // Higher up
            
            if (!this.isPositionOverlapping(x, y, flowerPositions)) {
                flowerPositions.push({ x, y });
                const flower = this.createFlower(currentSeed, x, y);
                // Set z-index based on Y position - flowers higher in bouquet (lower Y) appear in front
                flower.style.zIndex = Math.floor(y);
                flowersContainer.appendChild(flower);
            }
        }
        
        // Add flowers in a natural bouquet shape (heart-like)
        const remainingFlowers = flowerCount - centerFlowers;
        for (let i = 0; i < remainingFlowers; i++) {
            currentSeed++;
            let x, y, attempts = 0;
            
            do {
                // Create a more natural bouquet shape
                const bouquetShape = this.seededRandom(currentSeed);
                if (bouquetShape < 0.4) {
                    // Left side
                    x = centerX - 40 - this.seededRandom(currentSeed + 1) * 60 * Math.sqrt(this.bouquetSizeMultiplier) * this.spacingMultiplierX;
                    y = centerY + this.seededRandom(currentSeed + 2) * 80 * Math.sqrt(this.bouquetSizeMultiplier) * this.spacingMultiplierY - 40;
                } else if (bouquetShape < 0.8) {
                    // Right side
                    x = centerX + 40 + this.seededRandom(currentSeed + 1) * 60 * Math.sqrt(this.bouquetSizeMultiplier) * this.spacingMultiplierX;
                    y = centerY + this.seededRandom(currentSeed + 2) * 80 * Math.sqrt(this.bouquetSizeMultiplier) * this.spacingMultiplierY - 40;
                } else {
                    // Fill gaps
                    x = centerX + (this.seededRandom(currentSeed + 1) - 0.5) * 120 * Math.sqrt(this.bouquetSizeMultiplier) * this.spacingMultiplierX;
                    y = centerY + this.seededRandom(currentSeed + 2) * 100 * Math.sqrt(this.bouquetSizeMultiplier) * this.spacingMultiplierY - 30;
                }
                
                attempts++;
                currentSeed += 3;
            } while (this.isPositionOverlapping(x, y, flowerPositions) && attempts < 50 * this.bouquetSizeMultiplier);
            
            if (attempts < 50 * this.bouquetSizeMultiplier) {
                flowerPositions.push({ x, y });
                const flower = this.createFlower(currentSeed, x, y);
                // Set z-index based on Y position - flowers higher in bouquet (lower Y) appear in front
                flower.style.zIndex = Math.floor(y);
                flowersContainer.appendChild(flower);
            }
        }
        
        this.displayBouquetInfo(name, flowerCount, seed);
    }
    
    isPositionOverlapping(x, y, positions) {
        // Fixed minimum distance to prevent flowers from overlapping
        const minDistance = 30;
        
        return positions.some(pos => {
            const distance = Math.sqrt((pos.x - x) ** 2 + (pos.y - y) ** 2);
            return distance < minDistance;
        });
    }
    
    createFlower(seed, x, y) {
        const flowerType = this.flowerTypes[Math.floor(this.seededRandom(seed) * this.flowerTypes.length)];
        const colorScheme = flowerType.colors[Math.floor(this.seededRandom(seed + 1) * flowerType.colors.length)];
        const petalCountOptions = flowerType.petalCount;
        const petalCount = petalCountOptions[Math.floor(this.seededRandom(seed + 2) * petalCountOptions.length)];
        const stemHeight = 100 + this.seededRandom(seed + 3) * 40; // 50-90px
        const size = 0.9 + this.seededRandom(seed + 4) * 0.8; // 0.9-1.7 scale
        
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.left = x + 'px';
        flower.style.top = y + 'px';
        flower.style.transform = `translate(-50%, -50%) scale(${size})`;
        
        // Set CSS custom properties for colors
        flower.style.setProperty('--petal-light', colorScheme.light);
        flower.style.setProperty('--petal-dark', colorScheme.dark);
        flower.style.setProperty('--center-light', colorScheme.center);
        flower.style.setProperty('--center-dark', this.darkenColor(colorScheme.center, 0.3));
        
        // Create stem first (will be behind petals due to CSS z-index)
        const stem = document.createElement('div');
        stem.className = 'flower-stem';
        stem.style.height = stemHeight + 'px';
        stem.style.width = (2 + this.seededRandom(seed + 5) * 2) + 'px';
        flower.appendChild(stem);
        
        // Create one leaf
        const leaf = document.createElement('div');
        leaf.className = 'flower-leaf';
        leaf.style.top = '20px';
        leaf.style.left = '-15px';
        leaf.style.width = (12 + this.seededRandom(seed + 6) * 8) + 'px';
        leaf.style.height = (20 + this.seededRandom(seed + 7) * 15) + 'px';
        leaf.style.transform = `translateY(${this.seededRandom(seed + 8) * 10 - 5}px)`;
        flower.appendChild(leaf);
        
        // Create petals third (will be in front due to CSS z-index)
        this.createPetals(flower, flowerType.petalShape, petalCount, seed);
        
        // Create center last (highest z-index)
        const center = document.createElement('div');
        center.className = 'flower-center';
        const centerSize = this.getCenterSize(flowerType.name, petalCount);
        center.style.width = centerSize + 'px';
        center.style.height = centerSize + 'px';
        flower.appendChild(center);
        
        // Add hover animation delay
        const delay = this.seededRandom(seed + 11) * 3;
        flower.style.animationDelay = delay + 's';
        
        return flower;
    }
    
    createPetals(flower, petalShape, petalCount, seed) {
        for (let i = 0; i < petalCount; i++) {
            const petal = document.createElement('div');
            petal.className = 'flower-petal';
            
            const angle = i * (360 / petalCount);
            const petalSize = this.getPetalSize(petalShape, seed + i);
            
            petal.style.width = petalSize.width + 'px';
            petal.style.height = petalSize.height + 'px';
            petal.style.left = '50%';
            petal.style.top = '50%';
            petal.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
            petal.style.borderRadius = this.getPetalBorderRadius(petalShape);
            
            flower.appendChild(petal);
        }
    }
    
    getPetalSize(petalShape, seed) {
        const baseSizes = {
            rose: { width: 25, height: 45 },
            tulip: { width: 30, height: 50 },
            daisy: { width: 20, height: 35 },
            sunflower: { width: 22, height: 40 },
            lily: { width: 35, height: 60 },
            orchid: { width: 28, height: 45 },
            peony: { width: 18, height: 30 },
            iris: { width: 32, height: 55 },
            hydrangea: { width: 15, height: 25 },
            magnolia: { width: 40, height: 70 },
            lavender: { width: 8, height: 15 },
            cherry: { width: 18, height: 30 },
            marigold: { width: 16, height: 28 },
            gerbera: { width: 24, height: 42 },
            poppy: { width: 35, height: 50 },
            cosmos: { width: 26, height: 38 },
            anemone: { width: 22, height: 35 },
            zinnia: { width: 20, height: 32 }
        };
        
        const base = baseSizes[petalShape] || baseSizes.daisy;
        const variation = 0.8 + this.seededRandom(seed) * 0.4;
        
        return {
            width: Math.round(base.width * variation),
            height: Math.round(base.height * variation)
        };
    }
    
    getPetalBorderRadius(petalShape) {
        const borderRadiuses = {
            rose: '50% 50% 50% 50% / 60% 60% 40% 40%',
            tulip: '50% 50% 50% 50% / 80% 80% 20% 20%',
            daisy: '50% 50% 50% 50% / 60% 60% 40% 40%',
            sunflower: '50% 50% 50% 50% / 70% 70% 30% 30%',
            lily: '50% 50% 50% 50% / 40% 40% 60% 60%',
            orchid: '50% 50% 50% 50% / 70% 70% 30% 30%',
            peony: '50% 50% 50% 50% / 65% 65% 35% 35%',
            iris: '50% 50% 50% 50% / 45% 45% 55% 55%',
            hydrangea: '50% 50% 50% 50% / 75% 75% 25% 25%',
            magnolia: '50% 50% 50% 50% / 35% 35% 65% 65%',
            lavender: '50% 50% 50% 50% / 80% 80% 20% 20%',
            cherry: '50% 50% 50% 50% / 70% 70% 30% 30%',
            marigold: '50% 50% 50% 50% / 65% 65% 35% 35%',
            gerbera: '50% 50% 50% 50% / 60% 60% 40% 40%',
            poppy: '50% 50% 50% 50% / 50% 50% 50% 50%',
            cosmos: '50% 50% 50% 50% / 70% 70% 30% 30%',
            anemone: '50% 50% 50% 50% / 75% 75% 25% 25%',
            zinnia: '50% 50% 50% 50% / 60% 60% 40% 40%'
        };
        
        return borderRadiuses[petalShape] || borderRadiuses.daisy;
    }
    
    getCenterSize(flowerName, petalCount) {
        const baseSizes = {
            rose: 8,
            tulip: 10,
            daisy: 12,
            sunflower: 16,
            lily: 8,
            orchid: 6,
            peony: 10,
            iris: 8,
            hydrangea: 14,
            magnolia: 12,
            lavender: 4,
            cherry: 8,
            marigold: 10,
            gerbera: 12,
            poppy: 6,
            cosmos: 10,
            anemone: 8,
            zinnia: 10
        };
        
        return baseSizes[flowerName.toLowerCase()] || 10;
    }
    
    darkenColor(color, amount) {
        const hex = color.replace('#', '');
        const r = Math.max(0, parseInt(hex.substr(0, 2), 16) * (1 - amount));
        const g = Math.max(0, parseInt(hex.substr(2, 2), 16) * (1 - amount));
        const b = Math.max(0, parseInt(hex.substr(4, 2), 16) * (1 - amount));
        
        return `rgb(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)})`;
    }
    
    getCenterColor(petalColor) {
        // Convert hex to RGB for center color calculation
        const hex = petalColor.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        
        // Darken the color for center
        return `rgb(${Math.floor(r * 0.6)}, ${Math.floor(g * 0.6)}, ${Math.floor(b * 0.6)})`;
    }
    
    displayBouquetInfo(name, flowerCount, seed) {
        const infoSection = document.getElementById('infoSection');
        const bouquetInfo = document.getElementById('bouquetInfo');
        
        const today = new Date();
        const dateString = today.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        bouquetInfo.innerHTML = `
            <strong>For the cutest girl ${name} 🌸</strong><br>
            A personalized bouquet just for you, with ${flowerCount} beautiful flowers generated from your name and today's date.<br>
        `;
        
        infoSection.style.display = 'block';
    }
}

// Initialize the flower bouquet generator when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new FlowerBouquetGenerator();
});
