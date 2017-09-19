"use strict";
class HeaderTwo {
  initEvent() {
    let currentObj = this;
    $(document).on("click", "#login_out", function() {
      currentObj.loginOut($(this));
    }); 
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
    let url = PROJECT_PATH + "lego/lego_user?servletName=getUserSecurityByUser";
    let urlResult = ajax_assistant(url, "", false, true, false);
    let content = `
      <div class="header">
      <!--header_top start-->
      <div class="header_top">
        <div class="wapper">
          <ul class="fl">`;
            if ("1" == urlResult.status) {
              if ("1" == urlResult.count) {
                let result = JSON.parse(urlResult.result);  
                console.log(result);
                // 已登录
                content += `<span id="topbar_greet">Hi${result[0].name}! 欢迎来找油网</span><span id = "login_out">【退出】</span>`;
              }
            } else {
              content += `Hi! 欢迎来找油网    
                          <a href="../index/login.html" title="登录网站，享受更多私人定制">   请登录</a>
                          <a href="../index/register.html" title="免费成为找油网会员，享受一对一人工服务">【免费注册】</a>`;
            }
            
          content +=
          `</ul>
          <ul class="fr">
            <li>
              <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=915445821&amp;site=qq&amp;menu=yes" title="通过QQ联系油宝宝"><img src="../../img/head-icon1.png" style="vertical-align:-10%;">&nbsp;&nbsp;在线客服</a>
              <span>|</span>
            </li>
            <li style="border:0px;">客服时间：工作日8：30-17：00</li>
          </ul>
        </div>
      </div>
      <!--header_top end-->
      <!--logo start-->
      <div class="wapper">
        <div class="logo_fl"><a target="_blank" href=""><img src="../../img/logo.jpg"></a></div>
        <!--搜索 start-->
        <div class="logo_fr">
          <div id="search-2014">
            <div class="form">
              <form action="http://www.51zhaoyou.com/51/Search/index.html" method="get" role="msearch1">
                <input class="text" id="goobleSearch" name="goobleSearch" type="text" placeholder="请输入来源 种类 标号 级别  使用下划线区分">
                <button class="button cw-icon"><i></i>搜索</button>
              </form>
            </div>
          </div>
          <div class="search_line">
            品类：<a href="http://www.51zhaoyou.com/51/Search/index.html"><span style="color:#7d7d7d">中国化工</span></a>  <a href="http://www.51zhaoyou.com/51/Search/index.html"><span style="color:#7d7d7d">中国石化</span></a>  <a href="http://www.51zhaoyou.com/51/Search/index.html"><span style="color:#7d7d7d">中国石油</span></a>  <a href="http://www.51zhaoyou.com/51/Search/index.html"><span style="color:#7d7d7d">中国海油</span></a>  <a href="http://www.51zhaoyou.com/51/Search/index.html"><span style="color:#7d7d7d">中国中化</span></a>
          </div>
        </div>
        <!--搜索 end-->
      </div>
      <!--logo end-->
      <!--nav start-->
      <div class="nav">
        <div class="wapper">
          <div class="menu1">
            <ul>
              <li><a href="../index/index.html">首页</a></li>
              <li>
                <a href="http://www.51zhaoyou.com/51/Mall/index.html"><i style="position:absolute;margin-left:70px;top:145px;"><img src="../../img/new.png"></i>找油商城</a>
              </li>
              <li><a href="http://www.51zhaoyou.com/51/Search/index.html">现货搜索</a></li>
              <li><a href="../index/buy_info.html">采购信息</a></li>
              <li><a target="_blank" href="../index/about_us.html">关于我们</a></li>
              <li><a target="_blank" href="../index/app_download.html">app下载</a></li>
            </ul>
          </div>
        </div>
      </div>
      <!--nav end-->
    </div>`;
    $(contentId).html(content);
  }
};

