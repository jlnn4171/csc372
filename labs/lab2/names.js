var hacker1 = "juliana"
var hacker2 = "jenny"

console.log("My name is " + hacker1)
console.log("My partner's name is " + hacker2)

var nameLen1 = hacker1.length
var nameLen2 = hacker2.length

if (nameLen1 > nameLen2){
    console.log("I have the longest name, it has " + nameLen1 + " characters!")
}
else if (nameLen1 < nameLen2){
    console.log("It seems that my partner has the longest name, it has " + nameLen2 + " characters!")
}
else if (nameLen1 = nameLen2){
    console.log("Wow, we both have equally long names, " + nameLen1 + " characters!")
}


var nameSpace = ""
for (let i = 0; i < nameLen1; i++) {
    nameSpace += hacker1[i].toUpperCase() + " ";
}
console.log(nameSpace)


var nameRev = ""
for (let i = nameLen2 - 1; i > -1; i--) {
    nameRev += hacker2[i];
}
console.log(nameRev)