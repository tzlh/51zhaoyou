"use strict"; 
class DemandDataList {
  constructor() {
    this.type =["找油物流","自提"];
    //列表
    this.demandData = {
      "data":[
        {"user":"zhangsan", "type":"找油物流", "weight":"3000", "data_time":"2017-05-04", "uuid":"001"},
        {"user":"zhangsan", "type":"找油物流", "weight":"3000", "data_time":"2017-05-04", "uuid":"002"},
        {"user":"zhangsan", "type":"找油物流", "weight":"3000", "data_time":"2017-05-04", "uuid":"003"},
        {"user":"zhangsan", "type":"找油物流", "weight":"3000", "data_time":"2017-05-04", "uuid":"004"},
        {"user":"zhangsan", "type":"找油物流", "weight":"3000", "data_time":"2017-05-04", "uuid":"005"},
        {"user":"zhangsan", "type":"找油物流", "weight":"3000", "data_time":"2017-05-04", "uuid":"006"},
        {"user":"zhangsan", "type":"找油物流", "weight":"3000", "data_time":"2017-05-04", "uuid":"007"},
        {"user":"zhangsan", "type":"找油物流", "weight":"3000", "data_time":"2017-05-04", "uuid":"008"},
        {"user":"zhangsan", "type":"找油物流", "weight":"3000", "data_time":"2017-05-04", "uuid":"009"}]
    };
  }

  
  //清空数据
  clearRawData() {
    $("#demand_content").html(`<tr><td colspan="6" align="center">没数据</td></tr>`);
  }
  //数据库数据覆盖
  serverDataCover() {
    this.demandData = {};
    //获取仓库
    let demandUrl = PROJECT_PATH + "lego/lego_51zy?servletName=getTradeEntrust";
    let demandGet = ajax_assistant(demandUrl, "", false, true, false);
    //获取用户
    let nameUrl = PROJECT_PATH + "lego/lego_51zy?servletName=getUserInfo";
    let nameGet = ajax_assistant(nameUrl, "", false, true, false);
    //仓库
    if ("1" == demandGet.status) {
      if ("0" == demandGet.count) {
        this.demandData = {};
      } else {
        let tmpArr = new Array();
        let result = JSON.parse(demandGet.result);  
        console.log(result);  
        for (let i = 0; i < result.length; i++) {
          tmpArr[i] = {"type":this.type[result[i].logistics_type], "weight":result[i].quantity, "data_time":result[i].record_datetime, "uuid":result[i].uuid};
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

        this.demandData["data"] = tmpArr;
        //console.log(tmpArr)
      }
    } else {
      alert("数据获取失败");
    }

  }
  //填充覆盖数据
  fillVariableData() {
    //查询列表
    let demandHtml = "";
    if(isJsonObjectHasData(this.demandData)) {
      for (let i = 0; i < this.demandData.data.length; i++) {
        let dataTime = this.demandData.data[i].data_time;
        dataTime = dataTime.substring(0, dataTime.indexOf(' '));
        demandHtml +=
          `<tr>
             <td>${this.demandData.data[i].user}</td>
             <td class = "demand_info" uuid = "${this.demandData.data[i].uuid}">[查看性情]</td>
             <td>${this.demandData.data[i].type}</td>
             <td>${this.demandData.data[i].weight}</td> 
             <td>${dataTime}</td>
             <td><span class = "glyphicon glyphicon-remove-sign demand_delete_remove" uuid = "${this.demandData.data[i].uuid}"></span></td>
           </tr>`;
      }
      $("#demand_content").html(demandHtml);
    } else {
      $("#demand_content").html(`<tr><td colspan="6" align="center">没数据</td></tr>`);
    }
  }

  initEvent() {
    let currentObj = this;
    $(document).on("click", ".demand_info", function() {
      currentObj.infoModal($(this));
    });
    $(document).on("click", ".demand_delete_remove", function() {
      currentObj.deleteModal($(this));
    }); 
    $(document).on("click", ".demand_delet_btn", function() {
      currentObj.deleteData($(this));
    }); 
  }
  
  infoModal(obj) {
  }
  deleteModal(obj) {
    let uuid = obj.attr("uuid");
    let Html = 
      `<div class = "modal fade bs-example-modal-sm custom_modal" id = "demand_delete_modle" tabindex = "-1" role = "dialog" aria-labelledby = "myModalLabel">
        <div class = "modal-dialog  modal-sm" role = "document">
          <div class = "modal-content">
            <div class = "modal-header bg-primary">
              <button type = "button" class = "close" data-dismiss = "modal" aria-label="Close"><span aria-hidden = "true">&times;</span></button>
              <h4 class = "modal-title" id="myModalLabel">删除列表确认</h4>
            </div>
            <div class = "modal-body text-center nopadding-bottom material_type_list_center">确定要删除列表吗？</div>
            <div class = "modal-footer" style = "text-align: center;">
              <button type = "button" class = "btn btn-danger demand_delet_btn" uuid = "${uuid}">删除</button>
              <button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>
            </div>
          </div>
        </div>
      </div>`;
    $("body").append(Html);
    $("#demand_delete_modle").modal("show");
    $("#demand_delete_modle").on("hidden.bs.modal", function (e) {
      $(this).remove();
    }); 
  }

  deleteData(obj) {
    let uuid = obj.attr("uuid");
    let data = {
      "uuid":uuid
    };
    let deleteUrl = PROJECT_PATH + "lego/lego_51zy?servletName=removeTradeEntrust";
    let deleteGet = ajax_assistant(deleteUrl, data, false, true, false);
    if ("1" != deleteGet.status) {
      alert("删除失败");
    } else {    
    // 更新页面数据
      this.clearRawData();
      this.serverDataCover();
      this.fillVariableData();
    }
    $("#demand_delete_modle").modal("hide");
    $("#demand_delete_modle").on("hidden.bs.modal", function (e) {
      $(this).remove();
    });
  }
}
