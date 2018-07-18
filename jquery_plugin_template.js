/* First part of all plugins
	;(function($, window, undefined) {})(jQuery, window); 
	** Anomyous function definition  */

;(function($, window, undefined) {
	
	// Constructor function for our plugin object
	
	// Set up properties and methods of our new plugin objects "class"
	
	// Define our plugin method (function)
	
	$.fn.qtRotator = function(options) {
		
		  if (typeof options === 'string') {
            
            // not as common, leave off code for now...
            // the above condition is almost never true...
       }
       else {  // options !== 'string', usually meaning it is an object
            
            // here, this refers to the jQuery object that was used
            // to call this plugin method ($('#quoteRotator'))
            this.each(function() {
                
								// here inside our each function, the context of this has changed and it now refers to the current matched element (DOM Element) that "each" is iterating over now.
							
								// In our case, this refers to div#quoteRotator
							
								// below says check the DOM element (div#qtRotator) see if it has a variable (named data store) named qtRotator
                var instance = $.data(this, 'qtRotator');
                
                if (instance) {
                    instance._init();
                } else {
                  
									// .data() setter mode
									
									// new something is creating an object
									instance = $.data(this, 'qtRotator', new $.QTRotator(options, this));
                    
                    
                }
                
            });
            
        }
		
				return this;  // Returns the value of this which is now qtRotator function  reurning the jquery object the method was called on.
		
				// *** importan *** makes the object chainable  makes qtRotator method chainable
	};
	
	
})(jQuery, window);

