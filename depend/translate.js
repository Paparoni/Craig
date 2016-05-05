// translate.js
function translate(language, input){
  this.input = input
  this.language = language
  if(language.toLowerCase() == "spanish"){
    language = "es";
    Peanut.loadJSON("https://translate.yandex.net/api/v1.5/tr.json/detect?key=trnsl.1.1.20160503T130721Z.febfceae36b8944c.5671ad1d6b9648cadc9815344695c9448a29c665&text=" + encodeURIComponent(language), function(response) {
      var x = JSON.parse(response);
      return x.text;
      
    })
  } else if(language.toLowerCase() == "french"){
    language = "fr";
    Peanut.loadJSON("https://translate.yandex.net/api/v1.5/tr.json/detect?key=trnsl.1.1.20160503T130721Z.febfceae36b8944c.5671ad1d6b9648cadc9815344695c9448a29c665&text=" + encodeURIComponent(language), function(response) {
      var x = JSON.parse(response);
      return x.text;
      
    });
  } else {
    return "Invalid Language";
  }
  
  
}
