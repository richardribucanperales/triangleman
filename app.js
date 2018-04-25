console.log("main module loaded")

function fortuneGiver(){	
	var input = document.getElementById("input").value;
	
	var answers = ["yes", "no", "my signs point to yes", "i dont know", " your mother probably knows", "um.... no", "yes, definitely"];
	var random = Math.floor(Math.random()*7)
	var fortune = answers[random]

		//getting the thing//
	var output = fortune
	document.getElementById("output").innerHTML = fortune

		//logging the massoutput//
	var input = document.getElementById("input").value;
	var div = document.createElement("div");
	div.innerHTML = input + " | " + output
	document.getElementById("massoutput").appendChild(div)

	var div1 = document.createElement("div")
  	div1.innerHTML = "----------"
  	document.getElementById("massoutput").appendChild(div1)

}
function rules(){
	var change = document.getElementById("buttontext")
	change.innerHTML = "Here are the rules: <br> 1. Ask a question in your mind or in the box. <br> 2. Press get my answer. <br> 3. Hope for the best"
}
function about(){
	var change1 = document.getElementById("buttontext")
	change1.innerHTML = "I made this website in a day, don't judge."
}