/*
Super Keyword
=================
- In JS to call any property from Immediate parent class - we use super keyword
- we can call variable, method, constructor of Parent class

Rule
----------
- When Classes are in relation then use Super() constructor to call parent class constructor in child class.
- Constcrutor call should be first line of child constructor
*/

class Parent
{
    pid = 1010
    
    constructor(){
        console.log("This is a parent class constructor.");
        
    }

    getParentIncome(){
        console.log("Parent income is $17000.");
    }

    getPid(){
        return this.pid;
    }
}

class Child extends Parent
{
    cid = 2020;

    constructor(){
        super(); //by default call the parent class constructor 
        console.log("This is a child class constructor.");
    }

    getChildIncome(){

        // Use of super keyword
        //console.log("Parent ID is: " + super.pid); //undefined as we cannot directly access Parent class variable using SuperKW
        // So we created a getPid()

        console.log("Parent ID is: " + super.getPid());
        super.getParentIncome();
        
        console.log("child ID is: " + this.cid);
        console.log("Child income is $70000.");
        
    }
}

//Object creation
let c1 = new Child();
// //----------------------
// console.log(c1.pid());
// c1.getParentIncome();
// //----------------------
// console.log(c1.cid());
c1.getChildIncome();
