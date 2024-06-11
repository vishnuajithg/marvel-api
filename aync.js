let promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('Promise resolved')
    },3000)
})

async function asyncFunction(){
    let result =  await promise

    try{
        console.log(result)
        console.log(promise)
        console.log(typeof(promise))
        console.log('hello')
    }
    catch(error){
        console.log(error.message)
    }
    
}

asyncFunction()