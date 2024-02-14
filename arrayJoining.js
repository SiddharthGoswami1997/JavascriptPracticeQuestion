let a1= ["1","2","3","4","5"]
let a2= ["11","22","33","44","55"]
let a3=[]
for(let i=1;i<=a2.length;i++){
    

    a3=a1.splice(4,0,a2[i-1])
    //  a3= a1.push(a2[i-1])
    
    //  let a4=a3.length;
    //  console.log(a4);
    
}
for(let j=1;j<=a1.length;j++){
    

    // a3=a1.splice(4,0,a2[i-1])
   a3.push(a1[j-1])
    
    
    
}



console.log("a1",a1)
console.log("a3",a3)


// for(let x=1;x<=a3.length;x++){

//     console.log(a3[x-1])}
let sum=0
for(let x=1;x<=a1.length;x++){

sum+=Number(a1[x-1])
}
console.log("Sum is",sum);

console.log(typeof Number(a1[1]));

//FACTORIAL

let multi=1
for(let y=1;y<=a1.length;y++){

multi*=y
}
console.log("Product(Factorial) is",multi);
