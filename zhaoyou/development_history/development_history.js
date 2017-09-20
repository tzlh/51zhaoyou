"use strict;"

class DevelopmentHistory {

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
              <li class="on"><a href="development_history.html">发展历程</a></li>
              <li><a href="enterprise_culture.html">企业文化</a></li>
              <li><a href="news_report.html">新闻报道</a></li>
              <li><a href="legal_notice.html">法律声明</a></li>
              <li><a href="recruit.html">招贤纳士</a></li>
              <li><a href="contact_us.html">联系我们</a></li>
              <li><a href="ceo_email.html">CEO邮箱</a></li>
              <li><a href="cooperative_partner.html">合作伙伴</a></li>
            </ul>
          </div>
          <div class="imgNine  statement">
            <div class="topImg" style="text-align:left;"><img src="img/history_title.png"></div>
            <div class="history">
              <div class="tab">
                <a href="javascript:;" class="on">2016</a>
              </div>
              <div class="content">
                <ul>
                  <li style="display:block;">
                    <div class="develp develp2016">
                      <div class="develp_left">
                        <dl>
                          <dd class="orange">3月 </dd>
                          <dd>找油商城上线啦</dd>
                          <dd class="orange">4月1日</dd>
                          <dd>找油网单月撮合交易额突破5亿元，代销交易额突破3000万元</dd>
                          <dd class="orange">6月1日</dd>
                          <dd>找油网员工破百</dd>
                          <dd class="orange">2016年9月1日</dd>
                          <dd>找油网获1000万美元A+轮融资</dd>
                        </dl>
                      </div>
                      <div class="develp_right">
                        <dl>
                          <dd>找油网获得SIG(海纳亚洲创投基金)的300万美元A轮融资</dd>
                          <dd class="orange">3月15日</dd>
                          <dd>找油网收购拉能源团队，正式成立广州分公司</dd>
                          <dd class="orange">5月</dd>
                          <dd>找油网成立山东分公司</dd>
                          <dd class="orange">8月15日</dd>
                          <dd>浙江分公司成立</dd>
                          <dd class="orange">2016年12月30日</dd>
                        </dl>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="develp">
                      <div class="develp_left">
                        <dl>
                          <dd class="orange">2月2日 </dd>
                          <dd>找油网创始团队成立</dd>
                          <dd class="orange">5月5日</dd>
                          <dd>找油网交易平台正式上线，当月累计完成线下撮合交易吨数12433吨，交易额超过6600万</dd>
                          <dd class="orange">7月1日</dd>
                          <dd style="margin-top:5px">找油网江苏分公司正式成立</dd>
                          <dd class="orange" style="margin-top:28px">12月29日</dd>
                        </dl>
                      </div>
                      <div class="develp_right">
                        <dl>
                          <dd>找油网诞生啦</dd>
                          <dd class="orange">4月26日 </dd>
                          <dd>找油网获找钢网天使投资</dd>
                          <dd class="orange">6月30日 </dd>
                          <dd>找油网与中化上海石油开展"中化活动月"合作</dd>
                          <dd class="orange" style="margin-top:10px">10月19日 </dd>
                          <dd style="margin-top:25px">找油网获得中国电子商务协会B2B行业分会颁发的“2015年度最具潜力企业”大奖</dd>
                        </dl>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    $(this.outputId).html(content);
  }
}
