const generator = require('generate-password');

const password = generator.generate({
    length: 10,
    numbers: true,
    uppercase: true,
    lowercase: true,
    symbols: true,
});

console.log(`Generated password: ${password}`);
