import { Car } from "./P050_CarClass.js";
import { BMW } from "./P051_BMWClass.js"
import { Audi } from "./P053_AudiClass.js";

//Object
console.log("----- Parent Object -----");
let c1 = new Car();
c1.refuel();        //Individual
c1.start();         //Individual
c1.stop();          //Individual
c1.breakFeature();  //Inherited

console.log("----- Child Object -----");
let bmw1 = new BMW();
bmw1.autoEngine();  //Individual
bmw1.refuel();      //Inherited
bmw1.start();       //Inherited
bmw1.stop();        //Inherited
bmw1.breakFeature(); //Inherited

console.log("------------------------");
let audi1 = new Audi();
audi1.autoGearShift();  //Individual
audi1.refuel();         //Inherited
audi1.start();          //Inherited
audi1.stop();           //Inherited
audi1.breakFeature();   //Inherited


