// ==UserScript==
// @name         Rightsider
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auto space your text to the right
// @author       /u/fredandlunchbox
// @match        http://puppysoup.com
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

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