function sortAscending(arr){

   return (arr.sort((a,b) => a - b));
}

function sortDescending(){

    return (arr.sort((a,b) => b - a));
}

function sortStringsInArray(arr2){

     let sortedArray = [...arr2].sort();
    
    return sortedArray;
}

function sortString(arr3){

    //to apply sort on string, we need to conver array of caharacters - .split("") - helps to convert string to char Array

   // return arr3.split("").sort(); - it returns characters
   
   return arr3.split("").sort().join("");  // this return string - join coverts characters to string;

   
}

let arr = [6,5,8,2,1,-67,200,7,0,11];

let arr2 = ['banana' , 'apple' , 'pomo', 'kiwi'];

let arr3 = 'udaya'
 
console.log( " Ascending order is", sortAscending(arr));

console.log( " Descending order is", sortDescending(arr));

console.log( " Sorted Array of Strings", sortStringsInArray(arr2));

console.log( " Sorted String", sortString(arr3));

console.log("original:", arr2);

console.log("originalChanged:", arr);






