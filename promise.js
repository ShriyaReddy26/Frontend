const mypromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject("hello this is resolved")
    },2000)
})

mypromise
  .then((message)=>{
    console.log(message + "full");       
   })
  .catch((error)=>{
    console.log(error + " reject");
   })
    

