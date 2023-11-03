// if, if--else, else statement

let myGrade = 89;

if (myGrade >= 90) {
    console.log("A")
} else if (myGrade >= 80) {
    console.log("B");
} else if (myGrade >= 70) {
    console.log("C");
} else if (myGrade >= 60) {
    console.log("D");
} else {
    console.log("F");
}


//switch
myGrade = 92;
switch (myGrade) {
    case 100:
    case 99:
    case 98:
    case 97:
    case 96:
    case 95:
    case 94:
    case 93:
    case 92:
    case 91:
    case 90:
     console.log("A")
        break;
    case 89:
    case 88:
    case 87:
    case 86:
    case 85:
    case 84:
    case 83:
    case 82:
    case 81:
    case 80:
    console.log("B")
        break;
    case 79:
    case 78:
    case 77:
    case 76:
    case 75:
    case 74:
    case 73:
    case 72:
    case 71:
    case 70: 
    console.log("C")
        break;
    case 69:
    case 68:
    case 67:
    case 66:
    case 65:
    case 64:
    case 63:
    case 62:
    case 61:
    case 60:
    console.log("D")
        break;
    default: console.log("F")
        break;
}
for (let number = 0; number <= 100; number = number + 1) {
    if (number % 2 == 0){
    console.log("!")
    console.log(number)
    }}