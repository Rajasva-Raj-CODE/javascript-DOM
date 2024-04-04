// function violet(){
//     document.body.style.backgroundColor="violet"
// }
// function indigo(){
//     document.body.style.backgroundColor="indigo"
// }
// function brown(){
//     document.body.style.backgroundColor="brown"
// }
// function green(){
//     document.body.style.backgroundColor="green"
// }
// function yellow(){
//     document.body.style.backgroundColor="yellow"
// }
// function orange(){
//     document.body.style.backgroundColor="orange"
// }
// function red(){
//     document.body.style.backgroundColor="red"
// }

// function visble1(){
//     document.querySelector("h2").innerText="Click the button to chnage violet color"
//     document.querySelector("h2").style.color="violet"

// }
// function visble2(){
//     document.querySelector("h2").innerText="Click the button to chnage Indigo color"
//     document.querySelector("h2").style.color="indigo"
    
// }
// function visble3(){
//     document.querySelector("h2").innerText="Click the button to chnage Brown color"
//     document.querySelector("h2").style.color="brown"
    
// }
// function visble4(){
//     document.querySelector("h2").innerText="Click the button to chnage Green color"
//     document.querySelector("h2").style.color="green"
    
// }
// function visble5(){
//     document.querySelector("h2").innerText="Click the button to chnage Yellow color"
//     document.querySelector("h2").style.color="yellow"
    
// }
// function visble6(){
//     document.querySelector("h2").innerText="Click the button to chnage Orange color"
//     document.querySelector("h2").style.color="orange"
    
// }
// function visble7(){
//     document.querySelector("h2").innerText="Click the button to chnage Red color"
//     document.querySelector("h2").style.color="red"
    
// }

let section = document.querySelector("section")
let buttons = document.querySelectorAll("button")
let p= document.querySelector("p")

buttons.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        section.style.background=ele.innerText
    })
    
    ele.addEventListener("mouseover",()=>{
        p.innerText=`click the button to get ${ele.innerText} background`
        p.style.color =ele.innerText
        ele.style.background=ele.innerText
        p.style.transform="rotateX(360deg)"
        p.style.fontSize="25px"
        ele.style.transform="scale(1.2)"
        ele.style.transition="2s"
        p.style.transition="2s"
    })

    ele.addEventListener("mouseout",()=>{
        p.innerText="Click the button to chnage BackgroundColor"
        ele.style.backgroundColor="black"
        p.style.transform="rotateX(-360deg)"
        p.style.fontSize="15px"
        p.style.color ="white"
        ele.style.transform="scale(1)"
        ele.style.transition="2s"
    })

})