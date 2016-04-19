var Craig = new RiveScript();


var talkToBot = function(message){
Craig.loadFile([
    "begin.rive",
    "craig.rive"
], loading_done, loading_error);

function loading_done (batch_num) {
    console.log("Batch #" + batch_num + " has finished loading!");

    Craig.sortReplies();

    var reply = Craig.reply("local-user", message);
    $('#outputCS').append('<b><font color=\'blue\'>You:</b></font>'+message+'<br/>');
    $('#outputCS').append('<b><font color=\'green\'>Craig:</b></font>'+reply+'<br/>');

}

function loading_error (batch_num, error) {
    console.log("Error when loading files: " + error);
}
}
$(document).ready(function(){
    $("#userInput").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        talkToBot($('#userInput').val());
        $('#userInput:text').empty();
    }
});
})
