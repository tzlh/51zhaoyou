"use strict;"

class AboutUs {

  constructor(outputId) {
    this.outputId = outputId;
  }

  playVid() {
    $("#video1").show();
    $(".close").show();
    document.getElementById("video1").play();
  }

  initEvent() {
    let currentObj = this;
    $(".close").click(function() {
      $("#video1").load();
      $("#video1").hide();
      $(".close").hide();
    });
    $("#play").click(function() {
      currentObj.playVid()
    });
  }

  /**
   * 输出
   */
  output() {
    let content = 
      `<div class="backImg">
        <div class="w1180 ">
          <div style="position: relative; margin-top:10%;">
          <img src="../../img/back_video.png">
          <span id="play"><img src="../../img/video_btn.png"></span>
          <video id="video1" style="display:none;" controls="controls">
             <source src="http://www.51zhaoyou.com/51/Resources/Home/images/CompanyIntroduction/video.mp4" type="video/mp4">
          </video>
          <span class="close" onclick="close()">×</span>
          </div>
            <div class="imgNine yd_nav white ">
              <ul>
                <li class="back1"><a href=""></a></li>
                <li class="back2"><a href=""></a></li>
                <li class="back3"><a href=""></a></li>
                <li class="back4"><a href=""></a></li>
                <li class="back5"><a href=""></a></li>
                <li class="back6"><a href=""></a></li>
                <li class="back7"><a href=""></a></li>
                <li class="back8"><a href=""></a></li>
                <li class="back9"><a href="" id=""></a></li>
              </ul>
            </div>
        </div>
      </div>`;
    $(this.outputId).html(content);
  }
}
