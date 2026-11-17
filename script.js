const products = [
  {name:"Camiseta STEELWAVE", variant:"AZUL CLARO", image:"assets/camiseta-azul.png"},
  {name:"Sudadera STEELWAVE", variant:"CON CAPUCHA · AZUL", image:"assets/sudadera-azul.jpg"},
  {name:"Sudadera STEELWAVE", variant:"CON CAPUCHA · NEGRA", image:"assets/sudadera-negra.jpg"},
  {name:"Camiseta STEELWAVE", variant:"NEGRA", image:"assets/camiseta-negra.jpg"}
];
function showProduct(index){
  const p=products[index];
  document.getElementById("detail-name").textContent=p.name;
  document.getElementById("detail-variant").textContent=p.variant;
  const image=document.getElementById("detail-img");
  image.src=p.image; image.alt=p.name+" "+p.variant;
  document.getElementById("shop-view").hidden=true;
  document.getElementById("product-view").hidden=false;
  window.scrollTo({top:0,behavior:"smooth"});
}
function showShop(){
  document.getElementById("product-view").hidden=true;
  document.getElementById("shop-view").hidden=false;
  window.scrollTo({top:0,behavior:"smooth"});
}
