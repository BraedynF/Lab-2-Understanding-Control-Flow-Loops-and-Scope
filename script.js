let number = 0;

if (number > 0) {
    console.log("This number is positive");
} else if (number < 0) {
    console.log("This number is negative");
} else {
    console.log("this number is zero");
}

let day = 4;

switch (day) {
    case 1:
        console.log("Today is Sunday");
        break;
    case 2:
        console.log("Today is Monday");
        break;
    case 3:
        console.log("Today is Tuesday");
        break;
    case 4:
        console.log("Today is Wednesday");
        break;
    case 5:
        console.log("Today is Thursday");
        break;
    case 6:
        console.log("Today is Friday");
        break;
    case 7:
        console.log("Today is Saturday");
        break;
    default:
        console.log("Today is unknown");
} 

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let i = 1;

while (i <= 5) {
    console.log(i++);
    if (i === 3){
        break;
        continue; 
    }
}

let j = 1;

do{
    console.log(j++);
} while (j <= 5);

let globalVar = "I'm global!";
 
function scopeExample() {
    let localVar = "I'm local!";
    console.log(globalVar);
    console.log(localVar);
} 