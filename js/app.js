$( document ).ready(function(){

    $("#menu").click(function(){
        $(this).toggleClass("fa-times");
        $("header").toggleClass("toggle");
    });

    $(window).on("scroll load", function(){
        $("#menu").removeClass("fa-times");
        $("header").removeClass("toggle");

        if($(window).scrollTop() > 0){
            $(".top").show()
        }else{
            $(".top").hide()
        }
    });


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

const animItems = document.querySelectorAll("._anim-item");
if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {    

        for(let index = 0; index < animItems.length; index++){
           
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 2;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
                
            }
            if((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)){
                animItem.classList.add("_active")
                
            }else{
                if(!animItem.classList.contains('_anim-no-hiden')){
                    animItem.classList.remove("_active")
                }
                
            }
        }
    }

    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop}
    }
    setTimeout(() =>{
        animOnScroll();
    }, 300)
   
}

