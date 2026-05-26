const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.split('<span>VISUALIZAR SITE</span>').join('<span data-i18n="web.btn.view">VISUALIZAR SITE</span>');
fs.writeFileSync('index.html', html);
console.log('Fixed buttons');
