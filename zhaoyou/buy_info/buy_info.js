"use strict";
class BuyInfo{
  constructor() {
    this.oilType = ["汽油","柴油","煤油","燃料油"];
    this.levelType = ["普柴","轻燃","国Ⅲ ","国Ⅳ ","国Ⅴ"];
    //产品列表
    this.buyInfoData = {
      "data":[
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "code":"0#", "address":"油库不限", "price":"200", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666","quantity":"100", "level":"0", "remark":""},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "code":"0#", "address":"油库不限", "price":"100", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666","quantity":"100", "level":"0", "remark":""},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "code":"0#", "address":"油库不限", "price":"300", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666","quantity":"100", "level":"0", "remark":""},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "code":"0#", "address":"油库不限", "price":"400", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666","quantity":"100", "level":"0", "remark":""},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "code":"0#", "address":"油库不限", "price":"500", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666","quantity":"100", "level":"0", "remark":""},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "code":"0#", "address":"油库不限", "price":"600", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666","quantity":"100", "level":"0", "remark":""},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "code":"0#", "address":"油库不限", "price":"700", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666","quantity":"100", "level":"0", "remark":""},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "code":"0#", "address":"油库不限", "price":"800", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666","quantity":"100", "level":"0", "remark":""},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "code":"0#", "address":"油库不限", "price":"900", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666","quantity":"100", "level":"0", "remark":""},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "code":"0#", "address":"油库不限", "price":"1000", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666","quantity":"100", "level":"0", "remark":""},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "code":"0#", "address":"油库不限", "price":"1100", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666","quantity":"100", "level":"0", "remark":""},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "code":"0#", "address":"油库不限", "price":"1200", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666","quantity":"100", "level":"0", "remark":""}]
    };
  }

  //清空数据
  clearRawData() {
    $("#buy_info_content").html("");
  }
  //数据库数据覆盖
  serverDataCover() {
    this.buyInfoData = {};
    //获取仓库
    let buyInfoUrl = PROJECT_PATH + "lego/lego_51zy?servletName=getTradeOilData";
    let buyInfoGet = ajax_assistant(buyInfoUrl, "", false, true, false);

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
          if (null != result[i].remark){
            remark = result[i].remark;
          }
          tmpArr[i] =  {"order_number":"201702225115868", "data_time":result[i].record_datetime, "ascription":result[i].manufactor_name, "type":this.oilType[result[i].oil_type], "code":result[i].code, "quantity":result[i].quantity, "address":"油库不限", "price":result[i].price, "qiat":result[i].area, "remark":remark, "dealer":result[i].trader_name, "phnoe":result[i].trader_phonenumber,"level":this.levelType[result[i].level]};
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
					 	    <div class="gonghuo" id="create-wicket"><a>供货</a></div> 
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
       currentObj.supplyCommodityFunc();
    });
    //关闭供货
    $(document).on("click", "#close_btn", function() {
       currentObj.closeFunc();
    });
    //提交供货
    $(document).on("click", "#mid_need", function() {
       currentObj.submitFunc();
    
    });

  }

  searchFunc () {
    let orderNumber = $("#www").val();
    let buyType = $("#buy_type").val();
    let manufactor = $("#manufactor").val();
    let pot = $("#buy_pot").val();
    let data = {
      "oil_type":buyType,
      "manufactor_name":manufactor,
      "warehouse":pot
    }
  }

  supplyCommodityFunc () {
    $("#graybg, #whitebg").css("display","block");
    let offerVal = $("#skip_info_price").val("");
    let tonnageVal = $("#skip_info_num").val("");   
  }

  closeFunc () {
    $("#graybg, #whitebg").css("display","none");  
  }

  submitFunc() {
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
    if ("123" == offerVal) {
    $("#graybg, #whitebg").css("display","none");

    }
  }
}
