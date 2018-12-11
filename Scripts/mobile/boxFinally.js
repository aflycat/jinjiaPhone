function boxFinally(){
	$(".conItem").delegate(".oneItem","click",function(){
        $(this).find("i,p").css({"color":"#09b6f6"});
        $(this).find("span").show();
        $(this).siblings().find("span").hide();
         $(this).siblings().find("i,p").css({"color":"#3e3e3e"});
    })
    loadOrderImg($("#boxType").val())
}
function loadOrderImg(id){
	$.ajax({
		type:"post",
		url:"/GWServices.asmx/GetDataTableFromSQLSer",
		data:{
			sql:"select * from JinJia_Order where id='"+id+"'",
			userName:"admin"
		},success:function(dt){
			var res=$(dt).find("DataTable");
			$(res).find("shen").each(function(){
				var image1=$(this).find("Image1").text();
				var image2=$(this).find("Image2").text();
				var image3=$(this).find("Image3").text();
				
				$(".packShow").find("img").attr("src","http://www.eheyin.com/"+image3);
			})
			
			// console.log(dt)
		}
	})
}
function goHome(){
	mainView.router.loadPage("oAbox.html")
}