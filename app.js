console.log("main module loaded")
function fortuneGiver(){
	//making the grabbers//
	var input = document.getElementById("input");
	var output = document.getElementById("output").innerHTML
	var answers = ["yes", "no", "my signs point to yes", "i dont know", " your mother probably knows", "um.... no", "yes, definitely"];
	
	//making the randomizer//
	var random = Math.floor(Math.random()*7)
	var number = random
	input.innerHTML = answers[number]
}