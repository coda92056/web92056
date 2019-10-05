$(function() {
	$("#nums-button").click(showNums);
};

function showNums() {
	$.ajax({ url: "jsondata.txt",
	         dataType" "json",
	         success: showNumberList });	
}

function showNumberList(jsonData){
	var list = makeList(jsonData.fg, jsonData.bg,
			            jsonData.fontSize,  jsonData.numbers);
				$("#nums-result").html(list);
}