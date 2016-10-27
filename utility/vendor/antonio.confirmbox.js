//jConfirm 关键代码
$(function(){
    window.jConfirm = jConfirm;
    //jConfirm 关键代码
    function jConfirm(msg){
      var cancel_callback = function(){};
      var ok_callback = function(){};
      var result = {
          cancel:function(callback){cancel_callback=callback;return result;},
          ok:function(callback){ok_callback=callback;return result;}
      }
      $("#pop-confirm").find('.msg').text(msg);
      $("#pop-confirm").find('.cancel').off().on("click", function(){
          $("#pop-confirm").removeClass('active');
          cancel_callback();
      });
      $("#pop-confirm").find('.ok').off().on("click", function(){
          $("#pop-confirm").removeClass('active');
          ok_callback();
      });
      setTimeout(function(){
          $("#pop-confirm").addClass('active');
      },0);
      return result;
    }
    //jConfirm 辅助工作：PC和Mobile弹窗弹起时，防滚动
    /mobile/i.test(window.navigator.userAgent) && $("html").addClass("mobile");
    $("#pop-confirm").on('touchmove',function(){return false;});
    $("html").on('click',function(){
        setTimeout(function(){
            $("html").height() > $(window).height() ? $("html").addClass("higher-than-window") : $("html").removeClass("higher-than-window");
            $("#pop-confirm").hasClass('active') ? $("html").addClass("confirm-active") : $("html").removeClass("confirm-active");
        },0);
    });
});
//基础设施
$(function(){
    // clickout-removeclass 指令，点击切换类名
    $('html').on('click',function($event){
    	$('[clickout-removeclass]').each(function(){
    		if( $(this)[0] === $event.target || $(this)[0].contains($event.target) ){
    			return;
    		}
            var className = $(this).attr('clickout-removeclass');
            $(this).removeClass(className);
    	});
    });
});