/**
 * @author wangdi
 */

/**
 * 输出top_nav
 * @param output_id 输出内容id
 */
function nav_menu_output(output_id) {
  var content = 
    '<div class  =  "row nav_row">'+
    '    <div class  =  "col-lg-12 nav_col">'+
    '      <div class = "list-group">'+
    '        <a class = "list-group-item clearfix active nav_radius">用户管理<span class = "glyphicon glyphicon-chevron-down pull-right"></span></a>'+
    '        <a href = "../index/user_list.html" target = "_blank" class = "list-group-item clearfix nav_pl30">用户列表</a>'+
    '        <a class = "list-group-item clearfix active nav_radius">首页面数据<span class = "glyphicon glyphicon-chevron-down pull-right"></span></a>'+
    '        <a href = "../index/price_change.html" target = "_blank" class = "list-group-item clearfix nav_pl30">价格变动</a>'+
    '        <a href = "../index/dynamic_data.html" target = "_blank" class = "list-group-item clearfix nav_pl30">动态数据</a>'+
    '        <a class = "list-group-item clearfix active">油品数据管理<span class = "glyphicon glyphicon-chevron-down pull-right"></span></a>'+
    '        <a class = "list-group-item clearfix nav_pl30 nav_bgddd">找油商城/现货搜索<span class = "glyphicon glyphicon-chevron-down pull-right nav_colorfff"></span></a>'+

    '        <a href = "../index/data_list.html" class = "list-group-item clearfix nav_pl45">添加数据</a>'+
    '        <a href = "../index/data_list.html" class = "list-group-item clearfix nav_pl45">数据列表</a>'+
    '        <a class = "list-group-item clearfix active">油品委托<span class = "glyphicon glyphicon-chevron-down pull-right"></span></a>'+
    '        <a href = "../index/entrust_data_list.html" target = "_blank" class = "list-group-item clearfix nav_pl30">委托需求</a>'+
    '        <a href = "../index/demand_data_list.html" target = "_blank" class = "list-group-item clearfix nav_pl30">委托信息</a>'+
    '        <a class = "list-group-item active text-center nav_radius">Copyright &copy; 2017</a>'+
    '      </div>'+
    '    </div>'+
    '   </div>';
    $(output_id).html(content);
}
