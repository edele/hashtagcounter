var $anchors = document.getElementsByTagName("a");
var hashtags = [];

for (var i = 0; i < $anchors.length; i++) {
  if ($anchors[i].innerText.indexOf("#")==0) { // filter hashtags
    var duplicate = false;
    for (var j = 0; j < hashtags.length; j++) { // filter duplicates
      if ($anchors[i].innerText==hashtags[j])
        duplicate = true;
    }
    if (!duplicate)
      hashtags.push($anchors[i].innerText);
  }
}

var output = "";
var delimiter = "\n";
var groupname = "edelecode";
for (var i = 0; i < hashtags.length; i++) {
  output += hashtags[i] + "@" + groupname + delimiter;
};

console.log(output);