"use strict";
class FooterTwo {
  //输出文本
  outPutFooterContent (contentId) {
    let content = `
      <div class="footer">
        <div class="wapper">
          <div class="foot_line">
            <ul>
              <li>
                <div class="foot_img">
                  <a href=""><img src="../../img/foot_logo.jpg"></a>
                </div>
              </li>
              <li>
                <dl>
                  <dt>我要买油</dt>
                  <dd><a target="_blank" href="../index/help.html">我是买家，如何找货</a></dd>
                  <dd><a target="_blank" href="../index/help.html">委托人工帮您找货</a></dd>
                  <dd><a target="_blank" href="../index/help.html">现货搜索</a></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>我要卖油</dt>
                  <dd><a target="_blank" href="../index/help.html">我是卖家，如何销售</a></dd>
                  <dd><a target="_blank" href="../index/help.html">如何吸引更多买家</a></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>交易指南</dt>
                  <dd><a target="_blank" href="../index/help.html">怎样保证交易安全</a></dd>
                  <dd><a target="_blank" href="../index/help.html">友情提示</a></dd>
                  <dd><a target="_blank" href="../index/help.html">我们的报价来源</a></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>常见问题</dt>
                  <dd><a target="_blank" href="../index/help.html">无法登陆</a>/<a target="_blank" href=".html">忘记密码</a></dd>
                  <dd><a target="_blank" href="../index/help.html">会员中心</a></dd>
                  <dd><a target="_blank" href="../index/help.html">修改账号信息</a></dd>
                  <dd><a target="_blank" href="../index/help.html">加找油微信</a></dd>
                </dl>
              </li>
              <li style="border-right:1px solid #e5e5e5; height:145px;">
                <dl>
                  <dt>友情链接</dt>
                  <dd><a target="_blank" href="../index/help.html">找钢网</a></dd>
                  <dd><a target="_blank" href="../index/help.html">中国中化</a></dd>
                  <dd><a target="_blank" href="../index/help.html">中国石化</a></dd>
                </dl>
              </li>
              <li style="width:150px; text-align:center;">
                <img src="../../img/ewm.jpg">
              </li>
            </ul>
          </div>
          <div class="foot_link">
            <ul>
              <li class="seach">现货搜索:</li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中国石化</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中国石油</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中国海油</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中国中化</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中国化工</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中燃</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">柴油</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">汽油</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">煤油</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">燃料油</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">普柴</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">国四</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">国五</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">云峰油库</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">金山油库</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">石洞口油库</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">海滨油库</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">东方储罐油库</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中国石化柴油</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中国石化汽油</a></li>
            </ul>
            <ul>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中国石化煤油</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中国石化燃料油</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中国石油柴油</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中国石油汽油</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中国石油煤油</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中国石油燃料油</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中国中化柴油</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中国中化汽油</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中国中化煤油</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中国中化燃料油</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中国化工柴油</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中国化工汽油</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中国化工煤油</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中国化工燃料油</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中国海油柴油</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中国海油汽油</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中国海油煤油</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中国海油燃料油</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中燃柴油</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中燃汽油</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中燃煤油</a></li>
              <li><a href="" target="_blank" style="color:rgb(180,180,180)">中燃燃料油</a></li>
            </ul>
          </div>
        </div>
        <div class="foot_text">
          <div class="wapper">
            <div class="con">
              <p>
                <a target="_blank" href="">公司介绍丨</a>
                <a target="_blank" href="">法律声明丨</a>
                <a target="_blank" href="">联系我们丨</a>
                <a target="_blank" href="">招贤纳士丨</a>
                <a target="_blank" href="">合作客户</a>
              </p>
              <div style="width:300px;margin:0 auto;">
                <a target="_blank" href="" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
                  <img src="../../img/baIcon.png" style="float:left;">
                  <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">沪公网安备 31011002001100号</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>`;

    $(contentId).html(content);
  }
};

