"use strict";
class MemberSell {
  //输出文本
  outPutMemberSell (contentId) {
    let content = `
      <div class="content1">
        <div class="wapper">
          <div class="page_main">
            <div class="page_bg">	
              <div class="sell_l">
                <div class="menu_list">
                  <p class="menu_head">我的订单</p>
                  <div class="menu_body">
                    <a href="member_buy.html">我是买家</a>
                    <a href="member_sell.html">我是卖家</a>
                  </div>
                  <p class="menu_head">账户中心</p>
                  <div class="menu_body">
                    <a href="member_account.html">我的账户</a>
                    <a href="member_reCode.html">修改密码</a>
                  </div>
                </div>
              </div>
              <div class="sell_r">
                <div class="sell_r_con">
                  <div class="sname">
                    <div class="sline">
                      <ul>
                        <li><a href="http://www.51zhaoyou.com/51/Member/buy.html#">所有订单</a></li>
                      </ul>
                    </div>
                  </div>
                  <table width="95%" class="buytitle">
                    <tbody>
                      <tr>
                        <th width="10%">商品/仓库</th>
                        <th width="10%">总金额(元)</th>
                        <th width="10%">单价(元)</th>
                        <th width="10%">数量(吨)</th>
                        <th width="10%">订单状态</th>
                        <th width="10%">交易状态</th>
                        <th width="10%">操作</th>
                      </tr>
                    </tbody>
                  </table>
                  <div class="buyline">
                    <ul>
                    </ul>
                  </div>
                  <!--fenye start-->
                  <div class="fenye1">
                    <div class="fenye">
                      <ul>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    $(contentId).html(content);
  }
};
