function callMe() {
    var lyric = "maybe";
  return lyric;
}

function crazy() {
  var thisIsCrazy = function (){
    console.log("hey!!!")
  }
  thisIsCrazy()
}

function sayMyName() {

  var name = "Cricky";

  function sayMy() {
    console.log(name);
    var name = "Kristin";
  }
  sayMy();
}
