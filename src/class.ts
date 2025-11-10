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
         use(){
           
          console.log(`My Name is ${this.name},My Age is ${this.age},And My Is is ${this.id}`);
                
         }

}
const person1  = new person ('Emon',22,123);
const person2 = new person ('Hashi',24,124);
const person3 = new person (' Sza',2,12);

person1.use();
person2.use();
person3.use();

//console.log(person1,person2);