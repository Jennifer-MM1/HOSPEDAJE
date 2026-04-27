const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const startIndex = html.indexOf('.hero-overlay {');
const endIndex = html.indexOf('.hero-content {');

if (startIndex !== -1 && endIndex !== -1) {
    const replacement = `.hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.2); /* Oscurecimiento ligero neutro */
            z-index: 2;
        }

        `;

    html = html.substring(0, startIndex) + replacement + html.substring(endIndex);
    fs.writeFileSync('index.html', html, 'utf8');
    console.log('Success: overlay replaced.');
} else {
    console.log('Error: Could not find markers.');
}
