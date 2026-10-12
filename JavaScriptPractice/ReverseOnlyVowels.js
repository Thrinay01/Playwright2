function reverseOnlyVowels(input){


for (i = 0 ; i < input.length ; i++){
    let Ltemp;
    let Ftemp;
    let Fpos;
    let Lpos;

     if ("aeiou".includes(input[i].toLowerCase())){

             if (Ftemp !== null){
                 Ltemp = input[i];
                 Lpos = i;
             }
              Ftemp = input[i];
              Fpos = i;
     }
       
}
     if(!(Ftemp = null) &&(Ltemp=null))
       input[Fpos] = Ftemp;
       input[Lpos] = Ltemp;

      return input;
}

let input = "hello";


console.log(reverseOnlyVowels(input));