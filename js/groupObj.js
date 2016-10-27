var groupObj = {
	clientObj:{},//存储当前客户信息。
	pageNum: 1,
    //首页对象初始化
	init:function(){	 
	    this.getClientByID(this.getQueryString('id'));
	    window.history.forward(1);//禁止浏览器回退按钮
	},

	getClientByID:function(navID){ 
		var url = '/survivor/rest/UserService/getClientInfoByID/'+navID;
		$.ajax({
			type:"GET",
			url: url,
			async:true,
			dataType:'json',
			success: function(data){
			  if(data.userID){			  
				  clientObj = data;
				  //设置client的头像 背景 二维码 和昵称
				  
				  //展示其朋友圈
				  groupObj.getClientGroupList(data.userID, false);   
			  }
			  else
			  {
			     
			  }
			},
			error: function(err){
				console.log(err);
			}
		});
		
	},
	
   getClientGroupList:function(userID,shouldEmpty){
		//$('.mop-load-0').show();
		//indexObj.mopload();
		var url = '/survivor/rest/ControlService/getPicDatas/'+userID+'?pageNum='+groupObj.pageNum;
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
								   '<div class="po-avt-wrap">'+
						               '<img class="po-avt" src="./image_group/a7.jpg">'+
								   '</div>'+
								   '<div class="po-cmt">'+
				                      '<div class="po-hd">'+
			                             '<p class="po-name"><span class="data-name">'+item.userName+'</span></p>'+
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
						 $('.main-body').append('<div class="main-body-footer" onclick="groupObj.showMoreNews();">查看更多 >></div>');
					 }
					 
					 $('.main-body-footer').attr('onclick','groupObj.showMoreNews();');
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
		groupObj.pageNum++;
		groupObj.getClientGroupList(clientObj.userID,false);
	},
	
    showAddress: function(){
	    	$('#address_zoom').show();
	    	$('body').css("overflow","hidden")
	    },
    hideAddress: function(){
	    	$('#address_zoom').hide();
	    	$('body').css("overflow","")
	    },
   //获取地址栏中的参数
   getQueryString: function (name) {
		    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		    var r = window.location.search.substr(1).match(reg);
		    if (r != null) {
		        return unescape(r[2]);
		    }
		    return null;
		}
	
}
groupObj.init();


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
