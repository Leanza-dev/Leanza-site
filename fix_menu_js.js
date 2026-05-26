const fs = require('fs');
let js = fs.readFileSync('src/scripts/main.js', 'utf8');

const toggleScript = `
// MOBILE MENU LOGIC
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navContentWrapper = document.getElementById('nav-content-wrapper');
    
    if (mobileMenuBtn && navContentWrapper) {
        let isMenuOpen = false;
        
        window.closeMobileMenu = () => {
            if(!isMenuOpen) return;
            isMenuOpen = false;
            navContentWrapper.classList.remove('active');
            if(window.App && window.App.lenis) {
                window.App.lenis.start();
            }
        };

        mobileMenuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                navContentWrapper.classList.add('active');
                if(window.App && window.App.lenis) {
                    window.App.lenis.stop();
                }
            } else {
                window.closeMobileMenu();
            }
        });
    }
});
`;

js += '\n' + toggleScript;
fs.writeFileSync('src/scripts/main.js', js);
console.log('Added JS logic');
