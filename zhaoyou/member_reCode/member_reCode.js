"use strict";
class MemberReCode {
  initEvent() {
    let currentObj = this;
    $(document).on("blur","#name1", function() {
      currentObj.pswcheck();
    });
    $(document).on("click","#login-btn", function() {
      currentObj.pwdSubmit();
    });
  }

  pswcheck() {
    let po1 = md5(document.getElementById("name1").value);
    let url = PROJECT_PATH+"lego/lego_user?servletName=getUserSecurityByUser";
    let urlResult = ajax_assistant(url, "", false, true, false);
    let result = JSON.parse(urlResult.result);
    let po2 = result[0].password;
    console.log(result);
    if (po1 === po2) {
      document.getElementById("tishi").innerHTML = "<font color='green'>密码输入正确</font>";
    }
    else {
      document.getElementById("tishi").innerHTML = "<font color='red'> 密码输入错误</font>";
      return;
    } 
  }

  pwdSubmit() {
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;
    let name3 = document.getElementById("name3").value;
    if("" == name1) {
      alert("密码不能为空！");
      return;
    }
    if (name2.length <= 5) {
      document.getElementById("tishi1").innerHTML = "<font color='red'>密码长度不能小于六位</font>";
    }
    else {
      document.getElementById("tishi1").innerHTML = "<font color='green'>密码格式输入正确</font>";
    }
    if (name3.length <= 5) {
      document.getElementById("tishi2").innerHTML = "<font color='red'>密码长度不能小于六位</font>";
    }
    else if (name2 !== name3) {
      document.getElementById("tishi2").innerHTML = "<font color='red'>两次密码输入不相同</font>";
    }
    else {
      document.getElementById("tishi2").innerHTML = "<font color='green'>密码格式输入正确</font>";
      let header_password_url = PROJECT_PATH+"lego/lego_user?servletName=modifyUserSecurityWithPasswordByUser";
      let header_password_param = {
        "password":name2
      };
      let header_edit_pass_result = ajax_assistant(header_password_url, header_password_param, false, true, false);
      if ("1" == header_edit_pass_result.status) {
        alert("修改密码成功");
      } else {
        alert("修改失败");
        return;
      }    
    }
  }
  //文本输出
  memberReCodeOutPut(contentId) {
    let content =
      `<div class="content1">
         <div class="wapper">
             <div class="page_main">
                 <div class="page_bg">	
                     <div class="sell_l">
                         <div class="menu_list">
                             <p class="menu_head">我的订单</p>
                             <div class="menu_body">
                               <a href="member_buy.html">我是买家</a>
                               <a href="member_sell.html">我是卖家</a>
                             </div>
                             <p class="menu_head">账户中心</p>
                             <div class="menu_body">
                                 <a href="member_account.html">我的账户</a>
                                 <a href="member_reCode.html">修改密码</a>
                             </div>
                         </div>
                     </div>
     
                     <div class="sell_r">
                         <div class="sell_r_con">
                             <div class="sname">
                                 修改密码 
                             </div>
                             <div class="zc_con2">
                                 <!--登录 start-->
                                 <div id="login">
                                     <form id="loginform" action="http://www.51zhaoyou.com/51/Member/updatesCode.html" method="post" role="search" name="code">
                                         <div class="control-groupc">
                                             <em>密码：</em><span class="icon-userc"><img src="../../img/pwd.jpg"></span><input type="password" name="old" id="name1" placeholder="请输入密码"><div style="margin-left: 80px;" id="tishi"> </div>
                                         </div>
                                         <div class="control-groupc">
                                             <em>新密码：</em><span class="icon-userc"><img src="../../img/pwd.jpg"></span><input type="password" name="new" id="name2" placeholder="请输入新密码"><div style="margin-left: 80px;" id="tishi1"> </div>
                                         </div>
                                         <div class="control-groupc">
                                             <em>重复密码：</em><span class="icon-userc"><img src="../../img/pwd.jpg"></span><input type="password" name="new1" id="name3" placeholder="请输入重复密码"><div style="margin-left: 80px;" id="tishi2"> </div>
                                         </div>
                                         <div class="login-btn">
                                             <input id="login-btn" value="提交" type="button">
                                         </div>
                                     </form>
                                 </div>
                                 <!--登录 end-->
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
