
var mom = {
    name:"Lan", 
    age: 48, 
    qualities:"cooks for me"
};

console.log(mom.name)
console.log("Age: " + mom.age)
console.log("Qualities: " + mom.qualities)

function partner(name, birthyr, hobbies){
    this.name = name; 
    this.birthyr = birthyr;
    this.hobbies = hobbies;
}

var partner1 = new partner("Robert", 2003, ["basketball"])

console.log("My partner, " + partner1.name + ", is born in " + partner1.birthyr + " years old and loves to " + partner1.hobbies)