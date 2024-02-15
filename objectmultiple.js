// function info(a,b,c){
// const student={
// name:a,
// age:b,
// email:c

// }
// console.log(student)
// }



// info("sid",23,"abc@google.com")
// info("ritik",33,"kbc@google.com")
// info("Raj",34,"gtr@google.com")
// info("rakkesh",40,"sdsd@yahoo.com")
// info("angel",23,"heaven@paradise.com")


// var item = {
//     description: 'Some Item',
//     price : '0.00',
//     srate : '0.00',
//     color : 'red',
//     ...
//     ...
//  }






// function info(name,age,email){
//     const student={
//     a:name,
//     b:age,
//     c:email
    
//     }

//     console.log(student)
//     console.log(typeof student)

//         }
    
    
    
//     info("sid",23,"abc@google.com")
//     info("ritik",33,"kbc@google.com")
//     info("Raj",34,"gtr@google.com")
//     info("rakkesh",40,"sdsd@yahoo.com")
//     info("angel",23,"heaven@paradise.com")


for(let i=1;i<=3;i++){


let fname= prompt("enter name")
let age= prompt("enter age")
let email= prompt("enter email")

let Astudent ={
    student:{[i]:{

        a:fname,
        b:age,
        c:email
    }
    }

}
console.log(Astudent);

}

