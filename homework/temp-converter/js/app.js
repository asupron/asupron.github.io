var $f = document.getElementById("f");
var $c = document.getElementById("c");

function FC_CF() {

  var temp;  
  var $targ; 

  if (this.id === "c") { 
    $targ = $f;          
    temp = (this.value * 9 / 5) + 32; 
  } else {
    $targ = $c;
    temp = (this.value - 32) * 5 / 9;  
  }

  $targ.value = !isNaN(temp) ? parseFloat(temp.toFixed(1))  : "Err";

}

$f.oninput = FC_CF; 
$c.oninput = FC_CF;