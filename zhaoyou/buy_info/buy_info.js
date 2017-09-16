"use strict";
class BuyInfo{
  constructor() {
    //产品列表
    this.buyInfoData = {
      "data":[
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "name":"10吨 0#国四", "address":"油库不限", "price":"200", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666"},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "name":"10吨 0#国四", "address":"油库不限", "price":"100", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666"},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "name":"10吨 0#国四", "address":"油库不限", "price":"300", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666"},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "name":"10吨 0#国四", "address":"油库不限", "price":"400", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666"},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "name":"10吨 0#国四", "address":"油库不限", "price":"500", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666"},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "name":"10吨 0#国四", "address":"油库不限", "price":"600", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666"},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "name":"10吨 0#国四", "address":"油库不限", "price":"700", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666"},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "name":"10吨 0#国四", "address":"油库不限", "price":"800", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666"},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "name":"10吨 0#国四", "address":"油库不限", "price":"900", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666"},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "name":"10吨 0#国四", "address":"油库不限", "price":"1000", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666"},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "name":"10吨 0#国四", "address":"油库不限", "price":"1100", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666"},
        {"order_number":"201702225115868", "data_time":"2017-05-06 00:00:00", "ascription":"中国石化", "type":"柴油", "name":"10吨 0#国四", "address":"油库不限", "price":"1200", "qiat":"常州地区", "dealer":"童经理", "phnoe":"15966666666"}]
    };
  }

  //清空数据
  clearRawData() {
    $("#buy_info_content").html("");
  }
  
  buyInfoFillData() {
    let infoHtml = "";
    if(isJsonObjectHasData(this.buyInfoData)) {
      for (let i = 0; i < this.buyInfoData.data.length; i++) {
        infoHtml +=
          `<li>
             <div class="gongh">
               <div class="neir">
                 <span title="">采购订单号：<font color="#ef642b">${this.buyInfoData.data[i].order_number}</font>&nbsp;&nbsp;&nbsp;发布时间：${this.buyInfoData.data[i].data_time}</span>
                 <h1><font> ${this.buyInfoData.data[i].ascription}</font><font> ${this.buyInfoData.data[i].type}</font>${this.buyInfoData.data[i].name}<font>${this.buyInfoData.data[i].address}</font></h1>
                 <div class="jg">价格：<span>${this.buyInfoData.data[i].price}元     </span>&nbsp;&nbsp;&nbsp;备注：</div>
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
