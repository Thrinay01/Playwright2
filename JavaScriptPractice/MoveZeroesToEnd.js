function moveZeroesToEnd(){

    let nextPosition = 0;

    for(let i = 0 ; i < input.length ; i++ ){

          if (input[i] !== 0){

             input[nextPosition] = input[i];
            nextPosition++
         }  
}
    while (nextPosition < input.length){
        input[nextPosition] = 0;
        nextPosition++
    }     
      return input;
}

 function  withFilterMoveZeroes(){

         const nonZeroes = input.filter(value => value!==0);

         const zeroes = input.filter(value => value==0);

         const result = [...nonZeroes, ...zeroes];

         return result;
}

let input = [2,0,3,5,0,4,0,8];

console.log(moveZeroesToEnd(input));

console.log("Final Array: ", withFilterMoveZeroes(input));
