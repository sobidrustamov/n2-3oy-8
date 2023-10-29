let matn = prompt("Matn kiriting");
let matn2 = "";

for(let i = matn.length - 1; i >= 0; i--){
matn2 += matn[i]; 
}
if(matn === matn2){
  console.log("Teskari matn: " + matn2 + " ", true);
}else{
  console.log("Teskari matn: " + matn2, false);
}