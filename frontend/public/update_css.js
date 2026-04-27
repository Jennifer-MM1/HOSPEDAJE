const fs = require('fs');
let html = fs.readFileSync('hospedaje.html', 'utf8');

const startIndex = html.indexOf('/* Page Header */');
const endIndex = html.indexOf('/* Search and Filters */');

if (startIndex !== -1 && endIndex !== -1) {
    const replacement = `/* Page Header */
        .page-header {
            margin-top: 80px;
            background: url('/img_jalpan/rio_jalpan.jpg') center/cover no-repeat fixed;
            padding: 6rem 2rem 8rem;
            text-align: center;
            color: white;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 40vh;
            border-radius: 0 0 30px 30px;
        }

        .page-header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%);
            z-index: 1;
        }

        .page-header-content {
            position: relative;
            z-index: 2;
            width: 100%;
            max-width: 800px;
        }

        .page-header h1 {
            font-size: clamp(2.5rem, 5vw, 4rem);
            margin-bottom: 1rem;
            text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.4);
            font-weight: 700;
        }

        .page-header p {
            font-size: clamp(1.1rem, 2vw, 1.4rem);
            opacity: 0.95;
            max-width: 700px;
            margin: 0 auto;
            text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.4);
            line-height: 1.6;
            font-weight: 300;
        }

        `;

    html = html.substring(0, startIndex) + replacement + html.substring(endIndex);
    fs.writeFileSync('hospedaje.html', html, 'utf8');
    console.log('Success: CSS replaced by substring.');
} else {
    console.log('Error: Could not find markers.');
}
