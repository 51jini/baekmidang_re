$(document).ready(function(){
    function setCookie(name, value, expiredays) {  
	   var todayDate = new Date();
	   todayDate.setDate( todayDate.getDate() + expiredays );
	   document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
	};
    
    $('.popup a').click(function(){
		var chk = $('#chkBox').prop('checked');
		if(chk){ 
			setCookie('maindiv','done',1);
		}
		$('.popup').slideUp(0);
        $('html,body').css('overflow','visible');
    });		
    
	cookiedata = document.cookie;
	if(cookiedata.indexOf('maindiv=done') < 1 ){
		$('.popup').css('display','block');
	}else{                        
		$('.popup').css('display','none');
        $('html,body').css('overflow','visible');        
	}
});