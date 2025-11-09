const user = {

id : 12345,

 name : {
      firstName: "Emon",
      lastName: "Chowdhury"
 },
 sex: "Male",
 favcolor: ["Black", "Red"]
} 

const {name:{firstName :myName}} =user;

//console.log(myName);

const friend : string[] = ["Tanmoy" , "Dua" ,"Sza"];

const [,B] = friend;

console.log(B);

