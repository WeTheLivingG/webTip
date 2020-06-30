/* 
	1、NaN typeof是number数据类型
	2、Array typeof是object数据类型
	3、通过var声明函数预解析，只声明不赋值
	4、词法作用域规则：函数的作用域在声明的时候就已经决定了，与调用的位置无关
	5、typeof 打印原始数据类型，原始数据类型有，基本数据类型(null是object)+object+function 
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
	6、new 的四个步骤
		创建对象 
		改变this指向，指向这个对象
		将实例的地址指向构造函数的原型
		执行这个函数(return,对象跟数组会给实例对象赋值,基本类型不会赋值)，如果函数的返回值是对象则把这个对象赋值给这个实例化的的对象
		返回这个对象 
	7、window自带name属性，是字符串。不要用name，globle，class，top
	8、静态成员 : 构造函数本身添加的成员
	   实例成员 : 构造函数中this添加的成员
	9、__proto__属于谷歌内置的,__开头的都是内置的不要用，[[这种的完全调不到]]
	10、for循环，两个判定条件，按照后面的执行
	11、函数的形参a，的作用是，var a = 传入参数(简单类型是数值，复杂类型是地址)，操作的还是a
	12、柯理化 : 递归 ; 定义:把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数
	13、递归中，return函数，是把函数调用.toString返回，返回的是字符串
	14、运算过程中.的优先级最高，然后从右往左赋值
	15、bootstrap依赖jquery，所以要先引入jquery
	16、不要声明top,top永远都是window
	17、给元素注册事件，可以直接通过onclick="fn()"
	18、render函数
	19、拖拽组件vuedraggable
 */
