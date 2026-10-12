
let arr = [2, 5, 1, 7, 6, 0, 4, 3, -11];

function subArrayWithMaxSum(n) {
   if ( n >arr.lenghth || n < 1) {
        return false;
    }
    let start = 0;
    let end = n - 1;
    let rstart = 0;
    let rend = 0;
    let maxSum = -Infinity;

    while (end < arr.length) {
       let sum = 0;
        for (let i = start; i <= end; i++) {
            sum = sum + arr[i];
        }

        if (sum > maxSum) {
            maxSum = sum;
            rstart = start;
            rend = end;
        }
        start++;
        end++;
    }
    let result = [];

    for (let j = rstart; j <= rend; j++) {

        result.push(arr[j]);
    }
      return result;
}
   console.log(subArrayWithMaxSum(4));

   











