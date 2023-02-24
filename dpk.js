const crypto = require("crypto");
const MAX_PARTITION_KEY_LENGTH = 256;
const HASH_ALGORITHM = "sha3-512";

exports.deterministicPartitionKey = (event) => {
  let candidate;

  if (event && event.partitionKey) {
      candidate = event.partitionKey;
   } else {
      const data =(Buffer.isBuffer(event) || typeof event === "string") ? event : JSON.stringify(event);
      candidate = crypto.createHash(HASH_ALGORITHM).update(data).digest("hex");
   }
  
   if (typeof candidate !== "string") {
     candidate = JSON.stringify(candidate);
   }
  
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash(HASH_ALGORITHM).update(candidate).digest("hex");
  }
  return candidate ||"0";
};
