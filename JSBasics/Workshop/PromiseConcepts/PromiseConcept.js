/*
- A Promise is an object used to managing asynchronous operataion
- Promise allow you to write code that continue after occurance of a specific event 
- Promises enabled the handling of data that is not currently available but will be available in the future

- A promise has 3 states pending, resolve and reject
** Pending: This is initial state when the promise is neither fullfilled or rejetcted
** Fullfilled: This state means asynchronous operation associated with promise has been successfully completed
** Rejected: This state indicates that the asynchronus operation has failed or been rejected

setteled
============
- When a promise is either fullfilled or rejected - it enter the settled state

- As per older approach - in this state there are two important methods
then():
------------
when promise transitions to the 'resolved/fullfilled' state, the then() method let you specify a callback function 
that will work with completed data. This is used to define what should happen when a successfull result is obtained.

catch():
-----------
when promise transitions to the "rejected" state, the catch() method let you specify a callback function 
that will work with rejected error. This is used to handle situation where the operation fails
*/
 
//How to design a promise? (Like a develoiper) ==> How to handle the promise?

let myPromise = new Promise((resolve, reject) => {
    let status = false;

    if(status){
        resolve("Test pass...!");
    } else {
        reject("Test fail...!");
    }
})

// Settle the promise
//Syntax:- <PromiseObjectRef>.then().catch()

myPromise.then((result)=>{ //here result is variable which holds result of resolved state   
    console.log("Resolved state: " + result);   
}).catch((error) => { //here error is variable which holds result of rejected state
    console.log("Rejected state: " + error);
});

/*
Output:
status = true ==> Resolved state: Test pass...!
status = false ==> Rejected state: Test fail...!
*/


//--------------------------------------------------------

//Resolved state promise
let resolvedPromise = new Promise((resolve,reject)=> {
    resolve("Promise is completed.");
})

resolvedPromise.then((status)=>{
    console.log(status);
})

//Rejected state promise
let rejectedPromise = new Promise((resolve,reject)=> {
    reject("Promise is failed.");
})

rejectedPromise.catch((status)=>{
    console.log(status);
})

//--------------------------------------------------------

console.log("Latest Technique/Modern Syntax");

let p1 = Promise.resolve("Promise pass...!");
p1.then((res)=>{
    console.log(res);
});


let p2 = Promise.reject("Promise fail...!");
p2.catch((err)=>{
    console.log(err);
});

//--------------------------------------------------------

console.log("Promise with Asynchronus");

//Resolved with Async
let p11 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise is fulfilled after 4 seconds")
    }, 4000);
})

p11.then((resState)=>{
    console.log(resState);
})

//Rejected with Async
let p12 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("Promise is rejected after 4 seconds")
    }, 4000);
})

p12.catch((rejState)=>{
    console.log(rejState);
})

//--------------------------------------------------------

console.log("Playwright promises");

//Promise with function.

//Step 1: Design promise within function
function getStatus(){
    return new Promise((resolve, reject)=>{

        setTimeout(() => {
            //resolve("Status is pass... The result is updated in 2 Sec.")
            reject("Status is fail... The result is updated in 2 Sec.")
        }, 2000);
    })
}

//Step 2: Call a function & store result
//We are storing this result
// let result = getStatus();
// console.log(result); // Promise { <pending> }

//Step 3: How to settle any promise
//Way 1: using traditional technique -- then()
getStatus().then((result)=>{
    console.log(result); //Status is pass... The result is updated in 2 Sec.
    
}).catch((error)=>{
    console.log(error); ////Status is fail... The result is updated in 2 Sec.
})

//Way 2: using modern technique -- async & await KWs

async function testStatus(){
    // let result_lt = await getStatus();
    // console.log(result_lt);

await getStatus().then((msg)=>{
        console.log(msg); //Status is pass... The result is updated in 2 Sec.    
    }).catch((error)=>{
        console.log(error); //Status is fail... The result is updated in 2 Sec.
    })
}

testStatus();


//--------------------------------------------------------


// then(), catch(), finally()

function getUserData(){
    return new Promise((resolve, reject)=>{
          let status = true;

          if(status){
            setTimeout(() => {
                let user = {
                    name:"Smit",
                    id:1010
                }
                resolve(user)
            }, 2000);

          }else{
            setTimeout(() => {
                reject("User not found")  
            }, 2000);

          }
    })
}

getUserData().then((status)=>{
        console.log(status);   
    }).catch((error)=>{
        console.log(error);
    }).finally(()=>{
        console.log("Code placed in finally() will always executed with promise status");
    })
