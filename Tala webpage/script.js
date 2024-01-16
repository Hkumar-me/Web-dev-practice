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