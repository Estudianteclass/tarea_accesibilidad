let movingText = document.getElementById("moving");

movingText.addEventListener('mouseover', (e) => {


    movingText.stop();

});

movingText.addEventListener('mouseout', (e) => {


    movingText.start();

});

let fuente=document.querySelector('select');


let formulario=document.getElementById("formulario")
let imagen=document.getElementById("foto1")
let subTexto=document.getElementById("subtexto")
let introduccion=document.getElementById("introduccion")
fuente.addEventListener('click',(e)=>{

if (fuente.value=='grande') {
    document.body.style.fontSize="20px";
    formulario.setAttribute("class","flex flex-col w-1/2 h-full p-6 justify-self-center border justify-center rounded-md px-4 space-y-3 border-pink-700 bg-pink-100 md:h-full w-72")
    imagen.setAttribute("class","w-64 w-64 rounded-md")
   subTexto.setAttribute("class","text-center text-xl")
   introduccion.setAttribute("class","text-3xl text-center py-1")
}else{
    document.body.style.fontSize="";
    formulario.setAttribute("class","flex flex-col w-1/2 h-full p-6 justify-self-center border justify-center rounded-md px-4 space-y-3 border-pink-700 bg-pink-100 md:h-full w-72")
    imagen.setAttribute("class","w-64  h-64 rounded-md")
    subTexto.setAttribute("class","text-center text-xs")
    introduccion.setAttribute("class","text-2xl text-center py-2")
}

})