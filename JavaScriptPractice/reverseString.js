class ReverseString{

    reverseString(name){

     //return name.split(" ").reverse().join(" "); to reverse words in a sentence

     return name.split("").reverse().join("");

    }    
}

const m = new ReverseString();

console.log("Reversed :", m.reverseString('udaya sri'));






