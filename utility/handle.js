var handle = {
	//submitOption:{},//提交具体内容的对象
    //首页对象初始化
	init: function(){	 
	 setInterval("changeImg('obj')",timeInterval);
	 window.history.forward(1);
	},

	navigator:function(flag){ 
		var form_value = $('#form_nav');
		switch(flag){
		 case 0: form_value.attr('value',0);
			  break;
		 case 1: form_value.attr('value',1);
		 	  break;
		 case 2: form_value.attr('value',2);
		  	  break;
		 case 3: form_value.attr('value',3);
		      break;
		 case 4: form_value.attr('value',4);
		  	  break;
		 case 5: form_value.attr('value',5);
		  	  break;
		 case 6: form_value.attr('value',6);
		  	  break;
		 case 7: form_value.attr('value',7);
		 	  break;
		 	  
		 case 8: form_value.attr('value',8);
		  	  break;
		 case 9: form_value.attr('value',9);
		  	  break;
		 case 10: form_value.attr('value',10);
		  	  break;
		 defualt: form_value.attr('value',11);	 
		}
	       gywm.action="./nav";
	       gywm.method="POST";
	       gywm.submit(); 

	},
	
	MM_preloadImages:function() { //v3.0
		  var d=document; 
		  if(d.images)
		  { 
		    if(!d.MM_p) 
			  d.MM_p=new Array();
		    var i,j=d.MM_p.length,a=handle.MM_preloadImages.arguments; 
			for(i=0; i<a.length; i++)
		       if (a[i].indexOf("#")!=0)
			     { 
				    d.MM_p[j]=new Image; 
				    d.MM_p[j++].src=a[i];
				 }
		  }
		},

	MM_swapImgRestore:function() { //v3.0
		  var i,x,a=document.MM_sr; 
		  for(i=0;a && i<a.length &&(x=a[i])&& x.oSrc;i++) 
		      x.src=x.oSrc;
		},

    MM_findObj:function(n, d) { //v4.01
		  var p,i,x;  if(!d) d=document; 
		  if((p=n.indexOf("?"))>0&&parent.frames.length) 
		  {
		    d=parent.frames[n.substring(p+1)].document; 
			n=n.substring(0,p);
		  }
		  if(!(x=d[n])&&d.all) 
		     x=d.all[n]; 
		  for (i=0;!x&&i<d.forms.length;i++) 
		      x=d.forms[i][n];
		  for(i=0;!x&&d.layers&&i<d.layers.length;i++) 
		      x=handle.MM_findObj(n,d.layers[i].document);
		  if(!x && d.getElementById) 
		      x=d.getElementById(n); 
		  return x;
		},

	MM_swapImage:function() { //v3.0
		  var i,j=0,x,a=handle.MM_swapImage.arguments; 
		  document.MM_sr = new Array; 
		  for(i=0;i<(a.length-2);i+=3)
		   if ((x=handle.MM_findObj(a[i]))!=null)
		   {
		     document.MM_sr[j++]=x;
		     if(!x.oSrc) 
			 x.oSrc=x.src; 
			 x.src=a[i+2];
		   }
		},
   showAddress: function(){
	    	$('#address_zoom').show();
	    	$('body').css("overflow","hidden")
	    },
   hideAddress: function(){
	    	$('#address_zoom').hide();
	    	$('body').css("overflow","")
	    }
		
	
}
handle.init();


//留言提交面板对象
var msgObj = {
	submitOption:{},//提交具体内容的对象

	init:function(){//留言面板初始化
		this.submitForm();
	},	
		
	openBtn: function(){//开启留言面板操作
		$('.msg-modal').show();
		//$('#userName').focus();
		$('body').css("overflow","hidden")
		$("#cover").show();
	},

	closeBtn: function(){//关闭留言面板操作
		$('.msg-modal').hide();
		$('body').css("overflow","")
		$("#cover").hide();
	},
	//验证form表单 具体可以查找jquery-validation插件api
	validateForm:function(){
        $("#msg-form").validate({
            rules:{
        	    handyPhone:{
					required: true,
					digits:true,
					minlength:11,
					maxlength:11
				},
				msgContent:{
					required: true,
					minlength:11
				}
            },
            messages:{
            	handyPhone:{
					required: '请输入您的联系方式！',
					digits:'您输入的手机号不合法',
					minlength: '手机号长度错误',
					maxlength: '手机号长度错误'
				},
				msgContent:{
					required: '请输入留言信息！',
					minlength: '留言信息长度至少为10个字符'
				}
            },
            errorElement:'p',
            submitHandler:function(form){
				$.ajax(msgObj.submitOption);
            }
        });
    },

//  提交form表单的操作
    submitForm:function(){
        $("#msg-form-submit").on("click",function(){
        	var userName = $('#userName').val();
            var handyPhone = $('#handyPhone').val();
            var msgContent = $('#msgContent').val();
			
            msgObj.submitOption = {
                type:"POST",
                url:"msg",
                async:true,
                data:{
            	    userName: userName,
            	    handyPhone: handyPhone,
            	    msgContent: msgContent,
                },
                beforeSend:function(){
                    // 防止重复提交 将按钮置为不可用
                    $("#msg-form-submit").attr("disabled","true");
                },
                success:function(info){
                	   
                	    if(info==1){
                	       $().toastmessage('showSuccessToast', "留言提交成功……")
                	    }else{
                	       $().toastmessage('showSuccessToast', "留言提交失败……")
                	    }
                	    $("#msg-form-submit").attr("disabled",false);
                	    
                	    $("#userName").val('');
            	    	$("#handyPhone").val('');
            	    	$("#msgContent").val('');
            			$('.msg-modal').hide();
            			$('body').css("overflow","")
                		
                },
                error:function(a,b,c){
                    console.log(a);
                }
            };
            msgObj.validateForm();
        });       
    }
}
msgObj.init();

