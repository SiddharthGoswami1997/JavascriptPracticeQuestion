// Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front. 

let str="apple"
let str1
let str2
for(let i =0;i<=str.length;i++ ){

     str1= str.slice(str.length-i)
     str2= str.slice(0,str.length-i)
    //  str1= str.substring(str.length-i)
    //  str2= str.substring(0,str.length-i)
    
    }
    
    console.log(str1.concat(str2))