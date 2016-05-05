var Craig = new RiveScript();
var es_translate = false;
var fr_translate = false;
Craig.unicodePunctuation = new RegExp(/[.,!?;:]/g);
$("#chatModal").on("shown.bs.modal", function() {
    $("#message").focus();
});

Craig.loadFile([
    "craig.file/begin.rive",
    "craig.file/craig.rive",
    "craig.file/brain.rive",
    "craig.file/extra.rive",
    "craig.file/def.rive",
    "craig.file/general.rive",
    "craig.file/extra2.rive",
    "craig.file/jokes.rive",
    "craig.file/learn.rive",
    "craig.file/mp0.rive",
    "craig.file/about.rive",
    "craig.file/inquiry.rive"

], loading_done, loading_error);


function loading_done(batch_num) {
    console.log("Batch #" + batch_num + " has finished loading!");


    Craig.sortReplies();
}

function loading_error(batch_num, error) {
    System.error("Error when loading files: " + error);
}

function sendToBot(message) {
    var reply = Craig.reply("local-user", message);
    if(fr_translate == true){
        $('#outputCS').append('<b><font color=\'blue\'>You:</b></font>' + e_filter(message) + '<br/>');
            var write_rep = function() {
        $('#outputCS').append('<b><font color=\'green\'>Craig:</b></font>' + e_filter(translate("french", reply)) + '<br/>');
        clearTimeout(wrote_rep);
    }
    var wrote_rep = setTimeout(function() {
        write_rep();
    }, 3500);
    } else {
    $('#outputCS').append('<b><font color=\'blue\'>You:</b></font>' + e_filter(message) + '<br/>');
    toastr.info("Craig is typing...")
    var write_rep = function() {
        $('#outputCS').append('<b><font color=\'green\'>Craig:</b></font>' + e_filter(reply) + '<br/>');
        clearTimeout(wrote_rep);
    }
    var wrote_rep = setTimeout(function() {
        write_rep();
    }, 3500);
}
}




$(document).ready(function() {
    var $dialogue = $("#outputCS");
    $("#ttc").click(function() {
        $("#chatModal").modal();
    })

    $("#userInput").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            sendToBot($('#userInput').val());
            $('#userInput').val("");
        }
    });
})
