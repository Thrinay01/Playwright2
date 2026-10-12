function primeOrNot(n){

    if (n <= 1){

        return false;
    }

    for ( let i = 2 ; i<= Math.sqrt(n) ; i++){

        if(n%i === 0){

          return false;   
        }

        console.log(i);
    }
  

   return true;

}
   let n = 59;

  if(primeOrNot(n)){
    console.log( n, "is a prime number");
  }
  else{
    console.log(n, "is not a prime number");
  }