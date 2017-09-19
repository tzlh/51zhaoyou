"use strict;"

class SpotSearch {
  /**
   * 构造函数
   *
   * @param outputId 传入输出的元素id
   */
  constructor(outputId) {
    this.outputId = outputId;
    this.oil_type = ["汽油","柴油","煤油","燃料油"];
    this.level = ["普柴","轻燃","国III","国Iv","国V"];
    this.spotData = [
      {"source": "中国海油","variety": "3","grade": "0#","rank": "1","region": "东莞","storage_location": "立沙","count": "100","price": "100","remark": "211","time": "2小时前","uuid": "111"},     
      {"source": "中国海油","variety": "3","grade": "0#","rank": "1","region": "东莞","storage_location": "立沙","count": "100","price": "100","remark": "211","time": "2小时前","uuid": "111"},     
      {"source": "中国海油","variety": "3","grade": "0#","rank": "1","region": "东莞","storage_location": "立沙","count": "100","price": "100","remark": "211","time": "2小时前","uuid": "111"},     
      {"source": "中国海油","variety": "3","grade": "0#","rank": "1","region": "东莞","storage_location": "立沙","count": "100","price": "100","remark": "211","time": "2小时前","uuid": "111"},     
      {"source": "中国海油","variety": "3","grade": "0#","rank": "1","region": "东莞","storage_location": "立沙","count": "100","price": "100","remark": "211","time": "2小时前","uuid": "111"},     
      {"source": "中国海油","variety": "3","grade": "0#","rank": "1","region": "东莞","storage_location": "立沙","count": "100","price": "100","remark": "211","time": "2小时前","uuid": "111"}     
    ]
  }

  /**
   * 清空原始值
   */
  clearRawData() {
    $("#spotSearchList").html("");
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
    $(document).on("click", ".create-wicket", function() {
      currentObj.showBg('graybg','midbox',$(this));
    });
    $(document).on("click", ".close_popup", function() {
      currentObj.closeBg('graybg','midbox');
    });
    $(document).on("click", "#submit_btn", function() {
      currentObj.addTradeEntrust($(this));
    });
  }

  showBg(className,showName,obj) {
    let uuid = obj.data("uuid");
    $("." + className).css({
        display: "block"
    });
    $("." + showName).show();
    $("#submit_btn").attr("uuid",uuid);
  }
    
  closeBg(closeName, showName) {
    $("#skip_info_price").val("");
    $("#skip_info_num").val("");
    $("." + closeName).hide();
    $("." + showName).hide();
  }

  fillCoverData() {
    if (0 != this.spotData.length) {
      let content = "";
      for (let i = 0; i < this.spotData.length; i++) {
        content += 
          `<tr>
    			   <td><span>${this.spotData[i].source}</span></td>
             <td>${this.oil_type[this.spotData[i].variety]}</td>
             <td>${this.spotData[i].grade}</td>
             <td>${this.level[this.spotData[i].rank]}</td>
             <td>${this.spotData[i].region}</td>
             <td>${this.spotData[i].storage_location}</td>
             <td>${this.spotData[i].count}</td>
             <td>${this.spotData[i].price}</td>
             <td>${this.spotData[i].remark}</td>
             <td>${this.spotData[i].time}</td>
             <td class="weit"><a class="create-wicket" data-uuid = "${this.spotData[i].uuid}"> 委托</a></td>
           </tr>`;
      }
      $("#spotSearchList").html(content);
    }
  }
  
  /*
   * 获取油品数据
   */
  getTradeOilData() {
    let getTradeOilDataUrl = PROJECT_PATH + "lego/lego_51zy?servletName=getTradeOilData";
    let getTradeOilDataParam = {"data_type": 1};
    let getTradeOilDataData = ajax_assistant(getTradeOilDataUrl, getTradeOilDataParam, false, true, false);
    console.log(getTradeOilDataData);
    if (1 == getTradeOilDataData.status) {
      if (0 == getTradeOilDataData.count) {
        this.spotData = {};
      } else {
        let data_arr = new Array();
        let result = JSON.parse(getTradeOilDataData.result); 
        console.log(result);
        for (let i = 0; i < result.length; i++) {
          let record_datetime = result[i].record_datetime.substring(0,result[i].record_datetime.indexOf(" "));
          let remark = result[i].remark;
          if (null == remark) {
            remark = "";
          } else {
            remark = remark;
          }
          data_arr.push({"source": result[i].manufactor_name,"variety": result[i].oil_type,"grade": result[i].code,"rank": result[i].level,"region": result[i].area,"storage_location": result[i].warehouse,"count": result[i].quantity,"price": result[i].price,"remark": remark,"time": record_datetime,"uuid": result[i].uuid});
        }
        this.spotData = data_arr;
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
    getTradeOilDataParam["data_type"] = 1;
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
        this.spotData = {};
      } else {
        let data_arr = new Array();
        let result = JSON.parse(getTradeOilDataData.result); 
        console.log(result);
        for (let i = 0; i < result.length; i++) {
          let record_datetime = result[i].record_datetime.substring(0,result[i].record_datetime.indexOf(" "));
          let remark = result[i].remark;
          if (null == remark) {
            remark = "";
          } else {
            remark = remark;
          }
          data_arr.push({"source": result[i].manufactor_name,"variety": result[i].oil_type,"grade": result[i].code,"rank": result[i].level,"region": result[i].area,"storage_location": result[i].warehouse,"count": result[i].quantity,"price": result[i].price,"remark": remark,"time": record_datetime,"uuid": result[i].uuid});
        }
        this.spotData = data_arr;
      }
    } else {
      alert("搜索失败");
      return;
    }
  } 

  /*
   * 获取用户user_uuid
   */
  getUserSecurityByUser() {
    let getUserSecurityByUserUrl = PROJECT_PATH + "lego/lego_user?servletName=getUserSecurityByUser";
    let getUserSecurityByUserParam = {};
    let getUserSecurityByUserData = ajax_assistant(getUserSecurityByUserUrl, getUserSecurityByUserParam, false, true, false);
    console.log(getUserSecurityByUserData);
    if (1 == getUserSecurityByUserData.status) {
        let result = JSON.parse(getUserSecurityByUserData.result);
        console.log(result);
        let uuid = result[0].uuid;
        return uuid;
    }
  }
  
  /*
   * 添加委托
   */
  addTradeEntrust(obj) {
    debugger;
    let user_uuid = this.getUserSecurityByUser();
    let data_uuid = obj.attr("uuid");
    let quantity = $("#skip_info_num").val();
    let currentDate = new Date();
    let month = currentDate.getMonth() + 1;
    if (10 > month) {
      month = '0' + month;
    } else {
      month = month;
    }
    let date = currentDate.getDate();
    if (10 > date) {
      date = '0' + date;
    } else {
      date = date;
    }
    let record_datetime = currentDate.getFullYear() + '-' + month + '-' + date + ' 00:00:00';
    if ("" == quantity) {
      alert("数量不能为空");
      return;
    } else {
      if (null == quantity.match(/^(\d+)(\.\d+)?$/)) {
        alert("数量格式错误");
      }
    }
    let addTradeEntrustUrl = PROJECT_PATH + "lego/lego_51zy?servletName=addTradeEntrust";
    let addTradeEntrustParam = {
      "user_uuid": user_uuid,
      "data_uuid": data_uuid,
      "logistics_type": 2,
      "record_datetime": record_datetime,
      "quantity": quantity
    };
    let addTradeEntrustData = ajax_assistant(addTradeEntrustUrl, addTradeEntrustParam, false, true, false);
    console.log(addTradeEntrustData);
    if (1 == addTradeEntrustData.status) {
      alert("委托成功");  
      window.location.reload();
    } else {
      alert("委托失败");
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
                      <th width="8%">标号</th>
                      <th width="8%">级别</th>
                      <th width="8%">地区</th>
                      <th width="8%">库位</th>
                      <th width="13%">数量(吨) </th>
                      <th width="5%">价格</th>
                      <th width="14%">备注</th>
                      <th width="10%">更新时间</th>
                      <th width="8%">操作</th>
                    </tr>
                  </thead>
                  <tbody id = "spotSearchList">
                    <tr>
    					        <td><span>中国海油</span></td>
                      <td>柴油0#国Ⅴ</td>
                      <td>标号</td>
                      <td>级别</td>
                      <td>东莞</td>
                      <td title="立沙">立沙</td>
                      <td>90</td>
                      <td class="yans">5650</td>
                      <td class="yans">备注</td>
                      <td>2小时前</td>
                      <td class="weit"><a class="create-wicket"> 委托</a></td>
                    </tr>
                    <tr>
    					        <td><span>中国海油</span></td>
                      <td>柴油0#国Ⅴ</td>
                      <td>标号</td>
                      <td>级别</td>
                      <td>东莞</td>
                      <td title="立沙">立沙</td>
                      <td>90</td>
                      <td class="yans">5650</td>
                      <td class="yans">备注</td>
                      <td>2小时前</td>
                      <td class="weit"><a class="create-wicket"> 委托</a></td>
                    </tr>
                    <tr>
    					        <td><span>中国海油</span></td>
                      <td>柴油0#国Ⅴ</td>
                      <td>标号</td>
                      <td>级别</td>
                      <td>东莞</td>
                      <td title="立沙">立沙</td>
                      <td>90</td>
                      <td class="yans">5650</td>
                      <td class="yans">备注</td>
                      <td>2小时前</td>
                      <td class="weit"><a class="create-wicket"> 委托</a></td>
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
      <div class="clear"></div>
      <div class="graybg" id="graybg" >
              <div class="midbox" id="whitebg" style="z-index: 99999">
                <span class = "close_popup" style="font-size:24px;position:absolute;cursor: pointer;right:-10px;top:0;width:40px;height:40px;z-index:11">X</span>
                <div class="topsec">
                    <div style="width:200px;height:30px;margin:20px auto;display:block;padding:5px"></div> 
                    <input type="text" name="oil_num" id="skip_info_num" value="" placeholder="请输入吨数" style="width:200px;height:30px;margin-top:10px;padding:5px">
                    <input type="hidden" name="id" id="id" value="">
                    <input type="hidden" name="is_mall" id="is_mall" value="">
                </div>
                <div class="closebtn" id="closebtn">
                    <input type="submit" class="button" id = "submit_btn" value="提交" class="mid_need" style="border:0;background:none;width:100%;line-height:30px;">
                </div>
              </div>
      </div>`;
    $(this.outputId).html(content);
  }
}


