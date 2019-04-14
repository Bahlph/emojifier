document.addEventListener("mousedown",
    function emojifierFunction() {
  for (i=0; i < (document.getElementsByClassName("markup-2BOw-j")).length; i++) {
    var mainDiv = document.getElementsByClassName("markup-2BOw-j")[i];
  twemoji.parse(mainDiv);
  console.log( (document.getElementsByClassName("markup-2BOw-j")).length );
  }
});
