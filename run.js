let numberArray = [];
var i = 1;

while (i < 101){
    numberArray.push(i);
    i++;
}

console.log(numberArray);

for (n=1; n<numberArray.length+1; n++){
    console.log(n)
    if (n%3 === 0 && n%5 === 0){
        console.log("FizzBuzz");
    }

    else if (n%3 === 0){
        console.log("Fizz");
    }

    else if (n%5 === 0){
        console.log("Buzz");
    }
}