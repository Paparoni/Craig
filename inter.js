var Craig = new RiveScript();

$("#chatModal").on("shown.bs.modal", function() {
    $("#message").focus();
});

var talkToBot = function(message) {
    Craig.loadFile([
        "begin.rive",
        "craig.rive",
        "games.rive"
    ], loading_done, loading_error);


    function loading_done(batch_num) {
        console.log("Batch #" + batch_num + " has finished loading!");


        Craig.sortReplies();


        var reply = Craig.reply("local-user", message);
        $('#outputCS').append('<b><font color=\'blue\'>You:</b></font>' + message + '<br/>');
        toastr.info("Craig is typing...")
        var write_rep = function() {
            $('#outputCS').append('<b><font color=\'green\'>Craig:</b></font>' + reply + '<br/>');
            clearTimeout(wrote_rep);
        }
        var wrote_rep = setTimeout(function() {
            write_rep();
        }, 3500);
    }


    function loading_error(batch_num, error) {
        System.error("Error when loading files: " + error);
    }
}
$(document).ready(function() {
    var $dialogue = $("#outputCS");
   $("#ttc").click(function(){
       $("#chatModal").modal();
    })
    
    $("#userInput").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            talkToBot($('#userInput').val());
            $('#userInput').val("");
        }
    });
})
	
