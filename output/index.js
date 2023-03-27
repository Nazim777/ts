"use strict";
// function multiply(a:number,b:number){
//     return a*b
// }
// console.log(multiply(2,3))
// implicit
// veriable
// let a:string 
// let b:number
// a='hello'
// b=1
//union
// let a:string | number
// a= 'hello'
// a=1
//array
// let a:string[] = []
// a.push('hello')
// let b:number[] = []
// b.push(2)
// union
// let a:(string|number)[] = []
// a.push('hello')
// a.push(1)
// console.log(a)
// object
// two way to use object
// let a:object
// a={
//     name:'john doe',
//     email:'johndoe@gmail.com',
//     isValid:true
// }
// let b:{
//     name:string,
//     password:number,
//     isValid:boolean
// }
// b = {
//     name:'hello',
//     password:123456,
//     isValid:true
// }
//dynamic type
// veriable
// let a:any
// a=1
// a='hello'
// array
// let a:any[] = []
// a.push('hello')
// a.push(1)
// object
// let a :{
//     name:any,
//     password:any,
//     isValid:any
// }
// a={
//     name:'helo',
//     password:123456,
//     isValid:true
// }
// how to use function
// ? means its optional
// if the function does not return anything in typescript it will return void
// function myFunc(a:string,b:string, c?:string){
//     console.log(c)
//     console.log(`hello ${a} and ${b}`)
// }
// myFunc('A','B','C')
// if the function return anything it will return number or string
// function myFunc(a:number,b:number, c:string){
//     console.log(c)
//     return a+b
// }
// myFunc(10,20,'C')
//type aliases
// const userDetails = (id: string | number , user:{name:string,isValid:boolean})=>{
//     console.log(id,user)
// }
// userDetails(1,{name:'john',isValid:true})
// type stringornumber = string | number
// type userType = {
//     name:string,
//     isValid:boolean
// }
// const userDetails = (id: stringornumber , user:userType)=>{
//     console.log(id,user)
// }
// userDetails(1,{name:'john',isValid:true})
// function signature
// let add:(a:number,b:number,c:string)=>number // it a function signature 
// add =(a:number,b:number,c:string)=>{
//     if(c==='add'){
//         return a+b
//     }else{
//         return a-b
//     }
// }
// console.log(add(6,2,'add'))
// console.log(add(6,2,'minus'))
// let hello :(a:string,b:string)=>void
// hello = (a:string,b:string)=>{
//     console.log(a,b)
// }
// hello('A','B')
//interface
// interface rectangleOption {
//     height:number;
//     width:number
// }
// const drawRectangle = (option:rectangleOption)=>{
//    let height = option.height
//    let width = option.width
// }
// drawRectangle({
//     height:40,
//     width:20
// })
// generics
// interface user<T> {
//     status:boolean;
//     country:string;
//     data:T
// }
// const userData :user<object> = {
//     status:true,
//     country:'Bangladesh',
//     data:{
//         name:'john doe',
//         email:'john@gmail.com'
//     }
// }
// console.log(userData)
// enum types
// enum countryVariation  {Bangladesh,America,England}
// interface user<T> {
//     status:boolean;
//     country:countryVariation;
//     data:T
// }
// const userData :user<object> = {
//     status:true,
//     country:countryVariation.Bangladesh,
//     data:{
//         name:'john doe',
//         email:'john@gmail.com'
//     }
// }
// console.log(userData)
