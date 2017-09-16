"use strict";
class Register {
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
  }; 
};
