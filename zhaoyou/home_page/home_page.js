"use strict";
class HomePage {
  constructor() {
    this.levelType = ["普柴","轻燃","国Ⅲ ","国Ⅳ ","国Ⅴ"];
    this.oilType = ["汽油","柴油","煤油","燃料油"];
    //柴油价格变动
    this.priceFluctuationId = ["09-11","09-12","09-13","09-14","09-15"];
    this.priceFluctuationData1 = [5468,5364,5458,5552,5557];
    this.priceFluctuationData2 = [5329,5464,5321,5476,5379];
    //汽油的价格变动
    this.gasolineFluctuationId = ["06-21","06-22","06-23","06-24","06-25"];
    this.gasolineFluctuationData1 = [3468,3364,4458,5552,5557];
    this.gasolineFluctuationData2 = [3329,35464,4321,5476,5379];
    //油品推荐
    this.oilRecommendData = {
      "data":[
        {"code":"0#","level":"0", "oil_type":"汽油","ascription":"中国石化","address":"常州-油库不限", "price":"5500", "weight":"50"},
        {"code":"0#","level":"0", "oil_type":"柴油","ascription":"中国石化","address":"常州-油库不限", "price":"5500", "weight":"50"},
        {"code":"0#","level":"0", "oil_type":"煤油","ascription":"中国石化","address":"常州-油库不限", "price":"5500", "weight":"50"},
        {"code":"0#","level":"0", "oil_type":"燃料油","ascription":"中国石化","address":"常州-油库不限", "price":"5500", "weight":"50"},
        {"code":"0#","level":"0", "oil_type":"汽油","ascription":"中国石化","address":"常州-油库不限", "price":"5500", "weight":"50"},
        {"code":"0#","level":"0", "oil_type":"柴油","ascription":"中国石化","address":"常州-油库不限", "price":"5500", "weight":"50"},
        {"code":"0#","level":"0", "oil_type":"煤油","ascription":"中国石化","address":"常州-油库不限", "price":"5500", "weight":"50"},
        {"code":"0#","level":"0", "oil_type":"燃料油","ascription":"中国石化","address":"常州-油库不限", "price":"5500", "weight":"50"}]
    };
    //昨日成交量
    this.volumeYesterday = 9452.25;
    //柴油价格指导
    this.dieselOilData = {
      "data":[
        {"data_time":"09-15", "code":"0#","level":"0", "oil_type":"汽油","ascription":"中国海油","address":"上海", "price":"1", "weight":"50"},
        {"data_time":"09-15", "code":"0#","level":"0", "oil_type":"柴油","ascription":"中国海油","address":"上海", "price":"2", "weight":"50"},
        {"data_time":"09-15", "code":"0#","level":"0", "oil_type":"柴油","ascription":"中国海油","address":"上海", "price":"3", "weight":"50"},
        {"data_time":"09-15", "code":"0#","level":"0", "oil_type":"柴油","ascription":"中国海油","address":"上海", "price":"3", "weight":"50"},
        {"data_time":"09-15", "code":"0#","level":"0", "oil_type":"柴油","ascription":"中国海油","address":"上海", "price":"1", "weight":"50"},
        {"data_time":"09-15", "code":"0#","level":"0", "oil_type":"柴油","ascription":"中国海油","address":"上海", "price":"2", "weight":"50"},
        {"data_time":"09-15", "code":"0#","level":"0", "oil_type":"柴油","ascription":"中国海油","address":"上海", "price":"3", "weight":"50"},
        {"data_time":"09-15", "code":"0#","level":"0", "oil_type":"柴油","ascription":"中国海油","address":"上海", "price":"3", "weight":"50"},
        {"data_time":"09-15", "code":"0#","level":"0", "oil_type":"柴油","ascription":"中国海油","address":"上海", "price":"4", "weight":"50"},
        {"data_time":"09-15", "code":"0#","level":"0", "oil_type":"柴油","ascription":"中国海油","address":"上海", "price":"5", "weight":"50"},
        {"data_time":"09-15", "code":"0#","level":"0", "oil_type":"柴油","ascription":"中国海油","address":"上海", "price":"6", "weight":"50"},
        {"data_time":"09-15", "code":"0#","level":"0", "oil_type":"柴油","ascription":"中国海油","address":"上海", "price":"7", "weight":"50"},
        {"data_time":"09-15", "code":"0#","level":"0", "oil_type":"柴油","ascription":"中国海油","address":"上海", "price":"8", "weight":"50"},
        {"data_time":"09-15", "code":"0#","level":"0", "oil_type":"柴油","ascription":"中国海油","address":"上海", "price":"5", "weight":"50"}]
    };
    //汽油价格指导
    this.gasolineOilData = {
      "data":[
        {"data_time":"09-15", "code":"0#","level":"0", "oil_type":"汽油","ascription":"中国海油","address":"上海", "price":"1", "weight":"50"},
        {"data_time":"09-15", "code":"0#","level":"0", "oil_type":"柴油","ascription":"中国海油","address":"上海", "price":"2", "weight":"50"},
        {"data_time":"09-15", "code":"0#","level":"0", "oil_type":"柴油","ascription":"中国海油","address":"上海", "price":"3", "weight":"50"},
        {"data_time":"09-15", "code":"0#","level":"0", "oil_type":"柴油","ascription":"中国海油","address":"上海", "price":"3", "weight":"50"},
        {"data_time":"09-15", "code":"0#","level":"0", "oil_type":"柴油","ascription":"中国海油","address":"上海", "price":"1", "weight":"50"},
        {"data_time":"09-15", "code":"0#","level":"0", "oil_type":"柴油","ascription":"中国海油","address":"上海", "price":"2", "weight":"50"},
        {"data_time":"09-15", "code":"0#","level":"0", "oil_type":"柴油","ascription":"中国海油","address":"上海", "price":"3", "weight":"50"},
        {"data_time":"09-15", "code":"0#","level":"0", "oil_type":"柴油","ascription":"中国海油","address":"上海", "price":"3", "weight":"50"},
        {"data_time":"09-15", "code":"0#","level":"0", "oil_type":"柴油","ascription":"中国海油","address":"上海", "price":"4", "weight":"50"},
        {"data_time":"09-15", "code":"0#","level":"0", "oil_type":"柴油","ascription":"中国海油","address":"上海", "price":"5", "weight":"50"},
        {"data_time":"09-15", "code":"0#","level":"0", "oil_type":"柴油","ascription":"中国海油","address":"上海", "price":"6", "weight":"50"},
        {"data_time":"09-15", "code":"0#","level":"0", "oil_type":"柴油","ascription":"中国海油","address":"上海", "price":"7", "weight":"50"},
        {"data_time":"09-15", "code":"0#","level":"0", "oil_type":"柴油","ascription":"中国海油","address":"上海", "price":"8", "weight":"50"},
        {"data_time":"09-15", "code":"0#","level":"0", "oil_type":"柴油","ascription":"中国海油","address":"上海", "price":"5", "weight":"50"}]
    };
  }

  //清空油品推荐数据
  clearRawData() {
    $("#products_recommend").html("");
  }
  //油品服务器
  oilServerData() {
    this.oilRecommendData = {};
    //获取
    let oilRecommendUrl = PROJECT_PATH + "lego/lego_51zy?servletName=getTradeOilData";
    let oilRecommendGet = ajax_assistant(oilRecommendUrl, "", false, true, false);
    if ("1" == oilRecommendGet.status) {
      if ("0" == oilRecommendGet.count) {
        this.oilRecommendData = {};
      } else {
        let tmpArr = new Array();
        let result = JSON.parse(oilRecommendGet.result);   
        console.log(result); 
        for (let i = 0; i < result.length; i++) {
          tmpArr[i] =  {"code":result[i].code,"level":result[i].level, "oil_type":result[i].oil_type,"ascription":result[i].manufactor_name,"address":result[i].area, "price":result[i].price, "weight":result[i].quantity};
        }
        this.oilRecommendData["data"] = tmpArr;
      }
    } else {
      alert("油品数据获取失败");
    }
  }
  //柴油服务器
  dieselServerData() {
    this.dieselOilData = {};
    //获取
    let data = {
      "oil_type":"1"
    };
    let dieselUrl = PROJECT_PATH + "lego/lego_51zy?servletName=getTradeOilData";
    let dieselGet = ajax_assistant(dieselUrl, data, false, true, false);
        console.log(dieselGet); 
    //
    if ("1" == dieselGet.status) {
      if ("0" == dieselGet.count) {
        this.dieselOilData = {};
      } else {
        let tmpArr = new Array();
        let result = JSON.parse(dieselGet.result);   
        console.log(result); 
        for (let i = 0; i < result.length; i++) {
          tmpArr[i] =  {"data_time":result[i].record_datetime, "code":result[i].code,"level":result[i].level, "oil_type":result[i].oil_type,"ascription":result[i].manufactor_name,"address":result[i].area, "price":result[i].price, "weight":result[i].quantity};
        }
        this.dieselOilData["data"] = tmpArr;
      }
    } else {
      alert("数据获取失败");
    }
  }
  //汽油服务器
  gasolineServerData() {
    this.gasolineOilData = {};
    //获取
    let data = {
      "oil_type":"0"
    };
    let dieselUrl = PROJECT_PATH + "lego/lego_51zy?servletName=getTradeOilData";
    let dieselGet = ajax_assistant(dieselUrl, data, false, true, false);
        console.log(dieselGet); 
    if ("1" == dieselGet.status) {
      if ("0" == dieselGet.count) {
        this.gasolineOilData = {};
      } else {
        let tmpArr = new Array();
        let result = JSON.parse(dieselGet.result);   
        console.log(result); 
        for (let i = 0; i < result.length; i++) {
          tmpArr[i] =  {"data_time":result[i].record_datetime, "code":result[i].code,"level":result[i].level, "oil_type":result[i].oil_type,"ascription":result[i].manufactor_name,"address":result[i].area, "price":result[i].price, "weight":result[i].quantity};
        }
        this.gasolineOilData["data"] = tmpArr;
      }
    } else {
      alert("数据获取失败");
    }
  }
  //油品推荐覆盖
  oilFillVariableData () {
    let oilHtml = "";
    if(isJsonObjectHasData(this.oilRecommendData)) {
      for (let i = 0; i < 8; i++) {
        oilHtml += 
          `<li>
            <a href="">
              <div class="fl">
                  <p>${this.oilType[this.oilRecommendData.data[i].oil_type]}&nbsp;&nbsp;${this.oilRecommendData.data[i].weight}&nbsp;&nbsp;${this.oilRecommendData.data[i].code}${this.levelType[this.oilRecommendData.data[i].level]}<span class="gray1">${this.oilRecommendData.data[i].ascription}</span></p>
                  <p class="gray1"><strong>${this.oilRecommendData.data[i].address}</strong></p>
              </div>
              <div class="fr rightPrice">${this.oilRecommendData.data[i].price}</div>
            </a>
          </li>`; 
      }
    }
    $("#products_recommend").html(oilHtml);
  }

  //柴油价格指导覆盖
  dieselOilFillVariableData () {
    let oilHtml = "";
    if(isJsonObjectHasData(this.dieselOilData)) {
      for (let i = 0; i < this.dieselOilData.data.length; i++) {
        let ascription = "";
        if ("中国石化" == this.dieselOilData.data[i].ascription) {
          ascription = "../../img/zsh.jpg";
        } else if ("中国石油" == this.dieselOilData.data[i].ascription) {
          ascription = "../../img/zsy.jpg"; 
        } else if ("中国海油" == this.dieselOilData.data[i].ascription) {
          ascription = "../../img/zhy.jpg"; 
        } else if ("中国化工" == this.dieselOilData.data[i].ascription) {
          ascription = "../../img/zhg.jpg"; 
        } else if ("中国中化" == this.dieselOilData.data[i].ascription) {
          ascription = "../../img/zh.jpg"; 
        }
        let dataTime = this.dieselOilData.data[i].data_time;
        dataTime = dataTime.substring(0, dataTime.indexOf(' '));
        oilHtml += 
          `<li>
             <a href="">
               <div class="title">
                 <span>${this.dieselOilData.data[i].address}</span>
                 <span class="fr">${dataTime}</span>
               </div>
               <div class="contact">
                 <span class="fl"><img src="${ascription}" width="100px" height="40px"></span>
                 <span class="font24 fl marT10 orange">${this.dieselOilData.data[i].price}</span>
               </div>
               <div class="contact">
                 <span class="fl brand">${this.dieselOilData.data[i].code}${this.levelType[this.dieselOilData.data[i].level]}&nbsp;${this.dieselOilData.data[i].oil_type}</span>
                 <span class="price fl orange weight ">${this.dieselOilData.data[i].weight}</span>
                 <span class="fl orange weight dec"></span>
               </div>
             </a>
           </li>`; 
      }
    }
    $("#diesel_oil_content").html(oilHtml);
  }

  //汽油价格指导覆盖
  gasolineOilFillVariableData () {
    let oilHtml = "";
    if(isJsonObjectHasData(this.gasolineOilData)) {
      for (let i = 0; i < this.gasolineOilData.data.length; i++) {
        let ascription = "";
        if ("中国石化" == this.gasolineOilData.data[i].ascription) {
          ascription = "../../img/zsh.jpg";
        } else if ("中国石油" == this.gasolineOilData.data[i].ascription) {
          ascription = "../../img/zsy.jpg"; 
        } else if ("中国海油" == this.gasolineOilData.data[i].ascription) {
          ascription = "../../img/zhy.jpg"; 
        } else if ("中国化工" == this.gasolineOilData.data[i].ascription) {
          ascription = "../../img/zhg.jpg"; 
        } else if ("中国中化" == this.gasolineOilData.data[i].ascription) {
          ascription = "../../img/zh.jpg"; 
        }
        let dataTime = this.gasolineOilData.data[i].data_time;
        dataTime = dataTime.substring(0, dataTime.indexOf(' '));
        oilHtml += 
          `<li>
             <a href="">
               <div class="title">
                 <span>${this.gasolineOilData.data[i].address}</span>
                 <span class="fr">${dataTime}</span>
               </div>
               <div class="contact">
                 <span class="fl"><img src="${ascription}" width="100px" height="40px"></span>
                 <span class="font24 fl marT10 orange">${this.gasolineOilData.data[i].price}</span>
                
               </div>
               <div class="contact">
                 <span class="fl brand">${this.gasolineOilData.data[i].code}${this.levelType[this.gasolineOilData.data[i].level]}&nbsp;${this.gasolineOilData.data[i].oil_type}</span>
                 <span class="price fl orange weight ">${this.gasolineOilData.data[i].weight}</span>
                 <span class="fl orange weight dec"></span>
               </div>
             </a>
           </li>`; 
      }
    }
    $("#gasoline_fluctuation_content").html(oilHtml);
  }

  initEvent () {
    let currentObj = this;
    this.flicker();
    this.tabClick();
    $(".productshow .scrollcontainer li:eq(2)").css("border-right","0px");
    //四、循环切换;
    $(".productshow").Xslider({
        unitdisplayed:3,
        numtoMove:3,
        autoscroll:4000,
        loop:"cycle"
    });
    //品牌循环切换
    $(".productBrand").Xslider({
        unitdisplayed:3,
        numtoMove:3,
        autoscroll:4000,
        loop:"cycle"
    });
    this.heightData();
    //昨日成交量
    $("#oil").find(".bold").html(this.volumeYesterday);
    //用户交互需求提交
    $(document).on("click", "#submitBtn", function() {
      currentObj.submitBtnFunc();
    });
  }

  flicker () {
    $('.flicker-example').flicker();
  }

  tabClick() {
    $('.tabS').Tabs({
      event:'click'
    });
  }

  //需求提交用户交互
  submitBtnFunc () {
    let citySelect = $("#city_select").val();
    let typeSelect = $("#type_select").val();
    let req = $("#req").val();
    let phonoNumber = $("#phono_number").val();
    window.location.href = "../index/commissioned_procurement_requirements.html?city=" + citySelect + "&type=" + typeSelect + "&req=" + req + "&phonoNumber=" + phonoNumber;
  }

  //height价格变动
  heightData () {
    Highcharts.setOptions({
      colors: ['#bace45', '#d4603f']
    });
    $('#container1').highcharts({
      chart: {
        type: 'line'
      },
      title: {
        text: '价格变动',
        align:'left'
      },
      legend: {
        align: 'right', //水平方向位置
        verticalAlign: 'top', //垂直方向位置
        x: 0, //距离x轴的距离
        y: 0 //距离Y轴的距离
      },
      subtitle: {
        text: '取自华东，华南市场',
        align:'left'
      },
      xAxis: {
        categories: this.priceFluctuationId
      },
      yAxis: {
        title: {
          text: ''
        }
      },
      tooltip: {
        valueSuffix: '元'
      },
      legend: {
        align: 'right',
        verticalAlign: 'top',
        x:0,
        y:0,
        borderWidth: 0,
        itemStyle : {
          'fontSize' : '12px'
             }
        },
        series: [{
          name: '交易均价',
          data:this.priceFluctuationData2
        },{
          name: '报价均价',
          data:this.priceFluctuationData1
        }
        ]
    });
    $('#container2').highcharts({
      chart: {
        type: 'line'
      },
      title: {
        text: '价格变动',
        align:'left'
      },
      legend: {
        align: 'right', //水平方向位置
        verticalAlign: 'top', //垂直方向位置
        x: 0, //距离x轴的距离
        y: 0 //距离Y轴的距离
      },
      subtitle: {
        text: '取自华东，华南市场',
        align:'left'
      },
      xAxis: {
        categories: this.gasolineFluctuationId
      },
      yAxis: {
        title: {
          text: ''
        }
      },
      tooltip: {
        valueSuffix: '元'
      },
      legend: {
        align: 'right',
        verticalAlign: 'top',
        x:0,
        y:0,
        borderWidth: 0,
        itemStyle : {
          'fontSize' : '12px'
        }
      },
      series: [{
        name: '交易均价',
        data: this.gasolineFluctuationData2
      }, {
        name: '报价均价',
        data: this.gasolineFluctuationData1
      }]
    });
  }

}
