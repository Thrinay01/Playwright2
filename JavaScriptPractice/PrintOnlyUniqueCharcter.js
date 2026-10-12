function uniqueCharacter(input){

     const map = new Map();

  //   const set = new Set();

     for(const ch of input.toLowerCase()){

        if (ch === ' '){
            continue;
        }

        if(!(map.has(ch))){
            map.set(ch,1);
        }
        else{
            const prevValue = map.get(ch);
            map.set(ch, prevValue + 1);
        }
    }

     const result = [];
    
     for(const ch of input.toLowerCase()){
        
        if(map.get(ch) == 1){
          
            // set.add(ch);

            result.push(ch);
        }
     }
    // return [...set];  // [...] prints just characters - Set(9) { 'd', 'a', 's', 'm', 'c', 'o', 'u', 't', 'r' }

     //return set; // prints like this Set(9) { 'd', 'a', 's', 'm', 'c', 'o', 'u', 't', 'r' }

     // no need to. reate set, we can take values from map directly and print

     return result;
   
}

let input = 'India is my Country';

console.log(uniqueCharacter(input));


