(function($) {
	jQuery.fn.placeholder = function(options) {
		settings = jQuery.extend({
			onClass: 'focused',
			offClass: false,
			placeholderSupport: (function(){
				return 'placeholder' in document.createElement('input');
			})()
		}, options);
		return this.each(function() {
			if(!settings['placeholderSupport']) this.defaultValue = $(this).attr('placeholder');
			$(this).bind('focus', function(){
				if(!settings['placeholderSupport'] && ($(this).val() == this.defaultValue)) $(this).val('');
				if(settings['onClass']) $(this).addClass(settings['onClass']);
				if(settings['offClass']) $(this).removeClass(settings['offClass']);
				/* fix password fields */
			}).bind('blur', function(){
				if(!settings['placeholderSupport'] && !$(this).val().length) {
					$(this).val(this.defaultValue);
					if(settings['onClass']) $(this).removeClass(settings['onClass']);
					if(settings['offClass']) $(this).addClass(settings['offClass']);
				}
			});
			
			/* place placeholder text within text field if there is no native support */
			if(!settings['placeholderSupport']) $(this).blur();
		});
	};
})(jQuery);