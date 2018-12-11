//人数
 var CompanyRight_Top_Map_Chart,CompanyRight_Top_Bar_Left_Chart,CompanyRight_Top_Bar_Right_Chart;
//财务
var CompanyRight_Top_Finance_Map,CompanyRight_Top_Finance_Pie_Left,CompanyRight_Top_Finance_Bar_Right,CompanyRight_Top_Finance_List_Left,CompanyRight_Top_Finance_table_Right;
//采购
var CompanyRight_Top_Purchase_Pie,CompanyRight_Top_Purchase_Bar,CompanyRight_Top_Purchase_List;
//库存
var Stock_top_bar,Stock_top_pie;
//产能
var CompanyRight_Top_Capacity_Bar;

function companyErp(){
activeBar('CompTool');
$("#homeBar").css("display","");
$(".backHome").unbind();
$(".backHome").bind("click",function(){
$("#homeBar").css("display","none");
mainView.router.loadPage('home.html');
});

// table
$(".PurchaseTable tbody tr:gt(2) td").css({"color":"#999","font-size":"12px","font-weight":"100"});
// 底端菜单
$(".CompanyRight_Bottom li a").unbind();
$(".CompanyRight_Bottom li a").bind("click",function(){
   if(!$(this).hasClass("SelectCompany_Menu"))
     {
     	$(this).addClass("SelectCompany_Menu").parent().siblings().find("a").removeClass("SelectCompany_Menu"); 
        var dataIndex = parseInt($(this).attr("data-index"));
        
        $("div[data-html="+dataIndex+"]").addClass("displayblack").siblings().removeClass("displayblack");
        refreshPage(dataIndex);
     }
});

  refreshPage(1);


}


function refreshPage(index)
{
    nullObject();
	switch(index){
		case 1: 	// 人事	

			CompanyRight_Top_Map_Chart = requestObject('CompanyRight_Top_Map'),
			CompanyRight_Top_Bar_Left_Chart=requestObject('CompanyRight_Top_Bar_Left'),
			CompanyRight_Top_Bar_Right_Chart=requestObject('CompanyRight_Top_Bar_Right');

			CompanyRight_Top_Map_Chart.setOption(CompanyRight_Top_Map);
			CompanyRight_Top_Bar_Left_Chart.setOption(CompanyRight_Top_Bar);
			CompanyRight_Top_Bar_Right_Chart.setOption(CompanyRight_Top_Line);
		break;
		case 2:  // 财务
			CompanyRight_Top_Finance_Map = requestObject('CompanyRight_Top_Finance_Map'),
			CompanyRight_Top_Finance_Pie_Left = requestObject('CompanyRight_Top_Finance_Pie_Left'),
			CompanyRight_Top_Finance_Bar_Right = requestObject('CompanyRight_Top_Finance_Bar_Right'),
			CompanyRight_Top_Finance_List_Left = requestObject('CompanyRight_Top_Finance_List_Left'),
	
			CompanyRight_Top_Finance_Map.setOption(Company_Finance_Map);
			CompanyRight_Top_Finance_Pie_Left.setOption(Company_Finance_Pie);
			CompanyRight_Top_Finance_Bar_Right.setOption(Company_Finance_Bar);	
			CompanyRight_Top_Finance_List_Left.setOption(Company_Finance_Line);		
		break;
		case 3:  //采购
			CompanyRight_Top_Purchase_Pie = requestObject('CompanyRight_Top_Purchase_Pie'),
			CompanyRight_Top_Purchase_Bar = requestObject('CompanyRight_Top_Purchase_Bar'),
			CompanyRight_Top_Purchase_List = requestObject('CompanyRight_Top_Purchase_List');

			CompanyRight_Top_Purchase_Pie.setOption(CompanyRight_Purchase_Pie);
			CompanyRight_Top_Purchase_Bar.setOption(CompanyRight_Purchase_Bar);
			CompanyRight_Top_Purchase_List.setOption(CompanyRight_Purchase_List);	
		 break;
		case 4:  //库存
			Stock_top_pie = requestObject('Stock_top_pie'),
			Stock_top_bar = requestObject('Stock_top_bar');
			Stock_bot_pie = requestObject('Stock_bot_pie');
			Stock_bot_bar = requestObject('Stock_bot_bar');

			Stock_bot_pie.setOption(Stock_bot_pies);
			Stock_top_pie.setOption(Company_Stock_Pie);
			Stock_top_bar.setOption(Company_Stock_bar);

			

			
			Stock_bot_bar.setOption(park_right_bar_data);



		 break;
		case 5:  //产能
						CompanyRight_Top_Capacity_Bar = requestObject('CompanyRight_Top_Capacity_Bar');

			CompanyRight_Top_Capacity_Bar.setOption(CompanyRight_Capacity_Bar);
		break;
		default:;
	}



}

function requestObject(id){
	var dt = echarts.init(document.getElementById(id));
   return dt
}

function nullObject()
{
	CompanyRight_Top_Map_Chart = null,
	CompanyRight_Top_Bar_Left_Chart = null,
	CompanyRight_Top_Bar_Right_Chart = null;

	CompanyRight_Top_Finance_Map = null,
	CompanyRight_Top_Finance_Pie_Left = null,
	CompanyRight_Top_Finance_Bar_Right = null,
	CompanyRight_Top_Finance_List_Left = null,
	CompanyRight_Top_Finance_table_Right = null;

	CompanyRight_Top_Purchase_Pie = null,
	CompanyRight_Top_Purchase_Bar = null,
	CompanyRight_Top_Purchase_List = null;

	Stock_top_bar = null,
	Stock_top_pie = null,
			Stock_bot_pie =null ,
			Stock_bot_bar = null;

	CompanyRight_Top_Capacity_Bar = null;
}