function ArrayInAscendingOrder(arr){

    if (arr.length < 1)
    {
        return false;
    }
    for(let i = 0 ; i < arr.length ; i++){
       
        for(let j = i+1 ; j < arr.length; j++){

            if (arr[i] > arr[j]){

                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            } 
        }
    }    
     return arr;
}

function sortAscending(arr){
   console.log(arr.sort((a,b) => a - b));
}

let arr = [6,5,8,2,1,-67,200,7,0,11];

//let arr = [];

console.log(ArrayInAscendingOrder(arr));
