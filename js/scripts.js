var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
console.log(text);
var dinosaur = "triceraptops";
var dinosaurUpperCased = dinosaur.toUpperCase();
console.log(dinosaurUpperCased);

var text = text.replace("Velociraptor", dinosaurUpperCased);
var halfText = text.length/2;
var numberRound = Math.round(halfText);
console.log(text);
console.log(halfText);
console.log(numberRound);
console.log(text.slice(0,numberRound));



