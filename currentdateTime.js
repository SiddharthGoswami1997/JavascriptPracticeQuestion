// let today= new Date;
// // let print = today.getDate();
// // let print = today.getDay();
// // let print = today.getFullYear();
// // let print = today.getMonth();
// // let print = today.getMilliseconds();
// // let print = today.getMinutes();
// // let print = today.getDay();
// //  let print = today.getSeconds();
// //  let print = today.getMinutes();
// //  let print = today.getHours();


// // // console.log("today is ",print);
// // console.log(print);
// // console.log(typeof print);


// // Write a JavaScript program to display the current day and time in the following format.  
// // Sample Output : Today is : Tuesday.
// // Current time is : 10 PM : 30 : 38
// let week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// let output=new Date;
// let weekday=output.getDay();
// console.log("Today is :",week[weekday])
// if(output.getHours()>12){
//     let clock=output.getHours()-12;
//     console.log("Time is:"+clock+"PM"+":"+output.getMinutes()+":"+output.getSeconds())
// }
// else {
//     let clock=output.getHours();
//     console.log("Time is :"+clock+"AM"+":"+output.getMinutes()+":"+output.getSeconds())
// }



// // Write a JavaScript program to get the current date.  
// // Expected Output :
// // mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
// let tday = today.getDate();
// let tmonth = today.getMonth();
// let tyear = today.getFullYear();
// if(tmonth<=9){
// if(tmonth==9 ){

//     console.log(tday,"/",tmonth+1,"/",tyear)
    
// }
// else{
    
//     console.log(tday,"/","0",tmonth+1,"/",tyear)
// }


// }
// else {
    
//     console.log(tday,"/",tmonth+1,"/",tyear)

// }


// Christmas days left calculator
let fund = new Date()
console.log(fund)
let delhi = fund.setFullYear(2023);
// console.log(typeof delhi);
 let tday = fund.getDate();
//  let tmonth = fund.getMonth();
//  let tyear = fund.getFullYear();

console.log(tday)
console.log(delhi)
console.log(typeof fund.setFullYear())

let ms = Date.now();
console.log(ms)
