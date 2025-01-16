let movingText = document.getElementById("moving");

movingText.addEventListener('mouseover', (e) => {


    movingText.stop();

});

movingText.addEventListener('mouseout', (e) => {


    movingText.start();

});

let fuente=document.querySelector('select');
console.log(fuente.value)

fuente.addEventListener('click',(e)=>{

if (fuente.value=='grande') {
    document.body.style.fontSize="20px";
}else{
    document.body.style.fontSize="";
}

})