// Synchronous proogramming: Step by step code executes

let k=1;
for(let i = 1; i <= 5; i++){
    console.log(k);
    k++;
}

/*
What is Asynchronous?
---------------------- 
Some tasks required extra time to finish and then JS will allow you task execution without waiting for any task.
So parallely we can run all the tasks.

Asynchronous means:
Start an operation that may take some time,
and JS can continue without blocking everything while it waits.


*/

console.log("Program started....");

setTimeout(() => {
    console.log("Task completion takes 4Sec");
    
}, 4000)


console.log("Program ends....");

//-----------------------------------------------------------------------------


console.log("--------Concept of promise--------");

//fetch() - Send request to server
// let response = fetch("https://api.restful-api.dev/collections");
// console.log(response);//Promise { <pending> }

/*How to handle any method ehich returns promise<>

We can handle promise by using asynchronus function and await keyword.

1. Place code inside asynchronous function
2. The method which returns you the promise before that use await KW.

Note:
Await KW we can add only inside async function 
because when we create any async function,by default it returns a promise.

Promise - needs extra time to finish.
To settle down promise there are 2 approaches -
1. Older approach - using then() & catch()
2. Newer approach - using async/await KWs (This is used in playwright)



*/


//Latest technique
async function apiTest(){
    let response = await fetch("https://api.restful-api.dev/collections");
    console.log(response);
}

//Call 
apiTest(); //Below is the output

/*
Response {
  status: 403,
  statusText: 'Forbidden',
  headers: Headers {
    date: 'Fri, 11 Sep 2026 03:35:59 GMT',
    'content-length': '188',
    connection: 'keep-alive',
    server: 'cloudflare',
    nel: '{"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}',
    vary: 'Origin, Access-Control-Request-Method, Access-Control-Request-Headers',
    'x-content-type-options': 'nosniff',
    'x-xss-protection': '1; mode=block',
    'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
    pragma: 'no-cache',
    expires: '0',
    'x-frame-options': 'DENY',
    'cf-cache-status': 'DYNAMIC',
    'report-to': '{"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Ox2jjPBMRORzOCyL01ioMX5VHVxLhP3g4b7NqEo%2BNu%2BYe8B2eVpoooSYF7llf%2BtiAmGCAl%2Fl31gZQ4aJe5wSVOiHzXpyAieSAi3ZwHHm0vrMCAcRO%2Ffvcul8vWg%2BRq6KXUl%2BZn3NKxXy%2FUbWYiOvSkCU"}]}',
    'cf-ray': 'a393a025ae7bff6c-BOM',
    'alt-svc': 'h3=":443"; ma=86400'
  },
  body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
  bodyUsed: false,
  ok: false,
  redirected: false,
  type: 'basic',
  url: 'https://api.restful-api.dev/collections'
}
*/