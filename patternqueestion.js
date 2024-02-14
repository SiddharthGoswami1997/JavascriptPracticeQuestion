// // * triangle length *******,height **********
//for(let x =0;x<=5;x++){

// for(let y=0;y<=x;y++){
//    let arr1 = ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*",]
//     console.log(arr1.slice(0,y));
// }

// }
// no. triangle length 012345,height 000000
// let sum="";
// for(let x =0;x<=5;x++){

//     for(let y=0;y<=x;y++){
//       sum +=y;
       
//     }
//     sum +="\n"
//     }
//     console.log(sum);


    // opposite triangle length 012345,height 000000
// let sum="";
// for(let x =0;x<=5;x++){

//     for(let y=5;y>=x;y--){
//       sum +="*" 
       
//     }
//     sum +="\n"
//     }
//     console.log(sum);


// no. opposite triangle length 54321,height 55555555
//     let sum="";
// for(let x =0;x<=5;x++){

//     for(let y=5;y>=x;y--){
//       sum +=y 
       
//     }
//     sum +="\n"
//     }
//     console.log(sum);




// no. opposite triangle height 54321,length 1111111
//     let sum="";
// for(let x =0;x<=5;x++){

//     for(let y=5;y>=x;y--){
//       sum +=x 
       
//     }
//     sum +="\n"
//     }
//     console.log(sum);


// no. opposite triangle height 54321,length 5555555
let sum="";
for(let x =5;x>=1;x--){

    for(let y=1;y<=x;y++){
      sum +=x 
       
    }
    sum +="\n"
    }
    console.log(sum);
