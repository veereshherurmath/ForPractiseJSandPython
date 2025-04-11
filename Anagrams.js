// Anagramas  O/p : [ [ 'eat', 'tea', 'ate' ], [ 'car', 'rac' ], [ 'tar' ], [ 'cat' ] ]
{let arr = ["eat","tea","ate","car","tar","rac","cat"]

const anagrm = (arr) =>{
    let obj = {}
    for (let i=0;i<arr.length;i++) {
        let sorted =arr[i].split("").sort().join("")
        if (!obj[sorted]) {

            obj[sorted] = [arr[i]]
        }else {
            obj[sorted].push(arr[i])
        }
    }
    return Object.values(obj)
}

// console.log("dddddddd",anagrm(arr))
}

//  Reverse of a string

let str1 = "veeresh";
function reverse (str1) {
    let str2 = ""
    for (let i=str1.length-1;i>=0;i--){
        str2 +=str1[i]
        
    }

    return str2
}

// console.log(reverse(str1))

// Highest value of an array

let arr2 = [1,2,4,5,8,9,12,32,13,43,10]

function Highestvalue (arr) {
    let arr22 = arr[1]
    for (let i=0;i<arr.length;i++) {
        if (arr22 < arr[i]) {
            arr22 = arr[i]
        }
    }
    return arr22
}

// console.log("fff",Highestvalue(arr2))


// unique values from n array 
{let arr = [1,2,3,4,5,6,3,2,1,7,8,4,0,5]

let unique = []
for (let i=0;i<arr.length;i++) {

    if (unique.indexOf(arr[i]) == -1) {
        unique.push(arr[i])
    }
    
}
// console.log("ddddd",unique)
}

// Factorial number
{function factorial (n) {
    if (n==1) {
        return 1
    }
    let factorial = 1
    for (let i=1;i<=n;i++) {
        console.log('fffffd',i)

        factorial *= i
    }
    return factorial
}

// console.log("fff",factorial(6))
}

// Finding the missing term in the array 
{
    let num= [1,2,3,4,6]
function Missing (n) {

    let ex = n.length +1;
    let expected = (ex * (ex + 1))/2
    let actual = n.reduce((acc, curr) => acc + curr, 0);
    let missing = expected - actual;
    return missing;

}
// console.log("ddd",Missing(num))
}

// Converting to a single number

    {
        let num = 12345
    while(num >10) {
        let sum = 0 ;
        while(num >0){
            let newval = Math.floor(num/10)
            sum += num%10
            num = newval
        }
        num = sum   
    }

    // console.log("lll",(num))
    }

    // First letter to be capital

   { 
    let wrd = "hey this is india u know"
    let splitted = wrd.split(" ")
    let result =[]
    for ( x of splitted) {
        let wrdone = x[0].toUpperCase() + x.slice(1);
    result.push(wrdone);
    }
    let finalres = result.join(" ")
    // console.log("s",finalres)
}

// Move 0 to last of the array

{let arr = [1,2,0,3,4,0,2]
let result = []
function Movetoright (arr) {
    let zercount = 0
    for (let i=0;i<arr.length;i++){
        if (arr[i] !== 0) {
            console.log("dddd",arr[i])
            result.push(arr[i])
        }else {
            zercount++;
        }
    }
    for (let i=0;i<zercount;i++) {
        result.push(0)
    }
}
// Movetoright(arr)
// console.log("sd",result)
}

// Flatten array 

{let arr = [1,2,3,[3,4],[5,4,[4,2,8,9]],3]

let res = []
function flattenarr (arr) {
        for (let i=0;i<arr.length;i++){
            if (Array.isArray(arr[i])) {
                flattenarr(arr[i])
            }else {
                res.push(arr[i])
            }

        }
}

// flattenarr(arr)
// console.log("dddd",res)
}

// Prime Number or not 

{function numbe (num) {
    for (let i=2;i<num/2;i++){
        if (num % i === 0){
            return false
        }
    }
    return true

}
// console.log(numbe(6))
}

//grouping of aray based on the brand and adding the prices
{
    let arr = [{brand:'apple',price:123,device:'mobile'},
    {brand:'apple',price:323,device:'mobile'},
    {brand:'samsung',price:12,device:'mobile'},
    {brand:'samsung',price:13,device:'mobile'},
    {brand:'Moto',price:23,device:'mobile'},
    {brand:'Moto',price:14,device:'mobile'},
    {brand:'lenovo',price:43,device:'mobile'},
]

let newarr = arr.reduce((acc,curr)=>{
    let exp = acc.find((item)=>item.brand === curr.brand)

    if (exp) {
        exp.price +=curr.price 
    }else {
       acc.push({brand:curr.brand,price:curr.price})
    }
    return acc
},[])

// console.log("ddd",newarr)
}