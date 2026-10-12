
function arrayInDescendingOrder(arr){

    if (arr.length < 1){
        return false;
    }

    for(let i = 0 ; i < arr.length ; i++){

        for (let j = i+1 ; j < arr.length ; j++){

            if(arr[i] < arr[j]){

                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function withSortDescending(arr) {

    arr.sort((a,b) => b - a );

    console.log(arr);
}
 
let arr = [ 30, 60, 50, -45, -9 , -0 ];

 withSortDescending(arr);

console.log(arrayInDescendingOrder(arr));
