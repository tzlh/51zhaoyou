"use strict;"

class AppDownload {
  /**
   * 构造函数
   *
   * @param outputId 传入输出的元素id
   */
  constructor(outputId) {
    this.outputId = outputId;
  }
  
  /**
   * 输出
   */
  output() {
    let content = 
      `<div class="bannerbox">
      <div class="banner">
      	<img src="../../img/sbanner.jpg" border="0" usemap="#Map">
        <map name="Map" id="Map">
          <area shape="rect" coords="1041,370,1239,425" href="http://www.51zhaoyou.com/51/Help/dwsj.html" alt="安卓">
          <area shape="rect" coords="1041,440,1238,495" href="http://www.51zhaoyou.com/51/Help/ios_dwsj.html" alt="苹果">
        </map>
      </div>
    </div>
    <!--banner end-->
    <!--content start-->
    <div class="sj_content">
    	<!--1 start-->
    	<div class="main">
        <div class="main_con">
        	<div class="con_left">
            <h1>找货源  找客户</h1>
            <p>帮客户找到优质便宜的油品货源</p>
          </div>
          <div class="con_right">
          	<img src="../../img/img1.jpg">
          </div>
        </div>
      </div>
      <!--1 end-->
      <!--2 start-->
      <div class="main1">
        <div class="main_con1">
          <div class="con_left">
            <h1>委托买卖</h1>
            <p>全天候的专业服务给你带来一站式体验</p>
          </div>
          <div class="con_right">
            <img src="../../img/img2.jpg">
          </div>
        </div>
      </div>
      <!--2 end-->
      <!--1 start-->
    	<div class="main">
       	<div class="main_con">
          <div class="con_left">
            <h1>送提单  送发票  找罐车</h1>
            <p>24小时免费跟踪服务 安全 放心</p>
          </div>
          <div class="con_right">
          	<img src="../../img/img3.jpg">
          </div>
        </div>
      </div>
      <!--1 end-->
      <!--2 start-->
    	<div class="main1">
      	<div class="main_con1">
          <div class="con_left" style="padding-right:55px;">
            <p>"找油"从找油网开始</p>
            <div class="zbtn">
              <div class="btn"><a href="http://www.51zhaoyou.com/51/Help/dwsj.html"><img src="../../img/ad.png"></a></div>
              <div class="btn1"><a href="http://www.51zhaoyou.com/51/Help/ios_dwsj.html"><img src="../../img/iph.png"></a></div>
            </div>
            <div class="ewm"><a href="#"><img src="../../img/sys.jpg"></a></div>
          </div>
          <div class="con_right">
          	<img src="../../img/img4.jpg">
          </div>
        </div>
      </div>
      <!--2 end-->
    </div>`;
    $(this.outputId).html(content);
  }
}
