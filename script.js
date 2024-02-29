var tl = gsap.timeline()

tl.from(".main img,.main p,.main button",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.5,
})

tl.from(".secondMain p",{
    y:100,
    opacity:0,
    delay:0.5,
    stagger:0.3,
})

tl.from(".img img",{
    scale:0,
    opacity:0,
    delay:0.5,
    stagger:0.3,
})

tl.from("h5",{
    scale:0,
    opacity:0,
    delay:0.5,
    stagger:0.3,
})

tl.from("h5",{
    y:30,
    repeat:-1,
    duration:0.7,
    yoyo:true,
})
