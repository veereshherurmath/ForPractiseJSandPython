//Promises in javascript

{const fetchdata = (url) =>{
    return new Promise((resolve,reject)=>{
        if (!url){
            reject("URL is not provided")
        }else {
            resolve("Data fetched successfully from " + url)
        }

    })
}

// fetchdata("https://api.github.com/users")
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })
}

// Function Debouncing

const handleip = (arg)=>{
    console.log(arg)

}

const debounce = handledb(handleip,delay)
debounce =(func,delay)=>{
    let timeout
    return (...args)=>{
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            func(...args)
        },delay)
    }
}

// UseMemo hook 