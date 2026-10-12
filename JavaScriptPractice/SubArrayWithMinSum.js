class SubArrayWithMinSum{

    constructor(){
         let arr = [ 2,-4,3,8,5,6,-7,-9];
         this.arr = arr;
    }
    subarraywithminsum(n)
    {
        if ( n < 1 || n > this.arr.length){
            return false;
        }

        let start = 0;
        let end = n-1;
        let rstart;
        let rend;
        let minSum = +Infinity;
        
        console.log("in the method");

        while(end < this.arr.length)
        { 
            let sum = 0;

           for(let i = start ; i <= end ; i++)   
            {
                sum = sum + this.arr[i];
           }
            if ( sum < minSum)
             {
              minSum = sum;
              rstart = start;
              rend = end;
            }
            start ++;
            end++;   
        }

          let result = [];

        //  return result =  this.arr.slice(rstart,rend+1);

         for (let j = rstart; j <= rend ; j++)
         {
            result.push(this.arr[j]);    
          }
           return result;
        }
}
  const m = new SubArrayWithMinSum();
  console.log(m.subarraywithminsum(2));