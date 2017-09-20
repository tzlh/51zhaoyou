"use strict;"

class ceoEmail {

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
              <li><a href="enterprise_culture.html">企业文化</a></li>
              <li><a href="news_report.html">新闻报道</a></li>
              <li><a href="legal_notice.html">法律声明</a></li>
              <li><a href="recruit.html">招贤纳士</a></li>
              <li><a href="contact_us.html">联系我们</a></li>
              <li class="on"><a href="ceo_email.html">CEO邮箱</a></li>
              <li><a href="cooperative_partner.html">合作伙伴</a></li>
            </ul>
          </div>
          <div class="imgNine  cultureImg">
            <div class="topImg" style="text-align:left;"><img src="../ceo_email/img/ceoTitle.png">
              <div class="partner bottom50 textC">
                <p class="c_show" style="margin-top:50px"><img src="../ceo_email/img/email.png"></p>
                <p class="c_hide" style="margin-top:50px"><img src="../ceo_email/img/email_m.jpg"></p>
                <p style="margin:100px 0 20px 0;" class="ceo"><img src="../ceo_email/img/logo.png"></p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    $(this.outputId).html(content);
  }
}
