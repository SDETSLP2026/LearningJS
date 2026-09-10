import { Car } from "./P050_CarClass.js";



export class Audi extends Car
{
    price(){
        console.log("Audi price.....60L");
    }
    
    autoGearShift(){
        console.log("Audi.....autoGearShift()");
    }
}