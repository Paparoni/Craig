// translates craig's replies

function translate_fr(input) {
    this.input = input
    var language = "fr";
    Peanut.loadJSON("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160503T130721Z.febfceae36b8944c.5671ad1d6b9648cadc9815344695c9448a29c665&lang=en-" + encodeURIComponent(language) + "&text=" + encodeURIComponent(input), function(response) {
        var voidof = JSON.parse(response).text
        var translated = voidof.toString();
        $('#outputCS').append('<b><font color=\'green\'>Craig:</b></font>' + e_filter(translated) + '<br/>');
    });
}

function translate_es(input) {
    this.input = input
    var language = "es";
    Peanut.loadJSON("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160503T130721Z.febfceae36b8944c.5671ad1d6b9648cadc9815344695c9448a29c665&lang=en-" + encodeURIComponent(language) + "&text=" + encodeURIComponent(input), function(response) {
        var voidof = JSON.parse(response).text
        var translated = voidof.toString();
        $('#outputCS').append('<b><font color=\'green\'>Craig:</b></font>' + e_filter(translated) + '<br/>');
    });

}
