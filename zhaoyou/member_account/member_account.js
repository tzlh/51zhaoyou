"use strict";
class MemberAccount {
  initEvent() {
    let currentObj = this;
    $(document).on("click","#login-btn", function() {
      currentObj.editAccount();
    });
  }

  editAccount() {
    let userName = document.getElementById("user_name").value;
    let sex = document.getElementById("sex").value;
    let userPhone = document.getElementById("user_phone").value;
    let email = document.getElementById("email").value;
    let weiXin = document.getElementById("weixin").value;
    let qq = document.getElementById("qq").value;
    let address2 = document.getElementById("address2").value;
    if ("" != userName) {
      if(null == userName.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{1,32}$/)) {
        alert("请输入正确的用户名");
        return;
      }
    } 
    if ("" != sex) {
      if(null == sex.match(/^['男'|'女']$/)) {
        alert("请输入正确的性别");
        return;
      }
    } 
    if ("" != userPhone) {
      if(null == userPhone.match(/^1[34578]\d{9}$/)) {
        alert("请输入正确的手机号");
        return;
      }
    } 
    if ("" != email) {
      if(null == email.match(/^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/)) {
        alert("请输入正确的邮箱");
        return;
      }
    } 
    if ("" != weiXin) {
      if(null == weiXin.match(/^1[34578]\d{9}$/)) {
        alert("请输入正确的微信");
        return;
      }
    } 
    if ("" != qq) {
      if(null == qq.match(/^[1-9]{1}\d{4-10}$/)) {
        alert("请输入正确的qq");
        return;
      }
    }
    if ("" != address2) {
      if(null == address2.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{1,255}$/)) {
        alert("请输入正确的地址");
        return;
      }
    }
    if ("abc" == userName) {
      alert("修改成功");
    }
  }

};
