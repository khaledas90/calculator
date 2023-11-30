


let inbutScreen = document.querySelector(".inbutScrren");
let alertt = document.querySelector(".alert");
let container = document.querySelector(".container")


function display(num){
    inbutScreen.value += num  
};
function del(){
    inbutScreen.value = inbutScreen.value.slice( 0, -1);
}
function claer(){
    inbutScreen.value = "";
}
function calculat(){
    try{
        inbutScreen.value = eval(inbutScreen.value)
    }
    catch(err){
        alertt.document.style.display = 'block'
        container.document.style.marginTop = '-100px'
    }
}
