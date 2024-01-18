let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#home",
        scrub: 1,
        start: "top top",
        pin: true
        // markers:true
    }
})


tl
    .to("#home #circle #btm img", {
        rotate: "-180deg",
        scale:.5,
        duration: 1,
        ease: Power1,
        stagger: .1
    }, "eksaath")
    .to("#home #circle #top img", {
        scale:.5,
        duration: 1,
        ease: Power1,
    }, "eksaath")
    .to("#home #overlay .centerImg .centerInsideImg img", {
        scale: "0",
        duration: 1,
        ease: Power1
    }, "eksaath")
    .to("#home #overlay .centerImg h1", {
        opacity: "0",
        duration: 1,
        ease: Power1
    }, "eksaath")
    .to("#smCircle", {
        scale:0,
        duration: 1,
        ease: Power1
    }, "eksaath2")
    .to("#circle", {
        scale:0,
        duration: 1,
        ease: Power1
    }, "eksaath2")