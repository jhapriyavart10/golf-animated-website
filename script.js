var crsr= document.querySelector("#cursor")
var blur= document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})
document.addEventListener("mousemove",function(dets){
    blur.style.left = dets.x-75 +"px"
    blur.style.top = dets.y- 75 +"px"
})



gsap.to("#nav",{
    backgroundColor : "#000",
    height:"120px",
    duration :0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller: "body",
       // markers:true,
        start:"top -10%",
        end: "top -11%",
        scrub:true,
    }
})
gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller: "body",
       // markers:true,
       start:"top -40%",
       end: "top -80%",
       scrub:2,

    }
})    
