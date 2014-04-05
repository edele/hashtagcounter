// output settings
var delimiter = "\n";
var groupname = "";

var $anchors = document.getElementsByTagName("a");
var hashtags = [];
for (var i = 0; i < $anchors.length; i++) {
  var a = $anchors[i].innerText;
  if (a.indexOf("#")!=0) continue; // filter hashtags
  a = a.substr(0, a.indexOf("@")) // if already has a groupname

  var duplicate = false;
  for (var j = 0; j < hashtags.length; j++) { // filter duplicates
    if (a == hashtags[j])
      duplicate = true;
  }
  if (a.length < 1 || a == " " || duplicate) continue;
    hashtags.push(a);
}

var output = "";
for (var i = 0; i < hashtags.length; i++) {
  output += hashtags[i] + (groupname ? "@" + groupname : "") + delimiter;
};

console.log(output);