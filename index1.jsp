<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html>
	<head>
	    <base href="<%=basePath%>">
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
		<meta name="apple-mobile-web-app-capable" content="yes"/>
		<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
		<meta http-equiv="Access-Control-Allow-Origin" content="http://restapi.amap.com/">
		<link rel="stylesheet" type="text/css" href="style/app.css">
    	<link rel="stylesheet" type="text/css" href="style/layout.css">
    	<link rel="stylesheet" type="text/css" href="style/jquery.toastmessage.css"/>
	    <link rel="stylesheet" type="text/css" href="style/common.css">
	    <link rel="stylesheet" type="text/css" href="style/dropdown.css">
		<title>购物圈</title>
		<style>
		    .cover{margin:0;height:100%;width: 100%;}  
			.list-img{height:100px;width:100px;position:relative;display:block;margin:0 auto;} 
			.cover{background-color:rgba(0, 0, 0, 1);position:fixed;top: 0;left:0;display:none;}  
			.bg-animation{animation: bg 0.4s;-webkit-animation: bg 0.4s;display:block !important;}  
			@keyframes bg  
			    {  
			    from {background: rgba(0, 0, 0, 0);}  
			    to {background: rgba(0, 0, 0, 1);}  
			    }  
			@-webkit-keyframes bg /* Safari 和 Chrome */  
			    {  
			    from {background: rgba(0, 0, 0, 0);}  
			    to {background: rgba(0, 0, 0, 1);}  
			    }
            
		</style>
		

	</head>
<body>

   <header>
	    <div class="page-banner">
				<ul class="banner-list">
					<li>
						<a onclick="index1Obj.go2Home()">首页</a>
					</li>
					<li>
						<a onclick="registerGroup.openBtn();">注册</a>
					</li>
					<li>
						<a onclick="loginObj.openBtn();">登录</a>
					</li>
					<li id="li-2">
						<a id="account_info" >Guest</a>
					</li>
				</ul>
		</div>
		
	</header>
	<div id="main">
	    <div id="list" class="main-body" style="padding-top:50px;">
	        <ul class="group-list">	        
	            <li>
	                <div class="po-avt-wrap" onclick="index1Obj.go2FriendPage('226a888afa4d55b4bb50d6e8739597165b424e54');">
	                    <img class="po-avt data-avt" src="http://wx.qlogo.cn/mmopen/PiajxSqBRaEKDmLraiccXF9LQp5MDyc4XricUNt3D3Ij7gtKUjGyCibia93r8EGVHGL9QBVPenR2RQqic7sjZGweFAOQ/0">
	                </div>
	                <div class="po-cmt">
	                    <div class="po-hd">
	                        <p class="po-name"><span class="data-name" onclick="index1Obj.go2FriendPage();">🐇秋哲君💪</span></p>
	                        <div class="post">
	                            <p>大家好，听说国内冻成狗🐶？我这边还挺热～</p>
	                            <p>
	                                <img class="list-img" src="./image_group/jt1.jpg" style="height: 80px;">
	                                <img class="list-img" src="./image_group/yt3.jpg" style="height: 80px;">
	                                <img class="list-img" src="./image_group/0.jpg" style="height: 80px;">
	                            </p>
	                        </div>
	                        <p class="time">刚刚</p><img class="c-icon" src="./image_group/c.png">
	                    </div>
	                    <div class="r"></div>
	                    <div class="cmt-wrap">
	                        <div class="like"><img src="./image_group/l.png">苍井空，陈冠希，杨幂，王思聪，陈赫，刘德华，马云...</div>
	                        <div class="cmt-list">
	                            <p><span>wu世勋-EXO：</span>나는 서명～</p>
	                            <p><span>鹿晗：</span>我们在国内冻成狗，我也想跟哥您去热热～</p>
	                            <p><span>权志龙：</span>나는 서명～</p>
	                            <p><span>王思聪：</span>去哪玩啊？那么爽</p>
	                            <p><span class="data-name">万虎科技~贾素杰</span> 回复
	                               <span>王思聪</span>
	                               <span>： </span>澳洲大堡礁，这边刚好是夏季，挺适合避寒的。
	                            </p>
	                            <p><span>杨幂：</span>😘私人飞机出行，求带上我～</p>
	                        </div>
	                    </div>
	                </div>
	            </li>	                  
	            
	        </ul> 
	        <div class="no-result-tip none">查询无结果</div>
	    </div>	
	</div>
    
    <div class="login-modal none">
			<div class="login-modal-div">
				<h2>用户登录</h2>
				<form id="login-form" action="">
					<div class="login-input-div">
					  	<label for="userName">用户名：</label>
				    	<input type="text" name="userName" id="userName" /></br>
					</div>
					<div class="login-input-div">
					  	<label for="passCode">密&nbsp;&nbsp;&nbsp;码：</label>
					    <input type="password" name="passCode" id="passCode" /></br>
				   </div>
				   <input id="login-form-submit" type="submit" value="提交" />
				</form>
				<img src="images/close.png" class="close-btn" onclick="loginObj.closeBtn();" />
			</div>
	</div>
	<div class="register-user-modal none">
      <div class="register-user-modal-div">
		 <h2>用户注册</h2>
	     <form id="register-user-form" action="">
	        
	        <div class="register-input-div">
				<label for="userAccount">用户账号</label>
				<input type="text" name="userAccount" id="userAccount" value="" />
			</div>
			<div class="register-input-div">
				<label for="userTitle">用户昵称</label>
				<input type="text" name="userTitle" id="userTitle" value="" />
			</div>
			<div class="register-input-div">
				<label for="passcode">用户密码</label>
				<input type="password" name="passcode" id="passcode" value="" />
			</div>
			<div class="register-input-div">
				<label for="userSex">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</label>
				<select id="userSex">
					<option value="2">女</option>
					<option value="1">男</option>
				</select>
			</div>
			<div class="register-input-div">
				<label for="userEmail">用户邮箱</label>
				<input type="text" name="userEmail" id="userEmail" value="" />
			</div>
			<div class="register-input-div">
				<label for="userTel">联系电话</label>
				<input type="text" name="userTel" id="userTel" value="" />
			</div>
			<div class="register-input-div">
				<label for="userSName">空间域名</label>
				<input type="text" name="userSName" id="userSName" value="" />
				
			</div>
			<div class="register-input-div">
				<label for="userDeclare">宣传标语</label>
				<textarea id="userDeclare" name="userDeclare"></textarea>
			</div>
			<input id="register-user-form-submit" type="submit" value="提交" />
		</form>
		<img src="images/close.png" class="close-btn" onclick="registerGroup.closeBtn();" />
      </div>
    </div>
    
    <div class="box_wrap">
		<div class="box_button ">
		   <a style="display:none;"  id="box_link"><img id="box_img" src="images/right.jpg" width="35" height="35" border="0" /></a>
		</div>
		<div class="box_main none">
			<ul id="menu">
				<li><a onclick="index1Obj.editHome();">编辑主页</a></li>
				<li><a onclick="index1Obj.uploadGroup();">上传朋友圈</a></li>
				<li><a href="mailto:512099472@qq.com">联系管理员</a></li>
				<li><a onclick="loginObj.logout();">Logout</a></li>
			</ul>
		</div>
	</div>
    
	<div class="mop-load-0" style="top:30%; position:fixed; left:44%"></div>
</body>
<script type="text/javascript" src="js/jquery2.1.4.min.js"></script>
<script type="text/javascript" src="utility/vendor/jquery.validate.js"></script>
<script type="text/javascript" src="utility/vendor/jquery.toastmessage.js"></script>
<script type="text/javascript" src="js/sha1.js" ></script>
<script type="text/javascript" src="js/index1Obj.js" ></script>
<script type="text/javascript" src="js/previewN.js"></script> 



</html>
