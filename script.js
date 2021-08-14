$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script -- Made From me
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script -- Made From me
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script -- Helped by My Friends
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click -- Helped by My Friends
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click -- Helped by My Friends
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script -- Made from me
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script -- Helped by My Friends
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "UX Designer", "Creative Marketing", "Gamers", "Traveller"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "UX Designer", "Creative Marketing", "Gamers", "Traveller"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // owl carousel script -- Help by My Friends
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
