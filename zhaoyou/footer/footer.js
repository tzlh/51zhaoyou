"use strict";
class Footer() {
  //输出文本
  outPutFooterContent (contentId) {
    let content = `
      <div class="backGray">
        <div class="w1180"><img src="../../img/ensure01.jpg" alt="货真价实,价格、库存真实有效，杜绝虚假交易"><img src="../../img/ensure02.jpg" alt="买卖无忧,会员认证、诚信、积分，三大体系保驾护航"><img src="../../img/ensure03.jpg" alt="优质服务,专业人员全程一对一服务，贴心呵护"></div>
      </div>
      <div class="footer" id="oil_footer">
        <div class="w1180">
          <div class="foot_line">
            <ul>
              <li>
                <div class="foot_img">
                  <a href="/51/index/index.html"><img src="../../img/logo.png"></a>
                </div>
              </li>
              <li>
                <dl>
                  <dt>我要买油</dt>
                  <dd><a target="_blank" href="/51/Help/index.html">我是买家，如何找货</a></dd>
                  <dd><a target="_blank" href="/51/Help/index.html">委托人工帮您找货</a></dd>
                  <dd><a target="_blank" href="/51/Help/index.html">现货搜索</a></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>我要卖油</dt>
                  <dd><a target="_blank" href="/51/Help/index.html">我是卖家，如何销售</a></dd>
                  <dd><a target="_blank" href="/51/Help/index.html">如何吸引更多买家</a></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>交易指南</dt>
                  <dd><a target="_blank" href="/51/Help/index.html">怎样保证交易安全</a></dd>
                  <dd><a target="_blank" href="/51/Help/index.html">友情提示</a></dd>
                  <dd><a target="_blank" href="/51/Help/index.html">我们的报价来源</a></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt>常见问题</dt>
                  <dd><a target="_blank" href="/51/Help/index.html">无法登陆</a>/<a target="_blank" href="/51/Help/index.html">忘记密码</a></dd>
                  <dd><a target="_blank" href="/51/Help/index.html">会员中心</a></dd>
                  <dd><a target="_blank" href="/51/Help/index.html">修改账号信息</a></dd>
                  <dd><a target="_blank" href="/51/Help/index.html">加找油微信</a></dd>
                </dl>
              </li>
              <li style=" height:145px;">
                <dl>
                  <dt>友情链接</dt>
                  <dd><a target="_blank" href="http://www.zhaogang.com/">找钢网</a></dd>
                  <dd><a target="_blank" href="http://www.sinochem.com/">中国中化</a></dd>
                  <dd><a target="_blank" href="http://www.sinopec.com/">中国石化</a></dd>
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
              <li><a href="/51/Search/zhongshihuasearch.html" target="_blank" >中国石化</a></li>
              <li><a href="/51/Search/zhongshiyousearch.html" target="_blank" >中国石油</a></li>
              <li><a href="/51/Search/zhonghaiyousearch.html" target="_blank"  >中国海油</a></li>
              <li><a href="/51/Search/zhonghuasearch.html" target="_blank"  >中国中化</a></li>
              <li><a href="/51/Search/zhonghuagongsearch.html" target="_blank"  >中国化工</a></li>
              <li><a href="/51/Search/zhongransearch.html" target="_blank"  >中燃</a></li>
              <li><a href="/51/Search/chaiyousearch.html" target="_blank"  >柴油</a></li>
              <li><a href="/51/Search/qiyousearch.html" target="_blank"  >汽油</a></li>
              <li><a href="/51/Search/meiyousearch.html" target="_blank"  >煤油</a></li>
              <li><a href="/51/Search/ranliaoyousearch.html" target="_blank"  >燃料油</a></li>
              <li><a href="/51/Search/puchaisearch.html" target="_blank"  >普柴</a></li>
              <li><a href="/51/Search/guosisearch.html" target="_blank"  >国四</a></li>
              <li><a href="/51/Search/guowusearch.html" target="_blank"  >国五</a></li>
              <li><a href="/51/Search/yunfengsearch.html" target="_blank"  >云峰油库</a></li>
              <li><a href="/51/Search/jinshansearch.html" target="_blank"  >金山油库</a></li>
              <li><a href="/51/Search/shidongsearch.html" target="_blank"  >石洞口油库</a></li>
              <li><a href="/51/Search/haibinsearch.html" target="_blank"  >海滨油库</a></li>
              <li><a href="/51/Search/dongfangsearch.html" target="_blank"  >东方储罐油库</a></li>
              <li><a href="/51/Search/zhongshihuachaiyousearch.html" target="_blank"  >中国石化柴油</a></li>
              <li><a href="/51/Search/zhongshihuaqiyousearch.html" target="_blank"  >中国石化汽油</a></li>
            </ul>
            <ul>
              <li><a href="/51/Search/zhongshihuameiyousearch.html" target="_blank"  >中国石化煤油</a></li>
              <li><a href="/51/Search/zhongshihuaranliaoyousearch.html" target="_blank"  >中国石化燃料油</a></li>
              <li><a href="/51/Search/zhongshiyouchaiyousearch.html" target="_blank"  >中国石油柴油</a></li>
              <li><a href="/51/Search/zhongshiyouqiyousearch.html" target="_blank"  >中国石油汽油</a></li>
              <li><a href="/51/Search/zhongshiyoumeiyousearch.html" target="_blank"  >中国石油煤油</a></li>
              <li><a href="/51/Search/zhongshiyouranliaoyousearch.html" target="_blank"  >中国石油燃料油</a></li>
              <li><a href="/51/Search/zhonghuachaiyousearch.html" target="_blank"  >中国中化柴油</a></li>
              <li><a href="/51/Search/zhonghuaqiyousearch.html" target="_blank"  >中国中化汽油</a></li>
              <li><a href="/51/Search/zhonghuameiyousearch.html" target="_blank"  >中国中化煤油</a></li>
              <li><a href="/51/Search/zhonghuaranliaoyousearch.html" target="_blank"  >中国中化燃料油</a></li>
              <li><a href="/51/Search/zhonghuagongchaiyousearch.html" target="_blank"  >中国化工柴油</a></li>
              <li><a href="/51/Search/zhonghuagongqiyousearch.html" target="_blank"  >中国化工汽油</a></li>
              <li><a href="/51/Search/zhonghuagongmeiyousearch.html" target="_blank"  >中国化工煤油</a></li>
              <li><a href="/51/Search/zhonghuagongranliaoyousearch.html" target="_blank"  >中国化工燃料油</a></li>
              <li><a href="/51/Search/zhonghaiyouchaiyousearch.html" target="_blank"  >中国海油柴油</a></li>
              <li><a href="/51/Search/zhonghaiyouqiyousearch.html" target="_blank"  >中国海油汽油</a></li>
              <li><a href="/51/Search/zhonghaiyoumeiyousearch.html" target="_blank"  >中国海油煤油</a></li>
              <li><a href="/51/Search/zhonghaiyouranliaoyousearch.html" target="_blank"  >中国海油燃料油</a></li>
              <li><a href="/51/Search/zhongranchaiyousearch.html" target="_blank"  >中燃柴油</a></li>
              <li><a href="/51/Search/zhongranqiyousearch.html" target="_blank"  >中燃汽油</a></li>
              <li><a href="/51/Search/zhongranmeiyousearch.html" target="_blank"  >中燃煤油</a></li>
              <li><a href="/51/Search/zhongranranliaoyousearch.html" target="_blank"  >中燃燃料油</a></li>
            </ul>
          </div>
        </div>
        <div class="foot_text">
          <div class="wapper">
            <div class="con">
              <p>
                <a target="_blank" href="/51/Help/introduction.html">公司简介丨</a><a target="_blank" href="/51/Help/statement.html">法律声明丨</a><a target="_blank" href="/51/Help/contact.html">联系我们丨</a><a target="_blank" href="/51/Help/recruit.html">招贤纳士丨</a><a target="_blank" href="/51/Help/partner.html">合作客户</a>
              </p>
              <p>COPYRIGHT © 找油网 www.51zhaoyou.com 沪ICP备15013612号-1 ICP证：沪B2-20160061</p>
              <div style="width:300px;margin:0 auto;">
                <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011002001100" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="../../img/baIcon.png" style="float:left;"/><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">沪公网安备 31011002001100号</p></a>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    $(contentId).html(content);
  }
};
