import {
  generateKeyPair,
  signBytes,
  verifySignature,
  getUtf8Encoder,
  getBase58Decoder,
} from "@solana/web3.js";

const keys = await generateKeyPair();
const message = getUtf8Encoder().encode("Hello,World!");
console.log("message:", message);
const signedBytes = await signBytes(keys.privateKey, message);
console.log("signedBytes:", signedBytes);

const decoded = getBase58Decoder().decode(signedBytes);
console.log("Signature:", decoded);

const verified = await verifySignature(keys.publicKey, signedBytes, message);
console.log("Verified:", verified);
