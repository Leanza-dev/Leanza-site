const fs = require('fs');
let js = fs.readFileSync('src/scripts/i18n.js', 'utf8');

// Clear any accidental bad lines
js = js.split('\n').filter(line => !line.includes('web.btn.view')).join('\n');

// Inject correctly into pt-BR block
js = js.replace(
    "'web.title.2':          'FRONT-END',",
    "'web.title.1':          'WEB &',\n    'web.title.2':          'FRONT-END',\n    'web.btn.view':         'VISUALIZAR SITE',"
);

// Inject correctly into en-US block
js = js.replace(
    "'web.catavento.name':   'CATAVENTO SCHOOL',",
    "'web.btn.view':         'VIEW SITE',\n    'web.catavento.name':   'CATAVENTO SCHOOL',"
);

fs.writeFileSync('src/scripts/i18n.js', js);
console.log('Fixed i18n keys');
