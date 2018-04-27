# jquery插件注意点及$.extend()、$.fn、$.fn.extend()

## jquery原型关系
1. jQuery.fn.init.prototype = jQuery.fn 

2. [原型解析链接](https://www.cnblogs.com/elcarim5efil/p/4686286.html)

## 类级别的插件开发
1. 添加一个新的全局函数
 ``` 
 $.foo=function(option){
    alert(1);
 };
 可以加参数也可以不加;
 ```
2. 添加多个全局函数或对象
``` 
$.extend({
    foo:function(){}
    },
    {
        bar : 1
    }
)
```
3. 因为这是类级别的插件，因此此时可以把$看做一个类(即一个对象)，因此可以像对象调用对象的属性和方法一样使用;

4. 关于$.extend()
```
var opts = $.extend({}, $.fn.pullload.defaults, options);
代表将对象合并到{}里，如果两个对象都有相同属性，那么后一个对象会替换掉前一个对象的属性，而对于变量赋值即相当于把合并的对象赋值给opts变量,使用时可以用opts.[属性],也可以$.[属性],但是一般会声明一个变量;
```
## 对象级别的插件
1. **形式1：**
```
;(function($){
    $.fn.pluginName=function(){
        console.log(111);
    }
})(jQuery);形成闭包，避免变量污染;
此时$相当于构造函数，通过$('li')创建实例，然后调用该函数$('li').pluginName();
```
2. **形式2：**
```
;(function($){
    $.fn.extend({},{
        pluginName:function(opt,callback){
            console.log(opt);
        }
    },
    {
        bar : 2
    })
})(jQuery);
通过创建$('li')实例调用属性和方法;
```
3. **默认配置属性：**
```
此处为默认配置属性;
$.fn.pullload.defaults={
    handler : window,
    apiUrl : "",
    callback : null
}
$.fn.pullload=function(options){
    var opts = $.extend({}, $.fn.pullload.defaults, options) ;
}
通过调用实例对象函数并传参改变默认属性配置;
```
4. **使用命名空间：**
```
虽然在jQuery命名空间中,禁用了大量的javas函数和变量民,但仍然不可避免某些函数或变量名将于其它jQuery插件冲突,因此有时习惯将一些方法封装到另一个自定义的命名空间;
jQuery.myPlugin = {           
    foo:function() {           
        alert('This is a test. This is only a test.');           
    },           
    bar:function(param) {           
        alert('This function takes a parameter, which is "' + param + '".');     
    }          
};   
采用命名空间的函数仍然是全局函数，调用时采用的方法：   
$.myPlugin.foo();          
$.myPlugin.bar('baz');
```
5. **写插件时最好用闭包形式写，避免变量污染;**

6. **如果要实现插件的链式调用，可以在后面写上 return this,即可使用链式调用,此时的this是jquery实例对此像，而使用jquery的类似click时间里的this为Dom对象**
