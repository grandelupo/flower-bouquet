class FlowerBouquetGenerator {
    constructor() {
        // 🌸 BOUQUET SIZE CONTROL - Increase this number to create a meadow!
        this.bouquetSizeMultiplier = 10; // Try 3 for a meadow, 5+ for whole screen coverage
        
        // 🌿 SPACING CONTROL - Adjust flower spacing independently
        this.spacingMultiplierX = 3; // Horizontal spacing (higher = more spread out)
        this.spacingMultiplierY = 1; // Vertical spacing (higher = more spread out)
        
        // Canvas setup
        this.canvas = null;
        this.ctx = null;
        this.flowers = [];
        this.animationId = null;
        
        // Interaction setup
        this.mouseX = 0;
        this.mouseY = 0;
        this.touchX = 0;
        this.touchY = 0;
        this.isInteracting = false;
        
        this.flowerTypes = [
            { 
                name: 'Rose', 
                colors: [
                    { light: '#ffc0e8', dark: '#e91e63', center: '#ad1457' },
                    { light: '#ffb3e6', dark: '#c2185b', center: '#880e4f' },
                    { light: '#ffcccb', dark: '#f44336', center: '#d32f2f' },
                    { light: '#ffe0b3', dark: '#ff9800', center: '#f57c00' },
                    { light: '#f8bbd9', dark: '#e91e63', center: '#ad1457' }
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
                    { light: '#ffffff', dark: '#f5f5f5', center: '#ffeb3b' },
                    { light: '#fff9c4', dark: '#fff176', center: '#ffc107' },
                    { light: '#f3e5f5', dark: '#e1bee7', center: '#ba68c8' },
                    { light: '#e8f5e8', dark: '#c8e6c9', center: '#4caf50' }
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
        this.setupCanvas();
        this.setupEventListeners();
        this.handleURLParameters();
        this.startAnimation();
    }
    
    setupCanvas() {
        this.canvas = document.getElementById('flowerCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.ctx.imageSmoothingEnabled = true;
        this.ctx.imageSmoothingQuality = 'high';
        
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        
        // Mouse interaction
        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouseX = e.clientX - rect.left;
            this.mouseY = e.clientY - rect.top;
            this.isInteracting = true;
        });
        
        this.canvas.addEventListener('mouseleave', () => {
            this.isInteracting = false;
        });
        
        // Touch interaction
        this.canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const rect = this.canvas.getBoundingClientRect();
            const touch = e.touches[0];
            this.touchX = touch.clientX - rect.left;
            this.touchY = touch.clientY - rect.top;
            this.isInteracting = true;
        });
        
        this.canvas.addEventListener('touchend', () => {
            this.isInteracting = false;
        });
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    startAnimation() {
        const animate = () => {
            this.render();
            this.animationId = requestAnimationFrame(animate);
        };
        animate();
    }
    
    render() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw all flowers
        this.flowers.forEach(flower => {
            this.drawFlower(flower);
        });
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
        this.flowers = [];
    }
    
    createBouquet(seed, name) {
        // Calculate base flower count based on screen size
        const screenArea = this.canvas.width * this.canvas.height;
        const baseArea = 1920 * 1080; // Reference screen size (Full HD)
        const areaMultiplier = Math.sqrt(screenArea / baseArea); // Square root for more reasonable scaling
        
        const baseFlowerCount = Math.floor((12 + this.seededRandom(seed) * 16) * areaMultiplier);
        const flowerCount = Math.floor(baseFlowerCount * this.bouquetSizeMultiplier);
        
        let currentSeed = seed;
        const flowerPositions = [];
        
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        const minDistance = 40 / Math.sqrt(this.bouquetSizeMultiplier); // Adjust for bouquet size
        
        // Create chaotic meadow with multiple clusters and random scatter
        for (let i = 0; i < flowerCount; i++) {
            currentSeed++;
            let x, y, attempts = 0;
            
            do {
                const pattern = this.seededRandom(currentSeed);
                
                if (pattern < 0.25) {
                    // Cluster around center
                    const angle = this.seededRandom(currentSeed + 1) * Math.PI * 2;
                    const radius = this.seededRandom(currentSeed + 2) * 120 * Math.sqrt(this.bouquetSizeMultiplier) * this.spacingMultiplierX;
                    x = centerX + Math.cos(angle) * radius;
                    y = centerY + Math.sin(angle) * radius * 0.6; // Slightly flattened
                } else if (pattern < 0.45) {
                    // Random clusters scattered around
                    const clusterX = this.seededRandom(currentSeed + 1) * this.canvas.width;
                    const clusterY = this.seededRandom(currentSeed + 2) * this.canvas.height;
                    const clusterRadius = 60 * Math.sqrt(this.bouquetSizeMultiplier) * this.spacingMultiplierX;
                    
                    const angle = this.seededRandom(currentSeed + 3) * Math.PI * 2;
                    const radius = this.seededRandom(currentSeed + 4) * clusterRadius;
                    x = clusterX + Math.cos(angle) * radius;
                    y = clusterY + Math.sin(angle) * radius;
                } else if (pattern < 0.7) {
                    // Chaotic random scatter across screen
                    x = this.seededRandom(currentSeed + 1) * this.canvas.width;
                    y = this.seededRandom(currentSeed + 2) * this.canvas.height;
                } else {
                    // Organic flow patterns (like wind-blown seeds)
                    const flowPattern = this.seededRandom(currentSeed + 1);
                    if (flowPattern < 0.33) {
                        // Curved flow from top-left to bottom-right
                        const t = this.seededRandom(currentSeed + 2);
                        x = t * this.canvas.width + Math.sin(t * Math.PI * 3) * 100 * this.spacingMultiplierX;
                        y = t * this.canvas.height + Math.cos(t * Math.PI * 2) * 80 * this.spacingMultiplierY;
                    } else if (flowPattern < 0.66) {
                        // Curved flow from top-right to bottom-left
                        const t = this.seededRandom(currentSeed + 2);
                        x = this.canvas.width - t * this.canvas.width + Math.sin(t * Math.PI * 2) * 120 * this.spacingMultiplierX;
                        y = t * this.canvas.height + Math.cos(t * Math.PI * 3) * 90 * this.spacingMultiplierY;
                    } else {
                        // Spiral pattern
                        const t = this.seededRandom(currentSeed + 2) * Math.PI * 4;
                        const spiralRadius = t * 30 * Math.sqrt(this.bouquetSizeMultiplier) * this.spacingMultiplierX;
                        x = centerX + Math.cos(t) * spiralRadius;
                        y = centerY + Math.sin(t) * spiralRadius * 0.8;
                    }
                }
                
                // Add micro-randomness to break any remaining patterns
                x += (this.seededRandom(currentSeed + 5) - 0.5) * 40;
                y += (this.seededRandom(currentSeed + 6) - 0.5) * 40;
                
                // Keep within bounds
                x = Math.max(50, Math.min(this.canvas.width - 50, x));
                y = Math.max(100, Math.min(this.canvas.height - 50, y));
                
                attempts++;
                currentSeed += 7;
            } while (this.isPositionOverlapping(x, y, flowerPositions) && attempts < 30 * this.bouquetSizeMultiplier);
            
            if (attempts < 30 * this.bouquetSizeMultiplier) {
                flowerPositions.push({ x, y });
                const flower = this.createFlowerData(currentSeed, x, y);
                this.flowers.push(flower);
            }
        }
        
        // Sort flowers by Y position for proper layering
        this.flowers.sort((a, b) => a.y - b.y);
        
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
    
    createFlowerData(seed, x, y) {
        const flowerType = this.flowerTypes[Math.floor(this.seededRandom(seed) * this.flowerTypes.length)];
        const colorScheme = flowerType.colors[Math.floor(this.seededRandom(seed + 1) * flowerType.colors.length)];
        const petalCountOptions = flowerType.petalCount;
        const petalCount = petalCountOptions[Math.floor(this.seededRandom(seed + 2) * petalCountOptions.length)];
        const stemHeight = 100 + this.seededRandom(seed + 3) * 40;
        const size = 0.9 + this.seededRandom(seed + 4) * 0.8;
        
        return {
            x: x,
            y: y,
            type: flowerType.name,
            petalShape: flowerType.petalShape,
            petalCount: petalCount,
            colorScheme: colorScheme,
            stemHeight: stemHeight,
            size: size,
            leafWidth: 12 + this.seededRandom(seed + 6) * 8,
            leafHeight: 20 + this.seededRandom(seed + 7) * 15,
            leafOffset: this.seededRandom(seed + 8) * 10 - 5,
            swayPhase: this.seededRandom(seed + 11) * Math.PI * 2,
            swaySpeed: 0.5 + this.seededRandom(seed + 12) * 1.5,
            interactionScale: 1
        };
    }
    
    drawFlower(flower) {
        const time = Date.now() * 0.001;
        let sway = Math.sin(time * flower.swaySpeed + flower.swayPhase) * 0.1;
        
        // Add interaction effects
        if (this.isInteracting) {
            const interactX = this.mouseX || this.touchX;
            const interactY = this.mouseY || this.touchY;
            
            const dx = interactX - flower.x;
            const dy = interactY - flower.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
                const intensity = (150 - distance) / 150;
                const angle = Math.atan2(dy, dx);
                sway += Math.sin(angle) * intensity * 0.3;
                
                // Add scale effect
                flower.interactionScale = 1 + intensity * 0.2;
            } else {
                flower.interactionScale = 1;
            }
        } else {
            flower.interactionScale = 1;
        }
        
        this.ctx.save();
        // Translate to the bottom of the stem (where the rotation should happen)
        this.ctx.translate(flower.x, flower.y + flower.stemHeight * flower.size);
        this.ctx.rotate(sway);
        this.ctx.scale(flower.size * flower.interactionScale, flower.size * flower.interactionScale);
        // Translate back up to draw the flower at the correct position
        this.ctx.translate(0, -flower.stemHeight);
        
        // Draw stem
        this.drawStem(flower);
        
        // Draw leaf
        this.drawLeaf(flower);
        
        // Draw petals
        this.drawPetals(flower);
        
        // Draw center
        this.drawCenter(flower);
        
        this.ctx.restore();
    }
    
    drawStem(flower) {
        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(0, flower.stemHeight);
        this.ctx.strokeStyle = '#2d5016';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
    }
    
    drawLeaf(flower) {
        this.ctx.save();
        this.ctx.translate(-15, 20 + flower.leafOffset);
        this.ctx.fillStyle = '#4a7c59';
        this.ctx.beginPath();
        this.ctx.ellipse(0, 0, flower.leafWidth / 2, flower.leafHeight / 2, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();
    }
    
    drawPetals(flower) {
        for (let i = 0; i < flower.petalCount; i++) {
            const angle = (i / flower.petalCount) * Math.PI * 2;
            this.ctx.save();
            this.ctx.rotate(angle);
            
            // Create gradient for petal
            const gradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, 20);
            gradient.addColorStop(0, flower.colorScheme.light);
            gradient.addColorStop(1, flower.colorScheme.dark);
            
            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            
            // Draw petal shape based on flower type
            this.drawPetalShape(flower.petalShape);
            
            this.ctx.fill();
            this.ctx.restore();
        }
    }
    
    drawPetalShape(shape) {
        const petalSize = this.getPetalSize(shape, 0);
        
        switch(shape) {
            case 'rose':
                this.ctx.ellipse(0, -15, petalSize.width / 2, petalSize.height / 2, 0, 0, Math.PI * 2);
                break;
            case 'tulip':
                this.ctx.ellipse(0, -20, petalSize.width / 2, petalSize.height / 2, 0, 0, Math.PI * 2);
                break;
            case 'daisy':
                this.ctx.ellipse(0, -12, petalSize.width / 2, petalSize.height / 2, 0, 0, Math.PI * 2);
                break;
            case 'sunflower':
                this.ctx.ellipse(0, -15, petalSize.width / 2, petalSize.height / 2, 0, 0, Math.PI * 2);
                break;
            case 'lily':
                this.ctx.ellipse(0, -25, petalSize.width / 2, petalSize.height / 2, 0, 0, Math.PI * 2);
                break;
            default:
                this.ctx.ellipse(0, -15, petalSize.width / 2, petalSize.height / 2, 0, 0, Math.PI * 2);
        }
    }
    
    drawCenter(flower) {
        const centerSize = this.getCenterSize(flower.type, flower.petalCount);
        
        const gradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, centerSize / 2);
        gradient.addColorStop(0, flower.colorScheme.center);
        gradient.addColorStop(1, this.darkenColor(flower.colorScheme.center, 0.3));
        
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, centerSize / 2, 0, Math.PI * 2);
        this.ctx.fill();
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
