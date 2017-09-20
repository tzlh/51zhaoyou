"use strict";
class CommissionedProcurement {
  constructor() {
    this.urlLocation = document.location.toString().split("?")[1].split("&");
  }

  //覆盖
  commissionedFillData () {
    console.log(this.urlLocation);
    let city = this.urlLocation[0].split("=")[1];
    let type = this.urlLocation[1].split("=")[1];
    let req = this.urlLocation[2].split("=")[1];
    let phoneNumber = this.urlLocation[3].split("=")[1];
    if ("0" == this.urlLocation[0].split("=")[1]) {
      city = "";
    } 
   console.log(phoneNumber); 
    let commissionedHtml = 
      `<div class="textarea">
            <textarea placeholder="写下您的真实需求，收到后我们会立即给您回电确认，剩下的就交给我们吧。" name="con" id="txt_trust_content" value = "${req}">${decodeURI(req)}</textarea>
          </div>
          <div class="list">
            <div class="form">
              <h2>您的联系方式<span class="red">( * 为必填项 )</span></h2>
              <dl class="clearfix">
                <dt><span class="red">*</span> 姓氏：</dt>
                <dd>
                  <input type="text" class="text" id = "mm" value="" maxlength="20">
                  <div class="fail" style="display: none" id="contact_name_fail">
                    <i class="icon_tip"></i>联系人不能为空
                  </div>
                </dd>
              </dl>
              <dl class="clearfix">
                <dt><span class="red">* </span>性别：</dt>
                <dd padding="">
                  <input type="radio" value="1" class = "sex_val" name="sex" checked="checked" style="margin-right:30px;margin-left:20px;">男   
                  <input type="radio" value="0" class = "sex_val" name="sex" style="margin-right:30px;margin-left:60px;">女
                  <div class="fail" style="display: none" id="contact_name_fail">
                    <i class="icon_tip"></i>性别不能为空
                  </div>
                </dd>
              </dl>
              <dl class="clearfix">
                <dt><span class="red">*</span> 手机或电话：</dt>
                <dd>
                  <input type="text" class="text" id = "phone_number" value="${phoneNumber}" maxlength="15">
                  <div class="fail" style="display: none" id="contact_mobile_fail">
                    <i class="icon_tip"></i>手机或电话不能为空
                  </div>
                </dd>
              </dl>
	            <dl class="clearfix">
                <dt><span class="red">*</span> 地区：</dt>
                <dd>
                  <input type="text" class="text" id = "region" value="${city}" maxlength="15">
                  <div class="fail" style="display: none" id="contact_mobile_fail">
                    <i class="icon_tip"></i>地区不能为空
                  </div>
                </dd>
              </dl>
	            <dl class="clearfix">
                <dt><span class="red">*</span> 油品类型：</dt>
                <dd>
                  <select class="text" id = "type_fail" value="${type}" style = "width:262px;height:36px">`;
                    if ("a" == type) {
                      commissionedHtml += `<option  value = "" selected = "selected">请选择油品</option>`;              
                    } else if ("0" == type) {
                      commissionedHtml += `<option  value = "0" selected = "selected">汽油</option>`;              
                    } else if ("1" == type) {
                      commissionedHtml += `<option  value = "1" selected = "selected">柴油</option>`;              
                    } else if ("2" == type) {
                      commissionedHtml += `<option  value = "2" selected = "selected">煤油</option>`;              
                    } else if ("3" == type) {
                      commissionedHtml += `<option  value = "3" selected = "selected">燃料油</option>`;              
                    }
                      commissionedHtml += ` 
                        <option  value = "">请选择油品</option>
                        <option value="1">柴油</option>
                        <option value="2">煤油</option>
                        <option value="0">汽油</option> 
                        <option value="3">燃料油</option> `;
                    commissionedHtml +=
                  `</select>
                  <div class="fail" style="display: none" id="contact_mobile_fail">
                    <i class="icon_tip"></i>油品类型不能为空
                  </div>
                </dd>
              </dl>
              <dl class="clearfix">
                <dt><span class="red"></span>公司名称：</dt>
                <dd>
                  <input type="text" class="text" id = "cn" placeholder="非必填项">
                  <div class="fail" style="display: none" id="customer_name_fail">
                    <i class="icon_tip"></i>公司名称不能为空
                  </div>
                </dd>
              </dl>
              <dl class="clearfix">
                <dt>&nbsp;</dt>
                <dd>
                  <input type="button" class="btn1" id = "true_btn" value="确认">
                  <span></span>
                </dd>
              </dl>
            </div>
          </div>`;
      $("#commissioned_content").html(commissionedHtml);
  }

  initEvent() {
    let crrentObj = this
    $(document).on("click", "#true_btn", function() {
      crrentObj.btnTrueFunc();
    }); 
  }

  btnTrueFunc() {
    let nameBtn = $("#mm").val();
    let sexValBtn = $(".sex_val").val();
    let phoneNumber = $("#phone_number").val();
    let regionBtn = $("#region").val();
    let typeFail = $("#type_fail").val();
    let CN = $("#cn").val();
    let txtTrustContent = $("#txt_trust_content").val();
    if ("" == txtTrustContent) {
      alert("需求不能为空");
      return;
    }
    if (null == nameBtn.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{1,32}$/)) {
      alert("请输入正确的姓氏！");
      return;
    } 
    if (null == phoneNumber.match(/^1[3|4|5|8][0-9]\d{4,8}$/)) {
      alert("请输入正确的电话号码！");
      return;
    } 
    if (null == regionBtn.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{1,32}$/)) {
      alert("请输入地区！");
      return;
    } 
    if (null == typeFail.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{1,32}$/)) {
      alert("请输入油品类型！");
      return;
    } 
    function add0(m){return m<10?'0'+m:m }
    function format(shijianchuo)
    {
      //shijianchuo是整数，否则要parseInt转换
      var time = new Date(shijianchuo);
      var y = time.getFullYear();
      var m = time.getMonth()+1;
      var d = time.getDate();
      var h = time.getHours();
      var mm = time.getMinutes();
      var s = time.getSeconds();
      return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
    }
    let stringTime = new Date();
    let currentTiame = format(stringTime);
    let Url = PROJECT_PATH + "lego/lego_user?servletName=getUserSecurityByUser";
    let Get = ajax_assistant(Url, "", false, true, false);
    console.log(Get);
    let userUuid = "";
    if("1" == Get.status) {
      let result = JSON.parse(Get.result); 
      userUuid = result[0].uuid;
      let data = {
        "user_uuid":userUuid,
        "name":nameBtn,
        "sex":sexValBtn,
        "phone_number":phoneNumber,
        "area":regionBtn,
        "oil_type":typeFail,
        "company_name":CN,
        "content":txtTrustContent,
        "record_datetime":currentTiame
      }
      let commissioneUrl = PROJECT_PATH + "lego/lego_51zy?servletName=addTradeDemand";
      let commissionGet = ajax_assistant(commissioneUrl, data, false, true, false);
      console.log(commissionGet);
      if("1" == commissionGet.status) {
        window.location.href = "../index/help.html";
        alert("您的需求已提交成功"); 
      } else {
        alert("添加失败");
      }
    } else {
      alert("请先登录");
    }
  }

  //文本输出
  commissionedOutPutContent(contentId) {
    let content =
      `<div class="w1000">
         <div class="trust_box clearfix">
           <div class="trust_left">
             <h2>您的委托采购需求</h2>
             <div id = "commissioned_content"></div>
           </div>
           <div class="trust_right">
             <div class="top">
               <h2><i class="icon_line"></i>委托我们采购<span> - 您免费的采购助手</span></h2>
               <ul class="step">
                 <li>
                   <h3>① 查看货品</h3>
                   <p>
                       在首页和现货搜索获得最新产品咨询，并通过系统,或电话、QQ委托给我们
                   </p>
                 </li>
                 <li>
                   <h3>②选择报价</h3>
                   <p>
                       我们询价后,您来选择最合适的报价客户
                   </p>
                 </li>
                 <li>
                   <h3>③发布采购</h3>
                   <p>
                       一键发布,或电话、QQ委托给我们
                   </p>
                 </li>
               </ul>
             </div>
             <div class="bottom">
               <p>
                 <span class="orange">百余</span>名专业采购精英每天从上海<span class="orange">300</span>余家油品代理中精选最优惠的现货资源供您选择
               </p>
               <img src="../../img/host.jpg" width="235" height="137">
               <a href="tencent://message/?uin=915445821&Site=&menu=yes" title="通过QQ联系油宝宝" class="qq"><img src="../../img/qq.png"></a>
               <div class="call">
                 <i class="icon_call"></i>
                    021-51130088
               </div>
             </div>
           </div>
         </div>
       </div>`;
    $(contentId).html(content);
  }
}
