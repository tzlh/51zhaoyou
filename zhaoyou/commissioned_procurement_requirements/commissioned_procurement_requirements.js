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
    let phoneNumber = this.urlLocation[2].split("=")[1];
    if ("0" == this.urlLocation[0].split("=")[1]) {
      city = "";
    } 
    if ("0" == this.urlLocation[1].split("=")[1]) {
      type = "";
    }
   console.log(phoneNumber); 
    let commissionedHtml = 
      `<div class="textarea">
            <textarea placeholder="写下您的真实需求，收到后我们会立即给您回电确认，剩下的就交给我们吧。" name="con" id="txt_trust_content"></textarea>
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
                  <input type="radio" value="男" class = "sex_val" name="sex" checked="checked" style="margin-right:30px;margin-left:20px;">男   
                  <input type="radio" value="女" class = "sex_val" name="sex" style="margin-right:30px;margin-left:60px;">女
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
                  <input type="text" class="text" id = "type_fail" value="${type}" maxlength="15">
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
                  <input type="submit" class="btn1" id = "true_btn" value="确认">
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
    let txtTrustContent = $("#txt_trust_content").val();
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
    let data = {
    
    }
  }
}
