function homeAnimation(){
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            scrub: 1,
            start: "top top",
            end: "top -150%",
            pin: true,
            markers:true
        }
    })
    
    
    tl
        .to("#home #circle #btm img", {
            rotate: "-180deg",
            scale:.5,
            ease: Power1,
            stagger: .1
        }, "eksaath")
        .to("#home #circle #top img", {
            scale:.5,
            ease: Power1,
        }, "eksaath")
        .to("#home #overlay .centerImg .centerInsideImg img", {
            scale: "0",
            ease: Power1
        }, "eksaath")
        .to("#home #overlay .centerImg h1", {
            opacity: "0",
            ease: Power1
        }, "eksaath")
        .to("#home #overlay .gallery h1", {
            top:"150%",
            ease: Power1
        }, "eksaath")
        .to("#home #overlay .gola", {
            top:"50%",
            scale:"2",
            ease: Power1
        }, "eksaath")
        .to("#home #overlay .pinkFlare h1", {
            bottom:"2%",
            rotate:"0deg",
            ease: Power1
        }, "eksaath2")
        .to("#home #overlay .pinkBox", {
            top:"0%",
            ease: Power1,
            duration:2
        }, "eksaath2")
        .to("#home #overlay .gola", {
            opacity:"0",
            ease: Power1,
            duration:2.3
        }, "eksaath2")
        .to("#smCircle", { 
            scale:0,
            duration: 2,
            ease: Power1
        }, "eksaath2")
        .to("#circle", {
            scale:0,
            duration: 2,
            ease: Power1
        }, "eksaath2")
        .to("#home #overlay .pinkBox", {
            top:"-60%",
            ease: Power1
        }, "eksaath3")
        
}

function page2Animation(){
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page2",
            scrub: 1,
            start: "top top",
            end: "top -150%",
            pin: true,
            // markers:true
        }
    })

    tl2
       .to("#page2 .page2Top .pi",{
        top:"50%"
       }, "same")
       .to("#page2 .page2Top .pur",{
        top:"50%", 
        delay:.2
       }, "same")
       .to("#page2 .page2Top .pi, #page2 .page2Top .pur",{
        left:"50%"
       }, )
       .to("#page2 .page2Top .circle",{
        scale:20
       },"a" )
       .to("#page2 .page2btm .page2btmCount #page2btmCount1",{
        top:"0%",
        duration:2
       },"a" )
       .to("#page2 .page2btm .page2btmCount #page2btmCount0",{
        top:"-100%",
        duration:2
       },"a" )
       .to("#page2 .page2Top>h1",{
        left:"-180%",
        duration:2
       },"b" )
       .to("#page2 .page2btm h1#one",{
        opacity:0,
        duration:1
       },"b" )
       .to("#page2 .page2btm h1#two",{
        opacity:1,
        delay:.6
       },"b" )
       .to("#page2 .page2btm .page2btmCount #page2btmCount1",{
        top:"-100%",
        duration:2
       },"c")
       .to("#page2 .page2btm .page2btmCount #page2btmCount2",{
        top:"0%",
        duration:2
       }, "c")
      
}


// homeAnimation()
page2Animation()