let tl = gsap.timeline();

gsap.set(".a", {y:10, opacity:0})
gsap.set(".right img", {opacity:0, scale:1.6})

tl 
    .from(".left",{
        width:0,
        duration:.3,
        ease:Expo.easeInOut
    })
    .from(".right",{
        width:0,
        duration:.1,
        ease:Expo.easeInOut
    })
    .to(".left .a",{
        delay:-.1,
        y:0,
        opacity:1,
        duration:1,
        ease:Expo.easeInOut
    })
    .to(".right .a",{
        y:0,
        opacity:1,
        duration:1,
        ease:Expo.easeInOut
    })
    .to(".right img",{
        opacity:1,
        scale:1
    })