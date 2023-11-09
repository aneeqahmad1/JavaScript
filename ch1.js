var massMark = 75;
var heightMark = 6.2;
var massJohn = 72;
var heightJohn = 6.4;

var markBMI = massMark / (heightMark * heightMark);
console.log('BMI of Mark is' + ' ' +markBMI);

var johnBMI = massJohn / (heightJohn * heightJohn);
console.log('BMI of john is' + ' ' + johnBMI);


if(johnBMI > markBMI){
    console.log("John/'s BMI is more than Mark")
}
else{
    console.log("Mark's BMI is more than JOhn's");
}