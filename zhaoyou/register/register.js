"use strict";
class Register {
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
    let currentObj = this;
    $("#register").click(function () {
      currentObj.registerFunc();
    }); 
  }
  registerFunc () {
    let mob = $('#mobile').val();
    let pwd = $('#mima1').val();
    let pwd2 = $('#mima2').val();
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
        layer.tips('请输入密码！', '#mima1',{
            tips:2
        });
        return false;
    }
    else if (pwd.length < 6 ) {
        layer.tips('密码长度必须大于五位！', '#mima1',{
            tips:2
        });
        return false;
    } 
    else if (!this.isEmpty(pwd2) ) {
        layer.tips('请输入密码！', '#mima2',{
            tips:2
        });
        return false;
    }
    else if (pwd2.length < 6 ) {
        layer.tips('密码长度必须大于五位！', '#mima2',{
            tips:2
        });
        return false;
    } 
    if (pwd != pwd2) {
      alert("两次密码不一致！");
      return;
    }
  } 
  //文本输出
  registerOutPut(contentId) {
    let content =
      `<div class="content1">
         <div class="wapper">
           <div class="page_main">
             <div class="page_bg">
              <!--  <div class="zcimg"><img src="/51/Resources/Home//images/zc1.jpg"/></div> -->
               <div class="zc_con">
                 <!--登录 start-->
                 <div id="login1">
                   <div class="control-groupc">
                     <em>用户：</em><span class="icon-userc"><img src="../../img/sj.jpg"></span><input id="mobile"  type="text" placeholder="用户名">
                     <div id="mess1" style="color: red;margin-left: 80px;"></div>
                   </div>
                   <div class="control-groupc">
                     <em>密码：</em><span class="icon-userc"><img src="../../img/pwd.jpg"></span><input type="password" id="mima1" placeholder="请输入密码">
                     <div id="tishi1" style="margin-left: 80px;"></div>
                   </div>
                   <div class="control-groupc">
                     <em>确认密码：</em><span class="icon-userc"><img src="../../img/pwd.jpg"></span><input type="password" id="mima2"  placeholder="请确认密码">
                     <div id="tishi2"></div>
                     <div id="tishi" style="margin-left: 80px;"></div>
                   </div>
                   <div class="login-btn">
                     <input id="register" value="注册" type="button">
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>`;
    $(contentId).html(content);
  }
};
