"use strict;"

class enterpriseCulture {

  constructor(outputId) {
    this.outputId = outputId;
  }

  /**
   * 输出
   */
  output() {
    let content = 
      `<div class="backImg">
        <div class="w1180_h" id="culture">
          <div class="nav pc">
            <ul>
              <li><a href="about_us.html">关于我们</a></li>
              <li><a href="company_introduction.html">公司介绍</a></li>
              <li><a href="development_history.html">发展历程</a></li>
              <li class="on"><a href="enterprise_culture.html">企业文化</a></li>
              <li><a href="news_report.html">新闻报道</a></li>
              <li><a href="legal_notice.html">法律声明</a></li>
              <li><a href="recruit.html">招贤纳士</a></li>
              <li><a href="contact_us.html">联系我们</a></li>
              <li><a href="ceo_email.html">CEO邮箱</a></li>
              <li><a href="cooperative_partner.html">合作伙伴</a></li>
            </ul>
          </div>
          <div class="ti_img"><img src="../enterprise_culture/img/culture_01.png"></div>
          <div class=" marT cultureImg" id="scroll">
            <p class="subl"><img src="../enterprise_culture/img/prev.jpg"></p>
            <p class="subr"><img src="../enterprise_culture/img/next.jpg"></p>
            <ul>
              <li style="display:block;">
                <p style="text-align:center; padding-top:48px; padding-bottom:50px;"><img src="../enterprise_culture/img/run2017_01.jpg"></p>
                <p><img src="../enterprise_culture/img/run2017_02.jpg"></p>
                <p><img src="../enterprise_culture/img/run2017_03.jpg"></p>
                <p><img src="../enterprise_culture/img/run2017_04.jpg"></p>
                <p style="../enterprise_culture/margin:60px 0;"><img src=""../enterprise_culture/img/run2017_05.jpg"></p>
                <p><img src="../enterprise_culture/img/run2017_06.jpg"></p>
                <p style="padding:60px 0;text-align:center" id="goTop"><a href="#top"><img src="../enterprise_culture/img/run2017_07.jpg"></a></p>
              </li>
              <li>
                <p style="text-align:center; padding-top:48px; padding-bottom:50px;"><img src="../enterprise_culture/img/one_year_01.jpg"></p>
                <p><img src="../enterprise_culture/img/one_year_02.jpg"></p>
                <p><img src="../enterprise_culture/img/one_year_03.jpg"></p>
                <p><img src="../enterprise_culture/img/one_year_04.jpg"></p>
                <p style="../enterprise_culture/margin:60px 0;"><img src="../enterprise_culture/img/one_year_05.jpg"></p>
                <p><img src="../enterprise_culture/img/one_year_06.jpg"></p>
                <p><img src="../enterprise_culture/img/one_year_07.jpg"></p>
                <p style="padding:60px 0;" id="goTop"><a href="#top"><img src="../enterprise_culture/img/culture_10.jpg"></a></p>
              </li>
            </ul>
          </div>
        </div>
      </div>`;
    $(this.outputId).html(content);
  }
}
