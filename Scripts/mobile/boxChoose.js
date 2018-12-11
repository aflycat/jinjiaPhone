function boxChoose(){
 
	$(".conItem").delegate(".oneItem","click",function(){
        $(this).addClass("homeSelect").siblings().removeClass("homeSelect");
        $("#boxType").val($(this).attr("tableId"))
    })
    $(".gategotyBox").delegate("li","click",function(){
        $(this).css({"color":"#02f1ff"});
        $(this).siblings().css({"color":"white"});
        selectBox($(this).text());
    })

    $(".loadAni").show();
    setTimeout(loadInfor,200)

     $(".backBtn").unbind();
     $(".backBtn").bind("click",function(){
       
        mainView.router.loadPage('oAbox.html');
     });

}

function loadInfor(){
	$("#boxChoose .conItem").html("");
	$("#boxChoose .conItem").css({"overflowY":"scroll"});
	$("#boxChoose .pager").hide();
	$.ajax({
		type:"post",
		url:"/GWServices.asmx/GetDataTableFromSQLSer",
		async:true,
		data:{
			sql:"select * from JinJia_Order",
			// sql:"select * from JinJia_Order order by id  OFFSET "+pageNum+" ROW FETCH NEXT 6 ROWS ONLY",
	    	userName:"admin"
		},success:function(dt){
			$(".loadAnimate").show();
			var res=$(dt).find("DataTable");
			$(res).find("shen").each(function(){
				var catoStr=$(this).find("Name").text();
				var inde=catoStr.indexOf('_')
				var cato=catoStr.substr(0,inde);
				var catoDetai=catoStr.substr(inde+1);

				// console.log($(this).find("ID").text())
				// console.log(catoDetai)
				var img=$(this).find("Image1").text().split("/")[3];
				// console.log(img)
				var Id=$(this).find("ID").text();
				var html='<div class="oneItem " tableId="'+Id+'">'+
						    '<span class="iconfont icon-selected1"></span>'+
						    '<div class="imgWap"><img src="/Image/mobile/pic/'+img+'" alt=""></div>'+
						    '<p class="cato">'+cato+'</p>'+
						    '<p class="catoDetai">'+catoDetai+'</p>'+
						 '</div>';
				$("#boxChoose .conItem").append(html).find("div:eq(0)").addClass("homeSelect");

			})
			$("#boxType").val($(res).find("shen").eq(0).find("ID").text());
			$(".loadAni").hide()
		}
	})
}
// function getMaxPage(){
// 	$.ajax({
// 		type:"post",
// 		url:"/GWServices.asmx/GetDataTableFromSQLSer",
// 		data:{
// 			sql:"select count(1) as num from JinJia_Order",
// 	    	userName:"admin"
// 		},success:function(dt){
// 			// console.log(dt)
// 			var res=$(dt).find("DataTable");
// 			$(res).find("shen").each(function(){
// 				var allNum=$(this).find("num").text();
// 				var pageNum=Math.ceil(allNum/6)
// 				$(".allPage .num").text(pageNum)
// 			})
			
// 		}
// 	})
// }
function selectBox(name){
	// console.log(name);
	$("#boxChoose .conItem").html("");
	$("#boxChoose .conItem").css({"overflowY":"scroll"});
	$("#boxChoose .pager").hide();
	if(name!="全部"){
		$.ajax({
			type:"post",
			url:"/GWServices.asmx/GetDataTableFromSQLSer",
			data:{
				sql:"select * from JinJia_Order  where Name like ('%"+name+"%')",
		    	userName:"admin"
			},success:function(dt){
				var res=$(dt).find("DataTable");
				$(res).find("shen").each(function(){
					var catoStr=$(this).find("Name").text();
					var inde=catoStr.indexOf('_')
					var cato=catoStr.substr(0,inde);
					var catoDetai=catoStr.substr(inde+1);
					// console.log($(this).find("ID").text())
					// console.log(catoDetai)
					var img=$(this).find("Image1").text().split("/")[3];
					var Id=$(this).find("ID").text();
					var html='<div class="oneItem" tableId="'+Id+'">'+
							    '<span class="iconfont icon-selected1"></span>'+
							    '<div class="imgWap"><img src="../../Image/mobile/pic/'+img+'" alt=""></div>'+
							    '<p class="cato">'+cato+'</p>'+
							    '<p class="catoDetai">'+catoDetai+'</p>'+
							 '</div>';
					$("#boxChoose .conItem").append(html).find("div:eq(0)").addClass("homeSelect");
				})
				$("#boxType").val($(res).find("shen").eq(0).find("ID").text())
				$(".loadAni").hide()
			}
		})
	}else{
		loadInfor()
	}
	
	

}