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


let promise1 = new Promise((resolve,reject)=>{
    setTimeout(reject("First"),1000);
})
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve("Second"),2000);
})
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve("Third"),3000);
})

Promise.any([promise1,promise2,promise3])
.then((value)=>{console.log(value)})
.catch((error)=>{console.log(error)})