console.log('Hey Young Beautiful Day!')

 
   
let subMenu = document.getElementById("subMenu");
function togglemenu(){
    subMenu.classList.toggle("open-menu");
}

let counter = 1;
setInterval(function(){
    document.getElementById('radio'+ counter).checked = true;
    counter++;
    if (counter > 8){
        counter =1;
    }
}, 100000);



export{togglemenu}