import { Vehicle } from "./P054_VehicleClass.js";

export class Car extends Vehicle
{
    start(){
        console.log("Car... Start()");
    }

    refuel(){
        console.log("Car... Refuel()");
    }

    stop(){
        console.log("Car... Stop()");
    }
}