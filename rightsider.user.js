// ==UserScript==
// @name         Rightsider
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auto space your text to the right
// @include      https://www.reddit.com/robin*
// @updateURL    https://github.com/theseamusjames/rightsider/raw/master/rightsider.js
// @author       /u/fredandlunchbox
// @match        http://puppysoup.com
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant   GM_getValue
// @grant   GM_setValue
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    var oldVal = $(".text-counter-input").val();

    setTimeout(
        function(){
                 $("#robinSendMessage > input[type='text']").val("...................................................I'm on the right side of history. Join me at https://github.com/theseamusjames/rightsider\n");
                 $("#robinSendMessage > input[type='submit']").click();
        }, 2000);
    $(".text-counter-input").val(oldVal);
    
    $(".text-counter-input").bind('keydown', function(event){
	if(event.keyCode == 13){
		var pad="";
		for(var x=0;x<140-$(".text-counter-input").val().length; x++){
			pad=pad+".";
		}
		$(".text-counter-input").val(pad+$(".text-counter-input").val());
	}
});
})();