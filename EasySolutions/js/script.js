$( document ).ready(function(){

    

    // smooth scrolling

    $('a[href*="#"]').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },
        300,
        'linear'
        )
    })
});
document.querySelector('.button-play-block').onclick = play;
document.querySelector('.fa-xmark').onclick = ctop;
let videoBlock = document.querySelector(".oure-video-block")
let exit = document.querySelector(".fa-xmark")
let video;
let display;
video = document.querySelector('.video')
function play(){
    video.play();  
    videoBlock.classList.remove('hidden')

}
function ctop(){
    video.pause();
    video.currentTime = 0;
    videoBlock.classList.add('hidden');
}