// console.log(3+5)
// let x=3
// let y=4
// console.log(x+y)
// let num=15
// console.log(num)
// let newnum=num++;

const { rejects } = require("assert")
const { promises } = require("dns")
const { resolve } = require("path")
const { json } = require("stream/consumers")

// console.log(newnum)

// console.log(`the value of x:${x} and the value of the y:${y}`); 



//for in loop :- this loop return the index of the arrays;

// var m=[1,2,3,4,5]
// for(let elem in m)
// {
//     console.log(elem);
// }


//for of loop:- this loop return the value of in the arrays;


// for(let elem of m)
// {
//     console.log(elem)
// }

//forEach():- 

// var m=['a','b','c','d']
// m.forEach(x=(elem,index)=>{
//     console.log(`the element of array is:${elem} and the index of element is:${index}`)
// })

//push:-
// m.push('e')
// console.log(m)
 //unshift:-
// m.unshift('o')
// console.log(m)
 //shift:-
// m.shift('a')
// console.log(m)
 //pop:-
// m.pop('m')
// console.log(m)
 //splice:-its retiurn the empty array because we dont delete any element in the arrays if we delete any element in 
 //array then the deleted element add into the new array and return the new delted array
// var n=m.splice(2,1,'v')
// console.log(m)
// console.log(n)

// console.log(m.lastIndexOf(2))


//indexof:-return the index number of the element

// var m=['jan','march','march','apr','may']
// let x=m.indexOf('march')
// if(x!=-1)
// {
//     let v=m.splice(1,Infinity)
//     console.log(m)
//     console.log(v)
// }
// else{
//     console.log("No such found")
// }


//map method():- this method return the new array with result 
// map method is chainble because we use method in method like we can add reduce,filter and sort methods in map methods


// var x=[1,2,3,4,5]
// var xx=x.map((elem,index,x)=>{
//     return `${elem} and its square is ${elem**2}`
// })
// console.log(xx)


//forEach;- method return the undefined value while map return the new array without mutating old array
// var x=[1,2,3,4,5]
// var xx=x.forEach((elem,index,x)=>{
//     return `${elem} and its square is ${elem**2}`
// })
// console.log(xx)


// var x=[4,9,16,25,36,49,64]
// var sqr=x.map((elem)=>Math.sqrt(elem)
// ).filter((elem)=> elem>5
// ).reduce((acc,elem)=>{
//     return acc+=elem;
// })
// console.log(sqr)

//reduce ():- reduce method convert the 3D and 2D array into the 1D array
// var m=[1,2,3,4,5]
// var n=m.reduce((x,e)=>{
//     return x*=e
// },6)
// console.log(n)



//convert 2D array into The 1D array

// var x=[[1,2],
// [3,4],
// [5,6],
// [6,[7,8]]
// ]
// let y=x.reduce((acc,ele)=>{
//     return acc.concat(ele);
// })
// console.log(y)


//slice method():- slice method divide the string into the sub part and return the new string

// var x="hello vishal pote"
// var m=x.slice(0,8)
// console.log(m)

//substring():- substring metod and the sluce method are simmilar but substring method do not accept thenegative index whule
//the slice method accept the negative index 

// var x="vishal pote"
// var y=x.substring(2,6)
// console.log(y)

//substr():- method take two parameter 1 is starting number and another is length of the extract part

// var x="vishal bhausaheb pote"
// var y=x.substr(1,5)
// console.log(y)

//Replace():- replace method change the specific string in string but the string is multiple time then replace method 
//only change the firts string not other s
//the replace method is case sensative 

// var x="vishal pote vishal "
// var y=x.replace('vishal','balu')
// console.log(y);

//charAt(position):- charat return the charcter of the index positio

// var x="vishal pote"
// var y=x.charAt(9)
// var z=x.charAt(10)
// console.log(y)
// console.log(z)

//charcodeAt():- its return the unicode of the charcter of the position

// var x="vishal"
// var y=x.charCodeAt(0)
// console.log(y)

//str[]:-return the new string
// var x="vishal pote"
// console.log(x[5])


//touppercase and tolowercase():-its convert the string into the upper case and lowwer case

// var x="vishal pote"
// var y =x.toUpperCase()
// console.log(y)
// var z=y.toLowerCase()
// console.log(z)

//concat():- are used to add two string and return the new string
// var x="vishal"
// var y="pote"
// console.log(x.concat(y))


//trim():- trim method are used to remove the white space in string from starting and ending white spaces
//not innner 


// var x="           vishal            pote                "
// var y=x.trim()
// console.log(y)


//split():- its used to convert the string into the array
// var s="javascript"
// console.log(s.split())

//Date and time:-date object represent the single moment in time it is platform independent formaat and its start
//from the 1 jan 1970 its cantain milliseconds

// console.log(new Date())


//their are four way to display the time method
// var x=new Date()
// var y=new Date(10000)
// var z=new Date(2000,5,25,12,30,20,20)
// var m=new Date(12,23,4)
// console.log(x.toLocaleDateString())
// console.log(y.toLocaleDateString())
// console.log(z.toLocaleDateString())
// console.log(m.toLocaleDateString())
// console.log(new Date().toString())
// console.log(Date.now())

//Date.now():- return the milliseconds from 1 jan 1970 to now


// var cd=new Date()
// console.log(cd.toLocaleDateString())
// console.log(cd.getFullYear())
// console.log(cd.getDate())
// console.log(cd.getDay())
// console.log(cd.getMonth())
// console.log(cd.getMinutes())
// console.log(cd.getMilliseconds())
// console.log(cd.getHours())
// console.log(cd.getSeconds())


//math.random():-return the number between the 0 to 9

// console.log(Math.floor(Math.random()*10))


//Dom():- document object module are the child of the windows object where windows object is the 
//main cantainer and the globel object 


//their are three main hilds of the window object 
//DOM:-document->body&head
//BOM:-navigator,screen,location,frames,history,xml,http request
//Javascript:-array,function,object

//thire are three type to of dom
//document.getelementbyid(#id)
//document.getelementbyName(#id)
//document.getelementbyTagname(#id)
//document.getelementbyclass(#id)


//document.queryselector():-its return the singal matching element 

//document.queruselectorall():-its return the all matching element

//time event in js:- windows object allow to exuction of function at specific time

//theire are four way to handle time evenet

//setTimeout():-
//setInterval():-
//clearTimeout():-
//clearInterval():-



//setyTimeout(function,millisec):-
// var name1=document.getElementById('name')
// var btn=document.getElementById('btn')
// const x=()=>{
// setTimeout(()=>{
//     name1.innerHTML="Vishal"
// },1000)
// }
// btn.addEventListener('click',x)



//setInterval(function,ms):-this method excute contineously until you stop it


// var name1=document.getElementById('para')
// var btn1=document.getElementById('btn1')
// var btn=document.getElementById('btn')
// let stop;
// const x=()=>{
//     name1.innerHTML="Loading.....";
//     let num=0;
// stop=setInterval(()=>{
//     name1.innerHTML=`${num}`
//     num++;
// },1000)
// }
// btn.addEventListener('click',x)
// btn1.addEventListener('click',()=>{
//     clearInterval(stop);
// })




//object in javascript:-object in javascript nothoing but the key value pair
//its store the variable and function together called as object 

// let info={
//     name:"vishal",
//     age:21,
//     class1:"Msc(CA)",
//     all()
//     {
//         console.log(`my name:${info.name} and age:${info.age} and class:${info.class1}`)
//     }
// }
// console.log(info.name)
// console.log(info.age)
// console.log(info.class1)
// info.all()



//object inside the objects


// let info={
//     persnol:{
//         name:"vishal",
//         father:"Bhausaheb",
//         Surname:"pote"
//     },
//     age:21,
//     class1:"Msc(CA)",
//     all()
//     {
//         console.log(`my name:${info.persnol.name} and age:${info.age} and class:${info.class1}`)
//     }
// }
// console.log(info.persnol.name)
// console.log(info.persnol.father)
// console.log(info.persnol.Surname)
// console.log(info.age)
// console.log(info.class1)
// info.all()




//Array destructuring:- used for unpack the element in one array to another array 

//but in case of array destructuring position is matter

// const num=[1,2,3,4,5]
// const [first,sec,third]=num

// console.log(first)
// console.log(sec)
// console.log(third)


 //object destructring :- is same as the array destructring ..

//  const info={
//     name:"vishal",
//     age:21,
//     class1:"msc"
//  }

//  const name=info.name
//  const age=info.age
//  const class1=info.class1
//  console.log(name)
//  console.log(age)
//  console.log(class1)


 //another way of object destructring:-


// let {name,age,class1}=info;
// console.log(name)
// console.log(age)
// console.log(class1)


// console.log(`name:${name} age:${age} and class:${class1}`)


//we can dynamic value into the object just put the [] in that variable for eg.


// const name="vishal"
// const info={
//     [name]:"how are you man",
//     age:21
// }
// console.log(info)


// if the name of the key and value are same then no need to write the value simply write the key


// const name="vishal"
// const age=21
// const info={name,age}
// console.log(`name:${name} age:${age}`)



//spread oparator:-

//if we declare array and i want used array in next array but i cant add one one array so i use the spread opearator
//just simple put the (...arrayname):-this is the spread oparator


// let arr=[1,2,3,4,5,6,7]
// let arr1=[...arr,8,9]
// console.log(arr1)



//ES7 relese two new method tht is the array.incluedes and the exponetioal method(**)


//array.includes(elem):-its return true if the element is present in the array otherwise return the false

// let arr=[1,2,3,4,5]
// let x=arr.includes(1)
// console.log(x)


//(**) method 

// console.log(2**3)


//ES8->2018->features

//1:-PadStart(Num):- this gives the padding to string at the front side

// let s="vishal".padStart(5)
// console.log(s)


//2:-PadEnd(num):- this method give the padding to the string at the end


// let s1="vishal".padEnd(5)
// console.log(s1)


//object.values():- its return the values in object but in the form of  array

// let info={"name":'vishal',"age":21}
// console.log(Object.values(info))



//object.entries():- its return the all value in the object int hte form of the array


// let info={"name":'vishal',"age":21}
// console.log(Object.entries(info))



//ES9=>2019=>features

//1:array.flat(number of level):-this method convert the 2D or 3D array into the 1D array

// let arr=[[1,2],[2,4],[5,6],[7,[8,9,[10,11]]]]
// console.log(arr)


// console.log(arr.flat())
//this method convert the array into the 1d form not array in array

// console.log(arr.flat(2))
//this method convert the array into the second level


//but the if we add array.flat(infinity):-this method convert the 2d or 3d array into 1d array

// console.log(arr.flat(Infinity))



//object.formEntries():- this method return the object with the values

// let obj={name:'vishal',age:21}
// console.log(Object.entries(obj))//this method convert into the array

// let x=Object.entries(obj)
// console.log(Object.fromEntries(x))//:- this method convert the array form into the object form



//nullish coalscing:- this method like a ternary oparator if the right hand side value are null or undefind 
//then its return the left side value other and left side hand value null or undefind its return righ side hand value


// let x=null??"left side"
// console.log(x)


// let m="right side"??null
// console.log(m)


//callback function():- we can pass function as parameter into the another function called as the callback function


// const sum=(a,b)=>{
//     return a+b
// }

// const sub=(a,b)=>{
//     return a-b
// }
// const mult=(a,b)=>{
//     return a*b
// }


// const calculator=(num1,num2,parameter)=>
// {
//     return parameter(num1,num2)
//     // return sum(5,2)
// }
// console.log(calculator(5,2,mult))
// console.log(calculator(5,2,sub))
// console.log(calculator(5,2,sum))



// const sum=(a,b)=>{
//     return a+b
// }

// const x=(n1,n2,para)=>{
//     return para(n1,n2);
// }
// console.log(x(4,5,sum))



//Hoisting in js:- its means thatv its machanism where variable and function declaration moved 
//at the top of their scope

//but after es6 hoisting is avoid because of the let keyword


// console.log(name)
// var name;
// name="vishal"

//if we use the var its give u the undefined but u use the let keyword then its give the error


// console.log(name)
// let name;
// name="vishal"


//scope cahin and the lexically scoping:-its nothing but the resolve the value of the variablename in js


//lexical scoping:-its means that the child function can access the variable of the parent function
//but the parent function can not access the variable of the child function


// let x=10

// const first=()=>{
//     let y=20

//     const second=()=>{
//         let z=30
//     }
//     second()
//     console.log(x+y);  //z can not be access because parent function can not access the child function variable
// }
// first()



//closures in js:- its nothing but the combination of the function bundle its means that the access to
//outer function scope in innner function


//its means that the child can access the properties of the parent function


// const outer=(a)=>{
//     let b=20

//     const inner=()=>{
//         let sum=a+b
//         console.log(`sum of the number is ${sum}`)
//     }
//     inner()
// }
// outer(5)



//another example


// const outer=(a)=>{
//     let b=20

//     const inner=()=>{
//         let sum=a+b
//         console.log(`sum of the number is ${sum}`)
//     }
//     return inner
// } 
// const x=outer(6)
// console.dir(x)



//use strict mode in js

// "use strict"

// x="vishal"
// console.log(x)



//synchrounus function :- it means that the it handle one function at time  

//eg.

// const func2=()=>{
//     console.log("function 2")
// }
// const func1=()=>{
//     console.log("function 1")
//     func2()
//     console.log("function 1")
// }
// func1()



//asynchronus function:- its means that the program doen not stop excution of the other function 
//it can handle the all function asynchrounsly


//eg.

// const func2=()=>{
//     setTimeout(()=>{
//         console.log("function 2")
//     },2000)

// }
// const func1=()=>{
//     console.log("function 1")
//     func2()
//     console.log("function 1")
// }
// func1()


//function curriying :- is nothing but the function ,insted of taking all argument its take one argument and return 
//the new function with anothe rargument

//eg.


// function sum(num1){
//     return function(num2){
//         return function(num3)
//         {
//             console.log(num1+num2+num3)
//         }
//     }
// }
// sum(2)(3)(5)



//other way

// const sum=(num1)=>(num2)=>(num3)=>{console.log(num1+num2+num3)}
// sum(1)(2)(3)



//json.stringfy():- this method convert the javascript object into the the json string

//eg.


// let obj={key1:"vishal",key2:true,key3:2}
// let x=JSON.stringify(obj)
// console.log(x)
// console.log(typeof(x))

//json.parse():-this method are used to convret the string into the json object

//eg.
// let m=JSON.parse(x)
// console.log(m)
// console.log(typeof(m))



//promises:-promise are use to handle the multiple asynchronus oparation at a time insted of callback hell

//eg.

// const promis=new Promise((resolve,rejects)=>{
//     const x=2
//     const y=3

//     if(x===y)
//     {
//         resolve()
//     }
//     else
//     {
//         rejects()
//     }
// });

// promis.then(()=>{console.log("success")}).catch(()=>{console.log("both are not equal")})



//their are four main step involve in promises:-

//fulfilled: Action related to the promise succeeded
// rejected: Action related to the promise failed
// pending: Promise is still pending i.e. not fulfilled or rejected yet
// settled: Promise has been fulfilled or rejected


//async:- keyword are always return the promises and other value are wrapped in resoleved promise


//eg.

// async function x()
// {
//     return Promise.resolve(1);
// }
// x().then(()=>{console.log("hello")})


//await:- keywod are used for the wait until the promise are settele or return its result

//let value=await promises


//eg.


// async function x()
// {
//     let prom=new Promise((resolve,rejects)=>{
//         setTimeout(() => {
//             console.log("done!")
//         }, 1000);
//     })
//     let result=await Promise
//     return result
// }
// x()


