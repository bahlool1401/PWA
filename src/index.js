if("serviceWorker" in navigator){
    navigator.serviceWorker.register("/sw.js")
    .then(registration =>{
        console.log(registration);
    })
    .catch(error=>{
        console.error('eeeeeeee',error);
    })
}

// console.log('entered indexxxxxxxxxxxx');