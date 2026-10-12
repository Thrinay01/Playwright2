function listPrimeNumbersFromAnArray(){

     let result = [];
  
    for(let i = 0 ; i < input.length ; i++){

        if(input[i] <=1){
           continue;
        }

        let flag = true;

        for(let j = 2 ; j <= Math.sqrt(input[i]) ; j++){

            if (input[i]%j === 0){

                flag = false;
                break;
            }
        }

        if(flag){

            result.push(input[i]);  
        }
    }
     return result;
}

let input = [3,16,89,105,107];

console.log(listPrimeNumbersFromAnArray(input));
