function Hash(k, v) {
  let total = 0;
  let PRIME = 31;
  for (let i = 0; i < k.length; i++) {
    let char = k[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * PRIME + value) % v;
  }
  return total;
}
console.log(Hash("hello", 9));
console.log(Hash("pink", 13));
console.log(Hash("syan", 13));
