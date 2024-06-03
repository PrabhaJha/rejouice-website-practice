var tl = gsap.timeline();

tl.from("#loader h3", {
    x: 40,
    opacity: 0,
    stagger: 0.1,
    duration: 1
});
tl.to("#loader h3", {
    x: -40,
    opacity: 0,
    duration: 1,
    stagger: 0.1
});
tl.to("#loader", {
    opacity: 0, // to hide the loader
    duration: 0.5,
    onComplete: function() {
        document.getElementById('loader').style.display = 'none'; // ensure loader is removed from the document flow
    }
});
tl.from("#page1-content h1 span", {
    y: 100,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
    delay: -0.5
});

function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
locoScroll();

function cursorEffect() {
    var page1Content = document.querySelector("#page1-content");
    var cursor = document.querySelector("#cursor");

    page1Content.addEventListener("mousemove", function(dets) {
        gsap.to(cursor, {
            x: dets.clientX,
            y: dets.clientY  
        });
    });

    page1Content.addEventListener("mouseenter", function() {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        });
    });

    page1Content.addEventListener("mouseleave", function() {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        });    
    });
}
cursorEffect();

function page2Animation() {
    gsap.from(".elem h1", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 47%",
            end: "top 46%",
            scrub: 2
        }
    });
}
page2Animation();

function page3Animation() {
    gsap.from("#page3-top h2", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page3",
            scroller: "#main",
            start: "top 47%",
            end: "top 46%",
            scrub: 2
        }
    });
}
page3Animation();

function page4Animation() {
    gsap.from(".element h1", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 47%",
            end: "top 46%",
            scrub: 2
        }
    });
}
page4Animation();

function sliderAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        }
    });
}
sliderAnimation();


  
