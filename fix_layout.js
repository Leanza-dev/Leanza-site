const fs = require('fs');
let css = fs.readFileSync('src/styles/layout.css', 'utf8');

// Remove old mobile nav rule if it exists
css = css.replace('#persistent-hud { flex-wrap: wrap; padding: 1rem 5vw; }\r\n    #persistent-hud .desktop-nav { order: 3; width: 100%; margin-top: 1rem; justify-content: center !important; flex-wrap: wrap; gap: 10px !important; }', '');
css = css.replace('#persistent-hud { flex-wrap: wrap; padding: 1rem 5vw; }\n    #persistent-hud .desktop-nav { order: 3; width: 100%; margin-top: 1rem; justify-content: center !important; flex-wrap: wrap; gap: 10px !important; }', '');

// Arsenal padding fix on mobile
css = css.replace(
    '.horizontal-scroll-container { padding-top: 2rem; padding-bottom: 3rem; }',
    '.horizontal-scroll-container { padding-top: 3vh; padding-bottom: 3rem; }'
);

const mobileMenuCss = `
@media (max-width: 768px) {
    #persistent-hud {
        padding: 1.5rem 5vw;
        align-items: center;
        flex-wrap: nowrap;
    }
    #mobile-menu-btn {
        display: block !important;
        order: 3;
    }
    #nav-content-wrapper {
        position: fixed;
        inset: 0;
        background: rgba(10, 10, 10, 0.85);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        flex-direction: column;
        justify-content: center !important;
        align-items: center;
        z-index: 100000;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.4s ease;
        padding: 2rem;
    }
    #nav-content-wrapper.active {
        opacity: 1;
        pointer-events: all;
    }
    #nav-content-wrapper .desktop-nav {
        flex-direction: column;
        gap: 2rem !important;
        margin-bottom: 3rem;
    }
    #nav-content-wrapper .nav-link {
        font-size: 1.2rem !important;
    }
    #nav-content-wrapper .nav-separator {
        display: none;
    }
    #nav-content-wrapper .nav-socials {
        flex-direction: column;
        gap: 1.5rem !important;
    }
    #nav-content-wrapper .nav-socials #lang-toggle-btn {
        position: absolute;
        top: 1.5rem;
        right: 5vw;
    }
    
    /* Footer Contacts fix */
    .footer-info {
        flex-direction: column;
        gap: 1.5rem;
    }
    .footer-info span {
        display: none !important;
    }
    #massive-text {
        font-size: clamp(3rem, 15vw, 6rem) !important;
        line-height: 1.1;
    }
}
`;

fs.writeFileSync('src/styles/layout.css', css + mobileMenuCss);
console.log('Fixed mobile css');
