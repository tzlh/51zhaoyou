"use strict";
class BuyInfo{
  constructor() {
    this.oilType = ["汽油","柴油","煤油","燃料油"];
    this.levelType = ["普柴","轻燃","国Ⅲ ","国Ⅳ ","国Ⅴ"];
    //产品列表
    this.buyInfoData = {
      "data":[
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "code":"0#", "address":"油库不限", "price":"200", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666","quantity":"100", "level":"0", "remark":"", "uuid":"001"},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "code":"0#", "address":"油库不限", "price":"100", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666","quantity":"100", "level":"0", "remark":"", "uuid":"001"},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "code":"0#", "address":"油库不限", "price":"300", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666","quantity":"100", "level":"0", "remark":"", "uuid":"001"},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "code":"0#", "address":"油库不限", "price":"400", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666","quantity":"100", "level":"0", "remark":"", "uuid":"001"},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "code":"0#", "address":"油库不限", "price":"500", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666","quantity":"100", "level":"0", "remark":"", "uuid":"001"},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "code":"0#", "address":"油库不限", "price":"600", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666","quantity":"100", "level":"0", "remark":"", "uuid":"001"},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "code":"0#", "address":"油库不限", "price":"700", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666","quantity":"100", "level":"0", "remark":"", "uuid":"001"},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "code":"0#", "address":"油库不限", "price":"800", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666","quantity":"100", "level":"0", "remark":"", "uuid":"001"},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "code":"0#", "address":"油库不限", "price":"900", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666","quantity":"100", "level":"0", "remark":"", "uuid":"001"},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "code":"0#", "address":"油库不限", "price":"1000", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666","quantity":"100", "level":"0", "remark":"", "uuid":"001"},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "code":"0#", "address":"油库不限", "price":"1100", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666","quantity":"100", "level":"0", "remark":"", "uuid":"001"},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "code":"0#", "address":"油库不限", "price":"1200", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666","quantity":"100", "level":"0", "remark":"", "uuid":"001"}]
    };
  }

  //清空数据
  clearRawData() {
    $("#buy_info_content").html("");
  }
  //数据库数据覆盖
  serverDataCover(data) {
    this.buyInfoData = {};
    //获取仓库
    let buyInfoUrl = PROJECT_PATH + "lego/lego_51zy?servletName=getTradeOilData";
    let buyInfoGet = ajax_assistant(buyInfoUrl, data, false, true, false);

    //仓库
    if ("1" == buyInfoGet.status) {
      if ("0" == buyInfoGet.count) {
        this.buyInfoData = {};
      } else {
        let tmpArr = new Array();
        let result = JSON.parse(buyInfoGet.result);   
        console.log(result); 
        for (let i = 0; i < result.length; i++) {
          let remark = "";
          let order_number = "";
          if (null != result[i].remark){
            remark = result[i].remark;
          }
          tmpArr[i] =  {"order_number":result[i].order_number, "data_time":result[i].record_datetime, "ascription":result[i].manufactor_name, "type":this.oilType[result[i].oil_type], "code":result[i].code, "quantity":result[i].quantity, "address":result[i].warehouse, "price":result[i].price, "qiat":result[i].area, "remark":remark, "dealer":result[i].trader_name, "phnoe":result[i].trader_phonenumber,"level":this.levelType[result[i].level], "uuid":result[i].uuid};
        }
        this.buyInfoData["data"] = tmpArr;
      }
    } else {
      alert("数据获取失败");
    }

  }  
  buyInfoFillData() {
    let infoHtml = "";
    if(isJsonObjectHasData(this.buyInfoData)) {
      for (let i = 0; i < this.buyInfoData.data.length; i++) {
        let dataTime = this.buyInfoData.data[i].data_time;
        dataTime = dataTime.substring(0, dataTime.indexOf(' '));
        infoHtml +=
          `<li>
             <div class="gongh">
               <div class="neir">
                 <span title="">采购订单号：<font color="#ef642b">${this.buyInfoData.data[i].order_number}</font>&nbsp;&nbsp;&nbsp;发布时间：${dataTime}</span>
                 <h1><font> ${this.buyInfoData.data[i].ascription}</font><font> ${this.buyInfoData.data[i].type}</font>${this.buyInfoData.data[i].quantity}&nbsp;&nbsp;${this.buyInfoData.data[i].code}&nbsp;&nbsp;${this.buyInfoData.data[i].level}<font>${this.buyInfoData.data[i].address}</font></h1>
                 <div class="jg">价格：<span>${this.buyInfoData.data[i].price}元     </span>&nbsp;&nbsp;&nbsp;备注：${this.buyInfoData.data[i].price}</div>
               </div>
               <div class="gh">
                 <div class="qiat"><font> ${this.buyInfoData.data[i].qiat}</font></div>                                             
					 	    <div class="gonghuo" id="create-wicket" uuid = "${this.buyInfoData.data[i].uuid}"><a>供货</a></div> 
               </div>
             </div>
             <div class="contacts">
               <dl>
                 <dd><img src="../../img/jyy.jpg">交易员：${this.buyInfoData.data[i].dealer}</dd>
                 <dd><img src="../../img/tel.jpg">电话：${this.buyInfoData.data[i].phnoe}</dd>
                 <dd><img style="CURSOR: pointer" onclick="javascript:window.open(&#39;  http://wpa.qq.com/msgrd?v=3&amp;uin=1219222433&amp;site=qq&amp;menu=yes&#39;, &#39;_blank&#39;, &#39;height=502, width=644,toolbar=no,scrollbars=no,menubar=no,status=no&#39;);" border="0" src="http://wpa.qq.com/pa?p=1:1219222433:10" alt="Hi，这里是找油网"></dd>
               </dl>
             </div>
           </li>`;
      }
    } 
    $("#buy_info_content").html(infoHtml);
  }

  initEvent() {
    let currentObj = this;
    //搜索
    $(document).on("click", "#search_btn", function() {
      currentObj.searchFunc();
    });
    //点击供货
    $(document).on("click", "#create-wicket", function() {
       currentObj.supplyCommodityFunc($(this));
    });
    //关闭供货
    $(document).on("click", "#close_btn", function() {
       currentObj.closeFunc($(this));
    });
    //提交供货
    $(document).on("click", "#mid_need", function() {
       currentObj.submitFunc($(this));
    });

  }

  searchFunc () {
    let orderNumber = $("#www").val();
    let buyType = $("#buy_type").val();
    let manufactor = $("#manufactor").val();
    let pot = $("#buy_pot").val();
    let data = {};
    if("" != orderNumber) {
      data["order_number"] = orderNumber;
    }
    if("9" != buyType) {
      data["oil_type"] = buyType;
    }
    if("0" != manufactor) {
      data["manufactor_name"] = manufactor;
    }
    if("" != pot) {
      data["warehouse"] = pot;
    }
    this.serverDataCover(data);
    this.buyInfoFillData();
  }

  supplyCommodityFunc (obj) {
    let uuid = obj.attr("uuid");
    $("#graybg, #whitebg").css("display","block");
    
    let offerVal = $("#skip_info_price").val("");
    let tonnageVal = $("#skip_info_num").val("");  
    $("#mid_need").attr("uuid",uuid); 
  }

  closeFunc (obj) {
    $("#graybg, #whitebg").css("display","none");  
  }

  submitFunc(obj) {
    let uuid = obj.attr("uuid");
    let offerVal = $("#skip_info_price").val();
    let tonnageVal = $("#skip_info_num").val();
    if(null == offerVal.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)){
      alert("请输入正确的报价");
      return;
    }; 
    if(null == tonnageVal.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)){
      alert("请输入正确的吨数");
      return;
    };
    let data = {
      "uuid":uuid,
      "price":offerVal,
      "quantity":tonnageVal
    }; 
    let submitUrl = PROJECT_PATH+'lego/lego_51zy?servletName=modifyTradeOilData';
    let submitResult = ajax_assistant(submitUrl, data, false, true, false);
    console.log(submitResult);
    if("1" == submitResult.status) {
      alert("提交成功");
      $("#graybg, #whitebg").css("display","none");
    }
  }
  //文本输出
  buyInfoOutPutContent(contentId) {
    let content =
      `<div class="content1">
         <div class="wapper">
             <div class="top_b">
                 <!---buyleft start-->
                 <div class="buy_left">
                     <div class="seachList">
                       <ul>
                         <li><i>采购单号：</i>
                           <input type="text" class="kuang" id="www" name="no" value="">
                         </li>
                         <li><i>类型:</i>
                           <select class="xl" name="type" id = "buy_type">
                             <option selected="selected" value="9">请选择</option>
                             <option value="1">柴油</option>
                             <option value="0">汽油</option>
                             <option value="2">煤油</option>
                             <option value="3">燃料油</option>
                           </select>
                         </li>
                         <li><i>厂家：</i>
                           <select class="xl" name="sou" id = "manufactor">
                             <option selected="selected" value="0">请选择</option>
                             <option value="中国石化">中国石化</option>
                             <option value="中国石油">中国石油</option>
                             <option value="中国海油">中国海油</option>
                             <option value="中国化工">中国化工</option>
                             <option value="中国中化">中国中化</option>
                             <option value="其他">其他</option> 
                           </select>
                         </li>
                         <li><i>库位：</i>
                           <input type="text" class="kuang" id="buy_pot" value="">
                         </li>
                         <li>
                           <input type="button" id = "search_btn" class = "sousuo" value="搜索">
                         </li>
                       </ul>
                     </div>
                     <div class="bList">
                       <!--list start-->
                       <div class="list">
                         <ul id = "buy_info_content" style = "margin-bottom:20px">
                           <li>
                             <div class="gongh">
                               <div class="neir">
                                 <span title="">采购订单号：<font color="#ef642b">201702225115868 </font>&nbsp;&nbsp;&nbsp;发布时间：2017年02月22日 13:42</span>
                                 <h1><font> 中国石化</font><font> 柴油</font>10吨 0#国四 <font>油库不限</font></h1>
                                 <div class="jg">价格：<span>5800.00元     </span>&nbsp;&nbsp;&nbsp;备注：</div>
                               </div>
                               <div class="gh">
                                 <div class="qiat"><font> 常州地区</font></div>                                             
     												    <div class="gonghuo"><a id="create-wicket" onclick="toLogin()">供货</a></div> 
                               </div>
                             </div>
                             <div class="contacts">
                               <dl>
                                 <dd><img src="../../img/jyy.jpg">交易员：童经理</dd>
                                 <dd><img src="../../img/tel.jpg">电话：15360043536</dd>
                                 <dd><img style="CURSOR: pointer" onclick="javascript:window.open(&#39;  http://wpa.qq.com/msgrd?v=3&amp;uin=1219222433&amp;site=qq&amp;menu=yes&#39;, &#39;_blank&#39;, &#39;height=502, width=644,toolbar=no,scrollbars=no,menubar=no,status=no&#39;);" border="0" src="http://wpa.qq.com/pa?p=1:1219222433:10" alt="Hi，这里是找油网"></dd>
                               </dl>
                             </div>
                           </li>
                         </ul>
                       </div>      
                     </div>
                   </div>
                   <!---buyleft end-->
                   <!---buyright start-->
                   <div class="buy_right">
                     <div class="title">
                       <div class="text">委托我们采购 - <font class="qg_title">您免费的采购助手</font></div>
                     </div>
                     <!---采购 start-->
                     <div class="step">
                       <ul>
                         <li>
                           <div class="numl"><img src="../../img/1.jpg"></div>
                           <div class="des">
                             <dl>
                               <dt>查看货品</dt>
                               <dd>在首页和现货搜索获得最新产品咨询，并通过系统,或电话、QQ委托给我们</dd>
                             </dl>
                           </div>
                         </li>
                         <li>
                           <div class="numl"><img src="../../img/2.jpg"></div>
                           <div class="des">
                             <dl>
                             <dt>选择报价</dt>
                             <dd>我们询价后,您来选择最合适的报价客户</dd>
                           </dl>
                         </div>
                       </li>
                       <li>
                        	<div class="numl"><img src="../../img/3.jpg"></div>
                         <div class="des">
                           <dl>
                             <dt>发布采购</dt>
                             <dd>一键发布,或电话、QQ委托给我们</dd>
                           </dl>
                         </div>
                       </li>
                     </ul>
                   </div>
                   <!---采购 start-->
                   <div>
                    	<img src="../../img/ry.jpg">
                   </div>
                 </div>
                 <!---buyright end-->
               </div>
             </div>
           <div class="graybg" id="graybg">
             <div class="midbox" id="whitebg">
               <span id = "close_btn" style="font-size:24px;position:absolute;cursor: pointer;right:-10px;top:0;width:40px;height:40px;z-index:11">X</span>     
                  <div class="topsec"> 
                   <input type="text" name="oil_price" id="skip_info_price" value="" placeholder="请输入报价" style="width:200px;height:30px;margin:20px auto;display:block;padding:5px">
                   <input type="text" name="oil_num" id="skip_info_num" value="" placeholder="请输入吨数" style="width:200px;height:30px;margin-top:10px;padding:5px">
                   <input type="hidden" name="id" id="id" value="15856">
                 </div>
                 <div class="closebtn" id="closebtn">
                   <input type="button" value="提交" id = "mid_need" style="border:0;background:none;width:100%;line-height:30px;">
                 </div>
               </div>
             </div>
           </div>`;
    $(contentId).html(content);
  }
}
