// translate.js
function translate(language, input) {
    this.input = input
    this.language = language
    if (language.toLowerCase() == "spanish") {
        language = "es";
        Peanut.loadJSON("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160503T130721Z.febfceae36b8944c.5671ad1d6b9648cadc9815344695c9448a29c665&lang=en-" + encodeURIComponent(language) + "&text=" + encodeURIComponent(input), function(response) {
            return JSON.parse(response).text
        });
    } else if (language.toLowerCase() == "french") {
        language = "fr";
        Peanut.loadJSON("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160503T130721Z.febfceae36b8944c.5671ad1d6b9648cadc9815344695c9448a29c665&lang=en-" + encodeURIComponent(language) + "&text=" + encodeURIComponent(input), function(response) {
            return JSON.parse(response).text
        });
    } else {
        return "Invalid Language";
    }


}
