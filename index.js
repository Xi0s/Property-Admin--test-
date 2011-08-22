(function($) {

$.extend({
	ajaxCall : {
		defaults : {
			process: null,
			data: {},
			showLoading: true,
			parent: 'auto',
			
		},
		go: function( elem, opts ){
			var settings = $.extend({},this.defaults,opts);
			// check for empty string in single property
			var returndata = null;
			
			$(elem).ajaxSend(function(){
				// Show loading box
			})
			.ajaxComplete(function(){
				// Hide loading box
			});
			$.post('../process/'+settings.process+'.php', settings.data, function(data){ $('html').trigger('ajaxcomplete', [data]); });
		},
		completed: function( func ){
			$('html').bind('ajaxcomplete', function(e, returndata){
				console.log(returndata);
			});
		}
	}
});

$.fn.ajaxCall = function( opts ){
	return $.ajaxCall.go( this[0], opts );
};

})(jQuery);