let str=("3452")
// console.log(typeof str.length)
// console.log(typeof str)
// console.log(typeof Number(str))
let sum=0;
for(let i=1;i<=str.length;i++){

sum+=Number(str[i-1])**str.length
}
if(sum==str){

    console.log("armstrong Number",str)
    
    }
    else{
        console.log("Not a armstrong Number",str)
    
    }
    