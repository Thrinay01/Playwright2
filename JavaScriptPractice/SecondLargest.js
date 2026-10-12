
function secondLargestUsingSort(input , n ){

    const sortedArray = input.sort((a,b) => b-a);

    if(n < input.length){

         const result = input[n-1];

         return result;
    }
    else{
        return false;
    }
}
function secondLargestWithoutSortFunction(input , n ){

    let result;

     for(let i = 0 ; i < input.length ; i++){

     for(let j = i+ 1; j < input.length; j++){
    
        if ( input[i] < input[j]){

            let temp = input[i];
            input[i] = input [j];
            input[j] = temp;
        }
     }
}
  
   if ( n >= 1 && n <= input.length){
      result = input[n-1];
   }
   else{
    return false;
   }
   
   return result;
}
  // without sorting the array

  function findSecondLargest(input){

    let largest = -Infinity;
    let secondLargest = -Infinity;

    if (input.length < 2){
        return false;
    }

    for (let i = 0 ; i < input.length ; i++){

        if(input[i] > largest){

            secondLargest = largest;
            largest = input[i];
        }

        else if( input[i] <largest && input[i] > secondLargest){

            secondLargest = input[i];
        }
    } 
         return {largest, secondLargest}; // object

        // return [largest, secondLargest]; // array 
  }

  let input = [77,89,67,89,54];

  let n = 2;

//console.log(secondLargestWithoutSortFunction(input , n));

  console.log(secondLargestUsingSort(input , n));

    console.log(findSecondLargest(input));