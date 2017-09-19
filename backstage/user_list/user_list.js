"use strict;"

class UserList {

  constructor(outputId) {
    this.outputId = outputId;
    this.userData = [
      {"user_name": "admin", "password": "123", "status": "1", "uuid": "111"},
      {"user_name": "admin", "password": "123", "status": "1", "uuid": "111"},
      {"user_name": "admin", "password": "123", "status": "2", "uuid": "111"},
      {"user_name": "admin", "password": "123", "status": "2", "uuid": "111"},
      {"user_name": "admin", "password": "123", "status": "2", "uuid": "111"},
      {"user_name": "admin", "password": "123", "status": "2", "uuid": "111"},
      {"user_name": "admin", "password": "123", "status": "2", "uuid": "111"},
    ]
    this.detailData = {"nick_name": "啊咧", "sex": "0", "phone_number": "13664231003", "email": "123@163.com","wechat_account": "125364789360", "qq_account": "1234569874","address": "上海","uuid": "111"};
  }

  initEvent() {
    let currentObj = this;
    $(document).on("click", ".edit_password", function() {
      currentObj.modifyUserSecurityWithPasswordByManager($(this));
    }); 
    $(document).on("click", ".edit_status", function() {
      currentObj.modifyUserStatusByManager($(this));
    }); 
    $(document).on("click", ".edit_user_info", function() {
      currentObj.getUserInfo($(this));
      currentObj.editDataModal($(this));
    }); 
    $(document).on("click", ".edit_btn", function() {
      currentObj.modifyUserInfo($(this));
    }); 
  }

  /**
   * 清空原始值
   */
  clearRawData() {
    $("#userListOutput tbody").html("");
  }

  /*
   * 赋值
   */
  fillVariableData() {
    if (0 != this.userData.length) {
      let content = ""
      for (let i = 0; i < this.userData.length; i++) {
        content += 
          `<tr>
             <td>
               <div class="form-group">
                 <div class="input-group">
                   <div class="input-group-addon">用户名</div>
                   <input type="text" class="form-control" disabled = "disabled" value = "${this.userData[i].user_name}">
                 </div>
               </div>
             </td>
             <td>
               <div class="input-group">
                 <div class="input-group-addon">密码</div>
                 <input type="password" class="form-control password" value = "${this.userData[i].password}">
                 <span class="input-group-btn modifyFormulaName">
                   <button class="btn btn-primary edit_password" type="button" uuid = "${this.userData[i].uuid}">
                     <span class="glyphicon glyphicon-floppy-disk"></span>
                   </button>
                 </span>
               </div>
             </td>
             <td> 
               <div class="input-group">
                 <div class="input-group-addon">状态</div>
                 <select class = "form-control user_status">`;
            // 密码状态
           if (1 == this.userData[i].status) {
             content += `<option value = "1" selected = "selected">正常</option>
                         <option value = "2">冻结</option>
                         <option value = "3">锁定</option>`;
           } else if (2 == this.userData[i].status) {
             content += `<option value = "1">正常</option>
                         <option value = "2" selected = "selected">冻结</option>
                         <option value = "3">锁定</option>`;
           } else {
             content += `<option value = "1">正常</option>
                         <option value = "2">冻结</option>
                         <option value = "3" selected = "selected">锁定</option>`;
           }
              content +=
               ` </select>
                 <span class="input-group-btn modifyFormulaName">
                   <button class="btn btn-primary edit_status" type="button" uuid = "${this.userData[i].uuid}">
                     <span class="glyphicon glyphicon-floppy-disk"></span>
                   </button>
                 </span>
               </div>
             </td>
             <td>
               <button class = "btn btn-success edit_user_info" uuid = "${this.userData[i].uuid}">
                <span class = "glyphicon glyphicon-info-sign"></span>
              </button>
             </td> 
           </tr>`;
      }
      $("#userListOutput tbody").html(content);
    } else {
      $("#userListOutput tbody").html(`<tr><td colspan="4" align="center">没数据</td></tr>`);
    }
    
  }

  /*
   * 获取用户列表
   */
  getUserSecurityByUser() {
    let getUserSecurityByUserUrl = PROJECT_PATH + "lego/lego_user?servletName=getUserSecurityByManager";
    let getUserSecurityByUserParam = {};
    let getUserSecurityByUserData = ajax_assistant(getUserSecurityByUserUrl, getUserSecurityByUserParam, false, true, false);
    console.log(getUserSecurityByUserData);
    if (1 == getUserSecurityByUserData.status) {
      if (0 == getUserSecurityByUserData.count) {
        this.userData = {};
      } else {
        let result = JSON.parse(getUserSecurityByUserData.result);
        console.log(result);
        let data_arr = new Array();
        for (let i = 0; i < result.length; i++) {
          data_arr.push({"user_name": result[i].name, "password": "password", "status": result[i].status, "uuid": result[i].uuid});
        }
        this.userData = data_arr;
      }
    } else {
      alert("获取用户列表失败");
      return;
    }
  }

  /* 
   * 根据uuid获取详细信息
   */
  getUserInfo(obj) {
    let user_uuid = obj.attr("uuid");
    let getUserInfoUrl = PROJECT_PATH + "lego/lego_51zy?servletName=getUserInfo";
    let getUserInfoParam = {"user_uuid":user_uuid};
    let getUserInfoData = ajax_assistant(getUserInfoUrl, getUserInfoParam, false, true, false);
    let uuid = "";
    console.log(getUserInfoData);
    if (1 == getUserInfoData.status) {
      if (0 != getUserInfoData.count) {
        let result = JSON.parse(getUserInfoData.result);
        console.log(result);
        this.detailData = {"nick_name": result[0].nick_name, "sex": result[0].sex, "phone_number": result[0].phone_number, "email": result[0].email,"wechat_account": result[0].wechat_account, "qq_account": result[0].qq_account,"address": result[0].address,"uuid": result[0].uuid};
        uuid = result[0].uuid;
      } else {
        this.detailData = {"nick_name": "", "sex": "", "phone_number": "", "email": "","wechat_account": "", "qq_account": "","address": "","uuid": ""};
      }
    } else {
      alert("获取用户列表失败");
      return;
    }
    return uuid;
  }
  /*
   * 修改用户密码
   */
  modifyUserSecurityWithPasswordByManager(obj) {
    let edit_password = obj.parents("span").siblings(".password").val();
    let uuid = obj.attr("uuid");
    if ("" == edit_password) {
      alert("密码不能为空");
      return;
    } else {
      if (null == edit_password.match(/^\S{1,16}$/)) {
        alert("密码格式不正确");
        return;
      }
    }
    let modifyUserSecurityWithPasswordByManagerUrl = PROJECT_PATH + "lego/lego_user?servletName=modifyUserSecurityWithPasswordByManager";
    let modifyUserSecurityWithPasswordByManagerParam = {"uuid": uuid,"password": edit_password};
    let modifyUserSecurityWithPasswordByManagerData = ajax_assistant(modifyUserSecurityWithPasswordByManagerUrl, modifyUserSecurityWithPasswordByManagerParam, false, true, false);
    console.log(modifyUserSecurityWithPasswordByManagerData);
    if (1 == modifyUserSecurityWithPasswordByManagerData.status) {
      alert("修改成功");
      this.getUserInfo();
      this.fillVariableData();
    } else {
      alert("修改失败");
      return;
    }
  }

  /*
   * 修改用户状态
   */
  modifyUserStatusByManager(obj) {
    let edit_status = obj.parents("span").siblings(".user_status").val();
    let uuid = obj.attr("uuid");
    if ("" == edit_status) {
      alert("请选择状态");
      return;
    }
    let modifyUserStatusByManagerUrl = PROJECT_PATH + "lego/lego_user?servletName=modifyUserStatusByManager";
    let modifyUserStatusByManagerParam = {};
    modifyUserStatusByManagerParam["uuid"] = uuid;
    modifyUserStatusByManagerParam["status"] =edit_status;
    let modifyUserStatusByManagerData = ajax_assistant(modifyUserStatusByManagerUrl, modifyUserStatusByManagerParam, false, true, false);
    console.log(modifyUserStatusByManagerData);
    if (1 == modifyUserStatusByManagerData.status) {
      alert("修改成功");
      this.getUserInfo();
      this.fillVariableData();
    } else {
      alert("修改失败");
      return;
    }
  }
  
  /*
   * 修改用户弹窗
   */
  editDataModal(obj) {
    let user_uuid = obj.attr("uuid");
    let uuid = this.getUserInfo(obj);
    let Html = 
      `<div class = "modal fade bs-example-modal-sm custom_modal" id = "edit_modle" tabindex = "-1" role = "dialog" aria-labelledby = "myModalLabel">
        <div class = "modal-dialog  modal-sm" role = "document">
          <div class = "modal-content">
            <div class = "modal-header bg-primary">
              <button type = "button" class = "close" data-dismiss = "modal" aria-label="Close"><span aria-hidden = "true">&times;</span></button>
              <h4 class = "modal-title" id="myModalLabel">删除列表确认</h4>
            </div>
            <div class = "modal-body text-center nopadding-bottom material_type_list_center">
              <div class = "row">
                <div class="col-md-12">
                  <div class="input-group">
                    <span class="input-group-addon">昵称</span>
                    <input type="text" class="form-control nick_name" value = "${this.detailData.nick_name}">
                  </div>
                </div>
              </div>
              <div class = "row user_list_mt20">
                <div class="col-md-12">
                  <div class="input-group">
                    <span class="input-group-addon">性别</span>
                    <select class = "form-control sex" id = "">
                      <option value = "0">女</option>
                      <option value = "1">男</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class = "row user_list_mt20">
                <div class="col-md-12">
                  <div class="input-group">
                    <span class="input-group-addon">手机号码</span>
                    <input type="text" class="form-control phone_number" value = "${this.detailData.phone_number}">
                  </div>
                </div>
              </div>
              <div class = "row user_list_mt20">
                <div class="col-md-12">
                  <div class="input-group">
                    <span class="input-group-addon">Email</span>
                    <input type="text" class="form-control email" value = "${this.detailData.email}">
                  </div>
                </div>
              </div>
              <div class = "row user_list_mt20">
                <div class="col-md-12">
                  <div class="input-group">
                    <span class="input-group-addon">微信号</span>
                    <input type="text" class="form-control wechat_account" value = "${this.detailData.wechat_account}">
                  </div>
                </div>
              </div>
              <div class = "row user_list_mt20">
                <div class="col-md-12">
                  <div class="input-group">
                    <span class="input-group-addon">QQ号</span>
                    <input type="text" class="form-control qq_account" value = "${this.detailData.qq_account}">
                  </div>
                </div>
              </div>
              <div class = "row user_list_mt20">
                <div class="col-md-12">
                  <div class="input-group">
                    <span class="input-group-addon">地址</span>
                    <input type="text" class="form-control address" value = "${this.detailData.address}">
                  </div>
                </div>
              </div>
            </div>
            <div class = "modal-footer" style = "text-align: center;">
              <button type = "button" class = "btn btn-warning edit_btn" uuid = "${uuid}" user_uuid = "${user_uuid}">修改</button>
            </div>
          </div>
        </div>
      </div>`;
    $("body").append(Html);
    // 性别
    for(var i = 0; i < $("#edit_modle .sex option").length; i++){
      var sex = this.detailData.sex;
      //console.log(type);
      if($("#edit_modle .sex option").eq(i).val() == sex) {
        $("#edit_modle .sex option").eq(i).prop('selected','selected');
        break;
      }
    }
    if ("" == uuid) {
      $(".edit_btn").attr("disabled","disabled");
    }
    $("#edit_modle").modal("show");
    $("#edit_modle").on("hidden.bs.modal", function (e) {
      $(this).remove();
    });  
  }

  /* 
   * 修改用户
   */
  modifyUserInfo(obj) {
    let uuid = obj.attr("uuid");
    let user_uuid = obj.attr("user_uuid");
    let nick_name = $("#edit_modle .nick_name").val();
    let sex = $("#edit_modle .sex").val();
    let phone_number = $("#edit_modle .phone_number").val();
    let email = $("#edit_modle .email").val();
    let wechat_account = $("#edit_modle .wechat_account").val();
    let qq_account = $("#edit_modle .qq_account").val();
    let address = $("#edit_modle .address").val();
    if ("" == nick_name) {
      alert("昵称不能为空");
      return;
    } else {
      if (null == nick_name.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)) {
        alert("昵称格式错误");
        return;
      }
    }
    if ("" == sex) {
      alert("请选择性别");
      return;
    }
    if ("" == phone_number) {
      alert("手机号码不能为空");
      return;
    } else {
      if (null == phone_number.match(/^[0-9]{6,15}$/)) {
        alert("手机号码格式错误");
        return;
      }
    }
    if ("" == email) {
      alert("Email不能为空");
      return;
    } else {
      if (null == email.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)) {
        alert("Email格式错误");
        return;
      }
    }
    if ("" == wechat_account) {
      alert("微信号不能为空");
      return;
    } else {
      if (null == wechat_account.match(/^.{1,32}$/)) {
        alert("微信号格式错误");
        return;
      }
    }
    if ("" == qq_account) {
      alert("QQ号不能为空");
      return;
    } else {
      if (null == qq_account.match(/^.{1,32}$/)) {
        alert("QQ号格式错误");
        return;
      }
    }
    if ("" == address) {
      alert("地址不能为空");
      return;
    } else {
      if (null == address.match(/^.{1,128}$/)) {
        alert("地址格式错误");
        return;
      }
    }
    let modifyUserInfoUrl = PROJECT_PATH + "lego/lego_51zy?servletName=modifyUserInfo";
    let modifyUserInfoParam = {};
    modifyUserInfoParam["user_uuid"] = user_uuid;
    modifyUserInfoParam["uuid"] = uuid;
    modifyUserInfoParam["nick_name"] = nick_name;
    modifyUserInfoParam["sex"] = sex;
    modifyUserInfoParam["phone_number"] = phone_number;
    modifyUserInfoParam["email"] = email;
    modifyUserInfoParam["wechat_account"] = wechat_account;
    modifyUserInfoParam["qq_account"] = qq_account;
    modifyUserInfoParam["address"] = address;
    let modifyUserInfoData = ajax_assistant(modifyUserInfoUrl, modifyUserInfoParam, false, true, false);
    console.log(modifyUserInfoData);
    if (1 == modifyUserInfoData.status) {
      alert("修改成功");
      $("#edit_modle").modal("hide");
      this.getUserInfo();
      this.fillVariableData();
    } else {
      alert("修改失败");
      return;
    }
  }

  /**
   * 输出
   */
  output() {
    let content = 
      `<div class = "panel-heading text-left">用户列表</div>
        <div class = "panel-body table-responsive material_entry_pd0">
          <table  class = "table contact_management_mt20" id = "">
            <tbody>
              <tr>
                <td>
                  <div class="form-group">
                    <div class="input-group">
                      <div class="input-group-addon">用户名</div>
                      <input type="text" class="form-control" value = "admin">
                    </div>
                  </div>
                </td>
                <td>
                  <div class="input-group">
                    <div class="input-group-addon">密码</div>
                    <input type="password" class="form-control" value = "123456">
                    <span class="input-group-btn modifyFormulaName">
                      <button class="btn btn-primary" type="button">
                        <span class="glyphicon glyphicon-floppy-disk"></span>
                      </button>
                    </span>
                  </div>
                </td>
                <td> 
                  <div class="input-group">
                    <div class="input-group-addon">密码</div>
                    <select class = "form-control cfName" id = "">
                      <option value = "1">正常</option>
                      <option value = "2">异常</option>
                    </select>
                    <span class="input-group-btn modifyFormulaName">
                      <button class="btn btn-primary" type="button">
                        <span class="glyphicon glyphicon-floppy-disk"></span>
                      </button>
                    </span>
                  </div>
                </td>
                <td>
                  <button class = "btn btn-success" style = "margin-right: 15px;">
                   <span class = "glyphicon glyphicon-info-sign"></span>
                 </button>
                </td> 
              </tr>
              <tr>
                <td>
                  <div class="form-group">
                    <div class="input-group">
                      <div class="input-group-addon">用户名</div>
                      <input type="text" class="form-control" value = "admin">
                    </div>
                  </div>
                </td>
                <td>
                  <div class="input-group">
                    <div class="input-group-addon">密码</div>
                    <input type="password" class="form-control" value = "123456">
                    <span class="input-group-btn modifyFormulaName">
                      <button class="btn btn-primary" type="button">
                        <span class="glyphicon glyphicon-floppy-disk"></span>
                      </button>
                    </span>
                  </div>
                </td>
                <td> 
                  <div class="input-group">
                    <div class="input-group-addon">密码</div>
                    <select class = "form-control cfName" id = "">
                      <option value = "1">正常</option>
                      <option value = "2">异常</option>
                    </select>
                    <span class="input-group-btn modifyFormulaName">
                      <button class="btn btn-primary" type="button">
                        <span class="glyphicon glyphicon-floppy-disk"></span>
                      </button>
                    </span>
                  </div>
                </td>
                <td>
                  <button class = "btn btn-success" style = "margin-right: 15px;">
                   <span class = "glyphicon glyphicon-info-sign"></span>
                 </button>
                </td> 
              </tr>
              <tr>
                <td>
                  <div class="form-group">
                    <div class="input-group">
                      <div class="input-group-addon">用户名</div>
                      <input type="text" class="form-control" value = "admin">
                    </div>
                  </div>
                </td>
                <td>
                  <div class="input-group">
                    <div class="input-group-addon">密码</div>
                    <input type="password" class="form-control" value = "123456">
                    <span class="input-group-btn modifyFormulaName">
                      <button class="btn btn-primary" type="button">
                        <span class="glyphicon glyphicon-floppy-disk"></span>
                      </button>
                    </span>
                  </div>
                </td>
                <td> 
                  <div class="input-group">
                    <div class="input-group-addon">密码</div>
                    <select class = "form-control cfName" id = "">
                      <option value = "1">正常</option>
                      <option value = "2">异常</option>
                    </select>
                    <span class="input-group-btn modifyFormulaName">
                      <button class="btn btn-primary" type="button">
                        <span class="glyphicon glyphicon-floppy-disk"></span>
                      </button>
                    </span>
                  </div>
                </td>
                <td>
                  <button class = "btn btn-success" style = "margin-right: 15px;">
                   <span class = "glyphicon glyphicon-info-sign"></span>
                 </button>
                </td> 
              </tr>
            </tbody>
          </table>
        </div>
        <div class="panel-footer bg-primary">&nbsp;</div>`;
    $(this.outputId).html(content);
  }
}
