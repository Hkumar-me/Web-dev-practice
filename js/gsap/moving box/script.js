gsap.to("#box", {
    x:100,
    y:100,
    duration:3,
    onStart: function(){
        console.log("Box will start moving now...");
    },
    onProgress:function(){
        console.log("Box is moving...")
    },
    onUpdate:function(){
        console.log("moving..");
    },
    onComplete:()=>{
        console.log("Box has stopped")
    }

})