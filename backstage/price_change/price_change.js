"use strict"; 
class PriceChange {
  constructor() {
    //类别列表
    this.priceData = {
      "data":[
        {"type":"0", "price":"200", "data_time":"2017-05-06 00:00:00", "uuid":"001"},
        {"type":"1", "price":"200", "data_time":"2017-05-06 00:00:00", "uuid":"002"},
        {"type":"2", "price":"200", "data_time":"2017-05-06 00:00:00", "uuid":"003"}]
    };
  }
  //清空数据
  clearRawData() {
    $("#price_content").html(`<tr><td colspan="5" align="center">没数据</td></tr>`);
  }

  //数据库数据覆盖
  serverDataCover() {
    this.priceData = {};
    //获取
    let Url = PROJECT_PATH + "lego/lego_51zy?servletName=getIndexDataChange";
    let Get = ajax_assistant(Url, "", false, true, false);

    console.log(Get);
    //仓库
    if ("1" == Get.status) {
      if ("0" == Get.count) {
        this.priceData = {};
      } else {
        let tmpArr = new Array();
        let result = JSON.parse(Get.result);    
        console.log(result);
        for (let i = 0; i < result.length; i++) {
          tmpArr[i] = {"type":result[i].type, "price":result[i].price, "data_time":result[i].record_datetime, "uuid":result[i].uuid};
        }
        this.priceData["data"] = tmpArr;
      }
    } else {
      alert("数据获取失败");
    }

  }

  fillVariableData() {
    //查询列表
    let Html = "";
    if(isJsonObjectHasData(this.priceData)) {
      for (let i = 0; i < this.priceData.data.length; i++) {
        let time = this.priceData.data[i].data_time;
            time = time.substring(0, time.indexOf(' '));
        Html +=
          `<tr>
             <td>${i+1}</td>
             <td>
               <select class = "form-control cfName">`;
                  if("0" == this.priceData.data[i].type) {
                   Html += `<option value = "0" selected = "selected">汽油</option>`;
                 } else if("1" == this.priceData.data[i].type) {
                   Html += `<option value = "1" selected = "selected">柴油</option>`;
                 }
               Html +=
                  `<option value = "0">汽油</option>
                  <option value = "1">柴油</option>
              </select>
             </td>
             <td> 
               <div class="form-group">
                 <input type="text" class="form-control price_type" value = "${this.priceData.data[i].price}">
               </div>
             </td>
             <td>
               <div class="form-group has-feedback">
                 <input type="text" class="form-control widget_datepicker establish_datetime tima_val" value = "${time}">
                 <span class="glyphicon glyphicon-calendar form-control-feedback" aria-hidden="true"></span>
               </div>
             </td>
            <td style = "text-align:center">
               <button class = "btn edit_btn" uuid = "${this.priceData.data[i].uuid}">
                <span class = "glyphicon glyphicon-floppy-disk"></span>
              </button>
               <button class = "btn delete_btn" uuid = "${this.priceData.data[i].uuid}">
                <span class = "glyphicon glyphicon-remove"></span>
              </button>
             </td> 
           </tr>`;
      }
      $("#price_content").html(Html);
    } else {
      $("#price_content").html(`<tr><td colspan="5" align="center">没数据</td></tr>`);
    }
  }

  initEvent () {
    let currentObj = this;
    $(document).on("click", "#add_plus", function() {
      currentObj.addShow($(this));
    }); 
    //添加模态框
    $(document).on("click", "#add_price", function() {
      currentObj.addData($(this));
    });  
    $(document).on("click", ".edit_btn", function() {
      currentObj.editData($(this));
    }); 
    $(document).on("click", ".delete_btn", function() {
      currentObj.deleteModle($(this));
    }); 
    $(document).on("click", ".delet_btn_data", function() {
      currentObj.deleteData($(this));
    }); 
  }
  addShow() {
    $("#add_tr_table").html(`<td></td>
              <td>
                <select class = "form-control cfName" id = "type_all">
                  <option value = "0">汽油</option>
                  <option value = "1">柴油</option>
                </select>
              </td>
              <td> 
                <div class="form-group">
                  <input type="text" class="form-control" id = "price_weight"  value = "">
                </div>
              </td>
              <td>
                <div class="form-group has-feedback">
                  <input type="text" class="form-control widget_datepicker establish_datetime" id = "data_time">
                  <span class="glyphicon glyphicon-calendar form-control-feedback" aria-hidden="true"></span>
                </div>
              </td>
             <td style = "text-align:center">
                <button class = "btn btn-primary" id = "add_price">
                 <span class = "glyphicon glyphicon-floppy-disk"></span>
               </button>
              </td> `);
  }
  addData () {
    let type = $("#type_all").val();
    let price = $("#price_weight").val();
    let data_time = $("#data_time").val();
    if(0 < data_time.length){
      data_time += ' 00:00:00';
    }
    if(null == price.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)){
      alert("请输入正确的价格");
      return;
    };
    if(null == data_time.match(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)){
      alert("请输入正确的时间");
      return;
    };
    let data = {
      "type":type,
      "price":price,
      "record_datetime":data_time
    };
    let addUrl = PROJECT_PATH + "lego/lego_51zy?servletName=addIndexDataChange";
    let addGet = ajax_assistant(addUrl, data, false, true, false);
    console.log(addGet);
    if ("1" != addGet.status) {
      alert("添加失败");
    } else {
      this.clearRawData();
      this.serverDataCover();
      this.fillVariableData();
      alert("添加成功");
      $("#add_tr_table").html("");
    }
  }

  editData(obj) {
    let uuid = obj.attr("uuid");
    let type = obj.parents("tr").find(".cfName").val();
    let price = obj.parents("tr").find(".price_type").val();
    let data_time = obj.parents("tr").find(".tima_val").val();
     if("" != data_time){
      data_time += ' 00:00:00';
    }
    if(null == price.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)){
      alert("请输入正确的价格");
      return;
    };
    if(null == data_time.match(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)){
      alert("请输入正确的时间");
      return;
    };
    let data = {
      "uuid":uuid,
      "type":type,
      "price":price,
      "record_datetime":data_time
    };
    let editUrl = PROJECT_PATH + "lego/lego_51zy?servletName=modifyIndexDataChange";
    let editGet = ajax_assistant(editUrl, data, false, true, false);
    console.log(editGet);
    if ("1" == editGet.status) {
      this.clearRawData();
      this.serverDataCover();
      this.fillVariableData();
      alert("修改成功");
    } else {
      alert("修改失败");
    }
  }

  deleteModle (obj) {
    let uuid = obj.attr("uuid");
    let materialHtml = 
      `<div class = "modal fade bs-example-modal-sm custom_modal" id = "list_delet" tabindex = "-1" role = "dialog" aria-labelledby = "myModalLabel">
        <div class = "modal-dialog  modal-sm" role = "document">
          <div class = "modal-content">
            <div class = "modal-header bg-primary">
              <button type = "button" class = "close" data-dismiss = "modal" aria-label="Close"><span aria-hidden = "true">&times;</span></button>
              <h4 class = "modal-title" id="myModalLabel">删除确认</h4>
            </div>
            <div class = "modal-body text-center nopadding-bottom material_type_list_center">确定要删除吗？</div>
            <div class = "modal-footer" style = "text-align: center;">
              <button type = "button" class = "btn btn-danger delet_btn_data" uuid = "${uuid}">删除</button>
              <button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>
            </div>
          </div>
        </div>
      </div>`;
    $("body").append(materialHtml);
    $("#list_delet").modal("show");
    $("#list_delet").on("hidden.bs.modal", function (e) {
      $(this).remove();
    }); 
  }

  deleteData (obj) {
    let uuid = obj.attr("uuid");
    let data = {
      "uuid":uuid
    };
    let deleteUrl = PROJECT_PATH + "lego/lego_51zy?servletName=removeIndexDataChange";
    let deleteGet = ajax_assistant(deleteUrl, data, false, true, false);
    if ("1" != deleteGet.status) {
      alert("删除失败");
    } else {    
    // 更新页面数据
      this.clearRawData();
      this.serverDataCover();
      this.fillVariableData();
    }
    $("#list_delet").modal("hide");
    $("#list_delet").on("hidden.bs.modal", function (e) {
      $(this).remove();
    });  
  }
  //输出文本
  priceOutPut(outputId) {
      let content = 
      `<div class = "panel panel-default panel-primary" id = "indexData">
        <div class = "panel-heading text-left clearfix" id = "indexTitle">价格变动<span class = "glyphicon glyphicon-plus pull-right" id = "add_plus"></span></div>
        <div class = "panel-body table-responsive material_entry_pd0">
          <table  class = "table contact_management_mt20" id = "">
            <thead>
              <tr>
                <th>#</th>
                <th>类型</th>
                <th>价格</th>
                <th>记录时间</th>
                <th>操作</th>
              </tr>
              <tr id = "add_tr_table">

              </tr>
            </thead>
            <tbody id = "price_content">
              <tr>
                <td>1</td>
                <td>
                  <select class = "form-control cfName">
                    <option value = "0">汽油</option>
                    <option value = "1">柴油</option>
                  </select>
                </td>
                <td> 
                  <div class="form-group">
                    <input type="text" class="form-control price_type" value = "">
                  </div>
                </td>
                <td>
                  <div class="form-group has-feedback">
                    <input type="text" class="form-control widget_datepicker establish_datetime tima_val">
                    <span class="glyphicon glyphicon-calendar form-control-feedback" aria-hidden="true"></span>
                  </div>
                </td>
               <td>
                  <button class = "btn">
                   <span class = "glyphicon glyphicon-floppy-disk"></span>
                 </button>
                  <button class = "btn">
                   <span class = "glyphicon glyphicon-remove"></span>
                 </button>
                </td> 
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <select class = "form-control cfName" id = "">
                    <option value = "0">汽油</option>
                    <option value = "1">柴油</option>
                  </select>
                </td>
                <td> 
                  <div class="form-group">
                    <input type="text" class="form-control">
                  </div>
                </td>
                <td>
                  <div class="form-group has-feedback">
                    <input type="text" class="form-control widget_datepicker establish_datetime">
                    <span class="glyphicon glyphicon-calendar form-control-feedback" aria-hidden="true"></span>
                  </div>
                </td>
               <td>
                  <button class = "btn">
                   <span class = "glyphicon glyphicon-floppy-disk"></span>
                 </button>
                  <button class = "btn">
                   <span class = "glyphicon glyphicon-remove"></span>
                 </button>
                </td> 
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <select class = "form-control cfName" id = "">
                    <option value = "1">汽油</option>
                    <option value = "2">柴油</option>
                    <option value = "3">石油</option>
                  </select>
                </td>
                <td> 
                  <div class="form-group">
                    <input type="text" class="form-control">
                  </div>
                </td>
                <td>
                  <div class="form-group has-feedback">
                    <input type="text" class="form-control widget_datepicker establish_datetime">
                    <span class="glyphicon glyphicon-calendar form-control-feedback" aria-hidden="true"></span>
                  </div>
                </td>
               <td>
                  <button class = "btn">
                   <span class = "glyphicon glyphicon-floppy-disk"></span>
                 </button>
                  <button class = "btn">
                   <span class = "glyphicon glyphicon-remove"></span>
                 </button>
                </td> 
              </tr>
            </tbody>
          </table>
        </div>
        <div class="panel-footer bg-primary">&nbsp;</div>
      </div>`;
    $(outputId).html(content);
  }
}
