import './style.css'
import {gsap} from "gsap";

//  Tween
// gsap.from("#demo" , {duration:1 , opacity:0});
// gsap.from("#title" , {duration:1 , opacity:0, scale:0, delay:1})
// gsap.from("#freds span", {duration:.5, delay:2, x:100, y:100, scale:0, stagger:.1})
// gsap.from("#time" , {duration:1, delay:4, opacity:0 , xPercent:100})


//  Timeline
gsap.set("#demo" , { scale:.7,})

gsap.timeline()
    .from("#demo" , {opacity:0, duration:1,})
    .from("#title" , {opacity:0, scale:0, ease:"back"})
    .from("#freds span" , {y:600 , stagger:.1, duration:.8, ease:"back"} , "+=2")
    .add("test")
    .from("#time" , {yPercent:300, duration:.5} , "<")

let animation = gsap.timeline()
animation.play("test")