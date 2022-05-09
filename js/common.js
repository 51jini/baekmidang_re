/* header active */
$(document).ready(function(){
    $(window).scroll(function(){
        var top = $(window).scrollTop();

        if(top > 0){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
    });
});

/* gnb */
$(document).ready(function(){
    var newBg = $('<div class="sub_bg"></div>');    
    $('header').append(newBg);
    var gnb = '.gnb';
    var main = '.main_nav';
    var sub = '.sub_nav';
    var bg = '.sub_bg';
    
    $(gnb).hover(function(){
        $(sub + ',' + bg).stop().slideDown('fast');
        $(main).removeClass('active');
    },function(){
        $(sub + ',' + bg).stop().slideUp('fast');
        $(main).removeClass('active');
    });
    
    $(main).first().focus(function(){
        $(gnb).trigger('mouseenter');
        $(this).addClass('active');
    });
    
    $(main).focus(function(){
        $(main).removeClass('active');
        $(this).addClass('active');
    });
    
    $(main).first().keydown(function(e){
        if(e.keyCode == 9){
            if(e.shiftKey){
                $(gnb).trigger('mouseleave');
                $(this).removeClass('active');
            }
        }
    });
    
    $(sub).last().find('li:last a').keydown(function(e){
        if(e.keyCode == 9){ 
            if(!e.shiftKey){
                $(gnb).trigger('mouseleave');
                $(main).removeClass('active');
            }
        }
    });
    
    $(sub).find('li:last a').focus(function(){
        $(main).removeClass('active');
        $(this).parents(sub).prev().addClass('active');
    });
});

/* family_site */
$(document).ready(function(){
    var select = '.family_site';

    $(select).find('button').click(function(){
        $(this).next().stop().slideToggle('fast');
        $(this).find('.icon').toggleClass('active');
    });

    $(select).mouseleave(function(){
        $(this).find('ul').stop().slideUp('fast');
        $(this).find('.icon').removeClass('active');
    });

    $(select).find('li:last a').keydown(function(e){
        if(e.keyCode == 9){
            if(!e.shiftKey){
                $(select).find('button').trigger('click');
            }
        }
    });
    $(select).find('button').keydown(function(e){
        if(e.keyCode == 9){
            if(e.shiftKey){
                $(this).next().stop().slideUp('fast');
                $(this).find('.icon').removeClass('active');
            }
        }
    });
});

/* scroll_btn */
$(document).ready(function(){
    var btn = '.scroll_btn a';
    var scrollSpeed = 1200;
    var fadeSpeed = 'fast';
    var ease = 'easeOutQuart';
    var minWidth = 1360; 
    $(btn).fadeOut(0);
    $(btn).click(function(e){
        e.preventDefault(); 
        $('html, body').animate({
            scrollTop: 0 
        },scrollSpeed,ease);
    });

    $(window).on('scroll resize',function(){
        var top = $(window).scrollTop();
        var w = $(window).width();
        if(top < 500 || w < minWidth){
            $(btn).fadeOut(fadeSpeed);
        }else{
            $(btn).fadeIn(fadeSpeed);
        }
    });
});