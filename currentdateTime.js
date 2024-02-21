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
let today= new Date();
// let day = today.getDate()
// let Sday = today.getDay()
// let Mday = today.getMonth()
// let Yday = today.getFullYear
// console.log(day)
// console.log(Sday)
// console.log(Mday)
let theday=Number(today)
let christmas=today.setFullYear(2024,11,25)
// console.log("num",christmas);
// console.log(christmas)
// console.log(theday)
// let calculator= christmas-theday;
// console.log(calculator)
// let daysleft=(calculator/(1000*60*60*24))
// console.log("day before christmas",daysleft)






// // console.log(today-Number(today.setF(2023)))
console.log(Number(today.Date)-(today.setFullYear(2024,11,25)))
console.log("vbvb", (today.setFullYear));
console.log(Number(today));
// console.log(Number(today)-today.setFullYear(2024,11,25))


var myNum= 12;
// console.log("new", myNum++);
var myNum1 = ++myNum;
console.log("newww", myNum1);
console.log("myNum", ++myNum +myNum++);