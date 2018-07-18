/* First part of all plugins
	;(function($, window, undefined) {})(jQuery, window); 
	** Anomyous function definition  */

;(function($, window, undefined) {
	
	// Constructor function for our plugin object
	$.MagnifyZoom = function(options, selectDOMElement) {
		
		this.$imageContainer = $(selectDOMElement);
		this._init(options);
		
	};
	
	// Set up properties and methods of our new plugin objects "class"
	$.MagnifyZoom.defaults = {
		
		width: 300,
		height: 300,
		cornerRounding: '50%'
		
	};
	
	
	$.MagnifyZoom.prototype = {
		
		_init: function(options) {
			
			var imageObject = new Image();
			
			imageObject.src = $('.small').attr('src');
				
			this.options = $.extend(true, $.MagnifyZoom.defaults, options);
			
			this.nativeWidth = imageObject.width;
			
			this.nativeHeight = imageObject.height;
			
			this.$glass = $('.large'); 
			
			this.$smallImage = $('.small');
			
			this._getLocation();

		},
		
		
		_getLocation: function() {
		
			var self = this;
			
			this.$imageContainer.mousemove(function(e) {
			
				$target = $(this);
			
				magnifyOffset = $target.offset();

				self.mouseX = e.pageX - magnifyOffset.left;
				self.mouseY = e.pageY - magnifyOffset.top;

				self._zoom($target);
			
			});	
			
		},
		
		
		_zoom: function($target) {
			
			if((this.mouseX > 0 && this.mouseX < $target.width()) && (this.mouseY > 0 && this.mouseY < $target.height())) {
				
				this.$glass.stop().fadeIn(100);
				
			} else {
			
				this.$glass.stop().fadeOut(0);
			}
			
			if((this.$glass).is(':visible')) {
			
				var glassWidth = this.options.width;
				var glassHeight = this.options.height;

				rx = Math.round(this.mouseX / this.$smallImage.width() * this.nativeWidth - glassWidth/2) * -1;

				ry = Math.round(this.mouseY / this.$smallImage.height() * this.nativeHeight - glassHeight/2) * -1;

				posX = this.mouseX - glassWidth/2;
				posY = this.mouseY - glassHeight/2;
				
				(this.$glass).css({
					
					width: glassWidth,
					height: glassHeight,
					borderRadius: $.MagnifyZoom.defaults.cornerRounding,
					top: posY, 
					left: posX,
					backgroundPosition: rx + 'px ' + ry + 'px'
					
				})
	
			}
	
		}
	
	};
	
	
	// Define our plugin method (function)
	$.fn.magnifyZoom = function(options) {
		
		  if (typeof options === 'string') {
           
       } else {  
				 
            this.each(function() {
								
                var instance = $.data(this, 'magnify');
                
                if (instance) {
                    instance._init();
									
                } else {
                  
									instance = $.data(this, 'magnify', new $.MagnifyZoom(options, this));
                    
                }
                
            });
            
        }
		
				return this;  
	};
	
	
})(jQuery, window);

