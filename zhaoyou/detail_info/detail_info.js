"use strict;"

class  DetailInfo{
  /**
   * 构造函数
   *
   * @param outputId 传入输出的元素id
   */
  constructor(outputId) {
    this.outputId = outputId;
    this.oil_type = ["柴油","汽油","煤油","燃料油"];
    this.level = ["普柴","轻燃","国III","国Iv","国V"];
    this.detailData = {"imgUrl": "../../img/577a3f9ebb778.png","source": "中国海油","variety": "柴油","code": "0#","level": "普柴","vendibility": "100","price": "100","trader": "某经理","tel": "15825252525","uuid": "111"};     
    this.goodDetailData = {"source": "中国海油","storage_location": "库位不限","repertory": "111","data": "2017-02-05","variety": "柴油","grade": "0#","region": "东莞","else": "100"};     
  }

  initEvent() {
    let currentObj = this;
    $(document).on("click", ".btn_submit", function() {
      currentObj.addTradeEntrust();
    });
  }

  fillCoverData() {
    if ("" != this.detailData) {
      let content = 
        `<a href="#" class="pic"><img src="${this.detailData.imgUrl}" width="480px" height="580px"></a>
        <div class="intro">
          <h2>${this.detailData.source}&nbsp;${this.oil_type[this.detailData.variety]}&nbsp${this.detailData.code}&nbsp${this.level[this.detailData.level]}&nbsp;可售${this.detailData.vendibility}吨</h2>
          <div class="jia"><span class="tit">单价</span><span class="cu">￥<span class="n">${this.detailData.price}</span></span></div>
          <form id="trust_box_form" role="entrust">
            <div class="sendway" id="sendway">
              <span class="tit">配送方式:</span>
              <input type="radio" name="sendway" value="0">
              找油物流
              <input type="radio" name="sendway" value="1">
              自提
            </div>
            <div class="options">
              <span class="tit">数量（吨）：</span>
              <span><a href="javascript:;" id="btn_jian"><i class="iconfont icon-zuo"></i></a></span>
              <input type="text" class="num" id="opt_num" value="">
              <span><a href="javascript:;" id="btn_add"><i class="iconfont icon-you"></i></a></span>
              <a href="javascript:;" class="btn_submit">我要委托</a>
              <div class="trader">
                <span class="row"><i class="iconfont icon-yonghu"></i><span>交易员：${this.detailData.trader} </span></span>
                <span classs="tel row" style="color:#27ae61;font-size:14px;">13536633400</span>
              </div>
            </div>
          </form>
        </div>`;
      $("#detailContent").html(content);
    }
  }
  
  fillGoodDetailCoverData() {
    if ("" != this.goodDetailData) {
      let content = 
        `<li>品牌名称：${this.goodDetailData.source}</li>
         <li>库位：${this.goodDetailData.storage_location}</li>
         <li>库存：${this.goodDetailData.repertory}</li>
         <li>上架时间：${this.goodDetailData.data}</li>
         <li>种类：${this.oil_type[this.goodDetailData.variety]}</li>
         <li>标号：${this.goodDetailData.grade}</li>
         <li>地区：${this.goodDetailData.region}</li>
         <li>其他：${this.goodDetailData.else}</li>`;
      $("#des").html(content);
    }
  }

  /*
   * 获取油品数据
   */
  getTradeOilData() {
    let uuid = window.location.search.split("=")[1];
    console.log(uuid);
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
        remark = result[0].remark;
      }
      this.detailData = {"imgUrl": "../../img/577a3f9ebb778.png","source": result[0].manufactor_name,"variety": result[0].oil_type,"code": result[0].code,"level": result[0].level,"vendibility": result[0].quantity,"price": result[0].price,"trader": result[0].trader_name,"tel": result[0].trader_phonenumber};
      this.goodDetailData = {"source": result[0].manufactor_name,"storage_location": result[0].warehouse,"repertory": result[0].quantity,"data": record_datetime,"variety": result[0].oil_type,"grade": result[0].code,"region": result[0].area,"else": result[0].remark};     
    } else {
      alert("获取油品数据失败");
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
  addTradeEntrust() {
    debugger;
    let user_uuid = this.getUserSecurityByUser();
    let data_uuid = window.location.search.split("=")[1];
    let logistics_type = $('#sendway input:radio[name="sendway"]:checked').val();
    let quantity = $("#opt_num").val();
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
    console.log(logistics_type);
    if (null == logistics_type) {
      alert("请选择配送方式");
      return;
    }
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
      "logistics_type": logistics_type,
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
      <div class="introbox">
        <div class="intro_head" id = "detailContent">
          <a href="#" class="pic"><img src="../../img/577a3f9ebb778.png" width="480px" height="580px"></a>
          <div class="intro">
            <h2>中国海油 柴油 0#国Ⅴ 可售189吨</h2>
            <div class="jia"><span class="tit">单价</span><span class="cu">￥<span class="n">5650</span></span></div>
            <form id="trust_box_form" role="entrust">
              <div class="sendway" id="sendway">
                <span class="tit">配送方式:</span>
                <input type="checkbox" id="sendway" data-sendway="1">
                找油物流
                <input type="checkbox" id="sendway" data-sendway="2">
                自提
              </div>
              <div class="options">
                <span class="tit">数量（吨）：</span>
                <span><a href="javascript:;" id="btn_jian"><i class="iconfont icon-zuo"></i></a></span>
                <input type="text" class="num" id="opt_num" value="">
                <input type="hidden" class="gd_id" id="opt_gdid" value="1946">
                <input type="hidden" id="opt_price" value="5650">
                <span><a href="javascript:;" id="btn_add"><i class="iconfont icon-you"></i></a></span>
                <a href="javascript:;" class="btn_submit">我要委托</a>
                <div class="trader">
                  <span class="row"><i class="iconfont icon-yonghu"></i><span>交易员：龙健雄经理 </span></span>
                  <span classs="tel row" style="color:#27ae61;font-size:14px;">13536633400</span>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="info">
          <div class="item">
            <div class="tit">
              <a href="javascript:;" class="cur" id="btn_des">商品信息<span class="eng">DESCRIPTION</span></a>
            </div>
            <ul class="descript" id="des">
              <li>品牌名称：中国海油</li>
              <li>库位：油库不限</li>
              <li>库存：189吨</li>
              <li>上架时间：2017-09-15</li>
              <li>种类：柴油</li>
              <li>标号：0#</li>
              <li>地区：东莞</li>
              <li>其他：</li>
            </ul>
            <ul class="descript" id="index" style="display:none;">
              <img src="../../img/hegezheng.png" width="100%">
            </ul>
          </div>
          <div class="item">
            <div class="tit">
              <a href="http://www.51zhaoyou.com/51/Mall/goodsInfo/id/1946.html#" class="cur">服务介绍<span class="eng">SERVICE</span></a>
            </div>
            <ul class="service">
              <li>
                <div class="icon_pic"><img src="../../img/icon1.png" width="100%"></div>
                <div class="name"><span>供需</span></div>
                <div class="sometip">精准匹配</div>
              </li>
              <li>
                <div class="icon_pic"><img src="../../img/icon2.png" width="100%"></div>
                <div class="name"><span>物权</span></div>
                <div class="sometip">安全保障</div>
              </li>
              <li>
                <div class="icon_pic"><img src="../../img/icon3.png" width="100%"></div>
                <div class="name"><span>物流</span></div>
                <div class="sometip">准时到达</div>
              </li>
              <li>
                <div class="icon_pic"><img src="../../img/icon4.png" width="100%"></div>
                <div class="name"><span>发票</span></div>
                <div class="sometip">快速交付</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="aftersale">
          <div class="tit">售后保证</div>
          <ul>
            <li>
              <div class="top"><span>正规厂家</span></div>
              <div>商户实名认证，开具正规发票</div>
            </li>
            <li>
              <div class="top"><span>先行赔付</span></div>
              <div>找油网提供先行赔付方案让买油无后顾之忧</div>
            </li>
            <li>
              <div class="top"><span>权威认证</span></div>
              <div>客户对油品质量提出异议提供第三方检验</div>
            </li>
          </ul>
        </div>
      </div>
    </div>`;
    $(this.outputId).html(content);
  }
}


