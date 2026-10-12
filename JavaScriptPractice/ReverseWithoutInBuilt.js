
function reverseWithoutInBuilt(word){

    let rev = "";
  
      for(let j = word.length-1 ; j >=0 ; j--)
        {
           rev = rev + word[j];
        }
        return rev;
    }

  function reverseWordsInSentence(word){

     let rev = "";

     let wordsArray = word.trim().split(/\s+/);

     for(let i = wordsArray.length-1 ; i >=0 ; i--){

          rev = rev + wordsArray[i] + " ";
     }
        return rev;

  }  

  console.log("reverse each word in a sentence");

  console.log(reverseWordsInSentence('my name is udaya sree')); 

   console.log("reverse each character in a word");

   console.log(reverseWithoutInBuilt('udaya sree'));
   
