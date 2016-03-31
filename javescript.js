document.getElementById('clickme').onclick = tellFortune;

// 2.
function tellFortune () {
	var favNum = document.getElementById('favNum').value;
	var animal = document.getElementById('animal').value;
	var noun =  document.getElementById('noun').value;
	var bodyPart = document.getElementById('bodyPart').value;

	var ouputStr = favNum + " " + animal + "s will bring you a " + noun + " to place on your " + bodyPart + "."

	document.getElementById('output').innerHTML = ouputStr
}