var emoji = function(text, src) {
        this.text = text;
        this.src = src;
    }
    // Create emojis
var emojis = [smile];
var smile = new emoji(":)", "https://assets-cdn.github.com/images/icons/emoji/bowtie.png")
for (var e = 0; e < emojis.length; e++) {
    var ec = function(c_reply) {
        if (Peanut.contains(c_reply, emojis[e].text) == true) {
            reply = reply.replace(/emojis[e].text/g, "<img src=\"" + emojis[e].src + "\">");
        }
    }
}
