# 概念

## VUE 是一套渐进式框架

## 一、MV\*模式：将代码进行模块拆分的规则

1. MVC: Model View Controller
2. MVP: Model View Presenter

3. MVVM: Model View View-Model

## 二、框架

1. 框架和库的区别，（控制反转）
2. 框架有一套完整的解决方案
3. 用库的时候，控制权在程序员自己手里，怎么调用都是我们说了算，而使用框架的时候，怎么调用，怎么写代码，全都是框架说了算！

## 三、渐进式

1. Vue 的核心功能很小，支持一些额外控件，所以 vue 既可以支持小项目开发，也可以支持大型的企业级项目开发，由小到大是可以逐渐的进行功能扩展的！

## 四、数据驱动

1. VUE 的核心理念
   当我们想要改变页面上的内容的时候，需要关注的是去操作数据，通过数据完成整个效果，而不是操作 DOM！

## 五、语句跟表达式

1. 表达式：只要能放在等号右边，就是一个表达式

## 六、指令

1. Vue 提供的类似于 html 自定义属性的内容，每个自定义属性(v-开头的)都对应一个功能，这些自定义属性就是指令

## 七、数据持久化

1. 一次修改多次复用

## 八、vue 中的数据是在 data/methods 中，还是在 vue 实例中

1. data/methods 只是传递的参数，在接收到参数之后，通过 Object.defineProperty 方法，添加到 vue 实例上，让属性有 set 跟 get 方法，实现双向绑定

## 九、RESTFul 风格接口

1. 传统接口的体现

http://xxxx.com/getallstudent
http://xxxx.com/addstudent
http://xxxx.com/deletestudent
http://xxxx.com/updatestudent

2. RESTFul 风格

http://xxxx.com/students get 方式
http://xxxx.com/students/id get 方式
http://xxxx.com/students/id delete 方式
http://xxxx.com/studetns/id patch 方式

## 十、代码耦合

1. 一个软件结构内不同模块之间互连程度的度量(耦合性也叫块间联系。指软件系统结构中各模块间相互联系紧密程度的一种度量。模块之间联系越紧密，其耦合性就越强，模块的独立性则越差，模块间耦合的高低取决于模块间接口的复杂性，调用的方式以及传递的信息。)

## 十一、模块化

1. 将代码按照指定规则拆分成一个个的小模块（一个文件）

# 语法

## 一、元素挂靠

```html
<div id="app">
  {{name}}
</div>
```

```js
const vm = new Vue({
  el: '#app',
  data: {
    name: 'Hello World',
  },
});
```

## 二、{{}} 插值表达式（小胡子语法）

1. {{}}

```html
{{数据名字}} {{字符串 数字 数组}} {{表达式}} {{1+1}} {{a+b}} {{name.slice()}}
{{简单的语句}}
```

## 三、v-bind

```
<img v-bind:src="imgUrl">
<img :src="imgUrl">
```

## 四、通过 v-bind 操作样式

```
<div :class="'red'"></div>

<div :class="{red: true}"></div>  最常用！！

<div :class="styleObj"></div>

<div :class="[styleObj,styleObj,styleObj]"></div>
```

```
<div :style="'width: 100px; height: 100px;'"></div>

<div :style="{width: "100px", height: "100px"}"></div>

<div :style="styleObj"></div>

<div :style="[styleObj,styleObj,styleObj]"></div>
```

## 五、v-for 列表渲染

1. v-for 除了可以遍历数组，还可以遍历 字符串 对象 数字！

2. 遍历数字时，按顺序展示到最大值

3. 遍历字符串时，会把字母拆分

4. 在使用 v-for 的时候，都需要加上 key
   (1). 提升列表渲染的性能
   (2). 避免数据混乱 （v-for 里面出现了表单元素（没有进行 v-model））
   (3). vue 进行渲染的时候，遵守就地复用策略，既标签不变，只改变内容，标签不够时，创建新的，通过 key 将标签跟值进行绑定，使原有的内容对应的标签不需要重新渲染，只需要添加新的值及对应的标签就可以

```
<ul>
  <li v-for="item in 数组"> {{item}} </li>
</ul>


<ul>
  <li v-for="(item, index) in 数组"> {{item}} </li>
</ul>
```

## 六、v-if v-show 显示和隐藏

1. v-show
   给元素加 display:none 的行内演示实现展示和隐藏

2. v-if
   通过将元素直接从 dom 树种移除或添加，来实现展示和隐藏

3. 使用场景的区别
   v-show 用来做页面中频繁的切换场景
   v-if 用来做只需要判断一次的场景

```js
v-show="true"

v-if="true"
```

## 七、v-cloak

1. 问题：插值表达式的闪烁问题

2. 原因：Vue 加载太慢，没人处理插值表达式，直接原样显示在页面上，等 Vue 加载完了，才会处理，这时数据才会展示出来，会有闪烁的效果出现

3. 解决的原理： 一开始先隐藏，当 Vue 加载完了，数据渲染完成，就把 v-cloak 删掉，数据就显示出来了！

```html
[v-cloak]{display: none}
```

```js
<div v-cloak>{{ name }}</div>
```

## 八、v-model 双向绑定

1. 双向绑定描述的是视图和数据的关系，当数据发生变化的时候，视图也会同步更新，视图发生变化的时候，数据也会同步更新

2. 双向绑定一般是用在表单元素中的
3. 如果要获取表单元素的值，我们不需要再去做 DOM 操作了，直接使用双向绑定即可
4. v-model 会自动判断 input 类型，来绑定 value 或 checked 等

```
<input v-model="msg">
<div>{{msg}}</div>
```

5. 多个复选框，有相同的 name，v-model 绑定到同一个数组，选择时 value 值会放到这个数组

```js
<div id="app">
  <h1>{{ name }}</h1>
  <input type="checkbox" id="jack" value="Jack" v-model="name" />
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="name" />
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="name" />
  <label for="mike">Mike</label>
  <br />
</div>

<script>
  const vm = new Vue({
    el: '#app',
    data: {
      name: []
    }
  })
</script>
```

## 九、双向数据绑定原理

1. 理论依据 Object.defineProperty

```js
let obj = {};
Object.defineProperty(obj, 'name', {
  // 默认只读不可赋值
  writable: true,
  // 默认不可被for in遍历
  enumerable: true,
  // 默认不可删除
  configurable: true,
  // 设置默认值
  value: '123',
});
Object.defineProperty(obj, 'name', {
  // 不能跟writable，value同时出现
  set(value) {
    // 给属性赋值时会触发事件
    // 用户赋予的值通过形参value获取
  },
  get() {
    // 属性被获取时出发事件，用户获取的是当前函数的返回值
  },
});
```

2. 功能实现

```html
<div>
  <input type="text" id="hcc" />
</div>
```

```js
let obj = {
  name: '胡聪聪出来接锅',
};
let nameValue = '';
let hcc = document.querySelector('#hcc');
// 数据到视图的绑定
Object.defineProperty(obj, 'name', {
  set(value) {
    hcc.value = nameValue = value;
  },
  get() {
    return nameValue;
  },
});
// 视图到数据的绑定
hcc.oninput = function () {
  obj.name = this.value;
};
```

## 十、v-on @ 事件注册

```js
<div @click.stop.enter="fn"></div>
```

1. v-on 指令可以用来绑定事件，可以绑定多种事件，每个事件可添加多个函数用分号隔开
2. 事件处理对象 e
   (1). 如果是没有小括号注册的，直接用形参 e 获取就行了，Vue 会自动帮我们传递进来的
   (2). 如果是有小括号注册的，需要手动将\$event 传入到函数中

```js
<div @click.stop.enter="fn"> </div>
<div @click.stop.enter="fn($event)"> </div>
```

3. this 问题
   this 指向的就是当前的 Vue 实例，我们可以通过 this 直接访问 data 中的数据，methods 中的函数

## 十一、事件修饰符

1. 事件修饰符可以为事件附加额外的功能：
   .stop 可以用来终止事件冒泡
   .prevent 可以用来阻止浏览器的默认行为
   .once 只执行一次
   .self 只在自身触发事件
   .capture 捕获阶段执行
   .sync 不经过 vue 处理，直接执行原生事件

## 十二、按键修饰符

1. 注册按键事件的时候，我们可以指定只让特定的键生效
   keyup.enter
   keyup.esc
   keyup.space
   keyup.delete
   keyup.tab
   keyup.上下左右
   keyup.67 直接跟按键码

## 十三、v-pre

1. 原文输出

## 十四、v-once

1. 只能渲染一次，无法修改

## 十五、computed 计算属性

1. 通过计算获得的值，可以直接在页面中调用，监视多个变量，有改变结果就会改变

2. 必须有 return 值

3. 实现双向绑定

4. 与 methods 的区别

   1. 必有返回值
   2. 不能传参数

5. 与 watch 的区别
   1. 监视多个数据，有一个改变结果会发生改变
   2. watch 只监视一个数据

```js
const vm = Vue({
  el: '#app',
  data: {
    num1: 0,
    num2: 0,
  },
  methods: {},
  computed: {
    result() {
      return this.num1 + this.num2;
    },
    result: {
      get() {
        return 计算属性获取到的值;
      },
      set(value) {},
    },
  },
});
```

## 十六、watch 监视属性

1. 监视一个变量的变化，只要发生变化，就会触发

2. 语法，监视一个对象时写法

```js
const vm = Vue({
  el: '#app',
  data: {
    num1: 0,
    num2: 0,
    car: {
      brand: '凤凰',
      price: 50,
    },
  },
  methods: {},
  computed: {},
  watch: {
    num1(newValue, oldValue) {},
    'car.price': function () {},
    car: {
      handler() {},
      deep: true, //深度监视，每个属性改变都会监视
      immediate: true, //渲染完后，立马先监视一次
    },
  },
});
```

## 十七、\$set 处理动态添加属性问题

1. 动态添加的属性，不具有响应式的能力，要想解决这个问题，可以提前声明属性不赋值。

2. 数组对象，都不可以通过键名来添加键值，同时也不可修改数组长度，加长或者清空都不可以，都没有响应式效果。

3. 语法

```js
vm.$set(obj, 'key', 'value');
Vue.$set(obj, 'key', 'value');
this.$set(obj, 'key', 'value');
```

## 十八、\$nextTick Vue 中的异步问题

1. 页面的渲染是异步的，不能通过常规方法获取 dom 元素

2. 解决方案：通过下述方法获取异步元素，解决 autofocus 等这类有方法属性的样式，因为它只执行一次，在解析的时候就已经执行了，再次渲染的时候不会再出发这个属性

```js
this.$nextTick(function () {});
```

## 十九、Vue.filter 过滤器

过滤器本质： 函数

```
{{msg | filterName(value)}}
```

全局注册:

```js
Vue.filter('filterName', function (msg, value) {});
// 函数的第一个参数，就是|前面的数据
// 后面的所有的参数都是 通过()传递进来的参数
```

局部注册

```js
const vm = new Vue({
  filters: {
    filterName(msg, value) {},
  },
});
```

## 二十、Vue.directive 自定义指令及自定义指令中的钩子函数

1. 自定义指令： 在 vue 中如果遇到了需要操作 DOM 的场景，一般情况下都需要用到自定义指令

全局注册

```js
Vue.directive('不加v的指令名', { 钩子函数 });
```

局部注册

```js
const vm = new Vue({
  directives: {
    focus（指令名称）: {
      // 当vue要对当前指令所在的元素进行解析的时候执行
      bind(el) {
        console.log('bind 钩子函数被执行了')
      },
      // 当当前指令所在的元素被插入到页面中的时候，会执行的函数
      inserted(el) {
        console.log('inserted 钩子函数被执行了')
        // el.focus();
      },
      // 当当前指令绑定的数据，发生改变的时候，会执行update函数
      update(el) {
        console.log('update 钩子函数被执行了')
      },
      // 当数据改变完成，元素更新完毕之后，会执行componentUpdated
      componentUpdated(el) {
        console.log('componentUpdated 钩子函数被执行了')
      },
      // 当指令被卸载的时候
      unbind(el) {
        console.log('unbind 钩子函数被执行了')
      }
    }
  }
})
```

2. 钩子函数及形参

```js
{
  bind(el, binding){
  // el 当前指令所在的元素
  // binding 中包含所有的和指令相关的信息

  // 指令的组成： 指令名:参数.修饰符="表达式"

  // name: 获取的是当前指令的名称
  // rawName: 带v的指令名称名称
  // arg: 获取到的就是指令的参数 冒号后面的内容
  // modifiers: 指令的修饰符，这是一个对象，修饰符都会被作为属性存储到这个对象中，属性值是true
  // expression: 等号后面的表达式
  // value: 这个是表达式的值

  // binding.value();

  },
  inserted(){

  },
  update(){

  },
  componentUpdated(){

  },
  unbind(){

  }
}
```

## 二十一、生命周期及钩子函数

##### 一、初始化阶段

1. new Vue
2. 初始化生命周期

①beforeCreate(){}

3. 初始化数据

②created(){}

##### 二、挂载阶段

4. 编译模板

③beforeMount

5. 渲染数据
6. 挂载到页面

④mounted

##### 三、更新阶段

⑤beforeUpdate(){}

7. 监视数据变化
8. 更新页面

⑥updated(){}

##### 四、卸载阶段

⑦beforeDestroy

9. 当 vm.\$destroy 被调用
10. 销毁组件（释放组件相关的资源）

⑧destoryed

##### 所有钩子函数

beforeCreate
created
beforeMount
mounted
beforeUpdate
updated
beforeDestroy
destoryed

## 二十二、Vue 中发生 ajax 请求

依赖插件

1. axios
2. vue-resource(这是全家桶中的内容)

```js
// 写法一
axios.get("./data/students.json",{params:{}}).then(res => {})
axios.post("url", {参数对象}).then(res => {})
axios.patch("url", {参数对象}).then(res => {})
axios.delete("url", {参数对象}).then(res => {})

// 写法二
axios({
url: "",
method: "",
data:
}).then(res => {})

// get方法时，data用params替换
axios({
url: "",
type: "get",
method: "",
params:{}
}).then(res => {})

// 失败的回调有两种写法
axios.get('url').then(成功的回调, 失败的回调)
axios.get('url').then(成功的回调).catch(失败的回调)
```

3. 为了方便实用 axios，我们可以在 Vue 的原型中添加 axios，做到只在 main 文件中引入一次，所有文件都可以使用

```js
// 一般都会命名为$http
Vue.prototype.$http = axios;
```

4. 设置默认的根路径

```js
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/';
```

5. 设置拦截器，发送 ajax 之前对请求头进行处理

```js
axios.interceptors.request.use(function (config) {
  // config 就是拦截到的请求相关的所有的信息
  // 这个信息是可以进行修改的
  config.headers.Authorization = localStorage.getItem('token');
  // return config不能动，这个函数中必须有这个内容
  return config;
});
```

# 组件化开发

## 一、概念

1. 组件：对功能的封装（包含 js、css、html）
   模块：对单一代码方法的封装
2. SPA：单页面应用
   （1）只有一个面，切换页面的时候，其实是页面中的组件/元素实现切换效果

   （2）单页面应用其实就是根据 hash 值的变化，对页面中展示的内容进行切换显示！

   （3）依赖的事件：window.onHashChange = function(){}

3. 路由：Url 和组件的对应关系
   依赖插件：vue-router

## 二、组件注册

1. 全局

```js
// 方法一
 Vue.component("componentName",{
   template:`组件模板`，
   data(){
     return {}
   }
 })

// 方法二
 const componentName = {
   template:`组件模板`，
   data(){
     return {}
   }
 }
```

2. 局部

```js
{
  components: {
    componentName: {
      template: `组件模板`;
    }
  }
}
```

## 三、组件之间的通信-父=>子

1. 属性传值
2. 子组件接收到的数据会随父组件变化
3. 子组件中修改富父组件传递过来的数据，不会改变父组件中的数据
4. 单向数据流！

```js
Vue.component('father', {
  template: `<div>这是父组件：<son :msgfromfather="msg" :numfromfather="num"/></div>`,
  data() {
    return {
      msg: '这是父组件中的数据',
      num: 9999,
    };
  },
});

Vue.component('son', {
  template: '<div>这是子组件{{msgfromfather}}, {{numfromfather}}</div>',
  props: ['msgfromfather', 'numfromfather'],
});

const vm = new Vue({
  el: '#app',
});
```

## 四、组件之间的通信-子=>父

1. 方法传值

```js
Vue.component('father', {
  template: `<div>这是父组件：儿子的来信{{msgFromSon}}<son @sendmsg="getMsgFromSon"/></div>`,
  data() {
    return {
      msgFromSon: '',
    };
  },
  methods: {
    getMsgFromSon(value) {
      // console.log("儿子来信了：说啥来着，看一下：" + value)
      this.msgFromSon = value;
    },
  },
});

Vue.component('son', {
  template:
    "<div>这是子组件 <button @click='sendMsgToFather'>发消息给父亲</button></div>",
  data() {
    return {
      msg: '没钱了，打点钱！',
    };
  },
  methods: {
    sendMsgToFather() {
      // 这个点击事件中，我们需要把子组件中的msg发送给父组件去使用

      this.$emit('sendmsg', this.msg);
    },
  },
});

const vm = new Vue({
  el: '#app',
});
```

## 五、组件之间的通信-兄弟=>兄弟

global event bus

```js
const bus = new Vue();

const brotherA = {
  template: '',
  methods: {
    getMsg(value) {
      console.log(value);
    },
  },
  created() {
    bus.$on('事件名称', this.getMsg);
  },
};

const brotherB = {
  template: "<div><button @click='btnClick'>发送消息给A</button></div>",
  data() {
    return {
      msg: '',
    };
  },
  methods: {
    btnClick() {
      bus.$emit('事件名称', this.msg);
    },
  },
};
```

## 五、组件之间的通信-this.\$refs(不推荐使用，了解即可)

会增加代码的耦合度

1. 获取子元素

```js
// 在子组件中添加一个ref属性，就会在父组件中的$refs中新增一个属性
// 属性名就是ref赋的值，属性值，就是子组件实例对象
// 我们就可以在父组件中通过this.$refs.名字.数据直接来访问 子组件中的数据了

Vue.component('father', {
  template:
    "<div>这是父组件 <son ref='child'></son>  <button @click='clkHandler'>获取子组件中的数据</button></div>",
  methods: {
    clkHandler() {
      console.log(this.$refs.child);
    },
  },
});

Vue.component('son', {
  template: '<div>这是子组件</div>',
  data() {
    return {
      msg: 'hello world',
    };
  },
});

const vm = new Vue({
  el: '#app',
});
```

2. 获取父元素

```js
Vue.component('father', {
  template: '<div>这是父组件 <son></son></div>',
  data() {
    return {
      msg: 'hello world',
    };
  },
});

Vue.component('son', {
  template:
    "<div>这是子组件  <button @click='clkHandler'>获取父组件中的数据</button></div>",
  methods: {
    clkHandler() {
      // console.log(this.$parent)
      // this.$parent获取到的就是当前组件的父组件实例
      // 可以通过这个来访问父组件中所有内容
      console.log(this.$parent.msg);
    },
  },
});

const vm = new Vue({
  el: '#app',
});
```

## 六、Prop 校验

```js
<div id="app">
  <mycomp :num="10"></mycomp>
</div>
<script src="vue.js"></script>
<script>
  Vue.component('mycomp', {
    template: '<div>{{num * 10}}</div>',
    props: {
      // 规定，传入到组件内的num属性，必须是数字类型的！
      // num: Number
      // num: [Number, String]
      num: {
        type: Number,
        required: true
      }
    }
  })

  new Vue({
    el: '#app',
    data: {
      msg: 'hello world'
    }
  })
</script>
```

## 七、vue-router 路由

1. npm i vue-router
2. script 标签引入

```js

const home = {
  template: ""
}

const router = new VueRouter({
  routes: [
    {
      path: "/home"
      component: home
    }
  ]
})

const vm = new Vue({
  ...
  router : router
})

// 需要在html中为路由匹配到的组件指定展示的位置
<router-view></router-view>
```

3. <router-link>

   to/tag/avtive-class

```html
<router-link to="/login"></router-link>
<router-link :to="{name: 'lg路由对应的name属性'}">123</router-link>
<router-link :to="{name: 'lg', query: {age: 18, name: 'zs'}}"
  >query</router-link
>
<router-link :to="{name: 'lg', params: {age: 18, name: 'zs'}}"
  >params</router-link
>
<router-link to="/login?age=18&name=zs">123</router-link>

<router-link to="/login" active-calss="sty">123</router-link>
```

4.  导航守卫

```js
    router.beforeEach((to,from,next) => {

    (1)、 next() 提供页面跳转方法，没有，页面不会跳转

    (2)、 to，form 是两个对象
    })
```

5.  声明式导航

```js
<router-link to="/home"></router-link>
<router-link :to="{path: '/home'}"></router-link>
```

6. 编程式导航

```js
this.$router.push('/home');
this.$router.push({ path: '/home' });
```

7. router 里的重定向+路由嵌套

```js
<div id="app">
  <router-view></router-view>
</div>
<script src="./node_modules/vue/dist/vue.js"></script>
<script src="./node_modules/vue-router/dist/vue-router.js"></script>
<script>
  const home = {
    template: "<div>首页</div>"
  };

  const account = {
    template: `<div>
      <h1>这是account页面</h1>
      <router-link to="/account/login">登录</router-link>
      <router-link to="/account/register">注册</router-link>
      <router-view></router-view>
  </div>`
  };

  const login = {
    template: "<h2>这是login</h2>"
  };

  const register = {
    template: "<h2>这是register</h2>"
  };

  const router = new VueRouter({
    routes: [
      { path: "/home", component: home },
      // 路由嵌套
      {
        path: "/account",
        component: account,
        children: [
          {
            // 要写全地址
            path: "login",
            component: login
          },
          {
            // 直接写/register
            path: "/register",
            component: register
          }
        ]
      },
      // 重定向
      {
        path："/",
        redirect: "/home"
      }
    ]
  });

  new Vue({
    el: "#app",
    data: {
      msg: "hello world"
    },
    router
  });
</script>
```

## 八、路由参数获取

1. ?传参
   ?后面的参数，我们可以通过 this.\$route.query 就可以获取到所有的参数了

```js
const detail = {
  template: '<div>这是一个详情页组件</div>',
  created() {
    // 当前组件中获取路由的？传递的参数，
    // 我们可以通过this.$route.query就可以获取到所有的参数了
    console.log(this.$route.query);
  },
};

const router = new VueRouter({
  routes: [
    {
      path: '/detail',
      component: detail,
    },
  ],
});

const vm = new Vue({
  el: '#app',
  router,
});
```

2. 动态传参、动态路由
   占位符:路径后面通过:name 实现站位
   通过动态路由传过来的参数我们可以通过 this.\$route.params 来进行参数获取

```js
const detail = {
  template: '<div>这是一个详情页组件</div>',
  created() {
    // 如果使用的是动态路由进行参数传递的，那么我们可以通过this.$route.params来进行参数获取
    console.log(this.$route.params);
  },
};

const router = new VueRouter({
  routes: [
    {
      path: '/detail/:id',
      component: detail,
    },
  ],
});

const vm = new Vue({
  el: '#app',
  router,
});
```

## 九、axios 设置请求/响应拦截器，设置默认根路径，添加到 vue 原型上

```js
// 1. 通过 defaults 给 axios 设置一个默认的 baseURL，可以在所有请求中都能用到这个地址
axios.defaults.baseURL = "http://localhost:8888/api/private/v1/";

// 2. 请求拦截器
axios.interceptors.request.use(function(config) {
// config 就是拦截到的请求相关的所有的信息
// 这个信息是可以进行修改的
// console.log(config);
config.headers.Authorization = localStorage.getItem("token");
// return config 不能动，这个函数中必须有这个内容
return config;)
}

// 3. 响应拦截器
axios.interceptors.response.use(function(response) {

if(response.data.meta.status === 401){
  router.push("/login")
}

return response;)
}

// 4. 把 axios 加到 Vue 的原型上
Vue.prototype.\$http = axios;
```

# 单文件组件-正式开发

## 一、vue-cli 使用（通常我们把它叫做 Vue 脚手架）

1. 安装(vetur 插件 使 vue 代码高亮)
   npm i -g @vue/cli
2. 创建项目
   vue create 项目名称
3. 运行项目
   npm run serve(serve 由 package.json 中的 scripts 决定)
4. 打包项目
   npm run build
5. 文件目录介绍
   assets： 组件中会用到的静态资源
   components： 在其他组件中使用的组件文件，这些组件一般不会有路有规则进行匹配
   views： 页面组件，一般都有路由规则进行匹配
   main.js： 整个项目的入口
   App.vue： 项目的根组件
   router.js： 路由信息

## 二、单文件组件

1. 每个单文件组件都是以.vue 结尾的文件
2. 每个文件的组成部分
   template
   script export default
   style scoped 只在当前组件生效
3. 单文件组件和普通的组件使用方式相比，优势是什么？

   1. Vue.component 注册组件，不能重名
   2. Vue.component 注册组件，没有 CSS
   3. Vue.component 注册组件，template 里面没有语法高亮，很恶心
   4. Vue.component 注册组件，没有构建步骤（不能使用 es6、less、sass、typescript）

4. export default {} 和 new Vue()区别
   1. export default 的用法：相当于提供一个接口给外界，让其他文件通过 import 来引入使用。
   2. 在 JavaScript ES6 中，export 与 export default 均可用于导出常量、函数、文件、模块等，你可以在其它文件或模块中通过 import+(常量 | 函数 | 文件 | 模块)名的方式，将其导入，以便能够对其进行使用，但在一个文件或模块中，export、import 可以有多个，export default 仅有一个。
   3. 而对于 new Vue({})部分， 只是创建一个 Vue 的实例 就是相当于创建一个根组件

## 三、Webpack（"模块!"打包工具，了解）

1. 代码中必须使用模块化语法，因为 webpack 是通过模块化语法来查找所有被使用的文件的
2. webapck 除了对文件打包之外，还可以通过 loader 对打包的文件进行相应的处理（ES6 代码转换、LESS/SASS 预处理 css 转换）
3. webpack 的安装
   本地安装 npm i webpack webpack-cli -D
   全局安装（不推荐） npm i webpack webpack-cli -g
4. wepack 使用
   1. 本地安装
      需要给 package.json 中添加 scripts
      1. script: {"build": "webpack 入口文件路径 -o 输出文件路径"}
      2. script: {"build": "webpack"}(要提供 webpack.config.js)
   2. 全局安装
      直接命令行执行 webapck 就可以了
5. webpack.config.js

   1. entry
      入口文件的路径
   2. output
      输出文件多的路径(path)以及文件名(filename)
   3. module
      1. loader 规则，在 webpack 进行打包的时候，会对规则进行匹配，如果匹配到了，就是用对应的 loader 对文件进行处理
      ```js
      module: {rules: [ {test: /\.js$/, use: {loader: "babel-loader", options: {persets: "@babel/preset-env"}} ]}
      ```
   4. 插件: plugins
   5. devServer: webpack-dev-server(自动更新)
   6. mode: 设置当前的环境 developement production

6. webpack.config.js 这个名字是固定个，如果要改名字
   1. 换了之后需要在执行 webpack 的时候指定配置文件
      webpack --config wp.js（名字）

代码演示(新建一个 webpack.config.js)

```js
let path = require('path');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // 在webapck中配置loader
  // 用到的 module 属性
  module: {
    rules: [
      {
        // 用来匹配文件名称的
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
```

## 四、ES6 中的模块化语法

1. 任何一个浏览器都不支持 ES6 的模块化语法，所以要通过 webpack 处理

2. 那个页面用什么插件/模块就在那个页面引入，基于 vue 的插件需要安装 vue.use，其他模块 import+路径

3. 导出<==>导出,基本语法
   (1)、 import "文件路径"，被引入的代码就会被执行，每个模块是一个单独的作用域，其他文件引入时要想使用，要想将变量暴露出来

   (2)、 webpack 查找文件时，可以直接写包名，自己写的需要写路径，所以 import Vue from "vue"

```js
//基本导出
export let num = 100
export let func = function() {}
export function sayHello() {}
export let obj = {}

import {num, num1, test} from '模块名、模块路径'

//更名导出
export { num as number }

import {number} from '模块名、模块路径'

//一起导出
export {数据1, 数据2...数据N}

import \* as obj from '模块名、模块路径'(obj.num，会把当前模块中所有内容导出到一个对象中)

//设置默认项
(1)、export default function sayHell(){}

(2)、function sayHello(){}
export {sayHello as default}

import num from "模块名、模块路径"
//import 时不需要解构，只能单独导出，或者通过\*获取，名字为 default
//default 每个模块只能有一个默认导出项
```

## 五、git

1. 版本控制系统（VCS-Version Control System）
   可以用来记录我们每一次修改历史（版本），当我们想要使用之前的版本的时候，可以找回之前的代码
2. 分类
   本地版本控制系统
   集中式版本控制系统（例如：SVN），一般用于多人开发
   分布式版本控制系统（例如：Git）
3. 命令

   (1). git init
   生成一个隐藏的 git 文件夹，我们所有代码的版本信息，都会存在这个文件夹，一个项目只需要执行一次

   保存一个新的版本，需要手动保存，git 不会自动保存

   (2). git status
   查看当前项目中所有文件的状态（有没有被 git 管理，有没有修改）
   (3). git add 文件名/\*全部上传/.当前目录全部上传
   让这个文件管理起来
   (4). git commit -m "版本描述信息"
   将当前项目中的修改内容，形成一个新的版本，保存到版本库中
   git commit -a -m "版本描述信息"
   直接提交已追踪文件
   (5). git log
   使用这个命令，我们可以查看，以往提交的历史版本信息
   (6). 空格到命令行最低端，q 退出当前命令
   (7). git reset --hard 版本号/HEAD~1/HEAD~2/HEAD 回到当前版本
   回退到指定的版本
   (8). git reflog
   查看所有版本号，包括回退的版本号
   (9). 工作区=>暂存区=>版本库
   add 命令就是添加到暂存区
   暂存区与版本库都在.git 隐藏文件夹
   (10). git diff
   当前文件中与缓存区的区别
   (11). git diff --cached
   暂存区与仓库区的区别
   (12). git diff HEAD
   当前文件与仓库区的区别
   (13). git diff 版本号 版本号
   对比两个版本号区别

4. 使用前配置

   这个命令一个电脑只需要执行一次

   git config --global user.name gaowei
   git config --global user.email 912887957@qq.com
   git config --list 查看信息

5. git 中的忽略文件
   开发中，有些文件或者文件夹，不需要 git 管理，但是又在当前项目下
   .gitignore 文件，在项目刚开始创建是就添加进来(git add 之前)，管理起来了再放此文件就无用了，直接在里面写文件路径，相对路径

6. 图形化工具 sourcetree

7. git commit --amend 可以用来修改最后一条提交的 commit message, 也可以追加新的修改(:wq,写入并退出)

## 六、git 中的分支

只要做一个新的功能模块，我们就会开辟一个新的分支进行开发，开发完合并分支

1. 查看分支信息(在 git 中有一个默认的分支，叫 master，默认的提交都在这个分支上)
   git branch
2. 新建分支
   git branch "分支名字"
3. 切换分支
   git checkout 分支名字
4. 分支合并
   git merge 要合并到当前分支的分支名
5. 删除分支
   git branch -d 分支名称
6. 分支合并冲突以及解决
7. 创建并切换分支
   git checkout -b 分支名字

## 七、git 远程仓库(全球最大开源仓库，谁都可以改，github )

1. 实际情况
   使用互联网上的远程仓库(github)
   自己搭建服务器

## 八、github 教程

通过 git 操作远程仓库

1. 从远程仓库取代码
   git clone 仓库地址 要放置的文件夹名字
2. 上传
   先在远程仓库新建一个空的项目
   git push 远程仓库的地址 master(分支名字):远程分支名(放到远程仓库当中那个分支)
3. 获取远程仓库更新内容
   git pull (地址 分支名)
   如果你上传时，远程仓库有新的更新，本地未更新时，需要先拉去到本地，再上传
4. 仓库地址的问题(账户密码)
   (1). 在 git 中将远程仓库的地址保存起来
   (2). git remote add 起个名字 远程仓库地址
   (3). git 起的名字 分支名
   (4). git remot 可以查看名字
   (5). git remote get-url 起的名字 获取名字对应仓库地址
   (6). git remote set-url 起的名字 地址 设置名字对应的仓库地址
   (7). 通过克隆获取到的项目，默认有一个别名 origin 指向当时克隆的地址
   (8). ssh 协议
   不用密码登录，通过非对称性加密算法(不用记)
   公钥
   私钥
   白名单
   (9). 免密登录
   在自己电脑上生成密钥对，公钥私钥，通过工具 ssh-keygen
   在 git 命令行工具 ssh-keygen -t rsa(c/用户/Pan/.ssh 密钥存在这里)
   按上述路径找到.ssh 目录，将密钥用 vscode 打开，复制到 github
   (10)touch 文件名加后缀 生成文件

## 九、裸仓库(本地仓库/远程仓库都是)

就是没有工作区，暂存区，仓库区直接暴露在外面的，没有.git 文件夹进行包裹。

裸仓库的作用是用来作为一个中介给大家共享代码的，他里面不会做任何的操作。

1. .git 文件夹做远程仓库
2. git init --bare
3. 路径通过相对路径查找

## 十、项目说明

1. 项目说明
   1. 启动 phpStudy
   2. navicat 添加数据库
   3. npm install
   4. npm start/node app.js
2. elementui(pc)/mintui(手机端)/vux(手机)/vue-material(手机)
3. npm install element-ui -S
   (1). 引入库
   main => import ElementUI from 'element-ui',
   (2). 引入 css 文件
   import "路径",
   (3). 安装
   Vue.use(ElementUI)

## 十一、插槽

1. 当组件中需要一些内容，这些内容是通过在组件标签内书写，传递进去的
   <slot></slot>

2. 具名插槽
   多个插槽时，给插槽起名字，将内容跟插槽进行对应
   ```html
   <div slot="ab"></div>
   ```
   ```js
   <slot name="ab" />
   ```
3. 多个标签需要插槽时，放到 template 标签里

   <template slot="ab"> <template>

4. 作用域插槽
   当我们在给组件中插槽填写内容的时候，如果想要用到组件中的数据，直接使用拿不到数据
   这个时候就可以使用作用域插槽，把组件中的数据给传递出来，就可以直接使用

```html
<mycomp>
  <template v-slot:second="{btnText}">
    <button>{{btnText}}</button>
  </template>
</mycomp>
```

```js
Vue.component('mycomp', {
  template:
    "<div>1： <slot name='first' :btnText='btnText'></slot> 2：<slot name='second' :btnText='btnText'></slot></div>",
  data() {
    return {
      btnText: '按钮文字',
    };
  },
});
```

## 十二、token 令牌

登录后生成 token 存在本地，有效期 7200s，在服务器端进行生成与消除，过期后就不认识了，需要重新登录，获取新的 token，然后更新本地 token

## 十三、promise

是 es6 中新出的 api，对于回调函数的另一种写法，从而避免回调地狱

1. 如果一个工具声明自己支持 promise，那我们就知道他的回调函数就是通过.then 来写的

2. 回调地狱：
   代码结构不清晰，可阅读性极差
   代码执行顺序不清晰
3. promise 一般来讲，我们说的都是 promise 对象，.then 方法就是他的方法，.catch 也是，
   .all([]) 方法也是，.race([])
4. 使用方法

```js
// Promise 一般来讲，我们说的都是Promise对象
// .then方法就是 promise对象的方法
// 这个函数中就需要返回一个Promise对象

// resolve是一个函数，调用这个函数，就可以吧当前promise对象标记为 成功
// reject是一个函数，调用这个函数，就可以吧当前promise对象标记为 失败

// promise对象一共有3个状态
// pendding: 挂起，当前promise执行的任务，正在执行中
// fullfilled： 完成， 当前promise对象执行的任务，已经完成，并且是成功状态
// rejected: 完成， 当前promise对象执行的任务，已经完成，并且是失败状态

// promise对象的.then方法中接收到的成功的回调函数，会在当前promise对象处于成功（fullfilled）状态的时候自动执行
// promise对象的.then方法中接收到的失败的回调函数，会在当前promise对象处于失败(rejected)状态的时候自动执行

function timeOut(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // 这个回调函数中，不需要涉及任何具体的业务操作
      // 只需要修改当前promise对象的状态即可！！
      // resolve和reject在调用的时候，是可以传递数据的，这个数据会最终被传递到成功或者失败的回调函数中
      // resolve(123)
      // resolve();
      reject();
    }, time);
  });
}

timeOut(1000)
  .then(function () {
    console.log('成功了');
  })
  .catch(function () {
    console.log('失败了');
  });
```

```js
// Promise对象有个方法，all方法
// 当所有的被传入的promise全部完成的时候，才会执行这个all的回调
// Promise.all([t1, t2]).then(function(){console.log("所有异步操作完成了");})

// Promise对象有个方法，race方法
// 当被传入的promise有一个（第一个）完成的时候，就会执行这个race的回调
// Promise.race([t1, t2]).then(function(){console.log("有一个异步率先完成了");})
let t1 = timeOut(1000);
let t2 = timeOut(1000);
t1.then(function () {
  console.log('我是t1');
});
t2.then(function () {
  console.log('我是t2');
});
```

## 十四、async、await（异步终极解决方案 es7）

```js
async function test() {
  let num = await timeOut(1000);
  console.log('异步代码完成' + num);
}
```

## 十五、pm2 工具 node.js 守护进程

1. npm i pm2 -g
2. pm2 ls 可以查看当前进程
3. pm2 stat app.js
4. pm2 stop 名字

## 十六、首屏渲染效果

1. 通过组件的懒加载加快首屏渲染
2. 通过路由组价进行懒加载

```js
// 原本这么写
import home from "路径"

// 这样引入文件可实现首屏渲染效果
resolve=>(require(["@/components/HelloWorld"],resolve))
const HelloWorld = ()=>import("@/components/HelloWorld")
```

## 十七、vuex 状态（数据）管理模式

1. 小型项目使用 store 模式(既全局 bus)
   大型项目使用(Redux，全部都可以使用)

2. 基本语法

(1). store 文件中书写

```js
const store = new Vuex.Store({
  // 1.使用vuex的严格模式
  strict: 'strict',

  // 2.state存储数据
  state: {
    msg: '跟data一样'
  }

  // 3.mutations存放修改数据的方法，相当于methods
  mutations:{
    updateMsg(state,value){
      // state 指的就是vuex的存储数据的对象
      // value 当用户通过 store.commit 方法来触发这个函数的时候，commit方法的第二个参数就会被赋值给value
      // 多个value值存放到一个对象中
      state.msg = value
    }
  }

  // 4.getters就像是vue中的计算属性
  getters：{
    evenNum(state){
      // 在vue中计算属性是无法传参的，但是在vuex中，getters是可以传递参数的，包一层function
      return function(value){
        return state.arr.filter(v => v % value == 0);
      }
    }
  }

  // 5. actions和mutation都是用来操作state中的数据的
  // 但是actions中放的是异步操作    在修改数据的时候，其实还是提交一个mutation完成数据修改
  actions:{
    evenNum(context,value){
      setTimeout(()=>{
        context.commit("evenNum",value)
      },1000)
    }
  }

})
```

(2).在 vue 实例中引入

```js
// 1. 在main文件中 import store from "store路径"
// 2. 写到vue实例中

import store from 'store路径';
new Vue({
  store,
});

// 3. 在引入文件及子组件都可调用

// 4. state的调用
// 方法中调用
this.$store.state;
// 标签中调用
$store.state;

// 5. mutations调用
this.$store.commit('updateMsg', value);

// 6. getters调用
this.$store.getters.evenNum(value);

// 7. actions调用
this.$store.dispatch('evenNum', value);
```

3. 模块化

```js
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
```

4. 辅助函数

可省略 this.\$store."..."简化引入方式

```js
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(["evenNum",...])
  },
  computed: {
    ...mapState(["msg",...]),
    ...mapGetters(["evenNum",...])
  }
}
```

##

##

##

##

##

## 单文件组件可以单独保存

html，css，js 范别存在单独文件
单文件组件中 template script style 标签都有 src 属性，引入即可

## scoped 原理

scoped，只在当前文件生效
添加一个属性选择器，所有选择器就都带有属性选择器了，且属性唯一
但是动态添加进去的不会生效，vue 添加不上属性选择器

可以有多个 style 标签，使动态生成的产生效果

## 新的插件表格分层，element 的插件

element-tree-grid

1. npm i element-tree-grid

## es6 中括号语法，新用

## 富文本编辑器 quilljs（任何框架中都可以用）

vue-quill，vue 专用
ueditor

## webpack 打包优化

1. 打包速度优化
2. 打包结果优化

## 组件 keep-alive

在组件外面包一个<keep-alive></keep-alive>方便渲染，组件切换时不会销毁

## proxy 类似于代理，劫持方法进行修改

## 技术站

vue{
axios,
elementUI（element-tree-grid）
vue-quill
vue 全家桶（vue-route，vue-cli,vueX）
vue-i18n 做国际化处理(语言切换)
}

## mock.js 作假数据

## 反向代理

## 路由传参
