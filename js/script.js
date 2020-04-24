function getstarted(){
    $("html, body").animate({
        scrollTop: $("#aboutigem").offset().top - 0.2*$(window).width()    
    }, 2000);
};
function team(){
    $("html, body").animate({
        scrollTop: $("#team").offset().top - 0.2*$(window).width()    
    }, 2000);
};
function problem(){
    $("html, body").animate({
        scrollTop: $("#problem").offset().top - 0.2*$(window).width()    
    }, 2000);
};
function solution(){
    $("html, body").animate({
        scrollTop: $("#solution").offset().top - 0.2*$(window).width()    
    }, 2000);
};
function support(){
    $("html, body").animate({
        scrollTop: $("#support").offset().top - 0.2*$(window).width()    
    }, 2000);
};
function home(){
    $("html, body").animate({
        scrollTop: 0    
    }, 2000);
};


window.onscroll=function(){navActive()};

function navActive(){
    x=document.getElementsByClassName('target');
    y=document.getElementsByClassName('nav-item');
    for(i=0;i<x.length;i++){
        if((x[i].getBoundingClientRect().top<window.innerHeight/2)&&(x[i].getBoundingClientRect().bottom>window.innerHeight/2)){
            y[i].classList.add('active');
        }
        else{
            y[i].classList.remove('active');
        }
    }
}