var index1Obj = {
//	记录朋友圈列表分页页码
	pageNum: 1,
	//pageCount: 0,
//	首页对象初始化
	init: function(){
		this.getGroupList(0,false);
		$('#account_info').on('click',function(){
			index1Obj.showUserCenter()
		});
		$('#box_link').on("click",
				function()
				{
				    $('.box_main').toggle("300");
					//$('.box_main').slideToggle("normal");
				}
		);
	},
	
	getGroupList:function(userID,shouldEmpty){
		//$('.mop-load-0').show();
		//indexObj.mopload();
		var url = 'http://120.26.61.199/survivor/rest/ControlService/getPicDatas/'+userID+'?pageNum='+index1Obj.pageNum;
		$.ajax({
			type:"get",
			url:url,
			async:true,
			dataType: 'json',
			success: function(data){
				var result = '';
				if(data.message){
					//$('.mop-load-0').hide();
					//$('.main-body-footer').html("无更多信息");
				}
				else
				{
				  if(data&&data.length){
					data.forEach(function(item){
						var picsArr = item.picsArrayStr.split('_');						
						result += '<li>'+
								   '<div class="po-avt-wrap" onclick="index1Obj.go2FriendPage(\''+item.navID+'\');">'+
						               '<img class="po-avt" src="./image_group/a7.jpg">'+
								   '</div>'+
								   '<div class="po-cmt">'+
				                      '<div class="po-hd">'+
			                             '<p class="po-name"><span class="data-name" onclick="index1Obj.go2FriendPage(\''+item.navID+'\');">'+item.userName+'</span></p>'+
			                             '<div class="post">'+
			                                '<p>'+item.picsDescription+'</p>'+
			                                '<p>';
						                     for(var t =0;t<picsArr.length-1;t++){
						                    	result += '<img class="list-img" src="uploadT/'+picsArr[t]+'.jpg" style="height: 80px;">'
						                    };
						               result += '<div class="cover"></div></p>'+
			                             '</div>'+
			                             '<p class="time">'+new Date(item.createdDate).Format('MM-dd hh:mm')+'</p><img class="c-icon" src="./image_group/c.png">'+
			                          '</div>'+
			                          
			                       '</div>'+
								 '</li>';
					 });
					 //$('.mop-load-0').hide();
					 if(shouldEmpty){
						$('.group-list').empty().append(result);
						//if(questionId)
						    //$('#question-li-'+questionId).find('.good-button').addClass('voteSelected');
					 }
					 else{
						 $('.group-list').append(result);
					 }
					 $('.list-img').attr('onclick','previewObj.large(this)');
					 if($('.main-body-footer').length<=0){
						 $('.main-body').append('<div class="main-body-footer" onclick="index1Obj.showMoreNews();">查看更多 >></div>');
					 }
					 
					 $('.main-body-footer').attr('onclick','index1Obj.showMoreNews();');
				  }
				}
			},
			error: function(err){
				console.log(err);
			}
		});	
	},

   //显示更多
	showMoreNews: function(){
		index1Obj.pageNum++;
		index1Obj.getGroupList(0,false);
	},
	
   //进入主页
	go2Home: function(){
		  window.location.replace("/");
	},
	
	go2FriendPage: function(navID){
		window.location.href="/survivor/pn?id="+navID;
	},
	
	editHome:function(){
		//$('.box_main').hide();
		//window.location.href="/survivor/editHome";
		$().toastmessage('showSuccessToast', "暂未实现")
	},
	uploadGroup:function(){
		$('.box_main').hide();
		//window.location.replace("/survivor/upload");
		window.location.href="/survivor/upload";
	},
	
	showUserCenter: function(){
		var flagTmp = "Guest";
		var contentTmp = $('#account_info').html();
		if(contentTmp!=flagTmp){
			//window.location.href="/views/userCenter.htm";
		  }
	},
	
   //用于启动loading加载。
    mopload: function()
    {
        var load_name_list=["fading-circle"];
        var default_load="fading-circle";
        var default_index=0;
        $("[class^=mop-load]").each(function(index){
            var _mop_html=$(this).html().trim();
            var _mop_class=$(this).attr("class");
            var _temp=_mop_class.split("mop-load-");
           if(_temp.length<2)
           {
               return;
           }
            var arr='<div class="mop-load-div">';
           if(_temp[1].trim()*1<load_name_list.length)
            {
                arr+='<div class="mop-css-'+_temp[1].trim()+'">'
            }else if(_temp[1].trim()=="x")
            {
                arr+='<div class="mop-css-x">';
            }else
            {
                return;
            }

             $(this).html(arr);

        })
        $("[class^=mop-css]").each(function(index){
            var _mop_class=$(this).attr("class");
            var _temp=_mop_class.split("mop-css-");
            if(_temp=="mop-css")
            {
                $(this).addClass(default_load);
            }
            if(_temp[1].trim()=="x")
            {
                var rand=getRandom(load_name_list.length-1);
                $(this).addClass(load_name_list[rand]);
            }else  if(_temp[1]*1<load_name_list.length)
            {
                $(this).addClass(load_name_list[_temp[1]]);
            }else
            {
                return;
            }
        });
        
        $(".fading-circle").each(function(index)
        {
            var arr='<div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div>';
            arr+='<div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div>';
            $(this).append(arr);
        });
    }

};
index1Obj.init();



//登录面板对象
var loginObj = {
	submitOption:{},//提交登录具体内容的对象

	init:function(){//提问面板初始化
        this.getUser();
		this.submitForm();
	},	
		
	openBtn: function(){//开启登录面板操作
		$('.login-modal').show();
		$('#userName').focus();
	},

	closeBtn: function(){//关闭登录面板操作
		$('.login-modal').hide();
	},
	//验证form表单 具体可以查找jquery-validation插件api
	validateForm:function(){
        $("#login-form").validate({
            rules:{
        	    userName:{
					required: true
				},
				passCode: {
					required: true
				}
            },
            messages:{
            	userName:{
					required: '请输入用户名'
				},
				passCode: {
					required: '请输入用户密码'
				}
            },
            errorElement:'p',
            submitHandler:function(form){
				$.ajax(loginObj.submitOption);
            }
        });
    },

    //获取用户
	getUser: function(){
		$.ajax({
			type:"get",
			url:"http://120.26.61.199/survivor/rest/UserService/getCurrentUser",
			async:true,
			dataType:'json',
			success: function(data){
			  if(data.message==-1){
				  $('#account_info').html('Guest');
				  //隐藏菜单按钮
				  $('#box_link').hide();
			  }
			  else if(data.displayName){ 
			      $('#account_info').html(data.displayName.substr(0,5));
			      //显示菜单按钮
			      $('#box_link').show();
			  }
			},
			error: function(err){
				console.log(err);
			}
		});
	},    
    //注销用户
	logout:function(){
		$.ajax({
			type:"get",
			url:"http://120.26.61.199/survivor/rest/UserService/logout",
			async:true,
			dataType:'json',
			success: function(data){
			  
				  $('#account_info').html('Guest');
				  //隐藏菜单按钮
				  $(".box_main").hide();
				  $('#box_link').hide();
				  
			},
			error: function(err){
				console.log(err);
			}
		});
	},
	
    //提交form表单的操作
    submitForm:function(){
        $("#login-form-submit").on("click",function(){
            var userName = $('#userName').val();
            var passCode = $('#passCode').val();
			
            loginObj.submitOption = {
                type:"POST",
                url:"http://120.26.61.199/survivor/rest/UserService/login",
                async:true,
                data:{
                	userName: userName,
                	passcode: hex_sha1(passCode),
                },
                beforeSend:function(){
                    // 防止重复提交 将按钮置为不可用
                    $("#login-form-submit").attr("disabled","true");
                },
                success:function(info){
                	    $("#login-form-submit").attr("disabled",false);
                	    if(info.message==undefined){
                			//loginObj.getUser();
                			$().toastmessage('showSuccessToast', "登录成功");
                			$('.login-modal').hide();
                    		$("#userName").val('');
                    		$("#passCode").val('');
                    		//设置用户action信息。
                    		$('#account_info').html(info.displayName.substr(0,5));
                    		$('#box_link').show();
                	    }
                	    else if(info.message==0){
                	    	$().toastmessage('showSuccessToast', "登录失败")
                    		$("#passCode").val('');
                	    	$('#box_link').hide();
                	    }
                	    else{
                	    	$().toastmessage('showSuccessToast', "登录已登录");
                			$('.login-modal').hide();
                    		$("#userName").val('');
                    		$("#passCode").val('');
                	    }
                		
                },
                error:function(a,b,c){
                    console.log(a);
                }
            };

            loginObj.validateForm();
        });
    }
};
loginObj.init();


//注册提交面板对象
var registerGroup = {
	  submitOption:{},//提交具体内容的对象

	  init:function(){//留言面板初始化
		this.submitForm();
	  },	
		
	  openBtn: function(){//开启登录面板操作
			$('.register-user-modal').show();
			$('#userName').focus();
	  },

	  closeBtn: function(){//关闭登录面板操作
			$('.register-user-modal').hide();
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
					required: "请输入用户账号",
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
                url:"http://120.26.61.199/survivor/rest/UserService/createUser",
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
                	        $('.register-user-modal').hide();
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
};
registerGroup.init();

Date.prototype.Format = function (fmt){
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};