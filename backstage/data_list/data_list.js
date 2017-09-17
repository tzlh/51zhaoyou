"use strict;"

class DataList {

  constructor(outputId) {
    this.outputId = outputId;
    this.data = [
      {"order_number": "12345678910", "data_type": "找油", "oils_type": "汽油", "level": "普柴","grade": "0#", "manufacturer": "中国石化","address": "上海","time": "2017-05-06","uuid": "111"},
      {"order_number": "12345678910", "data_type": "找油", "oils_type": "汽油", "level": "普柴","grade": "0#", "manufacturer": "中国石化","address": "上海","time": "2017-05-06","uuid": "111"},
      {"order_number": "12345678910", "data_type": "找油", "oils_type": "汽油", "level": "普柴","grade": "0#", "manufacturer": "中国石化","address": "上海","time": "2017-05-06","uuid": "111"},
      {"order_number": "12345678910", "data_type": "找油", "oils_type": "汽油", "level": "普柴","grade": "0#", "manufacturer": "中国石化","address": "上海","time": "2017-05-06","uuid": "111"},
      {"order_number": "12345678910", "data_type": "找油", "oils_type": "汽油", "level": "普柴","grade": "0#", "manufacturer": "中国石化","address": "上海","time": "2017-05-06","uuid": "111"},
      {"order_number": "12345678910", "data_type": "找油", "oils_type": "汽油", "level": "普柴","grade": "0#", "manufacturer": "中国石化","address": "上海","time": "2017-05-06","uuid": "111"},
      {"order_number": "12345678910", "data_type": "找油", "oils_type": "汽油", "level": "普柴","grade": "0#", "manufacturer": "中国石化","address": "上海","time": "2017-05-06","uuid": "111"},
    ]
  }

  initEvent() {
    
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
             <td>${this.data[i].data_type}</td>
             <td>${this.data[i].oils_type}</td>
             <td>${this.data[i].level}</td>
             <td>${this.data[i].grade}</td> 
             <td>${this.data[i].manufacturer}</td>
             <td>${this.data[i].address}</td>
             <td>${this.data[i].time}</td>
             <td>
               <span class = "glyphicon glyphicon-info-sign" style = "margin-right: 15px;"></span>
               <span class = "glyphicon glyphicon-edit" style = "margin-right: 15px;"></span>
               <span class = "glyphicon glyphicon-remove-sign"></span>
             </td>
           </tr>`;
      }
    $("#dataListOutput tbody").html(content);
    }
  }

  /**
   * 输出
   */
  output() {
    let content = 
      `<div class = "panel-heading text-left">数据列表</div>
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
