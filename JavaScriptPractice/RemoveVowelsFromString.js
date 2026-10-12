function removeVowels(input){

   let result ="";

    for(let ch of input){     

        // if (ch !== 'a' &&  ch != 'e' && ch !== 'i' &&  ch !== 'o' &&  ch !== 'u') { result = result + ch;}
    
      if(!("aeiou".includes(ch.toLowerCase()))){
         result = result + ch;
        }
    }
    return result;
}

let input = "AuTomation";

console.log(removeVowels(input));