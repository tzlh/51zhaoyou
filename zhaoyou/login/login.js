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
  }; 
};
