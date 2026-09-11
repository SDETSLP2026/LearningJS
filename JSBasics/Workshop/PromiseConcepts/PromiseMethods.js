
// Promise settle down methods
// all(), race(), allsettled()


/*
Promise.all([])
---------------
- Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
- It executes all promises in parallel
- It looks for status
*/

let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Test 1 is completed.")
    }, 3000);
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Test 2 is completed.")
    }, 2000);
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        //resolve("Test 3 is completed.")
        reject("Test 3 is failed.")
    }, 1000);
})

//--------------------------------------------------------------------

// Promise.all([p1,p2,p3]).then((res)=>{
//         console.log(res); 
// }).catch((err)=>{
//         console.log(err); 
// })


//--------------------------------------------------------------------


/*
Promise.race([])
-----------------
- Creates a Promise that is resolved or rejected when any of the provided Promises are resolved or rejected.
- Returns first resolved/rejected promise
*/

// Promise.race([p1,p2,p3]).then((res)=>{
//         console.log(res); 
// }).catch((err)=>{
//         console.log(err); 
// })

//--------------------------------------------------------------------

/*
Promise.allSettled([])
----------------------
- Creates a Promise that is resolved with an array of results when all of the provided Promises resolve or reject.

*/

Promise.allSettled([p1,p2,p3]).then((res)=>{
        console.log(res); 
}).catch((err)=>{
        console.log(err); 
})

/* Output:
[
  { status: 'fulfilled', value: 'Test 1 is completed.' },
  { status: 'fulfilled', value: 'Test 2 is completed.' },
  { status: 'rejected', reason: 'Test 3 is failed.' }
]
*/