"use strict;"

class DataList {

  constructor(outputId) {
    this.data_type = ["找油","现货"];
    this.oil_type = ["汽油","柴油","煤油","燃料油"];
    this.level = ["普柴","轻燃","国III","国Iv","国V"];
    this.outputId = outputId;
    this.data = [
      {"order_number": "12345678910", "data_type": "找油", "oil_type": "汽油", "level": "普柴","code": "0#", "manufactor_name": "中国石化","address": "上海","record_datetime": "2017-05-06","uuid": "111"},
      {"order_number": "12345678910", "data_type": "找油", "oil_type": "汽油", "level": "普柴","code": "0#", "manufactor_name": "中国石化","address": "上海","record_datetime": "2017-05-06","uuid": "111"},
      {"order_number": "12345678910", "data_type": "找油", "oil_type": "汽油", "level": "普柴","code": "0#", "manufactor_name": "中国石化","address": "上海","record_datetime": "2017-05-06","uuid": "111"},
      {"order_number": "12345678910", "data_type": "找油", "oil_type": "汽油", "level": "普柴","code": "0#", "manufactor_name": "中国石化","address": "上海","record_datetime": "2017-05-06","uuid": "111"},
      {"order_number": "12345678910", "data_type": "找油", "oil_type": "汽油", "level": "普柴","code": "0#", "manufactor_name": "中国石化","address": "上海","record_datetime": "2017-05-06","uuid": "111"},
      {"order_number": "12345678910", "data_type": "找油", "oil_type": "汽油", "level": "普柴","code": "0#", "manufactor_name": "中国石化","address": "上海","record_datetime": "2017-05-06","uuid": "111"},
      {"order_number": "12345678910", "data_type": "找油", "oil_type": "汽油", "level": "普柴","code": "0#", "manufactor_name": "中国石化","address": "上海","record_datetime": "2017-05-06","uuid": "111"},
    ]
    this.detailData = {"data_type": 1, "oil_type": 0, "level": 3,"code": "0#", "manufactor_name": "中国石化","address": "上海","price": 100, "quantity": 1000,"warehouse": "不限","trader_name": "李某某","trader_phonenumber": "123456796","record_datetime": "2017-05-06","remark": "123","uuid": "111"};
  }

  initEvent() {
    let currentObj = this;
    $(document).on("click", ".add_data", function() {
      currentObj.addDataModal();
    });
    $(document).on("click", ".detail_data", function() {
      currentObj.getTradeOilDataByUuid($(this))
      currentObj.detailDataModal();
    }); 
    $(document).on("click", ".edit_data", function() {
      currentObj.getTradeOilDataByUuid($(this))
      currentObj.editDataModal($(this));
    }); 
    $(document).on("click", ".delete_data", function() {
      currentObj.getTradeOilDataByUuid($(this))
      currentObj.deleteDataModal($(this));
    }); 
    $(document).on("click", ".add_oils_data", function() {
      currentObj.addTradeOilData($(this));
    }); 
    $(document).on("click", ".edit_oils_data", function() {
      currentObj.modifyTradeOilData($(this));
    }); 
    $(document).on("click", ".delet_btn", function() {
      currentObj.removeTradeOilData($(this));
    }); 
  }

  /**
   * 清空原始值
   */
  clearRawData() {
    $("#dataListOutput tbody").html("");
  }

  /*
   * 赋值
   */
  fillVariableData() {
    if (0 != this.data.length) {
      let content = ""
      for (let i = 0; i < this.data.length; i++) {
        content += 
          `<tr>
             <td>${this.data[i].order_number}</td>
             <td>${this.data_type[this.data[i].data_type]}</td>
             <td>${this.oil_type[this.data[i].oil_type]}</td>
             <td>${this.level[this.data[i].level]}</td>
             <td>${this.data[i].code}</td> 
             <td>${this.data[i].manufactor_name}</td>
             <td>${this.data[i].address}</td>
             <td>${this.data[i].record_datetime}</td>
             <td>
               <span class = "glyphicon glyphicon-info-sign detail_data" style = "margin-right: 15px;" data-uuid = "${this.data[i].uuid}"></span>
               <span class = "glyphicon glyphicon-edit edit_data" style = "margin-right: 15px;" data-uuid = "${this.data[i].uuid}"></span>
               <span class = "glyphicon glyphicon-remove-sign delete_data" data-uuid = "${this.data[i].uuid}"></span>
             </td>
           </tr>`;
      }
    $("#dataListOutput tbody").html(content);
    } else {
      $("#dataListOutput tbody").html(`<tr><td colspan="9" align="center">没数据</td></tr>`);
    }
  }

  /*
   * 获取油品数据
   */
  getTradeOilData() {
    let getTradeOilDataUrl = PROJECT_PATH + "lego/lego_51zy?servletName=getTradeOilData";
    let getTradeOilDataParam = {};
    let getTradeOilDataData = ajax_assistant(getTradeOilDataUrl, getTradeOilDataParam, false, true, false);
    console.log(getTradeOilDataData);
    if (1 == getTradeOilDataData.status) {
      if (0 == getTradeOilDataData.count) {
        this.data = {};
      } else {
        let data_arr = new Array();
        let result = JSON.parse(getTradeOilDataData.result); 
        console.log(result);
        for (let i = 0; i < result.length; i++) {
          let record_datetime = result[i].record_datetime.substring(0,result[i].record_datetime.indexOf(" "));
          data_arr.push({"order_number": result[i].order_number, "data_type": result[i].data_type, "oil_type": result[i].oil_type, "level": result[i].level,"code": result[i].code, "manufactor_name": result[i].manufactor_name,"address":result[i].area,"record_datetime": record_datetime,"uuid": result[i].uuid});
        }
        this.data = data_arr;
      }
    } else {
      alert("获取油品数据失败");
      return;
    }
  }

  /*
   * 根据uuid获取油品数据
   */
  getTradeOilDataByUuid(obj) {
    let uuid = obj.data("uuid");
    let getTradeOilDataUrl = PROJECT_PATH + "lego/lego_51zy?servletName=getTradeOilData";
    let getTradeOilDataParam = {"uuid": uuid};
    let getTradeOilDataData = ajax_assistant(getTradeOilDataUrl, getTradeOilDataParam, false, true, false);
    console.log(getTradeOilDataData);
    if (1 == getTradeOilDataData.status) {
      let result = JSON.parse(getTradeOilDataData.result); 
      console.log(result);
      let record_datetime = result[0].record_datetime.substring(0,result[0].record_datetime.indexOf(" "));
      let remark = result[0].remark;
      if (null == remark) {
        remark = "";
      } else {
        remark = remark;
      }
      this.detailData = {"order_number": result[0].order_number, "data_type": result[0].data_type, "oil_type": result[0].oil_type, "level": result[0].level,"code": result[0].code, "manufactor_name": result[0].manufactor_name,"address":result[0].area,"price":  result[0].price, "quantity": result[0].quantity,"warehouse": result[0].warehouse,"trader_name": result[0].trader_name,"trader_phonenumber": result[0].trader_phonenumber,"record_datetime": record_datetime,"remark": remark};
    } else {
      alert("获取油品数据失败");
      return;
    }
  }

  /*
   * 添加弹窗
   */
  addDataModal() {
    let Html = 
      `<div class = "modal fade bs-example-modal-sm custom_modal" id = "dataListAddModal" tabindex = "-1" role = "dialog" aria-labelledby = "myModalLabel">
        <div class = "modal-dialog  modal-lg" role = "document">
          <div class = "modal-content">
            <div class = "modal-header bg-primary">
              <button type = "button" class = "close" data-dismiss = "modal" aria-label="Close"><span aria-hidden = "true">&times;</span></button>
              <h4 class = "modal-title" id="myModalLabel">添加油品数据</h4>
            </div>
            <div class = "modal-body text-center nopadding-bottom material_type_list_center">
              <div class = "row">
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">数据类型</span>
                    <select class = "form-control data_type" id = "">
                      <option value = "0">找油</option>
                      <option value = "1">现货</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">油品类型</span>
                    <select class = "form-control oil_type" id = "">
                      <option value = "0">汽油</option>
                      <option value = "1">柴油</option>
                      <option value = "2">煤油</option>
                      <option value = "3">燃料油</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">级别</span>
                    <select class = "form-control level" id = "">
                      <option value = "0">普柴</option>
                      <option value = "1">轻燃</option>
                      <option value = "2">国III</option>
                      <option value = "3">国IV</option>
                      <option value = "4">国V</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class = "row data_list_mt20">
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">标号</span>
                    <select class = "form-control code" id = "">
                      <option value = "0#">0#</option>
                      <option value = "5#">5#</option>
                      <option value = "10#">10#</option>
                      <option value = "92#">92#</option>
                      <option value = "93#">93#</option>
                      <option value = "95#">95#</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">厂商</span>
                    <select class = "form-control manufactor_name" id = "">
                      <option value = "中国石化">中国石化</option>
                      <option value = "中国石油">中国石油</option>
                      <option value = "中国海油">中国海油</option>
                      <option value = "中国化工">中国化工</option>
                      <option value = "中国中化">中国中化</option>
                      <option value = "其他">其他</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">地区</span>
                    <input type="text" class="form-control area" value = "">
                  </div>
                </div>
              </div>
              <div class = "row data_list_mt20">
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">单价</span>
                    <input type="text" class="form-control price" value = "">
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">数量</span>
                    <input type="text" class="form-control quantity" value = "">
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">库位</span>
                    <input type="text" class="form-control warehouse" value = "">
                  </div>
                </div>
              </div>
              <div class = "row data_list_mt20">
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">联系人</span>
                    <input type="text" class="form-control trader_name" value = "张三">
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">联系方式</span>
                    <input type="text" class="form-control trader_phonenumber" value = "12345678987">
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group has-feedback input-group">
                    <span class="input-group-addon">记录时间</span>
                    <input type="text" class="form-control widget_datepicker record_datetime">
                    <span class="glyphicon glyphicon-calendar form-control-feedback" aria-hidden="true"></span>
                  </div>
                </div>
              </div>
              <div class = "row data_list_mt20">
                <div class="col-md-12">
                  <div class="input-group">
                    <span class="input-group-addon">备注</span>
                    <input type="text" class="form-control remark" value = "">
                  </div>
                </div>
              </div>
            </div>
            <div class = "modal-footer" style = "text-align: center;">
            <button type = "button" class = "btn btn-primary add_oils_data">添加</button>
            <button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>
            </div>
          </div>
        </div>
      </div>`;
    $("body").append(Html);
    $("#dataListAddModal").modal("show");
    $("#dataListAddModal").on("hidden.bs.modal", function (e) {
      $(this).remove();
    });  
  }

  /*
   * 添加油品数据
   */
  addTradeOilData() {
    let data_type = $("#dataListAddModal .data_type").val();
    let oil_type = $("#dataListAddModal .oil_type").val();
    let level = $("#dataListAddModal .level").val();
    let code = $("#dataListAddModal .code").val();
    let manufactor_name = $("#dataListAddModal .manufactor_name").val();
    let area = $("#dataListAddModal .area").val();
    let price = $("#dataListAddModal .price").val();
    let quantity = $("#dataListAddModal .quantity").val();
    let warehouse = $("#dataListAddModal .warehouse").val();
    let record_datetime = $("#dataListAddModal .record_datetime").val();
    let trader_name = $("#dataListAddModal .trader_name").val();
    let trader_phonenumber = $("#dataListAddModal .trader_phonenumber").val();
    let remark = $("#dataListAddModal .remark").val();
    if ("" == data_type) {
      alert("请选择数据类型");
      return;
    }
    if ("" == oil_type) {
      alert("请选择油品类型");
      return;
    }
    if ("" == level) {
      alert("请选择级别");
      return;
    }
    if ("" == code) {
      alert("请选择标号");
      return;
    }
    if ("" == manufactor_name) {
      alert("请选择厂商");
      return;
    }
    if ("" == area) {
      alert("请输入地区");
      return;
    } else {
      if (null == area.match(/^.{1,16}$/)) {
        alert("地区格式错误");
        return;
      }   
    }
    if ("" == price) {
      alert("请输入价格");
      return;
    } else {
      if (null == price.match(/^(\d+)(\.\d+)?$/)) {
        alert("地区格式错误");
        return;
      }   
    }
    if ("" == quantity) {
      alert("请输入数量");
      return;
    } else {
      if (null == quantity.match(/^(\d+)(\.\d+)?$/)) {
        alert("数量格式错误");
        return;
      }   
    }
    if ("" == warehouse) {
      alert("请输入库位");
      return;
    } else {
      if (null == warehouse.match(/^.{1,16}$/)) {
        alert("库位格式错误");
        return;
      }   
    }
    if ("" == record_datetime) {
      alert("请选择记录时间");
      return;
    }
    if ("" == trader_name) {
      alert("请输入联系人");
      return;
    } else {
      if (null == trader_name.match(/^.{1,16}$/)) {
        alert("联系人格式错误");
        return;
      }   
    }
    if ("" == trader_phonenumber) {
      alert("请输入联系方式");
      return;
    } else {
      if (null == trader_phonenumber.match(/^[0-9]{6,15}$/)) {
        alert("联系方式格式错误");
        return;
      }   
    }
    let addTradeOilDataUrl = PROJECT_PATH + "lego/lego_51zy?servletName=addTradeOilData";
    let addTradeOilDataParam = {};
    addTradeOilDataParam["data_type"] = data_type;
    addTradeOilDataParam["oil_type"] = oil_type;
    addTradeOilDataParam["level"] = level;
    addTradeOilDataParam["code"] = code;
    addTradeOilDataParam["manufactor_name"] = manufactor_name;
    addTradeOilDataParam["area"] = area;
    addTradeOilDataParam["price"] = price;
    addTradeOilDataParam["quantity"] = quantity;
    addTradeOilDataParam["warehouse"] = warehouse;
    addTradeOilDataParam["record_datetime"] = record_datetime + ' 00:00:00';
    addTradeOilDataParam["trader_name"] = trader_name;
    addTradeOilDataParam["trader_phonenumber"] = trader_phonenumber;
    if ("" != remark) {
      addTradeOilDataParam["remark"] = remark;
    }
    let addTradeOilDataData = ajax_assistant(addTradeOilDataUrl, addTradeOilDataParam, false, true, false);
    console.log(addTradeOilDataData);
    if (1 == addTradeOilDataData.status) {
      alert("油品数据添加成功");
      $("#dataListAddModal").modal("hide");
      this.getTradeOilData();
      this.fillVariableData()
    } else {
      alert("油品数据添加失败");
      return;
    }
  }

  /*
   * 详情弹窗
   */
  detailDataModal() {
    let Html = 
      `<div class = "modal fade bs-example-modal-sm custom_modal" id = "dataListdetailModal" tabindex = "-1" role = "dialog" aria-labelledby = "myModalLabel">
        <div class = "modal-dialog  modal-lg" role = "document">
          <div class = "modal-content">
            <div class = "modal-header bg-primary">
              <button type = "button" class = "close" data-dismiss = "modal" aria-label="Close"><span aria-hidden = "true">&times;</span></button>
              <h4 class = "modal-title" id="myModalLabel">油品数据详情</h4>
            </div>
            <div class = "modal-body text-center nopadding-bottom material_type_list_center">
              <div class = "row">
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">数据类型</span>
                    <select class = "form-control data_type" id = "">
                      <option value = "0">找油</option>
                      <option value = "1">现货</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">油品类型</span>
                    <select class = "form-control oil_type" id = "">
                      <option value = "0">汽油</option>
                      <option value = "1">柴油</option>
                      <option value = "2">煤油</option>
                      <option value = "3">燃料油</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">级别</span>
                    <select class = "form-control level" id = "">
                      <option value = "0">普柴</option>
                      <option value = "1">轻燃</option>
                      <option value = "2">国III</option>
                      <option value = "3">国IV</option>
                      <option value = "4">国V</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class = "row data_list_mt20">
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">标号</span>
                    <select class = "form-control code" id = "">
                      <option value = "0#">0#</option>
                      <option value = "5#">5#</option>
                      <option value = "10#">10#</option>
                      <option value = "92#">92#</option>
                      <option value = "93#">93#</option>
                      <option value = "95#">95#</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">厂商</span>
                    <select class = "form-control manufactor_name" id = "">
                      <option value = "中国石化">中国石化</option>
                      <option value = "中国石油">中国石油</option>
                      <option value = "中国海油">中国海油</option>
                      <option value = "中国化工">中国化工</option>
                      <option value = "中国中化">中国中化</option>
                      <option value = "其他">其他</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">地区</span>
                    <input type="text" class="form-control area" value = "${this.detailData.address}">
                  </div>
                </div>
              </div>
              <div class = "row data_list_mt20">
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">单价</span>
                    <input type="text" class="form-control price" value = "${this.detailData.price}">
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">数量</span>
                    <input type="text" class="form-control quantity" value = "${this.detailData.quantity}">
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">库位</span>
                    <input type="text" class="form-control warehouse" value = "${this.detailData.warehouse}">
                  </div>
                </div>
              </div>
              <div class = "row data_list_mt20">
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">联系人</span>
                    <input type="text" class="form-control trader_name" value = "${this.detailData.trader_name}">
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">联系方式</span>
                    <input type="text" class="form-control trader_phonenumber" value = "${this.detailData.trader_phonenumber}">
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group has-feedback input-group">
                    <span class="input-group-addon">记录时间</span>
                    <input type="text" class="form-control widget_datepicker record_datetime" value = "${this.detailData.record_datetime}">
                    <span class="glyphicon glyphicon-calendar form-control-feedback" aria-hidden="true"></span>
                  </div>
                </div>
              </div>
              <div class = "row data_list_mt20">
                <div class="col-md-12">
                  <div class="input-group">
                    <span class="input-group-addon">备注</span>
                    <input type="text" class="form-control remark" value = "${this.detailData.remark}">
                  </div>
                </div>
              </div>
            </div>
            <div class = "modal-footer" style = "text-align: center;">
              <button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>
            </div>
          </div>
        </div>
      </div>`;
    $("body").append(Html);
    // 数据类型
    for(var i = 0; i < $("#dataListdetailModal .data_type option").length; i++){
      var data_type = this.detailData.data_type;
      //console.log(type);
      if($("#dataListdetailModal .data_type option").eq(i).val() == data_type) {
        $("#dataListdetailModal .data_type option").eq(i).prop('selected','selected');
        break;
      }
    }
    // 油品类型
    for(var i = 0; i < $("#dataListdetailModal .oil_type option").length; i++){
      var oil_type = this.detailData.oil_type;
      //console.log(type);
      if($("#dataListdetailModal .oil_type option").eq(i).val() == oil_type) {
        $("#dataListdetailModal .oil_type option").eq(i).prop('selected','selected');
        break;
      }
    }
    // 级别
    for(var i = 0; i < $("#dataListdetailModal .level option").length; i++){
      var level = this.detailData.level;
      //console.log(type);
      if($("#dataListdetailModal .level option").eq(i).val() == level) {
        $("#dataListdetailModal .level option").eq(i).prop('selected','selected');
        break;
      }
    }
    // 标号
    for(var i = 0; i < $("#dataListdetailModal .code option").length; i++){
      var code = this.detailData.code;
      //console.log(type);
      if($("#dataListdetailModal .code option").eq(i).val() == code) {
        $("#dataListdetailModal .code option").eq(i).prop('selected','selected');
        break;
      }
    }
    // 厂商
    for(var i = 0; i < $("#dataListdetailModal .manufactor_name option").length; i++){
      var manufactor_name = this.detailData.manufactor_name;
      //console.log(type);
      if($("#dataListdetailModal .manufactor_name option").eq(i).val() == manufactor_name) {
        $("#dataListdetailModal .manufactor_name option").eq(i).prop('selected','selected');
        break;
      }
    }
    $("#dataListdetailModal").modal("show");
    $("#dataListdetailModal").on("hidden.bs.modal", function (e) {
      $(this).remove();
    });  
  }

  /* 
   * 删除弹窗
   */
  deleteDataModal(obj) {
    let uuid = obj.data("uuid");
    let Html = 
      `<div class = "modal fade bs-example-modal-sm custom_modal" id = "delete_modle" tabindex = "-1" role = "dialog" aria-labelledby = "myModalLabel">
        <div class = "modal-dialog  modal-sm" role = "document">
          <div class = "modal-content">
            <div class = "modal-header bg-primary">
              <button type = "button" class = "close" data-dismiss = "modal" aria-label="Close"><span aria-hidden = "true">&times;</span></button>
              <h4 class = "modal-title" id="myModalLabel">删除列表确认</h4>
            </div>
            <div class = "modal-body text-center nopadding-bottom material_type_list_center">确定要删除列表吗？</div>
            <div class = "modal-footer" style = "text-align: center;">
              <button type = "button" class = "btn btn-danger delet_btn" data-uuid = "${uuid}">删除</button>
              <button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>
            </div>
          </div>
        </div>
      </div>`;
    $("body").append(Html);
    $("#delete_modle").modal("show");
    $("#delete_modle").on("hidden.bs.modal", function (e) {
      $(this).remove();
    }); 
  }
  
  removeTradeOilData(obj) {
    let uuid = obj.data("uuid");
    let removeTradeOilDataUrl = PROJECT_PATH + "lego/lego_51zy?servletName=removeTradeOilData";
    let removeTradeOilDataParam = {};
    removeTradeOilDataParam["uuid"] = uuid;
    let removeTradeOilDataData = ajax_assistant(removeTradeOilDataUrl, removeTradeOilDataParam, false, true, false);
    console.log(removeTradeOilDataData);
    if (1 == removeTradeOilDataData.status) {
      alert("油品数据删除成功");
      $("#delete_modle").modal("hide");
      this.getTradeOilData();
      this.fillVariableData()
    } else {
      alert("油品数据删除失败");
      return;
    }
  }

  /*
   * 修改弹窗
   */
  editDataModal(obj) {
    let uuid = obj.data("uuid");
    let Html = 
      `<div class = "modal fade bs-example-modal-sm custom_modal" id = "editListdetailModal" tabindex = "-1" role = "dialog" aria-labelledby = "myModalLabel">
        <div class = "modal-dialog  modal-lg" role = "document">
          <div class = "modal-content">
            <div class = "modal-header bg-primary">
              <button type = "button" class = "close" data-dismiss = "modal" aria-label="Close"><span aria-hidden = "true">&times;</span></button>
              <h4 class = "modal-title" id="myModalLabel">修改油品数据</h4>
            </div>
            <div class = "modal-body text-center nopadding-bottom material_type_list_center">
              <div class = "row">
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">数据类型</span>
                    <select class = "form-control data_type" id = "">
                      <option value = "0">找油</option>
                      <option value = "1">现货</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">油品类型</span>
                    <select class = "form-control oil_type" id = "">
                      <option value = "0">汽油</option>
                      <option value = "1">柴油</option>
                      <option value = "2">煤油</option>
                      <option value = "3">燃料油</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">级别</span>
                    <select class = "form-control level" id = "">
                      <option value = "0">普柴</option>
                      <option value = "1">轻燃</option>
                      <option value = "2">国III</option>
                      <option value = "3">国IV</option>
                      <option value = "4">国V</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class = "row data_list_mt20">
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">标号</span>
                    <select class = "form-control code" id = "">
                      <option value = "0#">0#</option>
                      <option value = "5#">5#</option>
                      <option value = "10#">10#</option>
                      <option value = "92#">92#</option>
                      <option value = "93#">93#</option>
                      <option value = "95#">95#</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">厂商</span>
                    <select class = "form-control manufactor_name" id = "">
                      <option value = "中国石化">中国石化</option>
                      <option value = "中国石油">中国石油</option>
                      <option value = "中国海油">中国海油</option>
                      <option value = "中国化工">中国化工</option>
                      <option value = "中国中化">中国中化</option>
                      <option value = "其他">其他</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">地区</span>
                    <input type="text" class="form-control area" value = "${this.detailData.address}">
                  </div>
                </div>
              </div>
              <div class = "row data_list_mt20">
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">单价</span>
                    <input type="text" class="form-control price" value = "${this.detailData.price}">
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">数量</span>
                    <input type="text" class="form-control quantity" value = "${this.detailData.quantity}">
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">库位</span>
                    <input type="text" class="form-control warehouse" value = "${this.detailData.warehouse}">
                  </div>
                </div>
              </div>
              <div class = "row data_list_mt20">
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">联系人</span>
                    <input type="text" class="form-control trader_name" value = "${this.detailData.trader_name}">
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="input-group">
                    <span class="input-group-addon">联系方式</span>
                    <input type="text" class="form-control trader_phonenumber" value = "${this.detailData.trader_phonenumber}">
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group has-feedback input-group">
                    <span class="input-group-addon">记录时间</span>
                    <input type="text" class="form-control widget_datepicker record_datetime" value = "${this.detailData.record_datetime}">
                    <span class="glyphicon glyphicon-calendar form-control-feedback" aria-hidden="true"></span>
                  </div>
                </div>
              </div>
              <div class = "row data_list_mt20">
                <div class="col-md-12">
                  <div class="input-group">
                    <span class="input-group-addon">备注</span>
                    <input type="text" class="form-control remark" value = "${this.detailData.remark}">
                  </div>
                </div>
              </div>
            </div>
            <div class = "modal-footer" style = "text-align: center;">
              <button type = "button" class = "btn btn-warning edit_oils_data" data-uuid = "${uuid}">修改</button>
              <button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>
            </div>
          </div>
        </div>
      </div>`;
    $("body").append(Html);
    // 数据类型
    for(var i = 0; i < $("#editListdetailModal .data_type option").length; i++){
      var data_type = this.detailData.data_type;
      //console.log(type);
      if($("#editListdetailModal .data_type option").eq(i).val() == data_type) {
        $("#editListdetailModal .data_type option").eq(i).prop('selected','selected');
        break;
      }
    }
    // 油品类型
    for(var i = 0; i < $("#editListdetailModal .oil_type option").length; i++){
      var oil_type = this.detailData.oil_type;
      //console.log(type);
      if($("#editListdetailModal .oil_type option").eq(i).val() == oil_type) {
        $("#editListdetailModal .oil_type option").eq(i).prop('selected','selected');
        break;
      }
    }
    // 级别
    for(var i = 0; i < $("#editListdetailModal .level option").length; i++){
      var level = this.detailData.level;
      //console.log(type);
      if($("#editListdetailModal .level option").eq(i).val() == level) {
        $("#editListdetailModal .level option").eq(i).prop('selected','selected');
        break;
      }
    }
    // 标号
    for(var i = 0; i < $("#editListdetailModal .code option").length; i++){
      var code = this.detailData.code;
      //console.log(type);
      if($("#editListdetailModal .code option").eq(i).val() == code) {
        $("#editListdetailModal .code option").eq(i).prop('selected','selected');
        break;
      }
    }
    // 厂商
    for(var i = 0; i < $("#editListdetailModal .manufactor_name option").length; i++){
      var manufactor_name = this.detailData.manufactor_name;
      //console.log(type);
      if($("#editListdetailModal .manufactor_name option").eq(i).val() == manufactor_name) {
        $("#editListdetailModal .manufactor_name option").eq(i).prop('selected','selected');
        break;
      }
    }
    $("#editListdetailModal").modal("show");
    $("#editListdetailModal").on("hidden.bs.modal", function (e) {
      $(this).remove();
    });  
  }

  /*
   * 修改油品数据
   */
  modifyTradeOilData(obj) {
    debugger;
    let uuid = obj.data("uuid");
    let data_type = $("#editListdetailModal .data_type").val();
    let oil_type = $("#editListdetailModal .oil_type").val();
    let level = $("#editListdetailModal .level").val();
    let code = $("#editListdetailModal .code").val();
    let manufactor_name = $("#editListdetailModal .manufactor_name").val();
    let area = $("#editListdetailModal .area").val();
    let price = $("#editListdetailModal .price").val();
    let quantity = $("#editListdetailModal .quantity").val();
    let warehouse = $("#editListdetailModal .warehouse").val();
    let record_datetime = $("#editListdetailModal .record_datetime").val();
    let trader_name = $("#editListdetailModal .trader_name").val();
    let trader_phonenumber = $("#editListdetailModal .trader_phonenumber").val();
    let remark = $("#editListdetailModal .remark").val();
    if ("" == data_type) {
      alert("请选择数据类型");
      return;
    }
    if ("" == oil_type) {
      alert("请选择油品类型");
      return;
    }
    if ("" == level) {
      alert("请选择级别");
      return;
    }
    if ("" == code) {
      alert("请选择标号");
      return;
    }
    if ("" == manufactor_name) {
      alert("请选择厂商");
      return;
    }
    if ("" == area) {
      alert("请输入地区");
      return;
    } else {
      if (null == area.match(/^.{1,16}$/)) {
        alert("地区格式错误");
        return;
      }   
    }
    if ("" == price) {
      alert("请输入价格");
      return;
    } else {
      if (null == price.match(/^(\d+)(\.\d+)?$/)) {
        alert("地区格式错误");
        return;
      }   
    }
    if ("" == quantity) {
      alert("请输入数量");
      return;
    } else {
      if (null == quantity.match(/^(\d+)(\.\d+)?$/)) {
        alert("数量格式错误");
        return;
      }   
    }
    if ("" == warehouse) {
      alert("请输入库位");
      return;
    } else {
      if (null == warehouse.match(/^.{1,16}$/)) {
        alert("库位格式错误");
        return;
      }   
    }
    if ("" == record_datetime) {
      alert("请选择记录时间");
      return;
    }
    if ("" == trader_name) {
      alert("请输入联系人");
      return;
    } else {
      if (null == trader_name.match(/^.{1,16}$/)) {
        alert("联系人格式错误");
        return;
      }   
    }
    if ("" == trader_phonenumber) {
      alert("请输入联系方式");
      return;
    } else {
      if (null == trader_phonenumber.match(/^[0-9]{6,15}$/)) {
        alert("联系方式格式错误");
        return;
      }   
    }
    let modifyTradeOilDataUrl = PROJECT_PATH + "lego/lego_51zy?servletName=modifyTradeOilData";
    let modifyTradeOilDataParam = {};
    modifyTradeOilDataParam["uuid"] = uuid;
    modifyTradeOilDataParam["data_type"] = data_type;
    modifyTradeOilDataParam["oil_type"] = oil_type;
    modifyTradeOilDataParam["level"] = level;
    modifyTradeOilDataParam["code"] = code;
    modifyTradeOilDataParam["manufactor_name"] = manufactor_name;
    modifyTradeOilDataParam["area"] = area;
    modifyTradeOilDataParam["price"] = price;
    modifyTradeOilDataParam["quantity"] = quantity;
    modifyTradeOilDataParam["warehouse"] = warehouse;
    modifyTradeOilDataParam["record_datetime"] = record_datetime + ' 00:00:00';
    modifyTradeOilDataParam["trader_name"] = trader_name;
    modifyTradeOilDataParam["trader_phonenumber"] = trader_phonenumber;
    if ("" != remark) {
      modifyTradeOilDataParam["remark"] = remark;
    } else {
      modifyTradeOilDataParam["remark"] = "set_null";
    }
    let modifyTradeOilDataData = ajax_assistant(modifyTradeOilDataUrl, modifyTradeOilDataParam, false, true, false);
    console.log(modifyTradeOilDataData);
    if (1 == modifyTradeOilDataData.status) {
      alert("油品数据修改成功");
      $("#editListdetailModal").modal("hide");
      this.getTradeOilData();
      this.fillVariableData()
    } else {
      alert("油品数据修改失败");
      return;
    }
  }


  /**
   * 输出
   */
  output() {
    let content = 
      `<div class = "panel-heading text-left clearfix">
        <h3 class = "panel-title pull-left">数据列表</h3>
        <span class = "glyphicon glyphicon-plus pull-right add_data"></span>
       </div>
        <div class = "panel-body table-responsive">
          <div class = "table-responsive">
            <table  class = "table table-bordered" id = "">
              <thead>
                <tr>
                  <th>订单号</th>
                  <th>数据类型</th>
                  <th>油品类型</th>
                  <th>级别</th>
                  <th>标号</th>
                  <th>厂商</th>
                  <th>地区</th>
                  <th>记录时间</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>20175555555555</td>
                  <td>找油</td>
                  <td>汽油</td>
                  <td>普柴</td>
                  <td>0#</td> 
                  <td>中国石化</td>
                  <td>上海</td>
                  <td>2017-05-05</td>
                  <td>
                    <span class = "glyphicon glyphicon-info-sign" style = "margin-right: 15px;"></span>
                    <span class = "glyphicon glyphicon-edit" style = "margin-right: 15px;"></span>
                    <span class = "glyphicon glyphicon-remove-sign"></span>
                  </td>
                </tr>
                <tr>
                  <td>20175555555555</td>
                  <td>找油</td>
                  <td>汽油</td>
                  <td>普柴</td>
                  <td>0#</td> 
                  <td>中国石化</td>
                  <td>上海</td>
                  <td>2017-05-05</td>
                  <td>
                    <span class = "glyphicon glyphicon-info-sign" style = "margin-right: 15px;"></span>
                    <span class = "glyphicon glyphicon-edit" style = "margin-right: 15px;"></span>
                    <span class = "glyphicon glyphicon-remove-sign"></span>
                  </td>
                </tr>
                <tr>
                  <td>20175555555555</td>
                  <td>找油</td>
                  <td>汽油</td>
                  <td>普柴</td>
                  <td>0#</td> 
                  <td>中国石化</td>
                  <td>上海</td>
                  <td>2017-05-05</td>
                  <td>
                    <span class = "glyphicon glyphicon-info-sign" style = "margin-right: 15px;"></span>
                    <span class = "glyphicon glyphicon-edit" style = "margin-right: 15px;"></span>
                    <span class = "glyphicon glyphicon-remove-sign"></span>
                  </td>
                </tr>
                <tr>
                  <td>20175555555555</td>
                  <td>找油</td>
                  <td>汽油</td>
                  <td>普柴</td>
                  <td>0#</td> 
                  <td>中国石化</td>
                  <td>上海</td>
                  <td>2017-05-05</td>
                  <td>
                    <span class = "glyphicon glyphicon-info-sign" style = "margin-right: 15px;"></span>
                    <span class = "glyphicon glyphicon-edit" style = "margin-right: 15px;"></span>
                    <span class = "glyphicon glyphicon-remove-sign"></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="panel-footer bg-primary">&nbsp;</div>`;
    $(this.outputId).html(content);
  }
}
