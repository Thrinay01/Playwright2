
function RemoveDuplicatesFromArray(input){

        const set = new Set();

        for(const ch of input){
             
            set.add(ch);
      }

      return set;
}

function RemoveDuplicatesFromArray2Way(input){

      // return new Set(input);

      const set = new Set(input);
      
      return set;
}

 let input =  [ 20, 20, 40, 30 , 40 , 'a', 'b' , 'a', 'B'];

console.log(RemoveDuplicatesFromArray(input));

console.log(RemoveDuplicatesFromArray2Way(input));
