
class Request{
   
    constructor(){
        console.log(this)
        this.xhr = new XMLHttpRequest();
    }

    get(url, callback){
        this.xhr.open("GET", url);
        
        this.xhr.onload = function(){

            if(this.status == 200){
                callback(null,this.responseText);
            }else{
                callback("Hata olustu", null);
            }
        }

        
        this.xhr.send();
    }

    post(url, data, callback){

        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-type","application/json")
        this.xhr.onload = function(){
           if(this.status === 201) {
            //sunucu tarafindan istek yerine getirildi, yeni bir kaynak olusturuldu
            callback(null,this.responseText);
           }else{
               callback("Istek gerceklestirilemedi !", null);
           }

        }
        this.xhr.send(JSON.stringify(data));
    }

    put(url, data, callback){

        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type","application/json")
        this.xhr.onload = function(){
           if(this.status === 200) {
            //sunucu tarafindan istek yerine getirildi, yeni bir kaynak olusturuldu
            callback(null,"Veri silme islemi basarili");
           }else{
               callback("Put Request : Hata olustu!", null);
           }

        }
        this.xhr.send(JSON.stringify(data));
    }

    delete(url,callback){

        this.xhr.open("DELETE",url);
        this.xhr.onload = function(){
           if(this.status === 200) {
            //sunucu tarafindan istek yerine getirildi, yeni bir kaynak olusturuldu
            callback(null,this.responseText);
           }else{
               callback("Delete Request : Hata olustu!", null);
           }

        }
        this.xhr.send();
    }



}   

const request = new Request();
// request.get("https://jsonplaceholder.typicode.com/albums", function(err, response){
//     if( err === null){
//         console.log(response)
//     }else{
//         console.log(err)
//     }
// });

// request.post("https://jsonplaceholder.typicode.com/albums", { userId : 2, title : "deneme"}, function(err, response){
//     if(err === null){
//         console.log(response)
//     }else console.log(err);
// })


// request.put("https://jsonplaceholder.typicode.com/albums/2", { userId : 2, title : "ajax ogreniyorum"}, function(err, response){
//     if(err === null){
//         console.log(response)
//     }else console.log(err);
// })

request.delete("https://jsonplaceholder.typicode.com/albums/2",function(err, response){
    if(err === null){
        console.log(response)
    }else console.log(err);
})