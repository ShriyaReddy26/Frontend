// const mypromise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("hello this is resolved")
//     },2000)
// })

// mypromise
//   .then((message)=>{
//     console.log(message + "full");       
//    })
//   .catch((error)=>{
//     console.log(error + " reject");
//    })
    
const mypromise = new Promise((resolve,reject)=>{
    const randomNum = Math.random();
    if(randomNum>0.5){
        resolve("Numer greater")
    }else{
        reject("smaller")
    }
})

mypromise
 .then((value)=>{console.log(value)})
 .catch((error)=>{console.log(error)})