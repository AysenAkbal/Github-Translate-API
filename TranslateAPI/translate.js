function Translate(word,language){
    this.apikey = "trnsl.1.1.20200415T184523Z.2a7205d559c8c853.736e4a35de1cb315f83a3be7e6d8ad9e20e0cc93";
    this.word = word;
    this.language = language;

    //xhr obje olusumu

    this.xhr = new XMLHttpRequest();
    
}

Translate.prototype.changeParameter = function(newWord, newLang){
    this.word = newWord;
    this.language = newLang;
}

Translate.prototype.translateWord = function(callback){
    //ajax islemleri

    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    
    this.xhr.open("GET", endpoint);
    
    this.xhr.onload = () => {
        if(this.xhr.status === 200){
            console.log(this);
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            
            callback(null, text);
        }else{
           
            callback("Hatali bir islem var", null);
        }
    }
    this.xhr.send();
};

