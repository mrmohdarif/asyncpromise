// 1.1//Write one example explaining how you can write a callback function.
function firstName(firstName)
{
    return firstName;
    
}
function lastName(firstName,lastName)
{
  console.log(`${firstName}` ,`${lastName}`);
}
lastName(firstName("MOHD"),"ARIF")

// 2.2//"Write a callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 should be printed after 2 sec, 3 should be printed after 3 sec, and so on. Explain callback hell. 
    let count=0
        setTimeout(() => {
            console.log(count++);
            setTimeout(() => {
                console.log(count++);
                setTimeout(() => {
                    console.log(count++);
                    setTimeout(() => {
                        console.log(count++);
                    }, 4000);
                }, 3000);
            }, 2000);
        },1000);
    
// 3. "Write the promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 should be printed after 2 sec, 3 should be printed after 3 sec, and so on. 
function count(){
return new Promise((resolve,reject)=>{
    for(let i=1;i<=7;i++)
    {
        setTimeout(() => {
            console.log(i);
            resolve(i)
        }, i*1000);
    }
})
}

function printNumber() {
    count().then((data)=>console.log(data))
    
}
printNumber()
// let promise= new Promise((resolve,reject)=>{
//     for(let i=1;i<=7;i++)
//     {
//         setTimeout(() => {
//             console.log(i);
//             resolve(i)
//         }, i*1000);
//     }
// })
//     promise.then((data)=>console.log(i))
//4.4"Create a promise function accepting an argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject the state and catch the error and print Promise Rejected 

let promise=new Promise((yes,no)=>{
    if(yes)
    {
        yes("Promised resolved")
    }
    else
    {
        no("promise rejected")
    }
})
promise
.then((x)=>console.log(x))
.catch((y)=>console.log(y))


//5.5 Create examples to explain callback function
function abc()
{
   console.log("this is abc()");
   bca()
}
abc()
function bca()
{
  console.log("this is bca()");
  cda()
}
bca()
function cda()
{
  console.log("this is cda()"); 
}
cda()

//6.6Create examples to explain callback hell function
setTimeout(() => {
    setTimeout(() => {
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    setTimeout(() => {
                        setTimeout(() => {
                            console.log("Hi i am MOHD ARIF");
                        }, 7000);
                    }, 6000);
                }, 5000);
            }, 4000);
        }, 3000);
    }, 2000);
}, 1000);
// 7.7 Create examples to explain promises function
 
let promise=new Promise(function(resolve,reject){
    let num=Number(prompt("Enter a number"))
    if(num%2==0)
    {
        resolve("number is Even");
    }
    else
    {
        reject("number is odd");
    }
})
promise
.then((even)=>console.log(even))
.catch((odd)=>console.log(odd))

//8.Create examples to explain async await function
function numCheck()
{
    
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let num=5;
        if(num<=5)
        {
            resolve("Number is less than 10")
        }
        else
        {
            reject("Number is greater than 10")
        }
        }, 1000);
    })
}

 async function nums(){
    try
    { 
        await numCheck()
        console.log("you inside try!!!!!");
    }
   catch{
    console.log("Something went wrong");
   }
}
nums()
//.9 Create examples to explain promise.all function

const p1 = Promise.resolve("MOHD");
const p2 = "INDIA"; 
const p3 = new Promise((resolve, reject) => { 
    resolve("Maths");
});

let returned_promise = Promise.all([p1, p2, p3]); 

returned_promise.then((array)=>{
    console.log(array); 
})
