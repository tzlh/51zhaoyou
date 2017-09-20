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
        //console.log(result); 
        for (let i = 0; i < result.length; i++) {
          tmpArr[i] =  {"code":result[i].code,"level":result[i].level, "oil_type":result[i].oil_type,"ascription":result[i].manufactor_name,"address":result[i].area, "price":result[i].price, "weight":result[i].quantity};
        }
        this.oilRecommendData["data"] = tmpArr;
      }
    } else {
      alert("油品数据获取失败");
    }
  }

  //价格变动柱状图
  heightChartServerData () {
    let currentObj = this;
    //获取柴油
    let data = {
      "type":"1"
    };
    let dieselUrl = PROJECT_PATH + "lego/lego_51zy?servletName=getIndexDataChange";
    let dieselGet = ajax_assistant(dieselUrl, data, false, true, false);
    let dataTimeServer = [];
    let dataTimeServerC = [];
    let dataTime = [];
    let dataTimeC = [];
    let dieselData = [];
    console.log(dieselGet); 
    if ("1" == dieselGet.status) {
      if ("0" != dieselGet.count) {
        let tmpArr = new Array();
        let result = JSON.parse(dieselGet.result); 
         result.sort(function(a, b) {
           return new Date(a.record_datetime) - new Date(b.record_datetime);
         }).reverse();
        //console.log(result); 
        for (let i = 0; i < result.length; i++) {
          let currentTime = result[i].record_datetime;
          currentTime = currentTime.substring(0, currentTime.indexOf(' ')).slice(5,currentTime.length);
          dataTime.push(currentTime); 
        }
        //去重
        for(let i=0;i<dataTime.length;i++){
          if(dataTimeC.indexOf(dataTime[i])<0){
            dataTimeC.push(dataTime[i])
          }
        }
        this.priceFluctuationId = dataTimeC.reverse();
        this.gasolineFluctuationId = dataTimeC.reverse();
        for (let i = 0; i < 5; i++) {
          let weightAll = 0;
          let timeSplit = "2017-" + dataTimeC[i] + " 00:00:00.0";
          for (let j = 0; j < result.length; j++) {
            if ("1" == result[j].type) {
              if (timeSplit == result[j].record_datetime) {
                weightAll += Number(result[j].price);
              }
            }
          }
          dieselData.push(weightAll);
        }
        console.log(dieselData);
        this.priceFluctuationData1 = dieselData.reverse();
        this.gasolineFluctuationData1 = dieselData.reverse();
        //console.log(this.priceFluctuationId);
        //console.log(this.priceFluctuationData1)
      }
    } else {
      alert("数据获取失败");
    } 
    //获取汽油
    let gasolineData = {
      "type":"0"
    };
    let gasolinelUrl = PROJECT_PATH + "lego/lego_51zy?servletName=getIndexDataChange";
    let gasolineGet = ajax_assistant(gasolinelUrl, gasolineData, false, true, false);
    let gDataTimeServer = [];
    let gDataTimeServerC = [];
    let gDataTime = [];
    let gDataTimeC = [];
    let gDieselData = [];
    console.log(gasolineGet); 
    if ("1" == gasolineGet.status) {
      if ("0" != gasolineGet.count) {
        let tmpArr = new Array();
        let result = JSON.parse(gasolineGet.result); 
         result.sort(function(a, b) {
           return new Date(a.record_datetime) - new Date(b.record_datetime);
         }).reverse();
        //console.log(result); 
        for (let i = 0; i < 5; i++) {
          let weightAllA = 0;
          let timeSplit = "2017-" + dataTimeC[i] + " 00:00:00.0";
          for (let j = 0; j < result.length; j++) {
            if ("0" == result[j].type) {
              if (timeSplit == result[j].record_datetime) {
                weightAllA += Number(result[j].price);
              }
            } else {
              console.log(1);
            }
          }
          gDieselData.push(weightAllA);
        }
        this.priceFluctuationData2 = gDieselData.reverse();
        this.gasolineFluctuationData2 = gDieselData.reverse();
      }
    } else {
      alert("数据获取失败");
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
    //console.log(dieselGet); 
    if ("1" == dieselGet.status) {
      if ("0" == dieselGet.count) {
        this.dieselOilData = {};
      } else {
        let tmpArr = new Array();
        let result = JSON.parse(dieselGet.result);   
        //console.log(result); 
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
        //console.log(dieselGet); 
    if ("1" == dieselGet.status) {
      if ("0" == dieselGet.count) {
        this.gasolineOilData = {};
      } else {
        let tmpArr = new Array();
        let result = JSON.parse(dieselGet.result);   
        //console.log(result); 
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
        let typrOil = this.oilRecommendData.data[i].oil_type;
        console.log(this.oilRecommendData);
        oilHtml += 
          `<li>
            <a href="">
              <div class="fl">
                  <p>${this.oilType[typrOil]}&nbsp;&nbsp;${this.oilRecommendData.data[i].weight}&nbsp;&nbsp;${this.oilRecommendData.data[i].code}${this.levelType[this.oilRecommendData.data[i].level]}<span class="gray1">${this.oilRecommendData.data[i].ascription}</span></p>
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
    //柴油
    this.heightChartServerData();
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
    window.location.href =encodeURI("../index/commissioned_procurement_requirements.html?city=" + citySelect + "&type=" + typeSelect + "&req=" + req + "&phonoNumber=" + phonoNumber);
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
          name: '汽油',
          data:this.priceFluctuationData2
        },{
          name: '柴油',
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
        name: '汽油',
        data: this.gasolineFluctuationData2
      }, {
        name: '柴油',
        data: this.gasolineFluctuationData1
      }]
    });
  }
  //输出文本
  indexOutPutCotent(contentId) {
    let content = 
      `<div class="flicker-example" data-block-text="false">
         <ul>
           <li id="img2"> <img src="../../img/banner_2n.png"> </li>
           <li id="img1"> <img src="../../img/banner_5n.png"> </li>
           <li id="img3"> <img src="../../img/banner_3n.jpg"> </li>
         </ul>
       </div>
       <!--tab页签-->
       <div class="w1180">
         <div class="marG postR panel tabS">
           <div class="wid100 postA"><img src="../../img/icons.png"></div>
           <ul class="tab_menu">
             <li class="current">柴油</li>
             <li>汽油</li>
           </ul>
           <div class="tab_box">
           <!--tab1-->
             <div class="overflow">
               <div class="oilTab bodR">
                 <div class="productshow">
                   <div class="scrollcontainer">
                     <ul style="left: 0px;" id = "diesel_oil_content">
                       <li>
                         <a href="/51/Search/index.html">
                           <div class="title">
                             <span>上海</span>
                             <span class="fr">09-15 </span>
                           </div>
                           <div class="contact">
                             <span class="fl"><img src="../../img/zhy.jpg" width="100px" height="40px"></span>
                             <span class="font24 fl marT10 orange">5430</span>
                             <span class="fl marT10"><img src="../../img/top.png"></span>
                           </div>
                           <div class="contact">
                             <span class="fl brand">普通柴油&nbsp;0#&nbsp;柴油</span>
                             <span class="price fl orange weight ">50</span>
                             <span class="fl orange weight dec">0.93%</span>
                           </div>
                         </a>
                       </li>
                       <li>
                         <a href="/51/Search/index.html">
                           <div class="title">
                             <span>上海</span>
                             <span class="fr">09-15 </span>
                           </div>
                         <div class="contact">
                           <span class="fl"><img src="../../img/zhg.jpg" width="100px" height="40px"></span>
                           <span class="font24 fl marT10 orange">5540</span>
                           <span class="fl marT10"><img src="../../img/top.png"></span>
                         </div>
                         <div class="contact">
                           <span class="fl brand">国Ⅴ&nbsp;0#&nbsp;柴油</span>
                           <span class="price fl orange weight ">30</span>
                           <span class="fl orange weight dec">0.54%</span>
                         </div>
                       </a>
                     </li>
                     <li>
                       <a href="/51/Search/index.html">
                         <div class="title">
                           <span>上海</span>
                           <span class="fr">09-15 </span>
                         </div>
                         <div class="contact">
                           <span class="fl"><img src="../../img/zh.jpg" width="100px" height="40px"></span>
                           <span class="font24 fl marT10 orange">5530</span>
                           <span class="fl marT10"><img src="../../img/top.png"></span>
                         </div>
                         <div class="contact">
                           <span class="fl brand">国Ⅴ&nbsp;0#&nbsp;柴油</span>
                           <span class="price fl orange weight ">80</span>
                           <span class="fl orange weight dec">1.47%</span>
                         </div>
                       </a>
                     </li>
                     <li>
                       <a href="/51/Search/index.html">
                         <div class="title">
                           <span>上海</span>
                           <span class="fr">09-15 </span>
                         </div>
                         <div class="contact">
                           <span class="fl"><img src="../../img/zh.jpg" width="100px" height="40px"></span>
                           <span class="font24 fl marT10 orange">5530</span>
                           <span class="fl marT10"><img src="../../img/top.png"></span>
                         </div>
                         <div class="contact">
                           <span class="fl brand">国Ⅴ&nbsp;0#&nbsp;柴油</span>
                           <span class="price fl orange weight ">80</span>
                           <span class="fl orange weight dec">1.47%</span>
                         </div>
                       </a>
                     </li>
                     <li>
                       <a href="/51/Search/index.html">
                         <div class="title">
                           <span>上海</span>
                           <span class="fr">09-15 </span>
                         </div>
                         <div class="contact">
                           <span class="fl"><img src="../../img/zh.jpg" width="100px" height="40px"></span>
                           <span class="font24 fl marT10 orange">5530</span>
                           <span class="fl marT10"><img src="../../img/top.png"></span>
                         </div>
                         <div class="contact">
                           <span class="fl brand">国Ⅴ&nbsp;0#&nbsp;柴油</span>
                           <span class="price fl orange weight ">80</span>
                           <span class="fl orange weight dec">1.47%</span>
                         </div>
                       </a>
                     </li>
                     <li>
                       <a href="/51/Search/index.html">
                         <div class="title">
                           <span>上海</span>
                           <span class="fr">09-15 </span>
                         </div>
                         <div class="contact">
                           <span class="fl"><img src="../../img/zh.jpg" width="100px" height="40px"></span>
                           <span class="font24 fl marT10 orange">5530</span>
                           <span class="fl marT10"><img src="../../img/top.png"></span>
                         </div>
                         <div class="contact">
                           <span class="fl brand">国Ⅴ&nbsp;0#&nbsp;柴油</span>
                           <span class="price fl orange weight ">80</span>
                           <span class="fl orange weight dec">1.47%</span>
                         </div>
                       </a>
                     </li>
                     <li>
                       <a href="/51/Search/index.html">
                         <div class="title">
                           <span>上海</span>
                           <span class="fr">09-15 </span>
                         </div>
                         <div class="contact">
                           <span class="fl"><img src="../../img/zh.jpg" width="100px" height="40px"></span>
                           <span class="font24 fl marT10 orange">5530</span>
                           <span class="fl marT10"><img src="../../img/top.png"></span>
                         </div>
                         <div class="contact">
                           <span class="fl brand">国Ⅴ&nbsp;0#&nbsp;柴油</span>
                           <span class="price fl orange weight ">80</span>
                           <span class="fl orange weight dec">1.47%</span>
                         </div>
                       </a>
                     </li>
                     <li>
                       <a href="/51/Search/index.html">
                         <div class="title">
                           <span>上海</span>
                           <span class="fr">09-15 </span>
                         </div>
                         <div class="contact">
                           <span class="fl"><img src="../../img/zh.jpg" width="100px" height="40px"></span>
                           <span class="font24 fl marT10 orange">5530</span>
                           <span class="fl marT10"><img src="../../img/top.png"></span>
                         </div>
                         <div class="contact">
                           <span class="fl brand">国Ⅴ&nbsp;0#&nbsp;柴油</span>
                           <span class="price fl orange weight ">80</span>
                           <span class="fl orange weight dec">1.47%</span>
                         </div>
                       </a>
                     </li>
                   </ul>
                 </div>
                 <a class="abtn aleft" href="#left">左移</a>
                 <a class="abtn aright" href="#right">右移</a>
               </div>
               <div class="international">
                 <ul>
                   <li>
                     <span >09-15</span>
                     <span class="weight">黄金期货</span>
                     <span>1255.4</span>
                     <span class="orange" style="color:green">-</span>
                   </li>
                   <li>
                     <span >09-15</span>
                     <span class="weight">美元汇率</span>
                     <span>687.82</span>
                     <span class="orange" style="color:red">↑0.81</span>
                   </li>
                   <li>
                     <span >09-15</span>
                     <span class="weight">Brent</span>
                     <span>51.33</span>
                     <span class="orange" style="color:red">↑0.58</span>
                   </li>
                   <li>
                     <span >09-15</span>
                     <span class="weight">WTI</span>
                     <span>48.37</span>
                     <span class="orange" style="color:red">↑0.64</span>
                   </li>
                 </ul>
               </div>
             </div>
             <div class="oilPrice">
               <div id="container1" style="min-width: 310px; height: 200px; margin: 0 auto"></div>
             </div>
           </div>
           <!--tab2-->
           <div class="overflow hide">
             <div class="oilTab bodR">
                <div class="productshow">
                   <div class="scrollcontainer">
                      <ul style="left: 0px;" id = "gasoline_fluctuation_content">
                       <li>
                         <a href="/51/Search/index.html">
                           <div class="title">
                             <span>上海</span>
                             <span class="fr">09-15 </span>
                           </div>
                           <div class="contact">
                             <span class="fl"><img src="../../img/zhy.jpg" width="100px" height="40px"></span>
                             <span class="font24 fl marT10 orange">5430</span>
                             <span class="fl marT10"><img src="../../img/top.png"></span>
                           </div>
                           <div class="contact">
                             <span class="fl brand">普通柴油&nbsp;0#&nbsp;柴油</span>
                             <span class="price fl orange weight ">50</span>
                             <span class="fl orange weight dec">0.93%</span>
                           </div>
                         </a>
                       </li>
                       <li>
                         <a href="/51/Search/index.html">
                           <div class="title">
                             <span>上海</span>
                             <span class="fr">09-15 </span>
                           </div>
                         <div class="contact">
                           <span class="fl"><img src="../../img/zhg.jpg" width="100px" height="40px"></span>
                           <span class="font24 fl marT10 orange">5540</span>
                           <span class="fl marT10"><img src="../../img/top.png"></span>
                         </div>
                         <div class="contact">
                           <span class="fl brand">国Ⅴ&nbsp;0#&nbsp;柴油</span>
                           <span class="price fl orange weight ">30</span>
                           <span class="fl orange weight dec">0.54%</span>
                         </div>
                       </a>
                     </li>
                     <li>
                       <a href="/51/Search/index.html">
                         <div class="title">
                           <span>上海</span>
                           <span class="fr">09-15 </span>
                         </div>
                         <div class="contact">
                           <span class="fl"><img src="../../img/zh.jpg" width="100px" height="40px"></span>
                           <span class="font24 fl marT10 orange">5530</span>
                           <span class="fl marT10"><img src="../../img/top.png"></span>
                         </div>
                         <div class="contact">
                           <span class="fl brand">国Ⅴ&nbsp;0#&nbsp;柴油</span>
                           <span class="price fl orange weight ">80</span>
                           <span class="fl orange weight dec">1.47%</span>
                         </div>
                       </a>
                     </li>
                     <li>
                       <a href="/51/Search/index.html">
                         <div class="title">
                           <span>上海</span>
                           <span class="fr">09-15 </span>
                         </div>
                         <div class="contact">
                           <span class="fl"><img src="../../img/zh.jpg" width="100px" height="40px"></span>
                           <span class="font24 fl marT10 orange">5530</span>
                           <span class="fl marT10"><img src="../../img/top.png"></span>
                         </div>
                         <div class="contact">
                           <span class="fl brand">国Ⅴ&nbsp;0#&nbsp;柴油</span>
                           <span class="price fl orange weight ">80</span>
                           <span class="fl orange weight dec">1.47%</span>
                         </div>
                       </a>
                     </li>
                     <li>
                       <a href="/51/Search/index.html">
                         <div class="title">
                           <span>上海</span>
                           <span class="fr">09-15 </span>
                         </div>
                         <div class="contact">
                           <span class="fl"><img src="../../img/zh.jpg" width="100px" height="40px"></span>
                           <span class="font24 fl marT10 orange">5530</span>
                           <span class="fl marT10"><img src="../../img/top.png"></span>
                         </div>
                         <div class="contact">
                           <span class="fl brand">国Ⅴ&nbsp;0#&nbsp;柴油</span>
                           <span class="price fl orange weight ">80</span>
                           <span class="fl orange weight dec">1.47%</span>
                         </div>
                       </a>
                     </li>
                     <li>
                       <a href="/51/Search/index.html">
                         <div class="title">
                           <span>上海</span>
                           <span class="fr">09-15 </span>
                         </div>
                         <div class="contact">
                           <span class="fl"><img src="../../img/zh.jpg" width="100px" height="40px"></span>
       
                           <span class="font24 fl marT10 orange">5530</span>
                           <span class="fl marT10"><img src="../../img/top.png"></span>
                         </div>
                         <div class="contact">
                           <span class="fl brand">国Ⅴ&nbsp;0#&nbsp;柴油</span>
                           <span class="price fl orange weight ">80</span>
                           <span class="fl orange weight dec">1.47%</span>
                         </div>
                       </a>
                     </li>
                      </ul>
                    </div>
                    <a class="abtn aleft" href="#left">左移</a>
                    <a class="abtn aright" href="#right">右移</a>
                  </div>
                  <div class="international">
                    <ul>
                      <li>
                        <span >09-15</span>
                        <span class="weight">黄金期货</span>
                        <span>1255.4</span>
                        <span class="orange" style="color:green">-</span>
                      </li>
                      <li>
                        <span >09-15</span>
                        <span class="weight">美元汇率</span>
                        <span>687.82</span>
                        <span class="orange" style="color:red">↑0.81</span>
                      </li>
                      <li>
                        <span >09-15</span>
                        <span class="weight">Brent</span>
                        <span>51.33</span>
                        <span class="orange" style="color:red">↑0.58</span>
                      </li>
                      <li>
                        <span >09-15</span>
                        <span class="weight">WTI</span>
                        <span>48.37</span>
                        <span class="orange" style="color:red">↑0.64</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="oilPrice">
                  <div id="container2" style="min-width: 310px; height: 200px; margin: 0 auto"></div>
                </div>
              </div>
            </div>
          </div>
       </div>
       <!--商品-->
       <div class="w1180 postR" id="oil">
           <div class="marG panel contact orangeBorder ">
               <div class="fl wid240 "><img src="../../img/oilShopping.jpg"></div>
               <div class="fl wid900">
                   <div class="shopping">
                       <div class="fl oilBrand">
                           <div class="title "><span class="fl pad20"><strong>油品推荐</strong></span><span class="fr orange "><a href="zhaoyou_mall.html">去商城查看<span style="margin-left:5px;"><img src="../../img/arrow.png"></span></a></span></div>
                           <div class="shangpin">
                             <ul id = "products_recommend">
                                <li>
                                  <a href="/51/Search/index.html">
                                    <div class="fl">
                                        <p>柴油&nbsp;&nbsp;国v<span class="gray1">中国石化</span></p>
                                        <p class="gray1"><strong>上海</strong></p>
                                    </div>
                                    <div class="fr rightPrice">50000</div>
                                  </a>
                                </li>
                             </ul>
                           </div>
                       </div>
                       <div class="fr cell">
                           <div class="deal postR">
                               <img src="../../img/right_money.png">
                               <div class="price postA0">
                                   <p class="day">昨日成交量</p>
                                   <p><span class="bold">10181.02</span>吨</p>
                               </div>
                           </div>
                           <div class="select">
                               <div class="fl">
                                   <select name="region" id = "city_select" value = "0">
                                       <option value = "0">选择地区</option>
                                       <option value="上海">上海</option>
                                       <option value="广东">广东</option>
                                       <option value="江苏">江苏</option>
                                       <option value="山东">山东</option>
                                       <option value="浙江">浙江</option>
                                       <option value="湖北">湖北</option>
                                   </select>
                               </div>
                               <div class="fl">
                                   <select name="type" id = "type_select" value = "0">
       
                                       <option value="a">选择油品</option>
                                       <option  value = "0">汽油</option>
                                       <option value="1">柴油</option>
                                       <option value="2">煤油</option>
                                       <option value="3">燃料油</option>
                                   </select>
                               </div>
                           </div>
                           <div class="textarea"><textarea id ="req" placeholder="请详细填写您的需求，剩下的交给我们吧！"></textarea></div>
                           <div class="tel"><input type="text" id = "phono_number" value="" placeholder="请输入您的联系方式"></div>
                           <div class="btn" id = "submitBtn"><input type="submit"  class="button"></div>
                      </div>
                   </div>
                   <div class="brand">
                       <div class="productBrand">
                           <div class="scrollcontainer">
                               <ul style="left: 0px;" >
                                   <li>
                                       <img src="../../img/zsh.jpg"  height="50px">
                                   </li>
                                   <li>
                                       <img src="../../img/zsy.jpg"  height="50px">
                                   </li>
                                   <li>
                                       <img src="../../img/zhg.jpg"  height="50px">
                                   </li>
                                   <li>
                                       <img src="../../img/zhy.jpg"  height="50px">
                                   </li>
                                   <li>
                                       <img src="../../img/zr.jpg"  height="50px">
                                   </li>
                                   <li>
                                       <img src="../../img/zh.jpg"  height="50px">
                                   </li>
                                   <li>
                                       <img src="../../img/haofu.png"  height="50px">
                                   </li>
                                   <li>
                                       <img src="../../img/zsh.jpg"  height="50px">
                                   </li>
                                   <li>
                                       <img src="../../img/zsy.jpg"  height="50px">
                                   </li>
                                   <li>
                                       <img src="../../img/zhg.jpg"  height="50px">
                                   </li>
                                   <li>
                                       <img src="../../img/zhy.jpg"  height="50px">
                                   </li>
                                   <li>
                                       <img src="../../img/zr.jpg"  height="50px">
                                   </li>
                                   <li>
                                       <img src="../../img/zh.jpg"  height="50px">
                                   </li>
                                   <li>
                                       <img src="../../img/haofu.png"  height="50px">
                                   </li>
                               </ul>
                           </div>
                           <a class="abtn aleft" href="#left">左移</a>
                           <a class="abtn aright" href="#right">右移</a>
                       </div>
                   </div>
               </div>
           </div>
           <div class="floor"><img src="../../img/firstFloor.png"></div>
       </div>
       <!--下单流程-->
       <div class="w1180 postR" id="logistics">
           <div class="marG panel contact greenBorder ">
               <div class="fl wid240 "><img src="../../img/oilLogistics.jpg"></div>
               <div class="fl wid900">
                   <div class="shopping">
                       <div class="fl oilBrand">
                           <div class="title "><span class="fl pad20"><strong>下单流程</strong></span><span class="fr orange "></span></div>
                           <div class="logisticsContent"><img src="../../img/logistics.jpg" alt="下单流程"></div>
                       </div>
                       <div class="fr cell"><img src="../../img/telephone.jpg" alt="找车热线"></div>
                   </div>
               </div>
               <div class="floor"><img src="../../img/secondFloor.png"></div>
           </div>
       </div>
       <!--找油金融-->
       <div class="w1180 postR" id="inancial">
           <div class="marG panel contact yellowBorder">
               <div class="fl wid240 "><img src="../../img/inancial.jpg"></div>
               <div class="fl wid900">
                   <div class="shopping">
                       <div class="title">
                           <span class="fl pad20"><strong>申请流程</strong></span>
                           <span class="fr orange "></span>
                       </div>
                       <div class="inancial ">
                           <span class="fl inancialL"><img src="../../img/inancialR.jpg"></span>
                           <span class="fl inancialR"><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=915445821&site=qq&menu=yes"><img src="../../img/apply.jpg"></a></span>
                           <span></span>
                       </div>
                   </div>
               </div>
               <div class="floor"><img src="../../img/thirdFloor.png"></div>
           </div>
       </div>`;
    $(contentId).html(content);
  }
}
