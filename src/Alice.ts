type User = {
        name:{
                firstName : string,
                lastName : string,
        },

        sex : "Male" | "Female",
        age : number,
         
        address : {
                street : string,
                city : string,
                country : string,
        },
};



const  user1 : User= {
        name :{
                firstName : 'Emon',
                lastName : 'Chowdhury',
        },
        sex : "Male",
        age : 22,
        
        address :{
                street : '123 Main St',
                city : 'Dhaka',
                country : 'Bangladesh',
        }
}


const user2 : User = {
        name :{
                firstName : 'Sumaiya',
                lastName : 'Zannat',
        },
        sex : "Female",
        age : 18,
          
        address : {
                street : '456 Side St',
                city : 'Chittagong',
                country : 'Bangladesh',
        },
};

const {name : {firstName,lastName }} = user2;
const {address :{city }} = user1;

console.log(firstName,lastName,city);