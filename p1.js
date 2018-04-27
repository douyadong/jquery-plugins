/*
* @Author: Administrator
* @Date:   2018-04-19 15:41:36
* @Last Modified by:   Administrator
* @Last Modified time: 2018-04-27 10:45:57
*/

'use strict';
$.tips=function(e){
	var $tips = $(document.createElement("DIV")).addClass("wk-tips").html(e) ;
	$(document.body).append($tips);
	$tips.fadeIn(200);
    alert('插件')
};
$.extend({
	say(){
		alert('extend插件')
	}
});
$.fn.a=function(){
	// alert('fn')
	return this
};


$.fn.b=function(options){
	var d={
		'color':'green',
		'fontSize':'100px'
	};
	var m=$.extend({},d,options);
	return this.css({
		'color':m.color,
		'font-size':m.fontSize
	})
};
$.fn.extend({
		aa(){
			alert(22);
		},
		bb(){
			alert('bb')
	}
	});
var m=$.extend({
	mm(){
		alert(212)
	},
},{
	aa:1233
})
var cc=$.extend({mm:function(){
	alert('message')
}},{bb:function(){alert(22)}},{aa:1});
var ef=$.extend({
	cd:function(){
		alert(21342525)
	},
	fg : "对象"
});

