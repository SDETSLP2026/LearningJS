/*
Inheritance
----------------
- Acquaring properties of one class into ather class is Inheritance

Purpose
--------
- To avoid code duplication
- For Reusability of method
- To achieve Run time polymorphism

Example
----------
Parent and child relation
Super <> Sub
Base <> Derived


How to implement
-----------------
We can define relataion between the classes is called (IS-A) relation using extends keyword

Note
----------
- Every parent class can access only parent property
- Every child class can access parent + child property

Types
===========
1. Single level Inheritance     [A --> B]
2. Multi level Inheritance      [A --> B --> C]
3. Hierarchical Inheritance     [A --> B & A --> C]


Not implemented by Js but we can implement using typescript
-------------------------------------------------------------
4. Multiple Inheritance                 [X --> Z & Y --> Z]
5. Hybrid(Dimond problem)Inheritance    [P --> Q, P --> R, Q--> S, R--> S]


*/

class A
{
    m1(){
        console.log("M1() is calling...");
        
    }
}

class B extends A // A is a parent & B is a child class - Simple Level Inheritance
{
    m2(){
        console.log("M2() is calling...");
        
    }
}

class C extends B // B is a parent & C is a child class - Multi Level Inheritance
{
    m3(){
        console.log("M3() is calling...");
        
    }
}

class D extends A // A is a parent & D is a child class - Hierarchical Level Inheritance
{
    m4(){
        console.log("M4() is calling...");
        
    }
}

// Object creation
//---------------------------------------------------------------------------------------
console.log("Parent Class Object : Parent class properties");
let a1 = new A();
a1.m1(); //Individual method
//---------------------------------------------------------------------------------------
console.log("Child Class Object : Parent & Child class properties");
let b1 = new B();
b1.m1(); //Inherited method from class A
b1.m2(); //Individual method
//---------------------------------------------------------------------------------------
console.log("GrandChild Class Object : GrandParent, Parent & Child class properties");
let c1 = new C();
c1.m1(); //Inherited method from class A
c1.m2(); //Inherited method from class B
c1.m3(); //Individual method
//---------------------------------------------------------------------------------------
console.log("Child Class Object : Parent & Child class properties");
let d1 = new D();
d1.m1(); //Inherited method from class A
d1.m4(); //Individual method