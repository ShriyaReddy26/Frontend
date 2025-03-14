// Promise.all..................................................

// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(resolve("First"),1000);
// })
// let promise2 = new Promise((resolve,reject)=>{
//     setTimeout(resolve("Second"),2000);
// })
// let promise3 = new Promise((resolve,reject)=>{
//     setTimeout(resolve("Third"),3000);
// })

// Promise.all([promise1,promise2,promise3])
// .then((value)=>{console.log(value)})
// .catch((error)=>{console.log(error)})

// Promise.allsettled.............................................

// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(resolve("First"),1000);
// })
// let promise2 = new Promise((resolve,reject)=>{
//     setTimeout(resolve("Second"),2000);
// })
// let promise3 = new Promise((resolve,reject)=>{
//     setTimeout(resolve("Third"),3000);
// })

// Promise.allSettled([promise1,promise2,promise3])
// .then((value)=>{console.log(value)})
// .catch((error)=>{console.log(error)})


// Promise.any...............................................

// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(reject("First"),1000);
// })
// let promise2 = new Promise((resolve,reject)=>{
//     setTimeout(resolve("Second"),2000);
// })
// let promise3 = new Promise((resolve,reject)=>{
//     setTimeout(resolve("Third"),3000);
// })

// Promise.any([promise1,promise2,promise3])
// .then((value)=>{console.log(value)})
// .catch((error)=>{console.log(error)})


// Promise.race...............................................
// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(reject("First"),1000);
// })
// let promise2 = new Promise((resolve,reject)=>{
//     setTimeout(resolve("Second"),2000);
// })
// let promise3 = new Promise((resolve,reject)=>{
//     setTimeout(resolve("Third"),3000);
// })

// Promise.race([promise1,promise2,promise3])
// .then((value)=>{console.log(value)})
// .catch((error)=>{console.log(error)})


function addSum(){
    let s = 0
    for (let i = 0 ; i<=100000;i++){
        s+=1
    }
    return s
}

let start = performance.now()
let sum = addSum()
let end = performance.now()

console.log(end-start)