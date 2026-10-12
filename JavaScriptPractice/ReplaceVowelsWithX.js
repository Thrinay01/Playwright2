function replaceVowelsWithX(input){

    for(let ch of input){
    
        if("aeiou".includes(ch.toLowerCase())){

            input = input.replace(ch, "X");
        }
    }
      return input;
}

let input = 'Automation';

console.log(replaceVowelsWithX(input));