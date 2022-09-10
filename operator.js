// // //Arithmetic operators
// var a=8;
// var b=4;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
// console.log(++a);
// console.log(--b);

// // //assignment operator
// var x=8;
// var y=2;

// console.log(x=y);
// console.log(x+=y);
// console.log(x-=y);
// console.log(x*=y);
// console.log(x/=y);
// console.log(x**=y);


// // Comparison operators
// var e=10
// var f=20;
// console.log(e<f);
// console.log(e>f);
// console.log(e<=f);
// console.log(e>=f);
// console.log(e==f);
// console.log(e!=f);
// console.log(e!==f);
// console.log(10===10 ? "true": "false")


// //Logical operator


// console.log(10>1 && 1<10);
// console.log(10>1 || 1<1);


var btnElement= document.getElementById("div-btn")

var clickbtn= document.getElementById("btn")
const setcolor=()=>{
    const red= Math.floor(Math.random()*256);
    const green= Math.floor(Math.random()*256);
    const blue= Math.floor(Math.random()*256);

    var rgb= "rgb(" +red+","+green+","+blue+")";
    console.log(rgb);
    btnElement.style.backgroundColor = rgb;
}

clickbtn.addEventListener("click", setcolor);