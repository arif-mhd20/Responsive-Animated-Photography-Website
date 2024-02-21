var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + 30 + "px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x - 200 +"px"
    blur.style.top = dets.y -200 +"px"
})


var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter" , function(){
        crsr.style.scale  = 2
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave" , function(){
        crsr.style.scale  = 1
        crsr.style.border = "0px solid #d38e55"
        crsr.style.backgroundColor = "#d38e55"
    })
})



gsap.to("#nav",{
    backgroundColor: "#000",
    height:"100px",
    duration:0.7,
    opacity:0.8,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
       //markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1

    }

})

gsap.to("#main", {
    backgroundColor : "#000",
    scrollTrigger:{
        // backgroundColor: "#fff",
        trigger: "#main",
        scroller:"body",
        //markers: true,
        strat:"top -25%",
        end:"top -70%",
        scrub:2


    }
})


gsap.from("#about-us img, #about-us-in", {
    y:50,
    opacity:0,
    duration: 1,
    stagger:0.4,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        //markers:true,
        start: "top 70%",
        end: "top 65%",
        scrub:3

    }

})




// gsap.from(".card",{
//     scale:0.8,
//     duration: 1,
//     stagger:0.1,
//     opacity:0,
//     scrollTrigger:{
//         // backgroundColor: "#fff",
//         trigger: ".card ",
//         scroller:"body",
//         //markers: false,
//         strat:"top 70%",
//         end:"top 65%",
//         scrub:1,


//     }
// })


gsap.from("#page3 p",{
    scale:0.8,
    opacity: 0,
    duration: 1,
    // stagger:0.1,
    scrollTrigger:{
        trigger: "#page3",
        scroller: "body",
        //markers:true,
        start: "top 70%",
        end: "top 68%",
        scrub:1

    }

})

gsap.from("#green-div h4",{
    scale:0.8,
    opacity: 0,
    duration: 1,
    // stagger:0.1,
    scrollTrigger:{
        trigger: "#green-div",
        scroller: "body",
        //markers:true,
        start: "top 70%",
        end: "top 68%",
        scrub:1

    }

})



gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        //markers: true,
        start:"top 55%",
        end: "top 45%", 
        scrub:5

    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
       // markers: true,
        start:"top 55%",
        end: "top 45%", 
        scrub:5

    }
})
 

// gsap.to("#green-div h4 , #green-div img", {
//     backgroundColor: "#000",
//     height:"100px",
//     // duration:0.7,
//     // opacity:0.8,
//     scrollTrigger:{
//         trigger:"#green-div",
//         scroller:"body",
//        //markers:true,
//         start:"top -10%",
//         end:"top -11%",
//         scrub:1

//     }

// })

// gsap.to("#page3 p ", {
//     // backgroundColor : "#000",
//     y:20,
//     scale:0.8,
//     opacity: 0,
//     duration: 1,
//     scrollTrigger:{
//         // backgroundColor: "#fff",
//         trigger: "#page3",
//         scroller:"body",
//         //markers: true,
//         strat:"top -50%",
//         end:"top -41%",
//         scrub:1


//     }
// })


gsap.from("page4 h1, #page4 #elem img",{
    y:50,
    duration: 1,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
        // backgroundColor: "#fff",
        trigger: "#page4 ",
        scroller:"body",
        //markers: true,
        strat:"top 75%",
        end:"top 70%",
        scrub:1,


    }
})