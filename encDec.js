const crypto = require('crypto')
const algorithm = "aes-256-cbc"
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

console.log("KEY: ",key);
console.log("iv: ",iv);

function encrypt(plainText, key, iv) {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(plainText, 'utf8', 'binary');
    // let encrypted = cipher.update(plainText, 'utf8', 'hex');
    encrypted += cipher.final('binary');
    // encrypted += cipher.final('hex');
    return encrypted;
}

function decrypt(cipheText, key, iv) {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(cipheText, 'binary', 'utf8');
    // let decrypted = decipher.update(cipheText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

console.log("Enc Text: ",encrypt("Ashish Maurya",key,iv));
console.log("Dec Text: ",decrypt(encrypt("Ashish Maurya",key,iv),key,iv));