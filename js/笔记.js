// Object.defineProperty(obj, prop, descriptor)
/*  
	方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。
	obj
	要在其上定义属性的对象。
	prop
	要定义或修改的属性的名称。
	descriptor
	将被定义或修改的属性描述符 
*/

// 1、暂时性死区
/* 
	如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
*/

//2、块级作用域
/* 
	ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。

	ES5 中是不合法的
	
	内层作用域可以定义外层作用域的同名变量。
*/

// 3、冻结对象
/*
	如果真的想将对象冻结，应该使用Object.freeze方法。
	const foo = Object.freeze({});
	常规模式时，下面一行不起作用；
	严格模式时，该行会报错
	foo.prop = 123;
*/

// 4、顶级对象
/*
	浏览器里面，顶层对象是window，但 Node 和 Web Worker 没有window。
	浏览器和 Web Worker 里面，self也指向顶层对象，但是 Node 没有self。
	Node 里面，顶层对象是global，但其他环境都不支持。
*/

// 5、垫片
/*
	通俗来讲，JS垫片就是，在低级环境中用高级语法时，在低级环境中手动实现的高级功能，模拟高级环境
*/

// 6.html5调用安卓或者ios的拨号功能
/* 
html5 提供了自动调用拨号的标签，只要在 a 标签的href中添加 tel:就可以了
如下：<a href= "tel:4008106999,1034">400-810-6999 转 1034</a>
 */

// 6、汉字解码/编码
/* 
	解码：decodeURI()
	编码：encodeURI()
*/

// 7、浏览器端存储数据
/* 
	(1) cookie(4k)有有效期，不设置就一直有
	(2) sessionStorage(5M)关闭浏览器就没了
	(3) localStorage(20M)需要手动删除
	
	使用方式
	.setItem("name",value)
	.getItem("name")
	.removeItem("name")
	.clear()
	key是字符串，所以需要转化，JSON.parse()/JSON.stringify()
*/
