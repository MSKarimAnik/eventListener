// ............1st Option.apply.............
// .........akta akta kora seclect kora

// document.querySelectorAll(".myButton")[0].addEventListener("click", function(){
//     var text = this.innerHTML
//     document.querySelector("h1").innerHTML = text + "is clicked";
// });

// document.querySelectorAll(".myButton")[1].addEventListener("click", function(){
//     var text = this.innerHTML
//     document.querySelector("h1").innerHTML = text + "is clicked";
// });
// document.querySelectorAll(".myButton")[2].addEventListener("click", function(){
//     var text = this.innerHTML
//     document.querySelector("h1").innerHTML = text + "is clicked";
// });

// .......2nd Option.apply.........aksathe sob select Kora ..............

// for (let i=0; i <3; i++){
//     document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
//         var text = this.innerHTML
//         document.querySelector("h1").innerHTML = text + "is clicked";
//     });
// }

// .......3rd Option.apply.........aksathe sob select Kora ..............
let len = document.querySelectorAll(".myButton").length
for (let i=0; i <len; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
        var text = this.innerHTML
        document.querySelector("h1").innerHTML = text + "is clicked";
    });
}