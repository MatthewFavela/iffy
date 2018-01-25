var ui = document.getElementById("input");
var button = document.getElementById("btn");
var solution = document.getElementById("solution");
console.log(typeof ui);
button.addEventListener("click", function(){

    if(ui.value === "3"){
        solution.innerHTML = "Triangle";
    }else if(ui.value === "4"){
        solution.innerHTML = "Square";
    }else if(ui.value === "5"){
        solution.innerHTML = "Pentagon";
    }else if(ui.value === "6"){
        solution.innerHTML = "Hexagon";
    }else if(ui.value === "7"){
        solution.innerHTML = "Heptagon";
    }else if(ui.value === "8"){
        solution.innerHTML = "Octogon";
    }else if(ui.value === "9"){
        solution.innerHTML = "Nonagon";
    }else if(ui.value === "10"){
        solution.innerHTML = "Decagon";
    }else{
        solution.innerHTML = "Try Again";
    }
});  