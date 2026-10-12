
function countOccurencesOfCharacters(word){

    const map = new Map();

    for (const char of word.toLowerCase()){

        if(char === ' '){
            continue;
        }

        if (!map.has(char)){

            map.set(char,1);
        }
        else{
            let preValue = map.get(char);
            map.set(char, preValue+1);
        }
    }
      return map;   
}

console.log(countOccurencesOfCharacters('Automation Engineer'));