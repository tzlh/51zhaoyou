"use strict;"

class Recruit {

  constructor(outputId) {
    this.outputId = outputId;
  }

  /**
   * 输出
   */
  output() {
    let content = 
      `<div class="jobImg">
    <div class="w1180_h">
      <div class="nav">
        <ul>
              <li><a href="about_us.html">关于我们</a></li>
              <li><a href="company_introduction.html">公司介绍</a></li>
              <li><a href="development_history.html">发展历程</a></li>
              <li><a href="enterprise_culture.html">企业文化</a></li>
              <li><a href="news_report.html">新闻报道</a></li>
              <li><a href="legal_notice.html">法律声明</a></li>
              <li class="on"><a href="recruit.html">招贤纳士</a></li>
              <li><a href="contact_us.html">联系我们</a></li>
              <li><a href="ceo_email.html">CEO邮箱</a></li>
              <li><a href="cooperative_partner.html">合作伙伴</a></li>
            </ul>
      </div>
      <div class="topImg" style="text-align:left; "><img src="img/recruit.png"></div>
      <div class="job_back">
        <div class="contact">
          <div class="job_city">
            <ul>
              <li class="on" onclick="searchGo(&#39;/51/Help/recruit/depart/0/area_code/0.html&#39;)">全国</li>
            </ul>
          </div>
          <div class="job_table">
            <table>
              <thead>
              <tr>
                <th>职位名称</th>
                <th>分类</th>
                <th>工作地点</th>
                <th>发布时间</th>
              </tr>
              </thead>
              <tbody>
              <tr class="data_num"> 
              	<input type="hidden" class="hidden" value="51">
                <td>售后服务经理</td>
                <td>售后服务</td>
                <td>上海</td>
                <td>2017-08-01 19:30:49</td>
              </tr><tr class="data_num"> 
              	<input type="hidden" class="hidden" value="50">
                <td>数据运营专员</td>
                <td>售后服务</td>
                <td>上海</td>
                <td>2017-08-29 13:37:29</td>
              </tr><tr class="data_num"> 
              	<input type="hidden" class="hidden" value="49">
                <td>用户运营总监</td>
                <td>职能/支持</td>
                <td>上海</td>
                <td>2017-08-01 19:29:28</td>
              </tr><tr class="data_num""> 
              	<input type="hidden" class="hidden" value="48">
                <td>网点运营经理</td>
                <td>售后服务</td>
                <td>上海</td>
                <td>2017-08-01 19:26:20</td>
              </tr><tr class="data_num"> 
              	<input type="hidden" class="hidden" value="47">
                <td>网点开发经理</td>
                <td>业务/BD商务</td>
                <td>上海</td>
                <td>2017-08-01 19:24:55</td>
              </tr><tr class="data_num"> 
              	<input type="hidden" class="hidden" value="46">
                <td>大客户经理</td>
                <td>业务/BD商务</td>
                <td>上海</td>
                <td>2017-08-01 19:21:28</td>
              </tr><tr class="data_num"> 
              	<input type="hidden" class="hidden" value="45">
                <td>市场开发经理</td>
                <td>业务/BD商务</td>
                <td>上海</td>
                <td>2017-08-01 19:18:41</td>
              </tr><tr class="data_num"> 
              	<input type="hidden" class="hidden" value="44">
                <td>高级客户经理（交易员）</td>
                <td>业务/BD商务</td>
                <td>上海</td>
                <td>2017-08-30 17:00:02</td>
              </tr>              </tbody>
            </table>
          </div>
           </div>	
        </div>
      </div>
    </div>`;
    $(this.outputId).html(content);
  }
}
