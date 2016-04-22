function e_filter(text) {
  var emoticons = {
    ':-)' : '1f60a.png',
    ':)'  : '1f60a.png',
    ':D'  : '1f604.png',
    ':('  : '1f61f.png'
  }, url = "https://assets-cdn.github.com/images/icons/emoji/unicode/", patterns = [],
     metachars = /[[\]{}()*+?.\\|^$\-,&#\s]/g;

  // build a regex pattern for each defined property
  for (var i in emoticons) {
    if (emoticons.hasOwnProperty(i)){ // escape metacharacters
      patterns.push('('+i.replace(metachars, "\\$&")+')');
    }
  }

  // build the regular expression and replace
  return text.replace(new RegExp(patterns.join('|'),'g'), function (match) {
    return typeof emoticons[match] != 'undefined' ?
           '<img src="'+url+emoticons[match]+'" height=\"20\" width=\"20\"/>' :
           match;
  });
}
