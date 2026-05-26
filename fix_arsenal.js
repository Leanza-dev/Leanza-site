const fs = require('fs');
let css = fs.readFileSync('src/styles/components.css', 'utf8');

const mobileArsenalFix = `
@media (max-width: 768px) {
    .video-frame {
        max-height: 25vh !important;
        border-radius: 8px;
    }
    .project-info h3 {
        font-size: 1.5rem !important; /* from 4xl */
        line-height: 1.1;
    }
    .project-info p {
        font-size: 0.8rem !important;
        line-height: 1.4;
        margin-top: 0.5rem !important;
    }
    .project-info .tech-tag {
        font-size: 0.6rem;
        padding: 4px 8px;
        margin-top: 0.5rem;
    }
    .project-info {
        padding-top: 1rem !important;
        overflow-y: visible !important;
    }
}
`;

css += mobileArsenalFix;
fs.writeFileSync('src/styles/components.css', css);
console.log('Fixed arsenal css');
