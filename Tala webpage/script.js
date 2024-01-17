
console.log("hi")
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();





console.log("hi")





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
        scroller:"#main",
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
        scroller:"#main",
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
        scroller:"#main",
        scrub:1
    }
})
gsap.to("#page5 .slider .slider2 h1",{
    translateX:"-50%",
    // duration:4,
    scrollTrigger:{
        trigger:"#page5",
        scroller:"#main",
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