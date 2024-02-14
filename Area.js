// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7. also do using function
// The semi-perimeter of triangle ABC = s = (a + b + c)/2

// Then, the area of triangle ABC = √[s × (s – a) × (s – b) × (s – c)].
// let h= 5;
// let l=6
// let b=7
// let s=0
// let area=0
// s=(l+b+h)/2

// area= (s*(s-l)*(s-h)*(s-b))^(1/2);
// alert("Triangle area"+" "+area)

let s
function tarea (l,b,h){
    
    s=(l+b+h)/2
console.log("area of triangle", (s*(s-l)*(s-h)*(s-b))^(1/2))
}


tarea(15,12,13);
tarea(1,2,3);
tarea(1,2,3);