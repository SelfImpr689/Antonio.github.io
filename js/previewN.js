var previewObj = {
	win_w:document.body.offsetWidth,//屏幕宽度  
    win_h:document.documentElement.clientHeight,//屏幕高度  
    index:1,
    //selector:'.cover',
    
    init: function(){	 
		$('.list-img').attr('onclick','previewObj.large(this)'); 
		
	},
	
	selectAll:function(sel){  
        return  document.querySelectorAll(sel);  
		//return $('img');
    },   
				
	large:function(element)
    {  
    	 alert('哈哈');
//        var trans="0.4s cubic-bezier(0.42, 0, 0.61, 0.75)";  
//        element.style.webkitTransition=trans;  
//         if(element.className.indexOf('iamlarge')==-1)
//         {  
//        	element.className+=' iamlarge';  
//            var scroll_top=document.body.scrollTop;  //滚动条上卷高度  
//            element.style.transition=trans;  
//            (function(){  
//                var scale= previewObj.win_w>650?650/element.width:previewObj.win_w/element.width;  
//                var imgeh=element.height*scale;  
//                var move_y=((previewObj.win_h-element.height)/2-element.offsetTop+scroll_top)/scale;  
//                var move_x=((previewObj.win_w-element.width)/2-element.offsetLeft)/scale;  
//                var tran="scale("+scale+","+scale+") translate3d("+move_x+"px,"+move_y+"px,0)";  
//                previewObj.selectAll('.cover')[0].className+=" bg-animation";  
//                element.style.zIndex=previewObj.index;  
//                element.style.transform=tran;  
//                element.style.webkitTransform=tran;  
//                //previewObj.index++;  
//            }.call(element))  
//         }
//         else
//         {  
//        	 element.className=element.className.replace('iamlarge','');  
//           var tran="scale(1,1) translate3d(0,0,0)";  
//           element.style.transform=tran;  
//           element.style.webkitTransform=tran;  
//           $('.cover')[0].className=$('.cover')[0].className.replace('bg-animation','');
//            	  
//            setTimeout(function(){  
//            	element.style.zIndex='auto';  
//            }.bind(this),400);  
//        }  
    } 
	
	
}
previewObj.init();
