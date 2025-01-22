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
fuente.addEventListener('click',(e)=>{

if (fuente.value=='grande') {
    document.body.style.fontSize="20px";
    formulario.setAttribute("class","flex flex-col w-96 h-64 justify-self-center border justify-center rounded-md px-4 space-y-3")
    imagen.setAttribute("class","w-64 w-64 rounded-md")
}else{
    document.body.style.fontSize="";
    formulario.setAttribute("class","flex flex-col w-96 h-52 justify-self-center border justify-center rounded-md px-4 space-y-3")
    imagen.setAttribute("class","w-52 w-52 rounded-md")
}

})