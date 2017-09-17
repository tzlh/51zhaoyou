"use strict;"

class ZhaoyouMall {
  /**
   * 构造函数
   *
   * @param outputId 传入输出的元素id
   */
  constructor(outputId) {
    this.outputId = outputId;
    this.mallData = [
      {"source": "中国海油","variety": "柴油0#国Ⅴ","region": "东莞","storage_location": "立沙","count": "100","price": "100","time": "2小时前","uuid": "111"},     
      {"source": "中国海油","variety": "柴油0#国Ⅴ","region": "东莞","storage_location": "立沙","count": "100","price": "100","time": "2小时前","uuid": "111"},     
      {"source": "中国海油","variety": "柴油0#国Ⅴ","region": "东莞","storage_location": "立沙","count": "100","price": "100","time": "2小时前","uuid": "111"},     
      {"source": "中国海油","variety": "柴油0#国Ⅴ","region": "东莞","storage_location": "立沙","count": "100","price": "100","time": "2小时前","uuid": "111"},     
      {"source": "中国海油","variety": "柴油0#国Ⅴ","region": "东莞","storage_location": "立沙","count": "100","price": "100","time": "2小时前","uuid": "111"},     
      {"source": "中国海油","variety": "柴油0#国Ⅴ","region": "东莞","storage_location": "立沙","count": "100","price": "100","time": "2小时前","uuid": "111"}     
    ]
    
    
  }

  fillCoverData() {
    if (0 != this.mallData.length) {
      let content = "";
      for (let i = 0; i < this.mallData.length; i++) {
        content += 
          `<tr>
    			   <td><span>${this.mallData[i].source}</span></td>
             <td>${this.mallData[i].variety}</td>
             <td>${this.mallData[i].region}</td>
             <td>${this.mallData[i].storage_location}</td>
             <td>${this.mallData[i].count}</td>
             <td>${this.mallData[i].price}</td>
             <td>${this.mallData[i].time}</td>
             <td class="weit"><a href="http://www.51zhaoyou.com/51/Mall/goodsInfo/id/1946.html" class="btn-entrust">详情</a></td>
           </tr>`;
      }
      $("#zhaoyouMallList").html(content);
    }
  }
  
  /**
   * 输出
   */
  output() {
    let content = 
      `<div class="wapper">
        <div class="top_b">
          <!---buyleft start-->
          <div class="xhss">
            <form action="http://www.51zhaoyou.com/51/Mall/index.html" method="POST" id="myform" role="search">
              <div class="xhss_List">
                <ul>
                  <li>
                    <i>地区：</i>
    		            <select class="xl" name="area">
                      <option value="">请选择</option>
                      <option value="上海">上海</option>
                      <option value="江苏">江苏</option>
                      <option value="广东">广东</option>
                      <option value="浙江">浙江</option>
                    </select>
                  </li>
                  <li>
                    <i>种类：</i>
                    <select class="xl" name="type">
                    	<option selected="selected" value="">请选择</option>
                      <option value="柴油">柴油</option>
                      <option value="汽油">汽油</option
                      ><option value="煤油">煤油</option>
                      <option value="燃料油">燃料油</option>
                    </select>
                  </li>
                  <li>
                    <i>标号：</i>
                    <select class="xl" name="lev">
                    	<option selected="selected" value="">请选择</option>
                      <option value="0#">0#</option>
                      <option value="5#">5#</option>
                      <option value="10#">10#</option>
                      <option value="92#">92#</option>
                      <option value="93#">93#</option>
                      <option value="95#">95#</option>
                    </select>
                  </li>
                  <li>
                     <i>级别：</i>
                     <select class="xl" name="rank">
                     	 <option selected="selected" value="">请选择</option>
                       <option value="普柴">普柴</option>
                       <option value="轻燃">轻燃</option>
                       <option value="国Ⅲ">国Ⅲ</option>
                       <option value="国Ⅳ">国Ⅳ</option>
                       <option value="国Ⅴ">国Ⅴ</option>
                     </select>
                  </li>
                  <li><input type="submit" class="souh" id="search" value="搜索"></li>
                  <li><input type="reset" class="qingk" onclick="resetControl()" value="清空"></li>
                  <li>
                    <i>来源：</i>
                    <select class="xl" name="source">
                    	<option selected="selected" value="">请选择</option>
                      <option value="中国石化">中国石化</option>
                      <option value="中国石油">中国石油</option>
                      <option value="中国海油">中国海油</option>
                      <option value="中国化工">中国化工</option>
                      <option value="中国中化">国中化</option>
                      <option value="其他">其他</option>
                    </select>
                  </li>
                </ul>
              </div>
            </form>
            <div class="bList">
              <div class="xhsscon">
                <table class="xhss_hovertable" id="oldtable">
                  <thead>
                    <tr>
                      <th width="8%" align="left">来源</th>
                      <th width="8%">种类</th>
                      <th width="8%">地区</th>
                      <th width="8%">库位</th>
                      <th width="13%">数量(吨) </th>
                      <th width="5%">价格</th>
                      <th width="10%">更新时间</th>
                      <th width="8%">操作</th>
                    </tr>
                  </thead>
                  <tbody id = "zhaoyouMallList">
                    <tr>
    					        <td><span>中国海油</span></td>
                      <td>柴油0#国Ⅴ</td>
                      <td>东莞</td>
                      <td title="立沙">立沙</td>
                      <td>90</td>
                      <td class="yans">5650</td>
                      <td>2小时前</td>
                      <td class="weit"><a href="http://www.51zhaoyou.com/51/Mall/goodsInfo/id/1946.html" class="btn-entrust">详情</a></td>
                    </tr>
                    <tr>
    					        <td><span>中国海油</span></td>
                      <td>柴油0#国Ⅴ</td>
                      <td>东莞</td>
                      <td title="立沙">立沙</td>
                      <td>90</td>
                      <td class="yans">5650</td>
                      <td>2小时前</td>
                      <td class="weit"><a href="http://www.51zhaoyou.com/51/Mall/goodsInfo/id/1946.html" class="btn-entrust">详情</a></td>
                    </tr>
                    <tr>
    					        <td><span>中国海油</span></td>
                      <td>柴油0#国Ⅴ</td>
                      <td>东莞</td>
                      <td title="立沙">立沙</td>
                      <td>90</td>
                      <td class="yans">5650</td>
                      <td>2小时前</td>
                      <td class="weit"><a href="http://www.51zhaoyou.com/51/Mall/goodsInfo/id/1946.html" class="btn-entrust">详情</a></td>
                    </tr>
                  </tbody>
                  </tbody>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clear"></div>`;
    $(this.outputId).html(content);
  }
}


