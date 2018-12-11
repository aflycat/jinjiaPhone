function oAbox(){
     activeBar('PackTool');   
     $("#homeBar").css("display","");
     $(".backHome").unbind();
     $(".backHome").bind("click",function(){
        $("#homeBar").css("display","none");
        mainView.router.loadPage('home.html');
     });
     $(".views").height($(window).height());
	$('html').removeClass('with-statusbar-overlay');
    // mainView.router.loadPage("boxChoose.html")
    // mainView.router.loadPage("mertarialChoose.html")
    // mainView.router.loadPage("boxFinally.html")
    // mainView.router.loadPage("orderManage.html")
    // mainView.router.loadPage("companyErp.html")
    $(".conItem").delegate(".oneItem","click",function(){
        // $(this).css({"background":"2px solid #09b6f6"});
        // $(this).siblings().css({"border":"none 0"});
        // $(this).find("i,p").css({"color":"#09b6f6"});
        // $(this).find("span").show();
        // $(this).siblings().find("span").hide();
        // $(this).siblings().find("i,p").css({"color":"#3e3e3e"});
        $(this).addClass("homeSelect").siblings().removeClass("homeSelect");
        $("#proType").val($(this).index());
        // console.log($("#proType").val())
    })
}