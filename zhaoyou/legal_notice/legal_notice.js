"use strict;"

class LegalNotice {

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
            <div class="imgNine  statement">
              <div class="topImg" style="text-align:left;"><img src="img/statement.png"></div>
              <div class="partner bottom50 ">
                <div class="text bottom20 marT20 partner">
                  <p class="title">提醒：</p>
                  <p>在使用“找油网”官方网站（www.51zhaoyou.com）服务前，表明您已阅读、理解并同意接 受以下条款的约束，如访问和使用本网站，您应完全接受本声明中所包含的条款和本网站即时刊登的通告 等，并遵守互联网相关法律法规以及本网站的规定与规则。一旦您访问、使用了本网站，即表示您同意并 接受了 所有条款、条件及通告等。</p>
                </div>
                <div class="text bottom20  partner">
                  <p class="title">注明：</p>
                  <p>“找油网”网站上所提供的所有信息及服务全部免费!“找油网”为油品供应商（卖家）提供交 易渠道和后续的一系列交易服务，为采购商(买家)找到优质便宜的油品货源，在这期间的一切交易服务行 为都是免费的。操作模式是：免费为客户线上线下找油品，并提供销售、采购、存储、物流、金融等一系 列信息服务。</p>
                </div>
                <div class="text bottom20  partner">
                  <p class="title">一、服务声明：</p>
                  <p>”找油网”向会员提供油品销售信息、求购信息、委托找货等服务。除将来“找油网”另有其它明示规定，所有新推出的产品或新增加的服务功能，均适用本声明条款之规范。</p>
                  <p>除适用相关法定许可或征得本公司同意，本网站的信息及其任何组成部分不得被重新编辑、复制、抄袭，或为任何未经本公司允许的商业目的所使用。如果本公司确定用户行为违法或有损本网站和本公司的合法权益，本公司将采取相关法律措施，包括但不限于拒绝提供服务、冻结或删除会员帐户等。</p>
                  <p>“找油网”作为提供油品销售信息、求购信息的服务平台，用户在使用时应当了解明白“找油网”上所有信息均为会员(油品供应商或采购商)自由发布，会员应依法对其提供的任何信息承担全部责任。“找油网” 会对信息进行必要的核查(筛选)，但最终对信息的合法性、准确性、真实性不承担任何法律责任。如用户发现某些信息中含有虚假、违法内容 ，请及时联系“找油网”， 待核实之后，“找油网”将根据中国法律法规和政府规范性文件采取措施移除相关内容或屏蔽相关链接。“找油网”不对会员所发布的信息之删除或储存失败负责。</p>
                  <p>买卖双方通过“找油网”获取信息完成油品交易的过程中需务必遵守中国的相关法律法规。找油网提醒您：请认真查验油品供应商营业执照、税务登记证、开户许可证、危化证、成品油批发许可证等证明文件，并签订书面协议以保证买卖双方之间的利益。“找油网”不对会员达成协议过程中的任意纠纷承担法律责任，包括但不限于油品物流、使用过程中发生的任何意外状况等。</p>
                  <p>如买卖双方在交易过程中发生纠纷，在当事人自愿平等的前提下，买卖双方可提出要求“找油网”协助调解。“找油网”会在查明事实、分清是非的基础上，严格遵守国家法律法规来给出建议。不得因未经调解或者调解不成而阻止对方当事人向人民法院起诉。经调解达成的协议具有法律效力，但找油网对此协议内容不承担任何法律责任。</p>
                </div>
                <div class="text bottom20  partner">
                  <p class="title">二、隐私权保护声明：</p>
                  <p>找油网非常重视对用户隐私的保护。找油网隐私权保护声明系本网站保护用户个人隐私的承诺，适用于您与找油网的交互行为以及您注册和使用找油网的在线服务，请您务必仔细阅读。</p>
                </div>
                <div class="text bottom20  partner">
                  <p class="black">(一)个人资料的收集</p>
                  <p>用户在匿名状态下即可访问本平台获取油品信息。</p>
                  <p>本公司仅在与交易项目有关的合法目的下，并经用户同意，以合法的方式收集必要的用户个人资料。本平台有可能根据收集到的用户姓名、地址、电话号码、电子邮件等信息向用户发送免费的信息宣传资料，或根据用户留下的真实有效的联系方式主动向用户发起呼叫，与用户联系。由于用户自行处置宣传信息或不接听我方电话而可能遭受的损失，我公司概不承担责任。用户在本平台注册时，须依注册内容之提示提供用户本人及单位的真实、准确、完整信息，并保证个人及单位资料的及时更新。因用户提供个人及单位信息不准确、不完整或未及时更新而可能遭受的任何损害，本公司不承担任何责任。因用户提供个人及单位信息不准确、不完整或未及时更新给本公司造成损失的，本公司保留追偿的权利。
                  </p>
                </div>
                <div class="text bottom20  partner">
                  <p class="black">(二)个人资料的使用</p>
                  <p>本公司有权为内部经营、管理、统计等目的使用您提供的个人及单位资料，包括但不限于：日常管理本公司提供给会员的服务及产品、监控本网站的安全使用、内部调研、对来访数据进行统计和研究;促进更新供会员享用的服务和产品;确认核对联络和消费名单、为宣传推广目的;为解决争议、排除纠纷和执行本法律声明目的等。
                  </p>
                </div>
                <div class="text bottom20  partner">
                  <p class="black">(三)个人资料的披露</p>
                  <p>找油网将采取合理的安全手段保护用户提供的个人及单位信息，在未得到用户许可之前，本平台不会擅自将用户信息披露给任何无关的第三方，但涉及下列情形之一的除外：</p>
                  <p>1、权力机关依照法定程序要求提供。</p>
                  <p>2、为公共安全之目的。</p>
                  <p>3、由于用户对自身信息保密不当，从而导致用户资料的泄露。</p>
                  <p>4、由于网络线路、黑客攻击、计算机病毒等原因造成的资料泄露、丢失、被盗用或被篡改等。</p>
                  <p>5、为了保护本网站其他用户更为重要的权利或财产。</p>
                  <p>6、其他特殊或紧急情况。</p>
                </div>
                <div class="text bottom20  partner">
                  <p class="black">(四)Cookies技术的使用</p>
                  <p>用户在匿名状态下即可访问本平台获取油品信息。
                      本公司仅在与交易项目有关的合法目的下，并经用户同意，以合法的方式收集必要的用户个人资料。本平台有可能根据收集到的用户姓名、地址、电话号码、电子邮件等信息向用户发送免费的信息宣传资料，或根据用户留下的真实有效的联系方式主动向用户发起呼叫，与用户联系。由于用户自行处置宣传信息或不接听我方电话而可能遭受的损失，我公司概不承担责任。用户在本平台注册时，须依注册内容之提示提供用户本人及单位的真实、准确、完整信息，并保证个人及单位资料的及时更新。因用户提供个人及单位信息不准确、不完整或未及时更新而可能遭受的任何损害，本公司不承担任何责任。因用户提供个人及单位信息不准确、不完整或未及时更新给本公司造成损失的，本公司保留追偿的权利。
                  </p>
                </div>
                <div class="text bottom20  partner">
                  <p class="title">三、知识产权声明：</p>
                  <p>上海找油信息科技有限公司拥有找油网平台上所有内容及资料(包括但不限于本站所刊载的文字、图片、软件、Flash等)的版权，受国家知识产权保护。未经授权任何人不得擅自使用，否则将被依法追究法律责任。找油网(www.51zhaoyou.com)所有的产品、技术与所有程序及页面均属于知识产权。“找油网”、“51zhaoyou.com”为上海找油信息科技有限公司的注册商标，任何人不得擅自使用，否则将被依法追究法律责任。</p>
                </div>
                <div class="text bottom20  partner">
                  <p class="title">四、免责条款：</p>
                  <p>任何用户因使用本网站而可能遭致的意外及其造成的损失(包括因下载本网站可能链接到的第三方网站内容而感染电脑病毒)，我们对此概不负责，亦不承担任何法律责任。 用户应对使用找油网得到的信息结果自行承担风险。找油网仅作为一个促进油品交易、提供油品信息展示交流的平台，网站会员会自行上传资源信息，我们不对信息内容的安全性、准确性、真实性、合法性负责，也不承担任何法律责任。 任何单位或个人认为通过本网站网页内容可能涉嫌侵犯其著作权，应该及时向我们提出书面权利通知，并提供身份证明、权属证明及详细侵权情况证明。我们收到上述法律文件后，将会依法尽快处理。</p>
                </div>
                <div class="text bottom20  partner">
                  <p class="title">五、本公司保留在任何时间自行修改、增删本法律声明中任何内容的权利。您每次登陆或使用本网站时均视为同意受当时有效的声明条款的约束。</p>
                </div>
                <div class="text bottom20  partner">
                  <p class="title">六、根据油品流通特性，通过找油网购买的商品不宜退货，不适用无理由退货。</p>
                </div>
                <div class="text bottom20  partner">
                  <p>修订</p>
                  <p class="gray">本网站保留随时修改本条款的权利。新版本将张贴在本网站上，并于张贴后立即生效。若你在新条款及条件生效后使用本网站，则你继续使用网站的任何行为即表示你同意受新条款及条件的约束。</p>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    $(this.outputId).html(content);
  }
}
