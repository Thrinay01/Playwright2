
//find with name and return object if matches else print no matching object

class MatchingObject{

     users = [ 
         { id : '1' , name : 'udaya' , age : '33'},
         { id : '2', name : 'prithvi' ,age : '37'},
         {id : '3', name : 'Lucky' ,age : 7}]
      
    checkName(name){

      const user =  this.users.find((user) => user.name.toLowerCase() === name.toLowerCase());
       if(user){
        return user;
       }
        else{
            console.log("No matching object");
            return null;
        }
     }
}

const m = new MatchingObject();

const result = m.checkName('lucky');

console.log(result);