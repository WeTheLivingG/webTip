/* 八、内置对象方法 */
/* 	
	1、Array

	注意 : ①、所有因为方法调用产生的元素与新数组都需要变量接收
		   ②、var arr = new Array(1,2,3,4,5,只有一个数字时表示数组长度)
		   ③、可以通过下标改变数组

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
		  ----->返回只是一个新的数组,数组中的每个元素都要执行这个函数,把执行后的结果重新的全部的放在一个新的数组中
	
	(17)、arr.some(function(a,b,c){
		  })
		  ----->返回值是布尔类型,函数作为参数使用,函数中有三个参数,a是元素的值，b是索引值,第三个参数是原来的数组(没用)如果这个数组中有元素的值都符合条件,最后返回的是true

	(18)、arr.find(function(a){
		  })
		  ----->函数作为参数使用,a是元素的值,返回这个数组中符合条件的元素
	
	(19)、arr.findIndex(function(a){
		  })
		  ----->返回值是布尔类型,函数作为参数使用,a是元素的值,返回这个数组中符合条件的元素的下标

	———————————————————————————————— ————————————————————————————————
	2、Date

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


	———————————————————————————————— ————————————————————————————————
	3、String

	注意 : 字符串不可以通过下标来改变/设置,只可以获取元素str[n]

	(1)、str.length ----->字符串的长度

	(2)、str.concat(字符串1,字符串2,...); ----->返回的是拼接之后的新的字符串

	(3)、str.charAt(索引); ----->返回值是指定索引位置的字符串,超出索引,结果是空字符串

	(4)、str.indexOf(要找的字符串,开始位置的索引); ----->返回的是要找字符串的索引值,没找到则返回-1

	(5)、str.lastIndexOf(要找的字符串); ----->从后向前找,但是索引仍然是从左向右的方式,找不到则返回-1

	(6)、str.replace("原来的字符串","新的字符串"); ----->用来替换字符串的,返回值是新的字符串

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

	———————————————————————————————— ————————————————————————————————
	4、Math

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
*/
