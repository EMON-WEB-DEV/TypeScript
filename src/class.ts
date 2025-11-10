class person {
        name : string;
        age : number;
        id : number;


         constructor (name : string , age : number ,id : number)
         {
                this.name = name;
                this.age = age;
                this.id = id;
         }

}
const person1 = new person ('Emon',22,123);
const person2 = new person ('Jony',24,124);


console.log(person1,person2);