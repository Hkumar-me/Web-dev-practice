const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});




















let fullScreenMenu = document.querySelector("#full-screen-menu");
let menu = document.querySelector(".nav i");

let flag = 0;
menu.addEventListener("click", ()=>{
    if(flag == 0){
        fullScreenMenu.style.top = "0%";
        document.querySelector(".nav").style.color ="#222";
        flag = 1;
    }
    else{
        fullScreenMenu.style.top = "-100%";
        document.querySelector(".nav").style.color ="#dadada";
        flag = 0;
    }

})


let tl = gsap.timeline();

tl
  .from("#page1>h1", {
    y:100,
    duration:.5
  })
  .from("#page1 h2, #page1 .page1-right h1",{
    opacity:0,
    y:50,
    duration:.8,
    delay:-.3
  })
gsap.to("#page1 img",{
    scale:1,
    duration:1,
    scrollTrigger:{
        trigger:"#page1 img",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 20%",
        scrub:1

    }
})
gsap.to("#page2 .textP2 h1",{
    opacity:1,
    rotateX :0,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 .textP2 h1",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 60%",
        scrub:1
    }
})  





gsap.to("#page5 .slider .slider1 h1",{
    translateX:"-300%",
    // duration:4,
    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        scrub:1
    }
})
gsap.to("#page5 .slider .slider2 h1",{
    translateX:"-50%",
    // duration:4,
    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        scrub:1
    }
})









let yimg = document.querySelector("#page6 .imgMove .yesImg img")
let yesImg = document.querySelector("#page6 .imgMove .yesImg")


let nimg = document.querySelector("#page6 .imgMove .noImg img")
let noImg = document.querySelector("#page6 .imgMove .noImg")

yesImg.addEventListener("mousemove", (dets)=>{
    yimg.style.opacity = 1;
    yimg.style.left = `${(dets.x-100)}px`
    yimg.style.top = `${(dets.y-500)}px`
})
yesImg.addEventListener("mouseleave", (dets)=>{
    yimg.style.opacity = 0;
})

noImg.addEventListener("mousemove", (dets)=>{
    nimg.style.opacity = 1;
    console.log(dets.x)
    nimg.style.left = `${(dets.x-900)}px`
    nimg.style.top = `${(dets.y-500)}px`
})
noImg.addEventListener("mouseleave", (dets)=>{
    nimg.style.opacity = 0;
})