// document.getElementById("change").addEventListener("click", change);

// function change(){
//     const xhr = new XMLHttpRequest();
//     // bu sefer kendi serverimiza degil baska bir servere baglanip 
    
//     xhr.open("GET","https://api.exchangeratesapi.io/latest");

//     //baglanti kuruldu response hazir oldugunda onload fonk calisir

//     xhr.onload = function(){

//         if(this.status === 200){
//             //console.log(this.responseText);
//             const response = JSON.parse(this.responseText);

//             const rate = response.rates.TRY

//             const amount= Number(document.getElementById("amount").value);

//             //console.log(typeof document.getElementById("amount").value);

//             document.getElementById("tl").valur= amount * rate;
//         }
//     }

//     xhr.send();
// }



document.getElementById("change").addEventListener("click", getRate)
function getRate(){

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.exchangeratesapi.io/latest")
    xhr.onload = function(){
        
        if (this.status == 200){
            
            var data = JSON.parse(this.responseText)
            var rate = data.rates.TRY
            var amount = parseInt(document.getElementById("amount").value)
            var result = rate * amount
            document.getElementById("tl").value = result

        }
    }
    xhr.send()
}

