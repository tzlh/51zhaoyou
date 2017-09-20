"use strict";
class Header {
  initEvent() {
    let currentObj = this;
    $(document).on("click", "#login_out", function() {
      currentObj.loginOut($(this));
    }); 
  }
  headerFillData() {
    let url = PROJECT_PATH + "lego/lego_user?servletName=getUserSecurityByUser";
    let urlResult = ajax_assistant(url, "", false, true, false);
    let html = 
      `<div id="oil_header">
        <div class="topbar">
          <div class="w1180">
            <div class="toplink">`;
                if ("1" == urlResult.status) {
                  if ("1" == urlResult.count) {
                    let result = JSON.parse(urlResult.result);  
                    console.log(result);
                    // 已登录
                    html += `<span id="topbar_greet">您好${result[0].name},欢迎来到找油网！</span>`;
                  }
                } else {
                  html += `<span id="topbar_greet">您好,欢迎来到找油网！</span>`;
                }
             html+=
            `</div>
            <div class="topmenu"> <a  target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=915445821&site=qq&menu=yes" id="topbar_my_top">联系客服</a>&nbsp;&nbsp; <span>客服热线：021-51130088</span>&nbsp;&nbsp;<span >交易时间：工作日8:30-17:30</span> </div>
          </div>
        </div>
        <div class="header_box">
          <div class="w1180"> <a href="" class="logo"></a>
            <ul class="nav">
              <li class="on" id="head_home"><a href="../index/index.html">首页</a></li>
              <li id="head_search"><a target="_blank" href="../index/zhaoyou_mall.html">找油商城</a></li>
              <li id="head_search"><a target="_blank" href="../index/spot_search.html">现货搜索</a></li>
              <li id="head_baojia"><a target="_blank" href="../index/buy_info.html">采购信息</a></li>
              <li id="head_huodong"><a target="_blank" href="../index/about_us.html">关于我们</a></li>
              <li id="head_app"><a target="_blank" href="../index/app_download.html">App下载</a></li>
            </ul>
            <div class="btn">`;
                if ("1" == urlResult.status) {
                  if ("1" == urlResult.count) {
                    let result = JSON.parse(urlResult.result);  
                    // 已登录
                    html += `<div class="myInfo fr ">
                               <div class="photo"><img src="../../img/touxiang.png"></div>
                               <div class="telphone"><a href="">${result[0].name}</a></div>
                                <a><div class="loginOut" id = "login_out">退出</div></a>
                             </div>`;
                  }
                } else {
                  html += `<a target="_blank" href="../index/register.html"><div class="register">注册</div></a>
                           <a ><div class="login" href="../index/login.html">登录</div></a>`;
                }
             html +=
            `</div>
          </div>
        </div>
      </div>`;
      $("#header_content").html(html);      
  }
  loginOut() {
    var header_log_out_url = PROJECT_PATH+'lego/lego_user?servletName=logout';
    var header_log_out_result = ajax_assistant(header_log_out_url, "", false, true, false);
    if (1 == header_log_out_result.status) {
      window.location.href = "../index/login.html"; 
    }  
  }
  //输出文本
  outPutHeaderContent (contentId) {
    let content = `
      <div id="oil_header">
        <div class="topbar">
          <div class="w1180">
            <div class="toplink">
              <span id="topbar_greet">您好,欢迎来到找油网！</span>
            </div>
            <div class="topmenu"> <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=915445821&site=qq&menu=yes" id="topbar_my_top">联系客服</a>&nbsp;&nbsp; <span>客服热线：021-51130088</span>&nbsp;&nbsp;<span >交易时间：工作日8:30-17:30</span> </div>
          </div>
        </div>
        <div class="header_box">
          <div class="w1180"> <a href="" class="logo"></a>
            <ul class="nav">
              <li class="on" id="head_home"><a href="../index/index.html">首页</a></li>
              <li id="head_search"><a target="_blank" href="">找油商城</a></li>
              <li id="head_search"><a target="_blank" href="">现货搜索</a></li>
              <li id="head_baojia"><a target="_blank" href="../index/buy_info.html">采购信息</a></li>
              <li id="head_huodong"><a target="_blank" href="../index/about_us.html">关于我们</a></li>
              <li id="head_app"><a target="_blank" href="../index/app_download.html">App下载</a></li>
            </ul>
            <div class="btn">
              <a target="_blank" href=""><div class="register">注册</div></a>
              <a target="_blank" href=""><div class="login">登录</div></a>
            </div>
          </div>
        </div>
      </div>`;
    $(contentId).html(content);
  }
};
