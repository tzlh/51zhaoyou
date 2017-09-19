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
};
