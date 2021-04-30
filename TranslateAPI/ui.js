function UI(){
    this.outputImage = document.getElementById("outputImage");
    this.outputLanguage = document.getElementById("outputLanguage");
    this.outputWord = document.getElementById("outputWord");

    this.languageList = document.getElementById("language");

}

UI.prototype.changeUI = function(){

    this.outputImage.src = `images/${this.languageList.value}.png`;

    //console.log(this.languageList.options);
    //console.log(this.languageList.selectedIndex);
    //console.log(this.languageList.options[this.languageList.selectedIndex].text);

    this.outputLanguage.innerHTML = this.languageList.options[this.languageList.selectedIndex].text;
}

UI.prototype.displayTranslate = function(word){

    this.outputWord.innerHTML = word;
}