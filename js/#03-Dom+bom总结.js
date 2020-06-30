———————————————————————————————— ————————————————————————————————

/* DOOM */

————————————————————————————————

/* 一、事件 */
/* 
    添加事件
    .addEventListener("click",funciton(){},false)
    .attachEvent("onclick",function(){})

    解除事件绑定
    .onclick = none
    .removeElementListener("click",fn,false)
    .detachEvent("onclick",fn)

    一个div绑定多个事件案例：
    div.onclick = f1
    div.onmouseover = f1
    function f1(e){
        switch (e.type) {
            case "click": alert("1")
            break;
            case "mouseover": alert("2")
            break;
        }
    }
*/

————————————————————————————————

/* 1、鼠标事件 */
/* 
    .onclick      鼠标点击事件
    .ondblclick   鼠标双击事件
    .onmouseover  鼠标移入事件
    .onmouseout   鼠标移出事件
    .onmouseleave 鼠标移入事件
    .onmouseenter 鼠标移出事件
    .onmousedown  鼠标按下事件
    .onmouseup    鼠标抬起事件
    .onmousemove  鼠标移动事件
*/

————————————————————————————————

/* 2、键盘事件 */
/* 
    .onkeydown 键盘按下事件
    .onkeyup   键盘抬起
*/

————————————————————————————————

/* 3、文本事件 */
/* 
    .onfocus  获得焦点事件
    .onblur   失去焦点事件
    .onchange 内容改变事件，包括file按钮的上传改变
    .oninput  内容输入事件
*/

————————————————————————————————

/* 4、移动端事件 */
/* 
    .touchstart  开始
    .touchmove   移动
    .touchend    结束
    .touchcancel 取消
*/

————————————————————————————————

/* 5、其他事件 */
/* 
    window.onresize       *窗口变化事件
    window.onscroll       *页面滚动事件
    window.onload         *页面加载完成事件
    window.onunload       页面关闭事件
    window.onbeforeunload 页面关闭前事件
    
    transition(有过渡事件元素).ontransitionend 过渡结束事件

    .onscroll 滚动条滚动事件

    .ontimeupdate 时间变化事件
*/

———————————————————————————————— ————————————————————————————————

/* 二、获取元素 */

————————————————————————————————
/* 
    .getElementById("")         通过id名
    .querySelector("")          通过选择器，第一个
    .querySelectorAll("")       通过选择器
    .getElementsByTagName("")   通过标签名
    .getElementsByName("")      通过name属性
    .getElementsByClassName("") 通过类名

    .dataset.name 获取元素中自定义属性(data-name)

    .html            获取整个html
    .body            约等于获取整个html
    .documentElement 约等于获取整个html

    .head  获取头部
    .title 获取标题

    .parentNode             父节点 
    .parentElement          父级元素 
    .childNodes             子节点 
    .children               子元素  
    .firstChild             第一个子节点 
    .firstElementChild      第一个子元素 
    .lastChild              最后一个子节点 
    .lastElementChild       最后一个子元素 
    .previousSibling        前一个兄弟节点 
    .previousElementSibling 前一个兄弟元素 
    .nextSibling            下一个兄弟节点 
    .nextElementSibling     下一个兄弟元素 
*/

———————————————————————————————— ————————————————————————————————

/* 三、设置属性/方法 */

————————————————————————————————

/* 属性 */
/* 
    .style 设置css样式

    .className 类名

    .innerText   ie标准
    .textContent 谷歌标准
    .innerHtml   会顶替元素内的内容
    .write()     会顶替整个页面内容

    window.innerwidth 窗口的宽
    window.innerwidth 窗口的高

    .offsetWeight 盒子本身宽度，包含该元素的垂直内边距和边框，且是一个整数。
    .offsetHeight 盒子本身高度，包含该元素的垂直内边距和边框，且是一个整数。
    .offsetleft   盒子距离网页左边的位置
    .offsetTop    盒子距离网页顶部的位置
    .offsetParent 最近有定位的父元素

    .scrollWidth  内容的宽，未超出时为盒子宽，包括盒子的内边距，不包括边框
    .scrollHeight 内容的高，未超出时为盒子高，包括盒子的内边距，不包括边框
    .scrollTop    元素的顶部到视口可见内容的顶部的距离
    .scrollLeft   元素的左边到视口可见内容的左边的距离

    .clientWidth  盒子的宽，包含内边距，但不包括水平滚动条、边框和外边距
    .clientHeight 盒子的高，包含内边距，但不包括水平滚动条、边框和外边距
    .clientLeft   盒子左边框的宽
    .clientTop    盒子顶部边框的宽

    e 事件处理对象
    e.screenX/Y 鼠标相对屏幕位置
    e.clientX/Y 鼠标相对可视区域位置
    e.pageX/Y   鼠标相对网页位置
    e.keyCode   键盘码
    e.type      事件类型
*/

————————————————————————————————

/* 方法 */
/* 
    .classList.add("类名","属性值") 添加类名
    .classList.remove("类名")       移除类名
    .classList.contains("类名")     是否有该类名
    .classList.toggle("类名")       增加/删除类名 

    .createElement()                  创建元素
    .appendChild()                    追加元素
    .cloneNode(true/false)            克隆节点，默认是true，后代节点也会克隆
    .insertBefore("追加","参考")       在元素前追加新的元素
    .replaceChild("新元素","参考元素") 替换元素
    .remeoveChild("参考元素")          移除元素

    .setAttribute("名","值") 设置属性
    .getAttribute("名")      获取属性
    .removeAttribute("名")   移除属性
    .dataset.name            获取元素中自定义属性(data-name)

    .scrollIntoView() 移动到可视区域
*/

———————————————————————————————— ————————————————————————————————

/* 四、知识点补充 */

————————————————————————————————
/* 1、阻止事件 */
/* 
    阻止浏览器跳转
    e.preventDefault
    return false
    href = "javascript:;"
    href = "javascript:void(0);"
    href = "##"

    阻止冒泡
    e.stopPropagetion(); 火狐标准 
    window.event.cancelBubbling = true; ie8标准 
*/

————————————————————————————————
/* 2、节点问题 */
/* 
    .nodeType
    1 标签
    2 属性
    3 文本

    .nodeName
    标签名大写
    属性名小写
    文本#text

    .nodeValue
    标签 null
    属性 属性值
    文本 文本内容
*/

————————————————————————————————
/* 3、事件冒泡 */
/*
    (1)、事件捕获阶段(true从外到里)
    (2)、事件目标阶段
    (3)、事件冒泡阶段(false)
    (4)、e.eventPhase(事件阶段1,2,3)
    (5)、阻止事件冒泡，e.stopPropagetion
*/

————————————————————————————————
/* 4、音频视频 */
/* 
    .play()              播放
    .pause()             暂停
    .requestFullscreen() 全屏
    .currentTime         当前时间
    .duration            总时长
    .volume              当前音量(0-1)
 */

———————————————————————————————— ————————————————————————————————

/* BOOM */

————————————————————————————————

/* 一、事件 */
/* 
    window.onresize       *窗口变化事件
    window.onscroll       *页面滚动事件
    window.onload         *页面加载完成事件
    window.onunload       页面关闭事件
    window.onbeforeunload 页面关闭前事件 
*/

————————————————————————————————

/* 二、地址栏成员 */
/* 
    1、protocol :// hostname[:port] / path / [;parameters][?query]#fragment
        (1)、protocol（协议）：http/https
        (2)、hostname（主机名）：www.baidu.com
        (3)、port（端口号）：整数，可选，省略时使用方案的默认端口，各种传输协议都有默认的端口号，如http的默认端口为80
        (4)、path（路径）：由零或多个“/”符号隔开的字符串，一般用来表示主机上的一个目录或文件地址。
        (5)、;parameters（参数）：这是用于指定特殊参数的可选项。
        (6)、?query(查询)：可选，用于给动态网页传递参数，可有多个参数，用“&”符号隔开，每个参数的名和值用“=”符号隔开。
        (7)、fragment，信息片断，字符串，用于指定网络资源中的片断。例如一个网页中有多个名词解释，可使用fragment直接定位到某一名词解释。锚点链接

    2、location对象
        .href     地址
        .protocol 协议
        .host     主机名及端口号
        .hostname 主机名
        .port     端口号
        .pathname 文件相对路径
        .search   搜索的内容，？号后面的内容
        .hash     #后面的内容，信息片段，锚点链接 
     
        .assign(url)  设置跳转页
        .reload()     重新加载/刷新
        .replace(url) 设置跳转页，直接替换，无法后退

        .origin 源：协议+域名+端口号

    3、history对象
        .back()     后退
        .forward()  前进
        .go(1/0/-1) 前进+刷新+后退

    4、navigator对象
        .userAgent 判断用户浏览器类型
        .platform  判断浏览器所在系统
*/

————————————————————————————————

/* 三、定时器 */
/* 
    定时器
    setInterval(function(){},1000)

    清除定时器
    clearInerval(ID)

    延时器
    setTimeout(function(){},1000)

    清除延时器
    clearTimeout(ID)

*/

———————————————————————————————— ————————————————————————————————

/* 手机端 */

————————————————————————————————
/*  
    1、事件(移动端事件最好通过addEventListener添加)
    addEventListener(touchstart ,function(){}) 开始
    addEventListener(touchmove,function(){})   移动
    addEventListener(touchend,function(){})    结束
    addEventListener(touchcancel,function(){}) 取消

    2、e
    e.touches        手指触点数组
    e.targetTouches  目标手指
    e.changedTouches 改变的手指

    3、手指位置(给谁加谁生效，点上或拿开时获取)
    e.touches.pageX
    e.touches.pageY
*/