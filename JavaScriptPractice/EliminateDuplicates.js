
function eliminateDuplicates(arr){

    const set = new Set();

    for(const word of arr){

         set.add(word);
         return set;
    }
}

  console.log(m.eliminateDuplicates(['banana','apple','banana','orange']));