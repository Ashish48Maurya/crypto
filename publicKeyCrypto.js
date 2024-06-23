const { Keypair } = require("@solana/web3.js");
const nacl = require("tweetnacl");
const { decodeUTF8 } = require("tweetnacl-util");
 
const keypair = Keypair.generate();
const keypair1 = Keypair.generate();
console.log("KeyPair: ",keypair);
 
const message = "Message from authorized User";
const messageBytes = decodeUTF8(message);
 
const signature = nacl.sign.detached(messageBytes, keypair.secretKey); //sign the message, (special combination by combining message and private key)
// console.log(signature);

const result = nacl.sign.detached.verify( //User share message, corresponding signature along with public key so that other can verify that message is signed by(belongs to) this user only
  messageBytes,
  signature,
//   keypair.publicKey.toBytes(),
  keypair1.publicKey.toBytes(),
);
 
console.log(result);