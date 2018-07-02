function addNumber(numA, numB) {
    var sum = numA + numB;
    return sum;
}

var addNumber = addNumber(5,7);

console.log(addNumber); 

function sqaureRT(num){

var a = Math.sqrt(num);
return a;
}

console.log(sqaureRT(484));

//function ppg(miles, mpg){
//
//    var co2 = 20;
//    var gallons = miles / mpg;
//    
//    var total = co2 * gallons;
//    
//    return total;
//}
//
//var pollution = ppg(60,25);
//
//console.log(pollution);

function ppG(){
    var miles = document.getElementById("miles").value;
    var mpg = document.getElementById("mpg").value;
    var co2 = 20;
    var gallon = miles/mpg;
    
    var total = co2 * gallon;
    console.log(gallon);
    document.getElementById("answer").value = total;
}