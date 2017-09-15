/**********地区******/
$(function () {
    /**********选项卡******/
    $(".tab_header").each(function () {
        var tag = $(this).attr("tag");
        if (tag == undefined || tag != "li_hover") {
            $(this).find("li").first().addClass("xianln1");
            $(this).next().find("div").first().css("display", "inline-block");
        } else {
            $(this).css("color","white");
            $(this).find("li").first().addClass("li_hover");
            $(this).next().find("div").first().css("display", "inline-block");
        }
    });
    
    $(".tab_header li").mouseover(function () {
        var lnag = $(this).attr("lang");
        var tag = $(this).attr("tag");
        if (tag == undefined || tag != "li_hover") {
            $(this).closest("ul").find("li").removeClass("xianln1");
            $(this).addClass("xianln1");
            $(this).closest("div").next().find(".tab_main").css({ "display": "none" });
            $(this).closest("div").next().find(".tab_main").eq(lnag - 1).css({ "display": "inline-block" });
        } else {
            $(this).closest("ul").find("li").removeClass("li_hover");
            $(this).addClass("li_hover");
            $(this).closest("div").next().find(".tab_main1").css({ "display": "none" });
            $(this).closest("div").next().find(".tab_main1").eq(lnag - 1).css({ "display": "inline-block" });
        }

    });
});