"use strict";
class MemberSubmit {

  initEvent() {
    let currentObj = this;
    $(document).on("click","#login-btn", function() {
      currentObj.editAccount();
    });
  }
  
  fillData() {
    let accountUrl = PROJECT_PATH + "lego/lego_user?servletName=getUserSecurityByUser";
    let accountGet = ajax_assistant(accountUrl, "", false, true, false);
    let sexType = ["女","男"];
    let Name = "";
    if ("1" == accountGet.status) {
      let result = JSON.parse(accountGet.result);
      Name = result[0].name;
    }
    let accountHtml = 
      `<div class="control-groupc">
         <em>昵称：</em><span class="icon-userc"><img src="../../img/user.jpg"></span><input type="text" id="user_name" value="${Name}">
       </div>
       <div class="control-groupc">
         <em>性别：</em><span class="icon-userc"><img src="../../img/user.jpg"></span>
         <select id="sex" value="" >
           <option value ="0">女</option>
           <option value ="1">男</option>
         </select>
       </div>
       <div class="control-groupc">
         <em>手机号：</em><span class="icon-userc"><img src="../../img/oil.jpg"></span><input type="text" id="user_phone" value="">
       </div>
       <div class="clear"></div>
       <div class="control-groupc">
         <em>邮箱：</em><span class="icon-userc"><img src="../../img/email.jpg"></span><input type="text" id="email" value="">
       </div>
       <div class="control-groupc">
         <em>微信：</em><span class="icon-userc"><img src="../../img/oil.jpg"></span><input type="text" id="weixin" value="">
       </div>                                                 
       <div class="control-groupc">
         <em>QQ：</em><span class="icon-userc"><img src="../../img/oil.jpg"></span><input type="text" id="qq" value="">
       </div>
       <div class="control-groupc">
         <em>地址：</em><span class="icon-userc"><img src="../../img/oil.jpg"></span><input type="text" id="address2" value="">
       </div>
       <div class="login-btn">
         <input id="login-btn" value="提交" type="button">
       </div>`;
    $("#login2").html(accountHtml);
  
  }

  editAccount() {
    let accountUrl = PROJECT_PATH + "lego/lego_user?servletName=getUserSecurityByUser";
    let accountGet = ajax_assistant(accountUrl, "", false, true, false);
    let uuid = "";
    if ("1" == accountGet.status) {
      let result = JSON.parse(accountGet.result);
      uuid = result[0].uuid;
    }
    let userName = document.getElementById("user_name").value;
    let sex = document.getElementById("sex").value;
    let phoneNumber = document.getElementById("user_phone").value;

    let email = document.getElementById("email").value;
    let weiXin = document.getElementById("weixin").value;
    let qq = document.getElementById("qq").value;
    let address2 = document.getElementById("address2").value;
    if(null == userName.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{1,32}$/)) {
      alert("请输入正确的昵称");
      return;
    }
    if(null == sex.match(/^[0|1]$/)) {
      alert("请输入正确的性别");
      return;
    }
    if(null == phoneNumber.match(/^1[3|4|5|8][0-9]\d{4,8}$/)) {
      alert("请输入正确的手机号");
      return;
    }
    if(null == email.match(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/)) {
      alert("请输入正确的邮箱");
      return;
    }
    if(null == weiXin.match(/^1[34578]\d{9}$/)) {
      alert("请输入正确的微信");
      return;
    }
    if(null == qq.match(/^[1-9][0-9]{4,}$/)) {
      alert("请输入正确的qq");
      return;
    }
    if(null == address2.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{1,255}$/)) {
      alert("请输入正确的地址");
      return;
    }
    if ("abc" == userName) {
      alert("修改成功");
    }
    let data = {
      "user_uuid":uuid,
      "nick_name":userName,
      "sex":sex,
      "phone_number":phoneNumber,
      "email":email,
      "wechat_account":weiXin,
      "qq_account":qq,
      "address":address2
    };
    let addUrl = PROJECT_PATH + "lego/lego_51zy?servletName=addUserInfo";
    let addGet = ajax_assistant(addUrl, data, false, true, false);
    console.log(addGet);
    if ("1" == addGet.status) {
      alert("添加成功");
    } else {
      alert("添加失败");
    }
  }

};
