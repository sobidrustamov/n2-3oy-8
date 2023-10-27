let str = prompt("Matn kiriting: ");
let restr = "";

for (let i = 1; i <= str.length; i++) {
  restr += str[str.length - i];
}
console.log(restr);
