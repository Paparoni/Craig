var Craig = new RiveScript();

	$("#chatModal").on("shown.bs.modal", function() {
		$("#message").focus();
	});
	
// Load a list of files all at once (the best alternative to loadDirectory
// for the web!)
var talkToBot = function(message){
Craig.loadFile([
    "begin.rive",
    "craig.rive"
], loading_done, loading_error);

// All file loading operations are asynchronous, so you need handlers
// to catch when they've finished. If you use loadDirectory (or loadFile
// with multiple file names), the success function is called only when ALL
// the files have finished loading.
function loading_done (batch_num) {
    console.log("Batch #" + batch_num + " has finished loading!");

    // Now the replies must be sorted!
    Craig.sortReplies();

    // And now we're free to get a reply from the brain!
    var reply = Craig.reply("local-user", message);
    $('#outputCS').append('<b><font color=\'blue\'>You:</b></font>'+message+'<br/>');
    $('#outputCS').append('<b><font color=\'green\'>Craig:</b></font>'+reply+'<br/>');

}

// It's good to catch errors too!
function loading_error (batch_num, error) {
    console.log("Error when loading files: " + error);
}
}
$(document).ready(function(){
    $("#chatModal").modal();
    $("#userInput").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        talkToBot($('#userInput').val());
        $('#userInput').val("");
        $("outputCS").animate({ scrollTop: $('outputCS')[0].scrollHeight }, 1000);
    }
});
})