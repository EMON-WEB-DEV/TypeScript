interface Developer <T> {
        name : string;
        age : number;
        skills : {
                first : string;
                second : string;
 }

 useDevice : T ;
}


interface Device1{
        deviceName : string;
        deviceBrand : string;
        devicePrice : number;
        specs : string;
}

interface Device2 {
        deviceName : string;
        deviceBrand : string;
        specs : string;
}

const dev1 : Developer <Device1> = {
         
        name : 'Emon',
        age : 22,
        skills : {
                first :  'JavaScript',
                second : 'TypeScript',
        },
        
        useDevice :{
                deviceName : 'MacBook Pro',
                deviceBrand : 'Apple',
                devicePrice : 25000,
                specs : 'M2 pro',
        }
}


const dev2 : Developer <Device2>= {
        name : 'Hashi',
        age : 24,
        skills : {
                first :  'Python',
                second : 'Django',
        },

        useDevice : {
                deviceName : 'Surface Laptop',
                deviceBrand : 'Microsoft',
                specs : 'Intel i7',
        }
}