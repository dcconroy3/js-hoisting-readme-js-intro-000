function callMe() {
    var lyric = "maybe";
  return lyric;
}


function crazy() {
  thisIsCrazy();
  var thisIsCrazy = function (){
    console.log("hey!!!")
  }
}

function sayMyName() {
  // fix the code in here:
  var name = "Cricky";

  sayMy();

  function sayMy() {
    console.log(name);
    var name = "Kristin";
  }
}
