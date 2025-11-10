type User = {
        name : string;
        age : number;
        email : string;
}


type Product = {
        id : number;
}

type Order = User & Product


const user: Order ={
        name : "Emon",
        age : 22,
        email :"jakaria@gmail.com",
        id : 123,
}




interface Animal {
        name : string;
        age :number;
        sureName : string;
}


//const pet : Animal = {
      //  name : "Tommy",
       // age : 5,
       // sureName : "Cat",
//}

//const MyPet = pet .name;

//console.log(MyPet);


interface Human extends Animal 
{
        name : string;
        id : number;

}
const person : Human ={
        name : "Jack",
        id :  103,
        age : 30,
        sureName : "Smith",
}

const myPetSurename = person.sureName;

console.log(myPetSurename);