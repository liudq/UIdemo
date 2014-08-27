  $(document).ready(function() {
	  		$('.image-link').magnificPopup({
		  		type:'image',
		  		closeOnContentClick: true,
		  		image: {
					verticalFit: false
				}
			});
			//给table添加横向缩进条
		$(".table").wrap("<div class='table-responsive'></div>");
		
	});

	