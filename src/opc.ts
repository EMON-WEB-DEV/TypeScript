const detail :{

        name : string,
        age : number,
        adress ? : string, 
} =
{
        name : "Emon Chowdhury",
        age  : 22,

}
 const address = detail.adress ?? "No address provided";

 console.log(address);