//your JS code here. If require
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const totalBoxes = 800;
    
    // Function to generate random colors
    const getRandomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    };
    
    // Create 800 boxes
    for (let i = 0; i < totalBoxes; i++) {
        const box = document.createElement('div');
        box.className = 'square';
        
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = getRandomColor();
            
            setTimeout(() => {
                box.style.backgroundColor = `rgb(29, 29, 29)`;
            }, 4000);
        });
        
        container.appendChild(box);
    }
});