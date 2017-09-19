"use strict;"

class ZhaoyouMall {
  /**
   * 构造函数
   *
   * @param outputId 传入输出的元素id
   */
  constructor(outputId) {
    this.outputId = outputId;
    this.oil_type = ["汽油","柴油","煤油","燃料油"];
    this.mallData = [
      {"source": "中国海油","variety": "柴油0#国Ⅴ","region": "东莞","storage_location": "立沙","count": "100","price": "100","time": "2小时前","uuid": "111"},     
      {"source": "中国海油","variety": "柴油0#国Ⅴ","region": "东莞","storage_location": "立沙","count": "100","price": "100","time": "2小时前","uuid": "111"},     
      {"source": "中国海油","variety": "柴油0#国Ⅴ","region": "东莞","storage_location": "立沙","count": "100","price": "100","time": "2小时前","uuid": "111"},     
      {"source": "中国海油","variety": "柴油0#国Ⅴ","region": "东莞","storage_location": "立沙","count": "100","price": "100","time": "2小时前","uuid": "111"},     
      {"source": "中国海油","variety": "柴油0#国Ⅴ","region": "东莞","storage_location": "立沙","count": "100","price": "100","time": "2小时前","uuid": "111"},     
      {"source": "中国海油","variety": "柴油0#国Ⅴ","region": "东莞","storage_location": "立沙","count": "100","price": "100","time": "2小时前","uuid": "111"}     
    ]
  }

  /**
   * 清空原始值
   */
  clearRawData() {
    $("#zhaoyouMallList").html("");
  }
  
  initEvent() {
    let currentObj = this;
    $(document).on("click", "#search", function() {
      currentObj.getTradeOilDataBySearch();
      currentObj.fillCoverData();
    });
    $(document).on("click", ".qingk", function() {
      $("#oil_area").val("");
      $("#oil_type").val("");
      $("#oil_code").val("");
      $("#oil_level").val("");
      $("#oil_source").val("");
    });
  }
  /*
   * 赋值
   */
  fillCoverData() {
    if (0 != this.mallData.length) {
      let content = "";
      for (let i = 0; i < this.mallData.length; i++) {
        content += 
          `<tr>
    			   <td><span>${this.mallData[i].source}</span></td>
             <td>${this.oil_type[this.mallData[i].variety]}</td>
             <td>${this.mallData[i].region}</td>
             <td>${this.mallData[i].storage_location}</td>
             <td>${this.mallData[i].count}</td>
             <td>${this.mallData[i].price}</td>
             <td>${this.mallData[i].time}</td>
             <td class="weit"><a href="../detail_info/detail_info.html?uuid=${this.mallData[i].uuid}" class="btn-entrust">详情</a></td>
           </tr>`;
      }
      $("#zhaoyouMallList").html(content);
    }
  }
  
  /*
   * 获取油品数据
   */
  getTradeOilData() {
    let getTradeOilDataUrl = PROJECT_PATH + "lego/lego_51zy?servletName=getTradeOilData";
    let getTradeOilDataParam = {"data_type": 0};
    let getTradeOilDataData = ajax_assistant(getTradeOilDataUrl, getTradeOilDataParam, false, true, false);
    console.log(getTradeOilDataData);
    if (1 == getTradeOilDataData.status) {
      if (0 == getTradeOilDataData.count) {
        this.mallData = {};
      } else {
        let data_arr = new Array();
        let result = JSON.parse(getTradeOilDataData.result); 
        console.log(result);
        for (let i = 0; i < result.length; i++) {
          let record_datetime = result[i].record_datetime.substring(0,result[i].record_datetime.indexOf(" "));
          data_arr.push({"source": result[i].manufactor_name,"variety": result[i].oil_type,"region": result[i].area,"storage_location": result[i].warehouse,"count": result[i].quantity,"price": result[i].price,"time": record_datetime,"uuid": result[i].uuid});
        }
        this.mallData = data_arr;
      }
    } else {
      alert("获取油品数据失败");
      return;
    }
  }

  /*
   * 搜索
   */
  getTradeOilDataBySearch() {
    debugger;
    let area = $("#oil_area").val();
    let oil_type = $("#oil_type").val();
    let code = $("#oil_code").val();
    let level = $("#oil_level").val();
    let manufactor_name = $("#oil_source").val();
    let getTradeOilDataUrl = PROJECT_PATH + "lego/lego_51zy?servletName=getTradeOilData";
    let getTradeOilDataParam = {};
    getTradeOilDataParam["data_type"] = 0;
    if ("" != area) {
      getTradeOilDataParam["area"] = area;
    }
    if ("" != oil_type) {
      getTradeOilDataParam["oil_type"] = oil_type;
    }
    if ("" != level) {
      getTradeOilDataParam["level"] = level;
    }
    if ("" != code) {
      getTradeOilDataParam["code"] = code;
    }
    if ("" != manufactor_name) {
      getTradeOilDataParam["manufactor_name"] = manufactor_name;
    }
    let getTradeOilDataData = ajax_assistant(getTradeOilDataUrl, getTradeOilDataParam, false, true, false);
    console.log(getTradeOilDataData);
    if (1 == getTradeOilDataData.status) {
      if (0 == getTradeOilDataData.count) {
        this.mallData = {};
      } else {
        let data_arr = new Array();
        let result = JSON.parse(getTradeOilDataData.result); 
        console.log(result);
        for (let i = 0; i < result.length; i++) {
          let record_datetime = result[i].record_datetime.substring(0,result[i].record_datetime.indexOf(" "));
          data_arr.push({"source": result[i].manufactor_name,"variety": result[i].oil_type,"region": result[i].area,"storage_location": result[i].warehouse,"count": result[i].quantity,"price": result[i].price,"time": record_datetime,"uuid": result[i].uuid});
        }
        this.mallData = data_arr;
      }
    } else {
      alert("搜索失败");
      return;
    }
  } 

  /**
   * 输出
   */
  output() {
    let content = 
      `<div class="wapper">
        <div class="top_b">
          <!---buyleft start-->
          <div class="xhss">
              <div class="xhss_List">
                <ul>
                  <li>
                    <i>地区：</i>
    		            <select class="xl" id="oil_area">
                      <option value="">请选择</option>
                      <option value="上海">上海</option>
                      <option value="江苏">江苏</option>
                      <option value="广东">广东</option>
                      <option value="浙江">浙江</option>
                    </select>
                  </li>
                  <li>
                    <i>种类：</i>
                    <select class="xl" id="oil_type" name="type">
                    	<option selected="selected" value="">请选择</option>
                      <option value="0">汽油</option>
                      <option value="1">柴油</option
                      ><option value="2">煤油</option>
                      <option value="3">燃料油</option>
                    </select>
                  </li>
                  <li>
                    <i>标号：</i>
                    <select class="xl" id="oil_code" name="lev">
                    	<option selected="selected" value="">请选择</option>
                      <option value="0#">0#</option>
                      <option value="5#">5#</option>
                      <option value="10#">10#</option>
                      <option value="92#">92#</option>
                      <option value="93#">93#</option>
                      <option value="95#">95#</option>
                    </select>
                  </li>
                  <li>
                     <i>级别：</i>
                     <select class="xl" id="oil_level" name="rank">
                     	 <option selected="selected" value="">请选择</option>
                       <option value="0">普柴</option>
                       <option value="1">轻燃</option>
                       <option value="2">国Ⅲ</option>
                       <option value="3">国Ⅳ</option>
                       <option value="4">国Ⅴ</option>
                     </select>
                  </li>
                  <li><input type="submit" class="souh" id="search" value="搜索"></li>
                  <li><input type="reset" class="qingk" value="清空"></li>
                  <li>
                    <i>来源：</i>
                    <select class="xl" id="oil_source" name="source">
                    	<option selected="selected" value="">请选择</option>
                      <option value="中国石化">中国石化</option>
                      <option value="中国石油">中国石油</option>
                      <option value="中国海油">中国海油</option>
                      <option value="中国化工">中国化工</option>
                      <option value="中国中化">国中化</option>
                      <option value="其他">其他</option>
                    </select>
                  </li>
                </ul>
              </div>
            <div class="bList">
              <div class="xhsscon">
                <table class="xhss_hovertable" id="oldtable">
                  <thead>
                    <tr>
                      <th width="8%" align="left">来源</th>
                      <th width="8%">种类</th>
                      <th width="8%">地区</th>
                      <th width="8%">库位</th>
                      <th width="13%">数量(吨) </th>
                      <th width="5%">价格</th>
                      <th width="10%">更新时间</th>
                      <th width="8%">操作</th>
                    </tr>
                  </thead>
                  <tbody id = "zhaoyouMallList">
                    <tr>
    					        <td><span>中国海油</span></td>
                      <td>柴油0#国Ⅴ</td>
                      <td>东莞</td>
                      <td title="立沙">立沙</td>
                      <td>90</td>
                      <td class="yans">5650</td>
                      <td>2小时前</td>
                      <td class="weit"><a href="../detail_info/detail_info.html" class="btn-entrust">详情</a></td>
                    </tr>
                    <tr>
    					        <td><span>中国海油</span></td>
                      <td>柴油0#国Ⅴ</td>
                      <td>东莞</td>
                      <td title="立沙">立沙</td>
                      <td>90</td>
                      <td class="yans">5650</td>
                      <td>2小时前</td>
                      <td class="weit"><a href="../detail_info/detail_info.html" class="btn-entrust">详情</a></td>
                    </tr>
                    <tr>
    					        <td><span>中国海油</span></td>
                      <td>柴油0#国Ⅴ</td>
                      <td>东莞</td>
                      <td title="立沙">立沙</td>
                      <td>90</td>
                      <td class="yans">5650</td>
                      <td>2小时前</td>
                      <td class="weit"><a href="../detail_info/detail_info.html" class="btn-entrust">详情</a></td>
                    </tr>
                  </tbody>
                  </tbody>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clear"></div>`;
    $(this.outputId).html(content);
  }
}


