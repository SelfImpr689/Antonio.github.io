//上传图片提交面板对象
var fileUploadObj = {
	shtml:"",
	init:function(){//初始化
		 shtml = $('#fileGroup').html();
	},	
		
	openBtn: function(){//开启面板操作
		$('.msg-modal').show();
		//$('#userName').focus();
		$('body').css("overflow","hidden")
		$("#cover").show();
	},

	closeBtn: function(){//关闭面板操作
		$('.msg-modal').hide();
		$('body').css("overflow","")
		$("#cover").hide();
	},
	
	doUpload: function () 
    {  
      $('#loading').show();
      var formData = new FormData($( "#uploadForm" )[0]);  
      $.ajax({  
         url: 'fileUpload' ,  
         type: 'POST',  
         data: formData,  
         async: true,  
         cache: false,  
         contentType: false,  
         processData: false,  
         success: function (returndata) { 
          $('#loading').hide();
              $('#feedback').html(returndata); 
              fileUploadObj.resetPath();
          },  
          error: function (returndata) {
          $('#loading').hide();  
              $('#feedback').html(returndata);
              fileUploadObj.resetPath();
          }  
      });  
    },
    
	resetPath:function()
    {  
      $('#fileGroup').html(shtml);
      $('#feedback').html('');
    }


}
fileUploadObj.init();