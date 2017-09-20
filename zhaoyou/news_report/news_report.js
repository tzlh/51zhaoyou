"use strict;"

class NewsReport {

  constructor(outputId) {
    this.outputId = outputId;
  }

  /**
   * 输出
   */
  output() {
    let content = 
      `<div class="backImg">
        <div class="w1180_h">
          <div class="nav pc">
            <ul>
              <li><a href="about_us.html">关于我们</a></li>
              <li><a href="company_introduction.html">公司介绍</a></li>
              <li><a href="development_history.html">发展历程</a></li>
              <li><a href="enterprise_culture.html">企业文化</a></li>
              <li class="on"><a href="news_report.html">新闻报道</a></li>
              <li><a href="legal_notice.html">法律声明</a></li>
              <li><a href="recruit.html">招贤纳士</a></li>
              <li><a href="contact_us.html">联系我们</a></li>
              <li><a href="ceo_email.html">CEO邮箱</a></li>
              <li><a href="cooperative_partner.html">合作伙伴</a></li>
            </ul>
          </div>
          <div class="imgNine  statement">
            <div class="topImg" style="text-align:left;"><img src="img/news_title.png"></div>
            <div class="partner" style="margin-top:0;">
              <div class="news text marT20">
                <dl>
                  <dt><span class="textTitle"><a href="news_detail.html">找油网吕健：深化小微客户服务，提高用户体验</a></span><span class="time">托比网 2017/01/06</span></dt>
                  <dd class="jianlue">吕健表示，云九资本等投资方不仅提供资金支持，还会在找油网发展战略上提供帮助。2016年7月与投资方交流结束后，找油网采用了投资方对市场的研判与商业逻辑，果断深入下游，建立地推团队，很快挖掘出大量的终端刚需客户。</dd>
                </dl>
                <dl>
                  <dt><span class="textTitle"><a href="news_detail.html">千万美元融资，云九资本领投找油网</a></span><span class="time">托比网 2016/12/29</span></dt>
                  <dd class="jianlue">在托比网主办的“第三届B2B电子商务大会”上，吕健对托比网记者透露，找油网在2016年12月完成了1000万美元A+轮融资，本轮融资由雲九资本领投，云启资本和SIG跟投，资金将用于加深原有的江苏、浙江和广东三个区域的密度。</dd>
                </dl>
                <dl>
                  <dt><span class="textTitle"><a href="news_detail.html">找油网徐冰然：石油电商怎么做？</a></span><span class="time">托比网 2016/12/20</span></dt>
                  <dd class="jianlue">近年来，大宗电商成为新一轮资本追逐的“黑马”。“互联网+”与“供给侧改革”双风口叠加，大宗电商从2015年开始呈现火爆之势。在此，电商门户、互联网+智库——中国电子商务研究中心启动了100位电商大佬系列访之——“国内大宗电商大佬”独家系列高端微访谈。目前已有10余位大宗电商平台掌门人接受了我们的调研访谈，今天带来的是电商中心与找油网联合创始人徐冰然的独家对话。</dd>
                </dl>
                <dl>
                  <dt><span class="textTitle"><a href="news_detail.html">找油网：油品B2B撮合怎么做!</a></span><span class="time">创业邦 2015/11/15</span></dt>
                  <dd class="newsList">随着实体经济的下滑，大宗商品的生意越发难做。加之国内的成品油市场交易方式过于传统、效率低下随着实体经济的下滑，大宗商品的生意越发难做。加之国内的成品油市场交易方式过于传统、效率低下、中间商太多，因此导致：尽管国际油价一直下调，但国内的成品油交易价并不低。另外，由于产能过剩，炼油厂也面临油难卖的困境。前有找钢网在大宗商品交易的模版，卖的困境。前有找钢网在大宗商品交易的模版，5月初，找钢网CEO王东化身天使，为找油网（51zhaoyou.com）投资500万人民币，希望借着同样的大宗商品模式，找油网能在石油细分领域打开B2B交易局面。5月初，找钢网CEO王东化身天使，为找油网（51zhaoyou.com）投资500万人民币，希望借着同样...</dd>
                </dl>
                <dl>
                  <dt><span class="textTitle"><a href="news_detail.html">石油产品B2B线上交易平台，找油网获得找钢网500万元天使投资</a></span><span class="time">猎云网 2015/07/06</span></dt>
    		          <dd class="newsList">今日，定位于石油产品B2B线上交易平台找油网独家告诉猎云网，公司已获得找钢网500万元天使投资。“找油网”是位于上海地区的一家B2B石油电商，公司目前的主要业务是做上海地区柴油、燃料油等油品的撮合交易，为油品供应商提供交易渠道及后续服务,为采购商找到所需的油品货源， 以这个为基础，找油网作为一个线上交易平台，目标是通过后续发展为客户提供一系列的全产业链服务。</dd>
                </dl>
                <dl>
                  <dt><span class="textTitle"><a href="news_detail.html">以太+零一创投bit沙龙：B2B自营or撮合</a></span><span class="time">互联网 2015/11/03</span></dt>
                  <dd class="newsList"> 9月18日下午，在以太与零一创投联合举办的沙龙活动上，来自零一创投、找钢网、比菜价、易多位B2B专家，针对“B2B是撮合还是自营”这个问题为关注B2B的创业者呈现了一场非常精彩的讨论。</dd>
                </dl>
                <dl>
                  <dt><span class="textTitle"><a href="news_detail.html">石油不就是“三桶油”吗，为啥找油网还能切入石油市场？而且刚拿了300万美金的A轮融资</a></span><span class="time">创业邦  2016/03/16</span></dt>
                  <dd class="newsList"> 找油网是一家石油细分领域B2B电商平台，想要通过平台直接将炼油厂与加油站对价，减少中间层级，降低成品油价格。3月10日，找油网宣布获得300万美金的A轮融资，由SIG海纳亚洲基金投资。而2015年5月，找油网曾获得由找钢网投资的500万人民币天使轮投资。同时，找油网是创业邦（微信搜索：ichuangyebang）Bang camp二期学员。</dd>
                </dl>
                <dl>
                  <dt><span class="textTitle"><a href="news_detail.html">找油网并购拉能源“入侵”华南 区域重组1+1&gt;2</a></span><span class="time">托比网 2016/03/30</span></dt>
                  <dd class="newsList"> 3月29日晚间，有行业知情人士向托比网曝料，称近日风头正劲的找油网并购了拉能源100%的股权，拉能源创始人黄颖已出现在找油网高管名单中，位列高级副总裁。并购以“股权加现金”的方式进行，估值达到2000万元人民币。找油网CEO吕健对托比网记者表示：“投资额度其实并不重要，重要的是我们志同道合，这将为企业未来的发展奠定重要基石。”拉能源进入行业视野是在2015年9月，是找油网之后的一个后起之秀。定位于专业的石油天然气撮合交易服务商，创始人黄颖曾经是阿里巴巴移动事业部最年轻的研发主管，有着丰富的跨团队合作、项目和团队管理经验。离职后创立拉能源项目，迅速汇集了包括中石化销售冠军、中化客服主管、终端贸易商、闽海石化核心销售等石油圈各环节精...</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    $(this.outputId).html(content);
  }
}
