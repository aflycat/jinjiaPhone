//首页事件
function onHomePage() {

 $('html').removeClass('with-statusbar-overlay');
   $("#homeBar").css("display","none");
   // mainView.router.loadPage("boxChoose.html")
   mainView.router.loadPage("orderManage.html")
    
}

//界面尺寸变化事件
function onResizeCustomized() {
    if ($(".view-main").attr("data-page") == "Voice") {
        var heightWindow = $(".page-content").height();
        if (heightWindow < 500) {
            $(".voiceDivs").css("height", "100%");
            $(".voiceDivs").css("bottom", "40px");
            $(".voiceDivs").css("position", "relative");
        }
        else {
            $(".voiceDivs").css("height", "300px");
            $(".voiceDivs").css("bottom", "60px");
            $(".voiceDivs").css("position", "absolute");
        }
    }
}