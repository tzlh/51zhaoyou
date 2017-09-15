"use strict";
class Header() {
  //输出文本
  outPutHeaderContent (contentId) {
    let content = `
      <div id="oil_header">
        <div class="topbar">
          <div class="w1180">
            <div class="toplink">
              <span id="topbar_greet">您好,欢迎来到找油网！</span>
            </div>
            <div class="topmenu"> <a target="_blank" href="" id="topbar_my_top">联系客服</a>&nbsp;&nbsp; <span>客服热线：021-51130088</span>&nbsp;&nbsp;<span >交易时间：工作日8:30-17:30</span> </div>
          </div>
        </div>
        <div class="header_box">
          <div class="w1180"> <a href="" class="logo"></a>
            <ul class="nav">
              <li class="on" id="head_home"><a href="">首页</a></li>
              <li id="head_search"><a target="_blank" href="">找油商城</a></li>
              <li id="head_search"><a target="_blank" href="">现货搜索</a></li>
              <li id="head_baojia"><a target="_blank" href="">采购信息</a></li>
              <li id="head_huodong"><a target="_blank" href="">关于我们</a></li>
              <li id="head_app"><a target="_blank" href="">App下载</a></li>
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
