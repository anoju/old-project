var XML_DATA;

(function($){
	$.fn.dataInit = function($dataURL){
		$.ajax({
			type:'GET',
			url: $dataURL,
			async: false,
			success: function(data){
				setData(data);
			},
			error: function(msg){
				throw new Error(alert("========= Data Load Error ========="));
			}
		});
	};
})(jQuery);

function setData(xml)
{
	XML_DATA = xml;
}

function getData()
{
	return XML_DATA;
}
