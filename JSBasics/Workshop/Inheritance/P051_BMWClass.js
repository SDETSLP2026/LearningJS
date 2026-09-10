import { Car } from "./P050_CarClass.js";

export class BMW extends Car
{
    price(){
        console.log("BMW price.....50L");
    }

    autoEngine(){
        console.log("BMW.....autoEngine()");
    }
}