"use strict";
class Help {
  //输出文本
  outPutHelpContent (contentId) {
    let content = `
      <div class="nei_content">
        <!--left start-->
        <div class="nei_left">
          <div class="nametitle">关于找油网</div>
          <ul id="nei_left_line">
            <li><a href="#1F">我要卖油</a></li>
            <li><a href="#2F">我要买油</a></li>
            <li><a href="#3F">交易指南</a></li>
            <li><a href="#4F">常见问题</a></li>
          </ul>
        </div>
        <!-- Right Section Start-->
        <div class="nei_right">
          <ul class="portfolio_contain gallery">
            <li data-id="id-4" data-type="adv" class="main"><h3><a name="1F">我是卖家,如何提高销量</a></h3></li>
            <li data-id="id-4" data-type="adv" class="main1">
            	找油网致力于为上下游商家提供优质免费的撮合服务，如果您需要我们将您的资源展示给上海的买家群体。 
            	请联系我方客服QQ或者电话，我们将免费收集你的资源并展示找油网的主页。
            	为了让更多的买家看到您的货源，快来联系我们吧。
            </li>
            <li data-id="id-4" data-type="ecommerce" class="main1" name="2F"><h3><a name="2F">我是买家,如何找货</a></h3></li>
            <li data-id="id-4" data-type="ecommerce" class="main1">
              <h4>一、委托找油网人工帮您找货</h4>
              <br>
              1、网页发布采购需求：
        			在找油网首页【免费找货助手】下方文件框内直接填写您的真实需求,点击【帮我找】便可完成；您可以根据您的需要输入汉字或者字符，我们会第一时间联系到您。<br><br>
              <img src="../../img/1.png" width="735px" height="45px"><br>
        			<br>2、您也可以直接联系网站QQ客服或拨打客服电话：021-51130088，为您提交采购需求。
        	    <br><br><br>
        	    <h4>二、现货搜索</h4>
              <br>
            	您可以通过【现货搜索】搜索您需要的商品， 在上方的搜索框中输入您查找的信息点击确定即可看到资源了。<br><br>
            	1.登陆找油网会员中心，点击进入【现货搜索】，根据已知条件输入产品信息进行查询。
              <br><br><img src="../../img/2.png" width="735px"><br>
              <br><br>
            	2.点击产品右侧的“委托”，即委托成功。到时会有我们交易员与您取得联系。<br><br>
            	如果点击搜索后没有您想要的资源，请在弹出的对话框中输入您的需要，我们会尽快电话联系到您。<br><br>
              <img src="../../img/3.png" width="735px"><br>
              <br><br>
            </li>
            <li data-id="id-1" data-type="interface" class="main"><h3><a name="3F">交易指南</a></h3></li>
            <li data-id="id-10" data-type="interface" class="main last">
           		<h4>友情提示</h4>
              <br>
              1.您卖货前请您对客户资质、信誉进行再次审查<br><br>
        			2.对客户信誉进行调查货物信息进行核对<br><br>
        			3.客户三证信息核对<br><br>
        			4.签订正式购销合同<br><br><br>
        			<h4>我们的报价来源：</h4>
              <br>
              我们由300专业人员组成的采购团队每天从全国500余家上游代理商中精选最优惠的优质现货资源供您选择。<br><br>
            </li>
            <li data-id="id-2" data-type="webdesign" class="main"><h3><a name="4F">常见问题</a></h3></li>
            <li data-id="id-4" data-type="webdesign" class="main1">
            	<h4>注册/登录流程</h4><br>
            	1、点击页面顶部“免费注册“，进入注册页面<br><br>
              <img src="../../img/4.jpg" width="554px"><br>
            	<br>2、填写手机号码，并点击获取验证码，找油网将向您的手机发送一条短信；在您收到短信后，将短信中的验证码填写到页面中后点击提交，即可进入下一步。由于受网络及运营商信号影响，短信可能会稍有延迟。若您在60秒内尚未收到验证码，您可以点击重新获取。<br><br>
              <img src="../../img/5.png" width="364px"><br>
            	<br><br>3、完善个人资料，填写登陆密码，真实姓名，公司名称后完成注册<br>
              <img src="../../img/6.png" width="735px"><br>
              <br><br>
            	<h4>无法登录/忘记密码</h4><br>
            	1、在会员登录界面，点击[忘记密码]，进入密码找回界面<br>
              <img src="../../img/8.png" width="366px"><br>
              <br>
            	2、在找回界面密码内，输入您注册时使用的手机号，并点击获取短信验证码。获得并输入验证码后，点击找回密码按钮，进入下一步操作<br>
              <img src="../../img/9.png" width="366px"><br>
              <br>
          		3、进入密码重置界面后，输入并重复新密码，即可将原密码替换成新密码。两次输入的密码必须完全相同，且不与原密码重复
          		<br>
                <img src="../../img/10.png" width="735px"><br>
              <br>4、点击“确定”后，即可使用新密码[登录找油网]<br><br><br>
          		<h4>账户信息</h4><br>
          		1、登录找油网，并点击页面顶部[我的找油网]进入会员中心
          		<br><br>
                  <img src="../../img/11.png" width="735px"><br>
              <br>
              2、进入会员中心后，点击左侧“账户中心-账户信息”进入修改账户信息模块。您可以在这里添加和修改您的真实姓名、邮箱、手机号、固定电话、联系地址等信息并保存
          		<br>
                  <img src="../../img/12.png" width="735px"><br>
              <br>
          		<h4>加找油网为微信好友</h4><br>
          		<h5>操作流程</h5><br>
          		1、在找油网首页，右下角有个方方正正的二维码，打开手机微信。在首页最右边有个小星星按钮，点击下，然后点下扫一扫，这个时候，会出现二维码的扫描框哦，然后用对准网页上的二维码，扫一下，即可成功添加找油网为您的微信好友。 
          		<br><br><br><br>
                  <img src="../../img/14.png" width="258px" height="400px;"><br>
              <br>2、您也可以扫一扫下面的二维码，添加找油网为微信好友哦! <br>
                  <img src="../../img/15.png" width="258px"><br>
              <br><br>
            </li>
          </ul>
        </div>
      </div>
      <div class="clear"></div>`;
    $(contentId).html(content);
  }
};
