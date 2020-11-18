———————————————————————————————— ————————————————————————————————

/* 简介及书写规范 */

————————————————————————————————

/* 一、#组成部分 */
/* 
	1、ECMAScript
	2、Dom
	3、Bom
*/

————————————————————————————————

/* 二、#语言类型 */
/* 
	1、脚本语言
	2、解释性语言
	3、动态语言
	4、弱类型语言
	5、基于对象的语言
	6、非编译性语言
*/

————————————————————————————————

/* 三、#应用场景 */
/* 
	1、网页特效
	2、服务端开发(Node.js)
	3、命令行工具(Node.js)
	4、桌面程序(Electron)
	5、APP(Cordova)
	6、控制硬件物联网(Ruff)
	7、游戏开发(cocoszd-js)
*/

———————————————————————————————— ————————————————————————————————

/* #ECMAScript */
/* 
    alert("")				弹框
		confirm("") 		确认框
		prompt("")  	  输入框
		console.dir("") 打印一个对象
*/

————————————————————————————————

/* 一、#变量 */
/* 
	1、命名规范：
	   (1)、有意义
	   (2)、不能重复(重复了函数优先，函数是一等功民)
	   (3)、以字母、$符号、下划线开头，后面写数字
	   (4)、变量名一般为小写
	   (5)、遵循驼峰命名规范
	   (6)、不能使用关键字
	   (7)、中文也可以，但是不建议

	2、变量的声明
	   var a=1 , b=2 , c=4
*/

————————————————————————————————

/* 二、#数据类型 */
/* 
	1、原始数据类型：
	   (1)、number
	   (2)、string
	   (3)、boolean
	   (4)、null(也是object)
	   (5)、undefined
	   (6)、object

	2、简单数据类型/基本类型/值类型(数据传递的是值，值在栈上的复制、传递、接收)：
	   (1)、number
	   (2)、string
	   (3)、booluean
	   (4)、undefined
	   (5)、null

	3、复杂数据类型/引用数据类型(数据传递的是地址，地址的复制、传递、接收，数据一直在堆上)
	   (1)、function(function数据类型)
	   (2)、object
	   (3)、Array(object数据类型)

	4、基本包装类型
		普通变量不能直接调用属性跟方法，在代码执行过程中，调用方法时，js自动将其包装成复杂类型(基本包装类型对象)，调用完方法后，再变成简单类型。

	5、数据类型转化
	   (1)、number
	     ①、parseInt(数据,按照几进制转为十进制) // 取整，开头为数字就可以转出开头的数字
		  ②、parseFloat(数据) // 浮点类型，开头为数字就可以转出开头的数字
		  ③、Number(数据) //必须全部为数字，两个数据类型都可以
		  ④、开头加运算符：+ - * /
		  ⑤、通过位运算取整，在结尾写 |0 (按位与)
	   (2)、string
	     ①、变量.toString //只能转化有意义字符串
		  ②、String(变量) //可以转化null、undefined的无意义字符
		  ③、开头加空字符串
	   (3)、boolean
	     ①、Boolean(变量)
		  ②、!!变量
		  ③、布尔数据类型为false的："" / null / undefined / 0 / NaN
	
	tips : 
	   (1)、获取数据类型
	   		①、typeof
	   		②、instanceof(判断是否在原型链上)
	   (2)、数字类型最大值/最小值 : Number.MAX_VALUE/Number.MIN_VALUE
	   (3)、八进制数字，0开头；十六进制数字，0x开头
	   (4)、转义符 : \n \r \b \t \f \\ \' \"
	   (5)、NaN typeof是number数据类型
	   (6)、Array typeof是object数据类型
	   (7)、typeof 打印原始数据类型，原始数据类型有，基本数据类型(null是object)+object+function 
			typeof undefined  	undefined
			typeof 'abc' 		string
			typeof 123   		number
			typeof NaN  		number
			typeof true 		boolean
			typeof {}   		object
			typeof []  			object
			typeof null   		object
			typeof console.log  function
			typeof fn   		function

	注意 : 
	   (1)、小数精度问题(0.1+0.1===0.2(true) / 0.1+0.2===0.3(false))
	   (2)、NaN无法验证NaN，需要用isNaN(变量)，NaN是数字类型
*/

————————————————————————————————

/* 三、#运算符 */
/* 
	1、算数运算符 : + - * / %
	2、一元运算符 : ++ --
	3、二元运算符 : 两个操作数
	4、三元运算符 : 三个操作数
	5、复合运算符 : += -= *= /= %= 
	6、关系运算符 : > < >= <= == === != !==

	7、逻辑运算符 : && || !
		 短路运算 : && false短路;  || true短路;

	8、"==" 问题详解
		(1)、NaN不等于任何值
		(2)、null/undefined不等于任何值，但是互相相等
		(3)、布尔类型与数字比，都变成数字再比，true=1/flase=0
		(4)、复杂类型
			①、相同数据类型比地址
			②、字符串与数字比，字符串先调用Number方法
			③、不同数据类型的通过调用.toString()方法，然后通过.valueOf()方法转化为简单数据类型进行比较(对象原型上的方法)
			④、对象调用.toString方法 {}.toString() = "[object Object]"
			⑤、数组调用.toString方法 [1,2,3,4,5].toString() = "1,2,3,4,5" / [].toString() = ""
			⑥、函数调用.toString方法 function() {}.toString() = "function() {}"
			⑦、""/[].valueOf() ！！！！！= 0(布尔类型才为0)
			⑧、!复杂数据类型，是false
*/

————————————————————————————————

/* 四、#流程控制语句 */
/* 
	1、if(){

		}else{

		}

	2、if(){

		}else if(){

		}else if(){

		}

	3、var 变量 = 判断句 ? true : false;

	4、switch (name){
			case name = ? : 代码块;
			break;
			default : 代码块;
		}

	5、while(){}
	6、do{}while()
	7、for()
	8、break : 跳出循环，后面代码不再执行，循环结束
	   continue : 直接诶进入下个循环，后面代码不再执行
*/

————————————————————————————————

/* 五、#函数 */
/* 
	注意 : (1)、函数命名重名时后面会覆盖前面的
		   (2)、函数名跟变量名重复的时候，预解析时变量名会被忽视
		   (3)、实参传送给形参时，简单类型跟复杂类型都是把值复制一份给形参，处理的都是形参
		   (4)、函数typeof是function，但是函数也是对象

	tips : (1)、分类--->匿名函数、自调用函数、递归函数、回调函数、闭包函数
		   (2)、必须写 ; 的五个地方 : () [] / + - 前面
		   (3)、函数有多个形参，不想传的值用null，fn(1,null,2,3,5)
		   (4)、函数形参是对象时，使用默认值要传一个空对象，fn({})
		   (*5)、假设成立、节流阀

	1、有名就是命名函数、没名就是匿名函数

	2、
	   (1)、函数的自调用可以用来写沙盒，防止全局变量污染
	   (2)、缺点：内部变量外部借用不到
	   (3)、解决方法(jq中有用到)：window.x = x
	   (4)、把window传入沙箱，提高调用性能

	3、会预解析：声明到当前作用域的最上方

	4、作用域问题 : 词法作用域(静态作用域)，与调用无关，在声明的时候作用域就已经确定下来了

	5、函数的声明：
	   (1)、function(){}
	   (2)、var fn = function() {}
	   (3)、var fn = new Function('a'形参, 'b'形参, 'return a + b'最后写函数体)
	   (4)、异常处理代码：try{可能会把错的代码}catch(e，这是错误信息){错误时执行的代码}finally{错不错都会执行的代码}
	   (5)、eval("代码的字符串类型")，可以把字符串直接执行

	6、函数的调用：
	   (1)、fn()--->函数自调用模式，this指向window
	   (2)、obj.fn()--->方法调用模式，this指向对象
	   (3)、var obj = new Person()--->构造函数调用模式，this指向实例化对象
	   (*4)、上下文调用模式
	   		①、fn.apply(,[形参]){改变this指向，不想指向用null不填默认为window}
	   		②、fn.call(,形参){改变this指向，不想指向用null不填默认为window}
	   		③、fn.bind(obj[,a[,b[,c[,d]]]]){永远改变this指向，如果bind函数的参数列表为空，执行作用域的this将被视为新函数的this指向。}
	
	*7、递归函数(一种算法或者说思想，化归思想，把复杂问题拆分成太简单问题)：函数内部调用自己，要有结束条件

	*8、闭包(词法闭包/函数闭包)
	   (1)、一个函数(一般为内部函数)调用了另一个函数(外部函数)的局部变量，就会发生闭包
	   (2)、保护私有变量不被修改
	   (3)、缺点：内存泄漏(有一块内存一直被占用无法被回收，因为一直有赋值)

	*9、回调函数：函数作为参数使用
	
	10、垃圾回收机制
	   (1)、引用计数法：垃圾回收0引用的，既变量没有被引用，有循环引用的无法清除
	   (2)、标记清除算法：从window开始找，连不到一起的就清除
*/

————————————————————————————————

/* 六、#正则表达式 */
/* 
	1、创建方式
		(1)、var reg = new RegExp
		(2)、var reg = / /;
		(3)、reg.test("") / ;/ /.test("")
	2、判定规则
		条件：
		(1)、/ abc /
		(2)、元字符
				数字		\d \D
				字符		\w \W
				不可见	\s \S
				全部/.	.  \. 
		(3)、或：|；	();
		(4)、[abc] ==> a|b|c
				 [a-z] ==> a-z全部
				 [A-Z] ==> A-Z全部
				 [^a-z] ==> 除了a-z
		(5)、/^a/ ==> a开始
				 /a$/ ==> a结束
				 /^a$/ ==> 就是a

		量词:
		(6)、* 			==> 0个或者多个
				 + 			==> 1个或者多个
				 ? 			==> 0个或者1个
				 {m,n} 	==> m个或者n个
				 {m,} 	==> m个或者多个
				 {m} 		==> m个
		
		参数
		(7)、/a/g  ==> 全部
				 /a/i  ==> 忽略大小写
				 /a/gi ==> 全部+忽略大小写
*/

————————————————————————————————

/* 七、#对象 */
/* 
	tips：
		(1)、对象的特性：封装、继承、没有多态
		(2)、js是基于对象的语言，所以只有封装，但是可以模拟继承，所以默认有继承
		(3)、js的三种对象：内置对象，自定义对象，浏览器对象(BOM)
			①、实例对象/自定义对象 : 通过构造函数实例化的对象
			②、静态对象/内置对象 : 不需要创建，直接就是一个对象，可以直接通过对象名调用，系统内置的
			③、实例成员 : 构造函数中this添加的成员
			④、静态成员 : 构造函数本身添加的成员

	1、对象的声明语法
		(1)、var obj = new object({})
		(2)、var obj = {}
		(3)、自定义构造函数
			①、在内存中申请一段空间
			②、改变this指向，指向当前对象
			③、将实例的原型地址指向构造函数的原型
			④、new的过程就是执行这个函数,如果这个函数有返回值且是个对象类型(所有复杂类型)，那么就将这个是赋予对象，否则不改变
			⑤、返回这个对象
		(4)、obj.name = 添加成员
		(5)、delete obj.name 删除成员

	2、遍历对象(for in 原理)
		var key = "name" ==> obj.name ==> obj["name"] ==> obj[key] ==> for(var key in obj)

	3、for...of遍历对象，可以获取对应的元素，而for...in遍历对象，是获取对应元素的序号；同样的，for...of是遍历获取对象中的value，而for...in是获取对象的key

	4、对象.__proto__ ==> 构造函数.prototype == 构造函数.prototype.constructor ==>  构造函数 == new ==> 对象

	5、
		(1)函数也是对象
		(3)所有函数都是Function创造的，包括本身
		(4)所有原型都有Object生成，本身为null

	6、属性查找原则：访问对象属性，有就直接获得值，没有就查找原型链，直到Object；
									设置属性时，对原型链不影响，本身有该属性就改值，没有就设置新值

	7、原型的属性介绍
		(1)obj.hasOwnPropertype("x"); 判断对象是否由该属性
		(2)"x" in obj; 判断对象是否有该属性
		(3)obj1.isPrototype.obj2; 1是否为2的原型
		(4).toString()/.toLocaleString()
		(5).valueOf()

	8、继承问题
		(1)、混入试(拷贝)
		(2)、原型链继承(直接替换原型链，obj.prototype = {})
		(3)、var obj = Object.create(obj1)(继承1的原型)
				 经常通过 var obj = Object.create(null) 创建函数 来提高性能

*/

————————————————————————————————

/* 八、#内置对象方法 */
/* 	
	1、#Array

	注意 : ①、所有因为方法调用产生的元素与新数组都需要变量接收
		   ②、var arr = new Array(1,2,3,4,5,只有一个数字时表示数组长度)
		   ③、可以通过下标改变数组
		   ④、arguments,伪数组

	tips : ①、伪数组arguments
		   ②、伪数组有下标跟长度，原型不指向Arry.prototype，指向NodeList.prototype
		   ③、任何一个对象都可以是伪数组，有长度和下标
		   ④、好处：实例对象，可以遍历，可以随即在原型上添加方法
		   ⑤、数组清空
				arr = []
				arr.length = 0
				arr.splice(0,arr.length)

	(1)、Array.isArray(对象);----->判断这个对象是不是数组

	(2)、arr.concat(数组,数组,数组,...);----->返回值为组合的新数组,需要接收

	(3)、arr.join("字符串a");----->返回值是一个字符串，在数组中的每个元素的后面加a拼接成一个字符串

	(4)、arr.indexOf(元素值);----->返回值是下标,没有则是-1

	(5)、arr.reverse();----->没有返回值，将本数组反转

	(6)、arr.slice(开始的索引,结束的索引);----->返回值为新的数组，把截取的数组的值放在一个新的数组中,但是不包含结束的索引对应的元素值

	(7)、arr.splice(操作的位置下标,要删除的个数,替换（增加）的元素的值，增加元素，增加元素);----->返回值都是删除掉的那些元素组成的数组
		 例如 : var arr = [1,2,3,4,5];
		 ①、删除数组中的元素 arr.splice(1,1);
		 ②、替换元素 arr.splice(1,1,9);
		 ③、添加元素，插入时在操作位置前面添加 .splice(1,0,9);


	(8)、arr.push(值);----->返回值也是追加数据之后的数组长度,把值追加到数组中,加到最后

	(9)、arr.pop();----->返回值就是删除的这个值,删除数组中最后一个元素

	(10)、arr.shift();----->返回值就是删除的这个值,删除数组中第一个元素

	(11)、arr.unshift();----->返回值是插入后的长度,向数组的第一个元素前面插入一个新的元素


	(12)、arr.sort(function(a,b){
		  	  return a-b
		  });
		  ----->没有返回值,改变数组本身,如果a-b<0,按从小到大排序;如果a-b>0,按从大到小排序;a-b=0，位置不变;

	(13)、arr.every(function(a,b,c){
		  })
		  ----->返回值是布尔类型,函数作为参数使用,函数中有三个参数,a是元素的值，b是索引值,第三个参数是原来的数组(没用)如果这个数组中的每个元素的值都符合条件,最后才返回的是true
	
	(14)、arr.forEach(function(a,b,c){
		  })
		  var arr = [1, 2, 3, 4, 5]
      	  var c = []
      	  arr.forEach(function(a, b) {
      	    c.push(a + 1 + b)
      	  })
      	  console.log(c)
		  ----->没有返回值,遍历数组用对a和b进行操作,相当于for循环
	
	(15)、arr.filter(function(ele){});
		  ----->返回值是新的数组,数组中每一个复合条件的元素,组成一个新的数组
	
	(16)、arr.map(function(a,b,c){});
		  var arr = [1, 2, 3, 4, 5]
      	  arr = arr.map(function(a, b) {
      	    return a + b
      	  })
      	  console.log(arr) // arr = [1,3,5,7,9]
		  ----->返回值是一个新的数组,数组中的每个元素都要执行这个函数,把执行后的结果重新的全部的放在一个新的数组中

	(17)、arr.some(function(a,b,c){
		  })
		  ----->返回值是布尔类型,函数作为参数使用,函数中有三个参数,a是元素的值，b是索引值,第三个参数是原来的数组(没用)如果这个数组中有元素的值都符合条件,最后返回的是true

	(18)、arr.find(function(a){
		  })
		  ----->返回值是布尔类型,函数作为参数使用,a是元素的值,返回这个数组中符合条件的元素
	
	(19)、arr.findIndex(function(a){
		  })
		  ----->返回值是布尔类型,函数作为参数使用,a是元素的值,返回这个数组中符合条件的元素的下标


	————————————————————————————————
	2、#Date

	(1)、获取时间对象，值为时间类型
		 var dt = new Date()
		 var dt = new Date('2018-3-10')
		 var dt = new Date('2017/2/12')
		 var dt = new Date('2017,2,12')

	(2)、获取当前时间
		 new Date;本身也是一个值
	     var dt = new Date
		 var dt = Date.now();这个值是毫秒值

	(3)、获取时间对象，调用Date静态方法

	 	 // 声明时间对象
		 var dt = new Date()

		 // 获取年份
		 console.log(dt.getFullYear())

		 // 获取月份，从0开始
		 console.log(dt.getMonth() + 1)

		 // 获取日
		 console.log(dt.getDate())

		 // 获取小时
		 console.log(dt.getHours())

		 // 获取分钟
		 console.log(dt.getMinutes())

		 // 获取秒
		 console.log(dt.getSeconds())

		 // 获取星期，从0开始
		 console.log(dt.getDay())

		 // 获取日期+时间
      	 console.log(dt.toLocaleString())

		 // 英文的日期
		 console.log(dt.toDateString())

		 // 数字格式的日期
		 console.log(dt.toLocaleDateString())

		 // 小时分钟秒
		 console.log(dt.toTimeString())

		 // 小时分钟秒
		 console.log(dt.toLocaleTimeString())

		 // 毫秒值（数字类型可进行计算）>时间
		 console.log(new Date(1554176924784))

	(4)、时间格式化
		 function getDate(dt) {
		   var year = dt.getFullYear()
		   var month = dt.getMonth()
		   var day = dt.getDate()
		   var week = dt.getDay()
		   var hour = dt.getHours()
		   var minute = dt.getMinutes()
		   var second = dt.getSeconds()
	 
		   month = month < 10 ? '0' + month : month
		   day = day < 10 ? '0' + day : day
		   hour = hour < 10 ? '0' + hour : hour
		   minute = minute < 10 ? '0' + minute : minute
		   second = second < 10 ? '0' + second : second
		   return (
		     year +
		     '年' +
		     month +
		     '月' +
		     day +
		     '日 ' +
		     '星期' +
		     week +
		     '\t' +
		     hour +
		     ':' +
		     minute +
		     ':' +
		     second
		   )
		 }
		 var now = new Date()
		 console.log(getDate(now))
	
	(5)、通过改变toLocaleString，实现时间格式化
		 Date.prototype.toLocaleString = function() {
        	return (
        	  this.getFullYear() +
        	  '年' +
        	  (this.getMonth() + 1) +
        	  '月' +
        	  this.getDate() +
        	  '日 ' +
        	  this.getHours() +
        	  '点' +
        	  this.getMinutes() +
        	  '分' +
        	  this.getSeconds() +
        	  '秒'
        	)
      	 }	


	————————————————————————————————
	3、#String

	注意 : 
		   (1)、字符串不可以通过下标来改变/设置,只可以获取元素str[n]
		   (2)、js中没有字符类型，字符串相当于一个字符组成数组。
		   (3)、特性：不可变性，字符串的值不可以改变，但是可以重新赋值

	(1)、str.length ----->字符串的长度

	(2)、str.concat(字符串1,字符串2,...); ----->返回的是拼接之后的新的字符串

	(3)、str.charAt(索引); ----->返回值是指定索引位置的字符串,超出索引,结果是空字符串

	(4)、str.indexOf(要找的字符串,开始位置的索引); ----->返回的是要找字符串的索引值,没找到则返回-1

	(5)、str.lastIndexOf(要找的字符串); ----->从后向前找,但是索引仍然是从左向右的方式,找不到则返回-1

	(6)、str.replace("原来的字符串","新的字符串"); ----->用来替换字符串的

	(7)、str.slice(开始的索引,结束的索引可为"﹣"); ----->从索引5的位置开始提取,到索引（为10的前一个结束,没有10，并返回这个提取后新的字符串
	
	(8)、str.substr(开始的位置,个数); ----->返回的是截取后的新的字符串

	(9)、str.substring(开始的索引,结束的索引), ----->返回截取后的字符串,不包含结束的索引的字符串

	(10)、str.split("要干掉的字符串",切割后留下的个数(从左往右)); ----->切割字符串，返回切割的字符串

	(11)、str.toLocaleLowerCase(); ----->转小写，返回的是新字符串

	(12)、str.toLowerCase(); ----->转小写，返回的是新字符串

	(13)、str.toLocaleUpperCase(); ----->转大写，返回的是新字符串

	(14)、str.toUpperCase(); ----->转大写，返回的是新字符串

	(15)、str.trim(); ----->干掉字符串两端的空格，返回的是新字符串

	(16)、str.startswidth("abc"); ----->判断这个字符串是不是以abc开头

	(17)、str.endswidth("abc"); ----->判断这个字符串是不是以abc结束

	(18)、str.includes("abc"); ----->判断这个字符串是不是包含abc

	————————————————————————————————
	4、#Math

	(1)、Math.E; ----->常数的底

	(2)、Math.PI; ----->π

	(3)、Math.abs(); ----->绝对值

	(4)、Math.ceil(); ----->想上取整

	(5)、Math.floor(); ----->向下取整

	(6)、Math.max(); ----->最大值

	(7)、Math.min(); ----->最小值

	(8)、Math.pow(a,b); ----->a的b次方

	(9)、Math.sqrt(a); ----->开方

	(10)、Math.random(); ----->(0-1)随机数


	实例、随机产生一个十六进制的颜色值
	/* 
		function getColor() {
			var str = '#'
			var arr = [
				'0',
				'1',
				'2',
				'3',
				'4',
				'5',
				'6',
				'7',
				'8',
				'9',
				'a',
				'b',
				'c',
				'd',
				'e',
				'f'
			]
			for (var i = 0; i < 6; i++) {
				var num = parseInt(Math.random() * 16)
				str += arr[num]
			}
			return str
		}
		window.onload = function() {
			document.getElementById('dv').style.backgroundColor = getColor()
		}
	
	————————————————————————————————
	5、#Number
		(1)、num.toString()
		(2)、num.toFixed(2)保留两位小数

	————————————————————————————————
	6、#Boolean
		(1)、booluean.toString()

	*/