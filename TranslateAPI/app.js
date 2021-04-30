//Prototype , Ajax , Callback
const form = document.getElementById("translate-form");
const selectList = document.getElementById("language");
const button = document.getElementsByClassName("btn col s8");

eventListeners();

function eventListeners(){
    form.addEventListener("submit", translateWord);
    selectList.onchange = function(){
        //arayuz islemleri
        ui.changeUI();
    }
}


const ui = new UI();
const translate = new Translate(document.getElementById("word").value, selectList.value);


function translateWord(e){
    translate.changeParameter(document.getElementById("word").value, selectList.value); 
    translate.translateWord(function(err,response){
        if(err){
            //hata
            console.log(err);
        }else{
            ui.displayTranslate(response);
        }
    });
    e.preventDefault();
}