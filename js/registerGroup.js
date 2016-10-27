//注册提交面板对象
var registerGroup = {
	  submitOption:{},//提交具体内容的对象

	  init:function(){//留言面板初始化
		this.submitForm();
	  },	
		
  
	//验证form表单 具体可以查找jquery-validation插件api
	validateForm:function(){
        $("#register-user-form").validate({
            rules:{
        	    userAccount:{
					required: true,
				},
				userTitle:{
					required: true,
				},
				passcode:{
					required: true,
				},
        	    userEmail:{
					required: true,
				},
				userSName:{
					required: true,
				},
				userDeclare:{
					required: true,
					minlength:11
				}
            },
            messages:{
            	userAccount:{
					required: "请输入用于账号",
				},
				userTitle:{
					required: "请输入用户昵称",
				},
				passcode:{
					required: "请输入用户密码",
				},
				userEmail:{
					required: '请输入邮件地址！',
				},
				userSName:{
					required: "请输入空间名称",
				},
				userDeclare:{
					required: '请输入宣传信息！',
					minlength: '宣传信息长度至少为11个字符'
				}
            },
            errorElement:'p',
            submitHandler:function(form){
				$.ajax(registerGroup.submitOption);
            }
        });
    },

    //提交form表单的操作
    submitForm:function(){
        $("#register-user-form-submit").on("click",function(){
        	var userAccount = $('#userAccount').val();
            var userTitle = $('#userTitle').val();
            var passcode = $('#passcode').val();
            var userSex = $('#userSex').val();
            var userEmail = $('#userEmail').val();
            var userTel = $('#userTel').val();
            var userSName = $('#userSName').val();
            var userDeclare = $('#userDeclare').val();
            
            registerGroup.submitOption = {
                type:"POST",
                url:"/survivor/rest/UserService/createUser",
                dataType:'json',
                contentType:'application/json',
                async:true,
                data:JSON.stringify({
            	    userName: userAccount,
            	    displayName: userTitle,
            	    passcode: hex_sha1(passcode),
            	    sex:userSex,
            	    email:userEmail,
            	    teleNum:userTel,
            	    userWebPath:userSName,
            	    userDeclaration:userDeclare
                }),
                beforeSend:function(){
                    // 防止重复提交 将按钮置为不可用
                    $("#register-user-form-submit").attr("disabled","true");
                },
                success:function(info){
                	    if(info.message==1){
                	       $().toastmessage('showSuccessToast', "注册提交成功……。")
                	        $("#userAccount").val('');
	               	    	$("#userTitle").val('');
	               	    	$("#passcode").val('');
	               	    	
	               	    	$("#userEmail").val('');
	               	    	$("#userTel").val('');
	               	    	$("#userSName").val('');
	               	    	$("#userDeclare").val('');	
                	    }else{
                	       $().toastmessage('showSuccessToast', "注册提交失败……")
                	    }
                	    $("#register-user-form-submit").attr("disabled",false);	                    	    	
                },
                error:function(a,b,c){
                    console.log(a);
                }
            };
            registerGroup.validateForm();
        });       
    }
}
registerGroup.init();

