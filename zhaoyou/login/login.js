"use strict";
class Login {
  isEmpty(str) {
      if (str != null && str.length > 0) {
          return true;
      }
      return false;
  }
  isPhone(str) {
      if (/^1[3,5,8,7]\d{9}$/.test(str)) {
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
          layer.tips('请输入手机号码！', '#mobile',{
              tips:2
          });
          return false;
      }else if (!this.isPhone(mob) ) {
          layer.tips('请输入正确的手机号码！', '#mobile',{
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
      else if (pwd.length < 6 ) {
          layer.tips('密码长度必须大于五位！', '#pwd',{
              tips:2
          });
          return false;
      } 
       
  }; 
};
