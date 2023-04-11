var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");



function getGradient (){
	body.style.background= 
	"linear-gradient(to right, " + color1.value + "," +
	color2.value
	")";

	css.textContent = body.style.background ;
};


function generateRandomNumber(){
	var randomColor1 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	var randomColor2 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	button.style.background= 
	"linear-gradient(to right, " + randomColor1 + "," +
	randomColor2
	")";

	color1.value = randomColor1;
	color2.value = randomColor2;
};

color1.addEventListener("input", getGradient);

color2.addEventListener("input", getGradient);

button.addEventListener("click", function(){
	generateRandomNumber();
	getGradient();
	
});