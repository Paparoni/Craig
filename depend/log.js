/*

Save chat logs and download them as txt

*/

var log_array = [];
function addTolog(bot_message, user_message){
  this.bot_message = bot_message;
  this.user_message = user_message;
  log_array.push("("+Peanut.time()+") Craig: "+bot_message+"\r\n");
  log_array.push("("+Peanut.time()+") You: "+user_message+"\r\n");
}
function saveLog(){
        var blob_save = log_array.toString().split(',').join(' ');
        var blob = new Blob([blob_save], {
            type: "text/plain;charset=utf-8"
        });
        saveAs(blob, System.date.month+"-"+System.date.day+"-"+System.date.year+"log.txt");
}
