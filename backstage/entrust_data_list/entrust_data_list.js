"use strict"; 
class EntrustDataList {
  constructor() {
    this.sexVal = ["女","男"];
    this.oilType = ["汽油","柴油","煤油","燃料油"];
    //列表
    this.entrustData = {
      "data":[
        {"user":"zhangsan", "name":"张三", "sex":"男", "adrress":"济南", "phone":"15944444444", "uuid":"001"},
        {"user":"zhangsan", "name":"张三", "sex":"男", "adrress":"济南", "phone":"15944444444", "uuid":"002"},
        {"user":"zhangsan", "name":"张三", "sex":"男", "adrress":"济南", "phone":"15944444444", "uuid":"003"},
        {"user":"zhangsan", "name":"张三", "sex":"男", "adrress":"济南", "phone":"15944444444", "uuid":"004"},
        {"user":"zhangsan", "name":"张三", "sex":"男", "adrress":"济南", "phone":"15944444444", "uuid":"005"},
        {"user":"zhangsan", "name":"张三", "sex":"男", "adrress":"济南", "phone":"15944444444", "uuid":"006"}]
    };
  }

  
  //清空数据
  clearRawData() {
    $("#entrust_content").html(`<tr><td colspan="6" align="center">没数据</td></tr>`);
  }
  //数据库数据覆盖
  serverDataCover() {
    this.entrustData = {};
    //获取
    let Url = PROJECT_PATH + "lego/lego_51zy?servletName=getTradeDemand";
    let Get = ajax_assistant(Url, "", false, true, false);
    //获取用户
    let nameUrl = PROJECT_PATH + "lego/lego_51zy?servletName=getUserInfo";
    let nameGet = ajax_assistant(nameUrl, "", false, true, false);
console.log(nameGet);
console.log(Get);
    //仓库
    if ("1" == Get.status) {
      if ("0" == Get.count) {
        this.entrustData = {};
      } else {
        let tmpArr = new Array();
        let result = JSON.parse(Get.result);    
console.log(result);
        for (let i = 0; i < result.length; i++) {
          tmpArr[i] = {"name":result[i].name, "sex":this.sexVal[result[i].sex], "adrress":result[i].area, "phone":result[i].phone_number, "uuid":result[i].uuid};
          if ("1" == nameGet.status) {
            if ("0" != nameGet.count) {
              let resultName = JSON.parse(nameGet.result); 
              for (let j = 0; j < resultName.length; j++) {
                if(resultName[j].user_uuid == result[i].user_uuid) {
                  tmpArr[i]["user"] = resultName[j].nick_name;
                }
              }
            }
          }
        }
        this.entrustData["data"] = tmpArr;
      }
    } else {
      alert("需求数据获取失败");
    }

  }
  //填充覆盖数据
  fillVariableData() {
    //查询列表
    let entrustHtml = "";
    if(isJsonObjectHasData(this.entrustData)) {
      for (let i = 0; i < this.entrustData.data.length; i++) {
        entrustHtml +=
          `<tr>
             <td>${this.entrustData.data[i].user}</td>
             <td>${this.entrustData.data[i].name}</td>
             <td>${this.entrustData.data[i].sex}</td>
             <td>${this.entrustData.data[i].adrress}</td> 
             <td>${this.entrustData.data[i].phone}</td>
             <td><span class = "glyphicon glyphicon-info-sign entrust_info" uuid = "${this.entrustData.data[i].uuid}"></span><span class = "glyphicon glyphicon-remove-sign entrust_ml15 entrust_delete" uuid = "${this.entrustData.data[i].uuid}"></span></td>
           </tr>`;
      }
      $("#entrust_content").html(entrustHtml);
    } else {
      $("#entrust_content").html(`<tr><td colspan="6" align="center">没数据</td></tr>`);
    }
  }

  initEvent() {
    let currentObj = this;
    $(document).on("click", ".entrust_info", function() {
      currentObj.entrustInfoModal($(this));
    });
    $(document).on("click", ".entrust_delete", function() {
      currentObj.entrustDeleteModal($(this));
    }); 
    $(document).on("click", ".entrust_delet_btn", function() {
      currentObj.deleteData($(this));
    }); 
  }
  
  entrustInfoModal(obj) {
    let uuid = obj.attr("uuid");
    let infoData ="";
    let userName = "";
    let dataTime = "";
    let data = {
      "uuid":uuid
    };
    let infoUrl = PROJECT_PATH + "lego/lego_51zy?servletName=getTradeDemand";
    let infoGet = ajax_assistant(infoUrl, data, false, true, false);
    //获取用户
    let nameUrl = PROJECT_PATH + "lego/lego_51zy?servletName=getUserInfo";
    let nameGet = ajax_assistant(nameUrl, "", false, true, false);

      console.log(nameGet);
    if ("1" == infoGet.status) {
      infoData = JSON.parse(infoGet.result); 
      dataTime = infoData[0].record_datetime;
      dataTime = dataTime.substring(0, dataTime.indexOf(' '));
      console.log(infoData);
      if ("1" == nameGet.status) {
        if ("0" != nameGet.count) {
          let resultName = JSON.parse(nameGet.result); 
      console.log(resultName);
          for (let i = 0; i < resultName.length; i++) {
            if(resultName[i].user_uuid == infoData[0].user_uuid) {
              userName = resultName[i].nick_name;
            }
          }
        }
      }
      console.log(userName);
    }
    let Html = 
      `<div class = "modal fade bs-example-modal-sm custom_modal" id = "entrust_info_modle" tabindex = "-1" role = "dialog" aria-labelledby = "myModalLabel">
        <div class = "modal-dialog  modal-lg" role = "document">
          <div class = "modal-content">
            <div class = "modal-header bg-primary">
              <button type = "button" class = "close" data-dismiss = "modal" aria-label="Close"><span aria-hidden = "true">&times;</span></button>
              <h4 class = "modal-title" id="myModalLabel">查看需求详情</h4>
            </div>
            <div class = "modal-body text-center nopadding-bottom material_type_list_center">
              <div class = "row">
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">用户名</span>
                    <input type="text" class="form-control" value = "${userName}" disabled = "disabled">
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">姓名</span>
                    <input type="text" class="form-control" value = "${infoData[0].name}" disabled = "disabled">
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">性别</span>
                    <input type="text" class="form-control" value = "${this.sexVal[infoData[0].sex]}" disabled = "disabled">
                  </div>
                </div>
              </div>
              <div class = "row entrust_mt20">
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">联系方式</span>
                    <input type="text" class="form-control" value = "${infoData[0].phone_number}" disabled = "disabled">
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">地区</span>
                    <input type="text" class="form-control" value = "${infoData[0].area}" disabled = "disabled">
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">油品类型</span>
                    <input type="text" class="form-control" value = "${this.oilType[infoData[0].oil_type]}" disabled = "disabled">
                  </div>
                </div>
              </div>
              <div class = "row entrust_mt20">
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">公司名称</span>
                    <input type="text" class="form-control" value = "${infoData[0].company_name}" disabled = "disabled">
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">内容</span>
                    <input type="text" class="form-control" value = "${infoData[0].content}" disabled = "disabled">
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">记录时间</span>
                    <input type="text" class="form-control" value = "${dataTime}" disabled = "disabled">
                  </div>
                </div>
              </div>
            </div>
            <div class = "modal-footer" style = "text-align: center;">
            <button type = "button" class = "btn btn-default" data-dismiss = "modal">关闭</button>
            </div>
          </div>
        </div>
      </div>`;
    $("body").append(Html);
    $("#entrust_info_modle").modal("show");
    $("#entrust_info_modle").on("hidden.bs.modal", function (e) {
      $(this).remove();
    });  
  }
  entrustDeleteModal(obj) {
    let uuid = obj.attr("uuid");
    let Html = 
      `<div class = "modal fade bs-example-modal-sm custom_modal" id = "entrust_delete_modle" tabindex = "-1" role = "dialog" aria-labelledby = "myModalLabel">
        <div class = "modal-dialog  modal-sm" role = "document">
          <div class = "modal-content">
            <div class = "modal-header bg-primary">
              <button type = "button" class = "close" data-dismiss = "modal" aria-label="Close"><span aria-hidden = "true">&times;</span></button>
              <h4 class = "modal-title" id="myModalLabel">删除列表确认</h4>
            </div>
            <div class = "modal-body text-center nopadding-bottom material_type_list_center">确定要删除列表吗？</div>
            <div class = "modal-footer" style = "text-align: center;">
              <button type = "button" class = "btn btn-danger entrust_delet_btn" uuid = "${uuid}">删除</button>
              <button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>
            </div>
          </div>
        </div>
      </div>`;
    $("body").append(Html);
    $("#entrust_delete_modle").modal("show");
    $("#entrust_delete_modle").on("hidden.bs.modal", function (e) {
      $(this).remove();
    }); 
  }

  deleteData(obj) {
    let uuid = obj.attr("uuid");
    let data = {
      "uuid":uuid
    };
    let deleteUrl = PROJECT_PATH + "lego/lego_51zy?servletName=removeTradeDemand";
    let deleteGet = ajax_assistant(deleteUrl, data, false, true, false);
    if ("1" != deleteGet.status) {
      alert("删除列表失败");
    } else {    
    // 更新页面数据
      this.clearRawData();
      this.serverDataCover();
      this.fillVariableData();
    }
    $("#entrust_delete_modle").modal("hide");
    $("#entrust_delete_modle").on("hidden.bs.modal", function (e) {
      $(this).remove();
    });
  }
}
