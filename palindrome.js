let str="121"
let newStr=""
for(let i=str.length;i>=1;i--){

newStr+=str[i-1]

}
console.log(str)
console.log(newStr)
if(str===newStr){
console.log("It is a Palindrome",str)

}
else{
    console.log("not a Palindrome",str)
}