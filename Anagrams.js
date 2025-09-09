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

// Fiabonic serires

{function FibonicSeries (num) {
let result = [];
for (let i=0;i<num;i++){
    if (i==0){
        result.push(0)
    }else if (i==1){
        result.push(1)
    }else {
        result.push(result[i-1]+result[i-2])
    }
}
return result

}

// console.log("dddddddd",FibonicSeries(10))
}

// sorting of an array
{
let arr = [2,3,4,1,6,7]
function sorted (arr) {
    for (let i=0;i<arr.length;i++){
        for (let j=0;j<arr.length;j++){
            if (arr[i]<arr[j]){
                let temp =arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
    return arr

}
// console.log("dd",sorted(arr))
}
// sorting of an array of objects
// const people = [
//     { name: 'Eve', score: 88 },
//     { name: 'Dave', score: null },
//     { name: 'Alice', score: 95 },
//     { name: 'Bob' } // score is undefined
//   ];

//   const sorted =(arr)=>  {
    
//     let key = 'score'
//     return [...arr].sort((a,b)=>{
    
//         let valA = a[key]
//         let valB =b[key]
//         if (valA == null && valB == null) return 0;
//         if (valA == null) return 1;
//         if (valB == null) return -1;
//         return valA>valB ? 1 : valB>valA ? -1:0
//     })
//   }
// //   const sor = sorted(people,"score")
  

// sorting of two arrays
{const a = [1, 3, 5];
const b = [2, 4, 6, 8];

function sortuing (arr1,arr2) {
    let result =[]
    let i=0
    let j=0
    let totallength = arr1.length+arr2.length;
    for (let k=0;k<totallength;k++){
        if (i>arr1.length){
             result.push(arr2[j]);
                j++;
        }else if (j>arr2.length){
            result.push(arr1[i]);
            i++;
        }else if(arr1[i]<arr2[j]) {
            result.push(arr1[i])
            i++
        }else {
            result.push(arr2[j])
            j++
        }
        
    }
    return result
    
}

// console.log("ddddd",sortuing(a,b))
}

// for Pyramid like structure

{function Pyramid (num) {
    for (let i=1;i<num;i++){

        let spaces = " ".repeat(num-i)
        let stars = '*'.repeat(i*2-1)
        console.log(spaces+stars)
    }
}

// Pyramid(5)
}
// reverse the string of an array
{
let str = ["ror", "Ram", "level", "Leave", "rotator", "demo", "madam", "sham"];

function reversestr(str) {
    let revstr = {}
    for (let i=0;i<str.length;i++){
        let element = str[i].split("")
        let newarr =[]
        for (let j=element.length-1;j>=0;j--){
            newarr.push(element[j])
        }
        let rev = newarr.join("")
        
        if (str[i] == rev) {
            
            revstr[str[i]] = true
        }else{
            revstr[str[i]] =false
        }
        
    }
    return revstr
    
}

// console.log(reversestr(str))
}
// remove numbers from a string
{
    let nam = "Veer1r32esh"

function checkstring (str) {
    let splitted = str.split("").filter(char=>isNaN(parseInt(char)))
    return splitted.join("")
}

// console.log(checkstring(nam))
}

{
    // sort the string based on the last number in the string
let name = 'is2 this1 Veereh4 a3';
const Strin=(str)=>{
    
    const sorting=str.split(" ").sort((a,b)=>a[a.length-1]-b[b.length-1])
    
    let newArr=[]
    for(let i=0;i<sorting.length;i++){
    const remove=sorting[i].split('').filter(ele=>isNaN(ele))
        newArr.push(remove.join(''))
    }
    return newArr.join(' ')
}
console.log(Strin(name))
}
/// string balance

function balancestringopenclose (str) {
    let stack = []
    let pairs = {
        ')':'(',
        '}':'{',
        ']':'['
    }

    for (let char of str) {
        if (Object.values(pairs).includes(char)){
            stack.push(char)
        } else if (Object.keys(pairs).includes(char)){
            if (stack.pop() != pairs[char]){
                return false
            }
        }
    }
    return stack.length === 0
}

// console.log(balancestringopenclose("{[]}"))

// K Position from the last
function rotateRight(arr, k) {
  let n = arr.length;
  k = k % n; // handle k > n
  console.log(arr.slice(-k),"ddddd")
  return arr.slice(-k).concat(arr.slice(0, n - k));
}

// Example
// console.log(rotateRight([1, 2, 3, 4, 5, 6, 7], 3));



// remove banned word and higest digit word return

const sentence = "Apple banana apple orange banana apple Mango banana.";
const banned = "apple";

const repetedword = (word,banned) =>{
     const words = sentence
    .toLowerCase()
    .replace(/[^\w\s]/g, "") // remove punctuation
    .split(" "); // split by spaces
    
    let freqMap = {}
    for (let word of words) {
    if (word === banned.toLowerCase()) continue;
        
    freqMap[word] = (freqMap[word] || 0) + 1;
    
  }
    let repetedwords = {}
    for (let resp in freqMap) {
        if (freqMap[resp] > 1) {
            repetedwords[resp]= freqMap[resp] 
        }
    }
    return repetedwords;
}

// console.log(repetedword(sentence,banned))

