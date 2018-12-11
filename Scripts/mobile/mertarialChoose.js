function mertarialChoose(){
	$(".CatoSma").delegate("li","click",function(){
    	$(this).addClass('addBorderColor');
    	$(this).addClass('addColor');
    	$("#mertarialChoose .catoImg img").attr("src",$(this).find("img").attr("src"))
    	$(this).siblings().removeClass('addBorderColor');
        $(this).siblings().removeClass('addColor');
        
    });

    $(".itemPho").delegate("dl","click",function(){
    	 $(this).find("dt").addClass('addBorder');
    	 $(this).find("dd").addClass('addColor');
    	 $(this).siblings().find("dt").removeClass('addBorder');
       $(this).siblings().find("dd").removeClass('addColor');
        
    });
    $(".technologyPe").delegate("li","click",function(){
    	 $(this).addClass('addBorderColor');
    	 $(this).addClass('addColor');
    	 $(this).siblings().removeClass('addBorderColor');
       $(this).siblings().removeClass('addColor');
        
    });
    $(".surfacePe").delegate("li","click",function(){
    	 $(this).addClass('addBorderColor');
    	 $(this).addClass('addColor');
    	 $(this).siblings().removeClass('addBorderColor');
       $(this).siblings().removeClass('addColor');
        
    });
    $(".colorPe").delegate("li","click",function(){
    	 $(this).addClass('addBorderColor');
    	 $(this).addClass('addColor');
    	 $(this).siblings().removeClass('addBorderColor');
       $(this).siblings().removeClass('addColor');
        
    });

     console.log($("#boxType").val())
     console.log($("#proType").val())
    // $(".loadAnimate").show();
    $(".loadAni").show();
    getOrderDetail($("#boxType").val());

    
    //setTimeout(function(){getOrderDetail($("#boxType").val());},500)
     
}
function getOrderDetail(id){
	$.ajax({
		type:"post",
		url:"/GWServices.asmx/GetDataTableFromSQLSer",
		data:{
			sql:"select * from JinJia_Order where id='"+id+"'",
			userName:"admin"
		},success:function(dt){
			var res=$(dt).find("DataTable");
			$(res).find("shen").each(function(){
				var image1=$(this).find("Image1").text().split("/")[3];
				var image2=$(this).find("Image2").text().split("/")[3];
				$(".CatoSma li").eq(0).find("img").attr("src","../../Image/mobile/pic/"+image1);
				$(".CatoSma li").eq(1).find("img").attr("src","../../Image/mobile/pic/"+image2);
				$(".catoImg").find("img").attr("src","../../Image/mobile/pic/"+image1);
			})
			$(".loadAni").hide();
			// console.log(dt)
		}
	})
}