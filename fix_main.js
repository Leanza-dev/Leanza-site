const fs = require('fs');
let main = fs.readFileSync('src/scripts/main.js', 'utf8');

// Fix 1: Colors
main = main.replace(
    /const colors = \[\s*'(.*?)',\s*\/\/\s*Light Purple\s*'(.*?)',\s*\/\/\s*Light Cyan\s*'(.*?)',\s*\/\/\s*Grayish\s*'(.*?)',\s*\/\/\s*Soft Emerald\s*'(.*?)'\s*\/\/\s*Very Light Purple\s*\];/g,
    `const colors = [
            'rgba(124, 58, 237, 0.03)',  // Darker
            'rgba(6, 182, 212, 0.03)',   // Darker
            'rgba(16, 185, 129, 0.02)'   // Darker
        ];`
);

// Fix 2: Architecture timing
main = main.replace(
    'start: "top 40%",\n                    end: "bottom 80%",',
    'start: "top 70%",\n                    end: "center 50%",'
);
main = main.replace(
    'start: "top 40%",\r\n                    end: "bottom 80%",',
    'start: "top 70%",\n                    end: "center 50%",'
);

// Fix 3: Timeline timing
main = main.replace(
    'start: "top 60%",\n                end: "bottom 60%",',
    'start: "top 70%",\n                end: "bottom 80%",'
);
main = main.replace(
    'start: "top 60%",\r\n                end: "bottom 60%",',
    'start: "top 70%",\n                end: "bottom 80%",'
);

fs.writeFileSync('src/scripts/main.js', main);
console.log('Fixed main.js successfully');
