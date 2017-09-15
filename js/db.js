/**导航 鼠标点击选中**/
var $thisUrl = window.location.href;
var aEls = $('.menu1').find("a");
var aEls = $('.menu_body').find("a");
var aEls = $('.sline').find("a");
for (var i = 0, len = aEls.length; i < len; i++) {
var $thisA = $(aEls[i]);
if ($thisUrl.indexOf($thisA.attr("href")) > -1) {
	$thisA.addClass('hover_q');
	break;
	}
}
/**国际价格－－－主营价格－－－表格 颜色问题**/
function altRows(id) {
    if (document.getElementsByTagName) {
        var table = document.getElementById(id);
        var rows = table.getElementsByTagName("tr");
        for (i = 0; i < rows.length; i++) {
            if (i % 2 == 0) {
                rows[i].className = "evenrowcolor";
            } else {
                rows[i].className = "oddrowcolor";
            }
        }
    }
}

window.onload = function () {
    altRows('alternatecolor');
    altRows('alternatecolor1');
}
/**登录**/	
  $(document).ready(function() {
	    $("#logo").css("margin-top", ($(window).height()-327)/2+"px");
		$("input[name='username']").focus();
		$("#forget-password").click(function (e) {
			$("#loginform").hide();$("#forgotform").show(200);
			e.preventDefault();});
			$("#forget-btn").click(function (e) {
				$("#loginform").slideDown(200);
				$("#forgotform").slideUp(200);
				e.preventDefault();});});