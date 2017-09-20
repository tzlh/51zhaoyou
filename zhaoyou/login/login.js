"use strict";
class Login {
  constructor() {
    this.login_redirect_url = null;
  }
  isEmpty(str) {
      if (str != null && str.length > 0) {
          return true;
      }
      return false;
  }
  isPhone(str) {
      if (/^[0-9a-zA-Z_-]{4,16}$/.test(str)) {
          return true;
      }
      return false;
  }

  initEvent() {
    let currentObj = this
    $("#loginBtn").click(function () {
      currentObj.loginFunc();
    }); 
  }
  loginFunc () {
      let mob = $('#mobile').val();
      let pwd = $('#pwd').val();
      let sub = $("form[role=searchform]");
       //alert("");
      if (!this.isEmpty(mob) ) {
          layer.tips('请输入用户名！', '#mobile',{
              tips:2
          });
          return false;
      }else if (!this.isPhone(mob) ) {
          layer.tips('请输入正确的用户名！', '#mobile',{
              tips:2
          });
          return false;
      }
      else if (!this.isEmpty(pwd) ) {
          layer.tips('请输入密码！', '#pwd',{
              tips:2
          });
          return false;
      }
      else if (pwd.length < 2 ) {
          layer.tips('密码长度必须大于一位！', '#pwd',{
              tips:2
          });
          return false;
      } 
      let login_data = {
        "name":mob,
        "password":pwd
      };
      let login_url = PROJECT_PATH+'lego/lego_user?servletName=loginWithNamePassword';
      let login_result = ajax_assistant(login_url, login_data, false, true, false);
      if(1 == login_result.status) {
        if (null == this.login_redirect_url) {
          window.location.href = "index.html";
        } else {
          window.location.href = this.login_redirect_url;
        }
      } else {
        alert('用户名或密码输入有误，请检查');
      } 
  } 
  //文本输出
  loginOutPut(contentId) {
    let content =
      `<!--header start-->
       <div class="header">
     	  <!--header_top start-->
     	  <div class="header_top">
           <div class="wapper">
             <ul class="fl">Hi! 欢迎来找油网    
               <a href="login.html" title="登录网站，享受更多私人定制">请登录</a> 
               <a href="register.html" title="免费成为找油网会员，享受一对一人工服务">【免费注册】</a>
             </ul>
             <ul class="fr">
               <li><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=915445821&site=qq&menu=yes" title="通过QQ联系油宝宝"><img src="../../img/head-icon1.png" style="vertical-align:-10%;">&nbsp;&nbsp;在线客服</a><span>|</span></li>
               <li style="border:0px;">客服时间：工作日8：30-17：00</li>
             </ul>
           </div>
         </div>
       </div>
       <!--header end-->
       <!--content start-->
       <div class="content1">
     	  <div class="wapper1">
     	    <div class="login_img"><img src="../../img/dengl.jpg"></div>
           <div class="login">
           	<div class="login_bg">
             	<div class="login_name">用户登录</div>
                 <!--登录 start-->
                 <div id="login">
                   <div class="control-group2">
                     <span id="message"></span>
                   </div>
                   <div class="control-group2">
                      <em>用户名：</em> <span class="icon-user1"><img src="../../img/user.jpg"></span><input name="mobile" value="" type="text" id="mobile" placeholder="请输入用户名">
                    </div>
                   <div class="control-group2">
                     <em>密码：</em><span class="icon-user1"><img src="../../img/pwd.jpg"></span><input name="code" type="password" id="pwd" placeholder="请输入密码">
                   </div>
                   <div class="login-btn">
                       <input value="登 录" type="button" id="loginBtn">
                   </div>
                 </div>
                 <div class="login_pwd">
                   <div class="login_line">
                     <ol>
                       <li>没有账号&nbsp;&nbsp;<a href="register.html"><font color="#e84519">立即注册</font></a></li>
                     </ol>
                   </div>
                 </div>
                 <!--登录 end-->
               </div>
             </div>
           </div>
         </div>
       </div>`;
    $(contentId).html(content);
  }
};
