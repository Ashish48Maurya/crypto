const sss = require('shamirs-secret-sharing')

const secret = Buffer.from('Secret key') //enter the secret key you wish to share
const shares = sss.split(secret, { shares: 4, threshold: 3 }) //shares : no. of partition of secret key you want     ,    threshold: no. of partition of secret key must require to form a secret key
// const smallerShares = shares.slice(0, 2); //if no. of partition taken for getting the secret key by combining them, is less than threshold than you will not get the secret key
const smallerShares = shares.slice(0, 3);
const recovered = sss.combine(smallerShares)
console.log(shares.map(x => x.toString('hex')));
console.log(recovered.toString()) 