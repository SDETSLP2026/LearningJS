/*
Polymorphism
===============
-One thing we can reuse in multiple forms

Purpose
=============
- Method Reusability

Types:
=============
1. Compile time Polymorphism (Method Overloading/Early binding)
2. Run time polymorphism (Method Overriding/Late Binding)

Example:
==============
- Communication [F2F, Teams, Email, SMS, Audio/Video Call]
- Payement gateway [CC, DC, UPI, TPApps, NetBanking, COD]
- Ola/ubber app


1.Compile time Polymorphism(Method Overloading/Early binding)
------------------------------------------------------------
Method can be overloaded only when method is declared in same class with same name
multiple time with different signature.

differnt signature
--------------------
1.Number of parameters
2.type of parameters
3.change order of parameters

But As Js is dynamic programming language and decisions are taken care only at a run time
and we dont have compilation phase at the time designing code so method overloading not supported in Js
- Js does not support method overloding as it interpreted programming language

2.Runtime Polymorphism (Method Overriding/LateBinding)
-----------------------------------------------------------
-Method can be overrided when classes must be in Is-A relation (Inheritance) and same 
name method is declared with same signature in parent class and child class 
then child class will override parent class method

- Run time polymorphism is required as method is already implemented by parent then child can
override it for update that fetaure
- using child object you will get updated method

*/
//Method Overloading

class User
{

    login()//0 parameter
    {
        console.log("login with defualt credentials.....");
    
    }

    //number of parameters
    login(username,password)//2 parameter
    {
        console.log("Login with username: "+username+" & password: "+password);

    }

    login(otp)
    {
        console.log("Login with OTP....");
        
    }
}

//object 
let u1=new User();
u1.login();//Login with OTP....

//function overloading
function add()
{

}

//SyntaxError: Identifier 'add' has already been declared
// function add()
// {

// }



console.log("-------------------------");


//Method Overriding

class Parent
{
    color()
    {
        console.log("Blue...");
        
    }
}


class Child extends Parent
{
   color()//overrided
    {
        console.log("Red...");
        
    }
}

//Object
let p1 = new Parent();
p1.color();//Blue...

let c1 = new Child();
c1.color();//Red...