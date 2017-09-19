"use strict";
class MemberAccount {

  initEvent() {
    let currentObj = this;
    $(document).on("click","#login-btn", function() {
      currentObj.editAccount();
    });
  }
  
  accountFillData() {
    let accountUrl = PROJECT_PATH + "lego/lego_user?servletName=getUserSecurityByUser";
    let accountGet = ajax_assistant(accountUrl, "", false, true, false);
    let sexType = ["女","男"];
    let nickName = "";
    let sex = "";
    let phoneNumber = "";
    let email = "";
    let wechatAccount = "";
    let qqAccount = "";
    let address = "";
    if ("1" == accountGet.status) {
      let result = JSON.parse(accountGet.result);
      console.log(result);
      let data = {
        "user_uuid":result[0].uuid
      };
      let userUrl = PROJECT_PATH + "lego/lego_51zy?servletName=getUserInfo";
      let userGet = ajax_assistant(userUrl, data, false, true, false);
      let userResult = JSON.parse(userGet.result);

      console.log(userResult);
      for (let i = 0; i < userResult.length; i++) {
        if (userResult[i].user_uuid == result[0].uuid) {
          if (null != userResult[i].nick_name) {
            nickName = userResult[i].nick_name;
          }
          if (null != userResult[i].sex) {
            sex = userResult[i].sex;
          }
          if (null != userResult[i].phone_number) {
            phoneNumber = userResult[i].phone_number;
          }
          if (null != userResult[i].email) {
            email = userResult[i].email;
          }
          if (null != userResult[i].wechat_account) {
            wechatAccount = userResult[i].wechat_account;
          }
          if (null != userResult[i].qq_account) {
            qqAccount = userResult[i].qq_account;
          }
          if (null != userResult[i].address) {
            address = userResult[i].address;
          }
        }
      }

      console.log(JSON.parse(userGet.result));
    }
    let accountHtml = 
      `<div class="control-groupc">
         <em>昵称：</em><span class="icon-userc"><img src="../../img/user.jpg"></span><input type="text" id="user_name" value="${nickName}" readonly="readonly">
       </div>
       <div class="control-groupc">
         <em>性别：</em><span class="icon-userc"><img src="../../img/oil.jpg"></span><input type="text" id="sex" value="${sexType[sex]}" readonly="readonly">
       </div>
       <div class="control-groupc">
         <em>手机号：</em><span class="icon-userc"><img src="../../img/oil.jpg"></span><input type="text" id="user_phone" value="${phoneNumber}" readonly="readonly">
       </div>
       <div class="clear"></div>
       <div class="control-groupc">
         <em>邮箱：</em><span class="icon-userc"><img src="../../img/email.jpg"></span><input type="text" id="email" value="${email}" readonly="readonly">
       </div>
       <div class="control-groupc">
         <em>微信：</em><span class="icon-userc"><img src="../../img/oil.jpg"></span><input type="text" id="weixin" value="${wechatAccount}" readonly="readonly">
       </div>                                                 
       <div class="control-groupc">
         <em>QQ：</em><span class="icon-userc"><img src="../../img/oil.jpg"></span><input type="text" id="qq" value="${qqAccount}" readonly="readonly">
       </div>
       <div class="control-groupc">
         <em>地址：</em><span class="icon-userc"><img src="../../img/oil.jpg"></span><input type="text" id="address2" value="${address}" readonly="readonly">
       </div>
       <div class="login-btn"><a href = "../index/member_submit.html">
         <input id="login-btn" value="修改" type="button"></a>
       </div>`;
    $("#login2").html(accountHtml);
  }
};
