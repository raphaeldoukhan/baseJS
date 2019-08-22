userInput = (prompt("Hello je suis ton bot, y a quoi??")) ;
if(userInput.substr(userInput.length - 1) === "?"){
	console.log("Ouais Ouais...");
} else if(userInput === userInput.toUpperCase() && userInput !== "") {
	console.log("Pwa, calme-toi...");
} else if(userInput.includes("Fortnite") || userInput.includes("fortnite")) {
	console.log("on s' fait une partie soum-soum ?");
} else if(userInput === "") {
	console.log("t'es en PLS ?");
} else {
	console.log("balek.");
};