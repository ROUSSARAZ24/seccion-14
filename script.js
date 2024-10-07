document.addEventListener("DOMContentLoaded",function(){
const button = document.getElementById("changeTextButton");
button.addEventListener("click",function(){
const introSection=document.getElementById("intro");
introSection.innerHTML=<P>El texto ha cambiado despues de hacer click en el boton!!</P>;
});
});