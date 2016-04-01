$(document).ready(function(){

	var index = 1;
	$("#next").click(function(){
		// $('.valiantPhoto').attr("data-photo-src", 'Image/' + index + '.jpg?timestamp=' + new Date().getTime());
		if (index < 14){
			index ++ 
		}else { 
			counter = 1; 
		}
		
		$('.valiantPhoto').attr("src", 'Image/' + index + '.jpg');



	});
	
});

