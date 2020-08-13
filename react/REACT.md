## 一、基本语法

0. 特点：声明式、基于组件、学习一次，随处使用

1. npm i react react-dom

1. script 引入两个 js 文件（development,开发依赖）

1. 入门语法（开发中不会这么写，了解就行）

```html
<div id="root"></div>
```

```js
// 1. 第一个参数：表示要创建的元素
// 2. 第一个参数：表示元素自身属性，没有写null
// 如果需要参数就传一个对象
// 3. 第一个参数：表示元素的子节点（文本，元素节点，这个参数之后可以添加无数个节点）
const dv = React.creatElement(
  'div',
  {
    id: 'idName',
    className: 'className',
    htmlFor: 'labelForName'
  },
  'Hello React',
  'test 文本节点',
  React.creatElement('span', null, 'span的元素节点')
)

ReactDOM.render(dv, getElementById('root'))
```

## 二、脚手架

1.  npx create-react-app my-app(项目名称)
    下载脚手架，初始化项目，然后删掉脚手架的包

2.  在脚手架中写代码
    脚手架生成的文件必须保存的两个文件 src => index.js / public => index.html

```js
import React from 'react'
import ReactDOM from 'react-dom'
```

## 三、JSX（JavaScript XML，既在 js 中写 XML 格式的代码）

1. jsx 不是标准的，ECMAScript 语法，他是 ECMAScript 的 语法扩展
2. 需要 babel 编译处理后，才能在浏览器中使用
3. 编译 JSX 语法的包为：@babel/preset-react，faceBook 提供使用

```js
// 用jsx语法创建react元素
const h1 = <h1 className="className">Hello React!!!</h1>
ReactDOM.render(h1, document.getElementById('root'))
```

4.  语法注意点
    （1）、属性名推荐使用驼峰命名法
    class => className
    for => labelFor
    tabindex => tabIndex
    （2）、一个元素如果没有子节点，可以写成单标签：<div />
    （3）、使用小括号包裹 JSX，避免陷入 js 自动添加;的陷阱

5.  JSX 中使用 JavaScript 表达式
    （1）、特点是有值
    （2）、计算顺序是从左往右
    （3）、三元表达式、函数调用都是表达式
    （4）、JSX 自身也是 js 表达式
    （5）、不能直接在{}中使用整个对象，除了 style 属性中
    （6）、多个元素可以使用 arr，会拼成一个字符串，也可调用数组方法

```js
//{JavaScript 表达式}
const name = <span> string </span>
const h1 = <div>Hello{name}</div>
```

## 四、JSX 的条件渲染

```js
const loadData = () => {
  if (isLoading) {
    return <div>loading...</div>
  }

  return <div>加载完成后的列表结构</div>
}

const h1 = <div>{loadData()}</div>
```

## 五、JSX 的列表渲染

```js
<ul>
  {songs.map(item => (
    <li key={item.id}>{item.name}</li>
  ))}
</ul>
```

## 六、JSX 的样式处理

- 1 行内样式（style） 不推荐

```js
const h1 = (
  <h1 style={{ color: 'red', fontSize: 30, backgroundColor: 'hotpink' }}>
    我变大了
  </h1>
)
```

- 2 className 类名 --- 推荐！！！

```js
const h1 = <h1 className="pink">我变大了</h1>
```

## 七、组件

1. 特点：可复用、独立、可组合

2. 创建方式
   使用 js 函数创建组件，叫做函数组件
   使用 es6 的 class，叫做类组件

### 一、通过 class 实现继承

1. class 只是 JS 来实现面向对象的一个语法糖，声明出来跟构造函数是一样的
   语法：

```js
class PersonF {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  say() {
    console.log(this.name)
  }
}
class PersonS extends PersonF {
  // 会继承PersonF的全部成员，原型为PersonF，PersongF的原型上才有say方法，一样可以使用
  constructor() {
    // 如果手动在子类中使用了constructor，那么，就必须在this之前手动调用super（），表示父类的构造函数
    super()
    // this在后面，保证自己声明的属性生效
    this.name = '张三'
  }
}
```

### 二、使用函数创建组件

1. 直接使用函数当做标签
2. 必须有返回值，没有就返回 null，要什么标签或者模块就返回什么
3. 组件名称必须以大写字母开头（React 内部以此为区分，普通元素与组件）

```js
function Hello() {
  return null
}

// 可以用箭头函数来写
// const Hello = () => <div>通过箭头函数来写</div>

ReactDOM.render(<Hello />, getElementById('root'))
```

### 三、使用类创建组件

1. JS 中如何实现对象？
   构造函数+原型

```js
class Person {
  // 构造函数
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  // 实例方法，相当于添加到原型上的方法
  say() {
    console.log(this.name)
  }
}

const p = new Person('pm', 18)
```

2. class 创建组件

```js
class Hello extends React.Component {
  // 必须有render方法，且有返回值
  render() {
    // return null
    return <h1 />
  }
}

ReactDOM.render(<Hello />, getELementById('root'))
```

## 八、事件处理

1. 在函数组件中注册点击事件，跟 js 一样，onClick，事件名严格遵循驼峰命名法

```js
const Hello = () => {
  const handleClick = () => {
    console.log('注册点击事件')
  }

  return <button onClick={handleClick}>点击</button>
}
```

2. 再类组件中注册事件

```js
class Hello extends React.Component {
  handleClick() {
    console.log('点击')
  }

  render() {
    return <button onClick={this.handleClick}>点击</button>
    // 直接写
    // return <button onClick={() => console.log("注册点击事件")}>点击</button>
  }
}
```

3. 事件对象
   可以通过事件处理程序的参数获取事件对象
   React 中的事件对象叫做：合成事件（对象）
   合成事件：兼容所有浏览器

```js
const Hello = () => {
  const handleClick = e => {
    e.preventDefault()
    console.log('注册点击事件')
  }

  return <button onClick={handleClick}>点击</button>
}
```

## 九、有状态组件和无状态组件

1. 定义：
   状态（state）=数据
   状态就是数据，是组件内不得私有数据，只能在组件内部使用
   state 的值是一个对象，可储存多个数据

   -函数组件又叫无状态组件，-类组件叫有状态组件
   函数组件没有自己的状态，只负责数据展示
   类组件有自己的状态，负责更新 UI

2. state 使用

```js
import React from 'react'
import ReactDOM from 'reactDOM'

class Hello extends React.Component {
  // constructor() {
  //   super()

  //   // 初始化数据
  //   this.state = {
  //     count: 0
  //   }
  // }

  // 简化语法
  state = {
    count: 0
  }

  render() {
    return <div>{this.state.count}</div>
  }
}

React.render(Hello, getElementById('root'))
```

3. setState 使用，修改状态，更新 ui

```js
import React from 'react'
import ReactDOM from 'reactDOM'

class Hello extends React.Component {
  state = {
    count: 0
  }

  render() {
    return (
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        +1
      </button>
    )
  }
}

React.render(Hello, getElementById('root'))
```

4. 将 setState 抽离出来单独写，this 指向 undefined

```js
import React from 'react'
import ReactDOM from 'reactDOM'

class Hello extends React.Component {
  state = {
    count: 0
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return <button onClick={() => this.handleClick()}>+1</button>
  }
}

React.render(Hello, getElementById('root'))
```

5. 将 setState 抽离出来单独写，使用 bind 方法

```js
import React from 'react'
import ReactDOM from 'reactDOM'

class Hello extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return <button onClick={this.handleClick()}>+1</button>
  }
}

React.render(Hello, getElementById('root'))
```

6. \*将 setState 抽离出来单独写，使用 class 的实例方法来解决

```js
import React from 'react'
import ReactDOM from 'reactDOM'

class Hello extends React.Component {
  state = {
    count: 0
  }

  // 还在试验阶段，但是因为babel存在所以放心使用
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return <button onClick={this.handleClick}>+1</button>
  }
}

React.render(Hello, getElementById('root'))
```

## 十、表单处理

### 受控组件

1. html 中表单元素是可输入的，也就是有自己的可变状态
2. react 中可变状态通常保存的 state 中，并且只能通过 setState() 方法来修改
3. 受控组件：其值受到 React 控制的表单元素
4. 将表单中的值与 React 的 state 绑定，输入时通过输入事件，触发 setState()方法

```js
import React from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component {
  state = {
    txt: 'default'
  }

  changeTxt = e => {
    this.setState({
      txt: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.txt} onChange={this.changeTxt} />
      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'))
```

### 非受控组件

- 借助于 ref 就可以通过 非受控组件 的方式，来获取到的表单元素的值。
- ref 的作用：获取 DOM 对象或组件。

```js
import React from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component {
  constructor() {
    super()

    this.textRef = react.createRef()
  }

  handleClick = () => {
    console.log(this.textRef.current.value)
  }

  render() {
    return (
      <div>
        Ref 获取表单元素值
        <input type="text" ref={this.textRef} />
        <button onClick={this.handleClick}>获取表单元素</button>
      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'))
```

## 十一、组件通讯

### props

- 作用：接收到传递给组件中的属性
- 在函数组件中如何获取到 props？ 通过函数的参数
- 在 类组件 中如何获取到 props？ 通过 this.props 来获取
- props 是一个对象！！！
- 特点：只读！！！（ 只能读取 props 对象中的属性，而不能修改 props 对象中的属性 ）
- 可以给组件传递任何类型的数据。
- 注意：如果在 class 组件中，手动添加了 constructor ，那么，就应该通过参数获取到 props， 然后传递给 super，这样，才能够在 constructor 中，获取到 props！！！

```js
// 函数组件
import React from 'react'
import ReactDOM from 'react-dom'

const Hello = props => {
  console.log(props)
  return <div>props:{props.name}</div>
}

// props实际就是在标签上添加属性
// 特点：只读对象
ReactDOM.render(<Hello name="jack" age={19} />, document.getElementById('root'))
```

```js
// 类组件
import React from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component {
  // constructor(props){
  //   super(props)
  //   console.log(props)
  // }

  render() {
    console.log(this.props)
    return <div>props:{this.props.name}</div>
  }
}

ReactDOM.render(<Hello name="jack" age={19} />, document.getElementById('root'))
```

### 1. 父 => 子

- 1 父组件中提供状态
- 2 在子组件标签上添加属性，值为 父组件中的状态
- 3 子组件中通过 props 来接收父组件中传递过来的数据

```js
// 父组件：
class Parent extends React.Component {
  // 提供数据
  state = {
    lastName: '王'
  }

  render() {
    return (
      <div className="parent">
        <h1>父组件：</h1>
        {/* 1 通过属性给子组件传递数据 */}
        <Child name={this.state.lastName} />
      </div>
    )
  }
}

// 子组件：
// 2 子组件中通过 props 接收数据
const Child = props => {
  return <p className="child">这是子组件：{props.name}</p>
}
```

### 2. 子 => 父

- 思路：父组件提供一个事件（函数），让子组件调用；子组件调用的时候，将数据作为参数的传递，父组件中通过事件（函数）的参数，就拿到子组件中的数据了。
- 1 父组件提供事件
- 2 将事件通过 props 传递给子组件
- 3 子组件中通过 props 接收到父组件中传递过来的事件
- 4 子组件调用该事件，将数据作为参数传递

- 注意点：父组件提供的方法中 this 执行问题。
  - 为什么会有这个问题？因为这个方法不是父组件自己调用的，是由其他组件调用的，所以，需要处理 this 指向。

```js
// 1 提供事件（回调函数，）
//  事件是子组件调用的，因此，先要通过 props 传递给子组件
// 2 将事件传递给子组件

// 注意：this指向问题，因为这个方法是由子组件调用的，所以，应该提前处理好 this 指向！
/* getChildMsg(data) {
    console.log('父组件中的方法调用了', data, this)
    this.setState({
      msg: data
    })
  } */
class Parent extends React.Component {
  state = {
    msg: ''
  }

  getChildMsg = data => {
    console.log('父组件中的方法调用了', data)
    this.setState({
      msg: data
    })
  }

  render() {
    return (
      <div className="parent">
        <h1>父组件：{this.state.msg}</h1>
        <Child fn={this.getChildMsg} />
      </div>
    )
  }
}

// 子组件：
// 3 子组件中通过 props 接收到父组件中传递过来的事件
// 4 子组件中调用传递过来的事件， 将数据作为事件的参数传递
const Child = props => {
  // console.log(props)
  const handleClick = () => {
    // 调用
    props.fn('撩汉子')
  }

  return (
    <p className="child">
      这是子组件：
      <button onClick={handleClick}>发送数据给父组件</button>
    </p>
  )
}
```

### 3. 兄弟组件

- 思路：**状态提升**，也就是：将两个兄弟组件之间的共享数据，放在父组件中。
- 父组件的职责：1 提供共享数据（state） 2 提供修改状态的方法
- 例子：如果 子组件 2 要传递数据给 子组件 1
- 子组件 1：只要通过 props 接收到父组件中传递过来的数据（父 -> 子）
- 子组件 2：调用父组件中修改状态的方法（子 -> 父）
  - 但是，需要先通过 props 获取到父组件中传递过来的方法

```js
// 父组件
// 1 提供状态
// 2 提供操作状态的方法
class Parent extends React.Component {
  state = {
    msg: '默认值'
  }

  updateMsg = data => {
    this.setState({
      msg: data
    })
  }

  render() {
    return (
      <div className="parent">
        这是父组件：
        <Child1 msg={this.state.msg} />
        <Child2 updateMsg={this.updateMsg} />
      </div>
    )
  }
}

// 子组件1
// 3 接收数据（数据由父组件提供）
class Child1 extends React.Component {
  render() {
    return <div className="child">这是子组件1：{this.props.msg}</div>
  }
}

// 子组件2：
// 4 在父组件中传递事件给子组件
// 5 给按钮绑定单击事件
// 6 调用父组件中的事件来更新数据
class Child2 extends React.Component {
  // 单击事件
  handleClick = () => {
    // 调用父组件的事件
    this.props.updateMsg('子组件2222222222222222222222')
  }

  render() {
    return (
      <div className="child2">
        这是子组件2：
        <button onClick={this.handleClick}>传递数据给 Child1</button>
      </div>
    )
  }
}
```

## 十二、Context，传参

- 使用场景：跨组件传递数据

1. 如果两个组件是远方亲戚（比如，嵌套多层）可以使用 Context 实现组件通讯
2. Context 提供了两个组件：Provider 和 Consumer
3. Provider 组件：用来提供数据
4. Consumer 组件：用来消费数据

```js
const { Provider, Consumer } = React.createContext()

<Provider value={this.state.msg}>
  <div className="parent">
    这是父组件：
    <Child1 />
  </div>
</Provider>

// Child1 -> Child2 -> Child3

// Child3
// data 就是 Provider 中提供的 value
<Consumer>{data => <p>接收到的数据为：{data}</p>}</Consumer>
```

## 十三、组件的 children 属性

- 作用：获取组件标签的子节点
- 获取方式： props.children
- children 与普通的 props 属性相同，可以是任意值。

```js
<Hello>我是子节点 -> 这就是 children 属性的内容。</Hello>
```

## 十四、props 校验

- 场景：给组件添加 props 校验，来增强组件的健壮性。

  - 约定：封装公共组件的时候，都添加 props 校验

- 1 安装：`yarn add prop-types`
- 2 导入 `import PropTypes from 'prop-types'`
- 3 给组件名称添加 `propTypes` 属性，值是一个对象
- 4 对象的键就是要校验的 props 名称，值是 `PropTypes.array` 等，从 PropTypes 中获取到的校验规则

```js
const Parent = () => { ...  }

// 2 给组件添加 props 校验
Parent.propTypes = {
  // 规定 colors 属性的类型为：数组（array），如果将来使用组件的时候，传入的 colors 属性类型不是 array ，就会通过警告来告诉使用者。
  colors: PropTypes.array,

  gender: PropTypes.oneOf(['male', 'female']).isRequired
}
```

## 十五、props 默认值

- 可以通过 组件名.defaultProps = {} 来给组件添加 props 的默认值。

```js
const Parent = () => { ... }

// 添加 props 的默认值：
Parent.defaultProps = {
  gender: 'male'
}
```

## 十六、生命周期

1.  只有类组件才有生命周期

2.  钩子函数
    --挂在阶段
    constructor ==> 1、初始化 state；2、给事件处理程序绑定 this

    render ==> 1、渲染 ui，每次渲染都会调用；2、千万不要在这调用 setState()

    componentDidMount ==> 组件挂载完之后执行；1、进入页面，或者渲染时，发送 ajax；2、可操作性 DOM（render 已经渲染到页面中了）

    --更新阶段
    render ==> 1、调用 setState()就会触发这个阶段；2、forceUpdate();3、组件接收到新的 props，类组件，函数组件都一样

    componentDidUpdate ==> 1、DOM 重新渲染后；2、可以用来发送请求；3、操作 DOM；4、如果要用 setState 必须放在一个 if 判断中，防止递归；5、有两个参数，第一个：上次的 props，preProps；第二个：上一次的 state，preState；6、直接通过 this 获取最新数据

    shouldComponentUpdate ==>

    - 使用场景：阻止不必要的更新
    - 作用：通过返回值来决定是否重新渲染组件

    - 如果返回 true，就会更新组件；

      - 如果返回 false，就不会更新组件

    - 参数表示最新的 props 和 state
    - 可以通过 this.props 和 this.state 来获取到上一次（更新前的）的值

    --卸载时
    1、componentWillUnmount ==> 组件卸载（从页面中消失），执行清理工作

## 十七、render props 和高阶组件（HOC）

两种方式都不是新的 API，一中根据编码技巧，演化的固定书写模式

### render props

- 作用：实现**状态逻辑复用**
- Mouse 组件的职责：
  - 1 提供了 state
  - 2 提供了操作状态的方法
- 注意：Mouse 组件仅仅负责状态逻辑复用，不会指定要渲染的内容。

- 要渲染什么内容，就在复用 Mouse 组件的时候，通过 render 属性的返回值指定

```js
// 复用Mouse组件，渲染p标签：
<Mouse render={mouse => <p></p>} />

// 复用Mouse组件，渲染img标签：
<Mouse render={mouse => <img src=... />} />
```

- 但是，render 属性的返回值要生效，必须得在 Mouse 组件中，来处理才可以

```js
class Mouse extends React.Component {
  // ...

  render() {
    // 调用 render 这个属性，通过它的返回值，来拿到要渲染的内容
    return this.props.render(this.state)
  }
}
```

- 推荐：使用 children 代替 render 属性

```js
<Mouse>
  {
    mouse => <p>{mouse.x} - {mouse.y}</p>
  }
</Mouse>

// 组件中：
render() {
  return this.props.children(this.state)
}
```

### 高阶组件

- 作用：实现**状态逻辑复用**
- 使用包装模式，也就是：使用一个组件（A）来包装另外一个组件，这样，另外一个组件中，就可以通过 props 来拿到组件 A 提供的状态
- 高阶组件实际上是一个函数，比如：`withMouse`

```js
// 参数Cat：就是被包装的组件
// 返回值CatWithMouse：就是增强后的组件。处理后，CatWithMouse中既有结构又有鼠标位置了
const CatWithMouse = withMouse(Cat)

const withMouse = WrappedComponent => {
  class Mouse extends React.Component {
    // 实现状态 和 操作状态的方法

    render() {
      return <WrappedComponent {...this.state} {...this.props} />
    }
  }

  return Mouse
}

;<CatWithMouse name="jack" />
```

## 简化受控组件的使用

- 1 在 state 中添加表单元素的状态
- 2 将 state 设置为每个表单元素的 value 值
- 3 给 表单元素 绑定 change 事件
- 4 创建 handleChange 事件处理程序，用来统一处理表单项的值
- 5 **给每一个表单元素添加 name 属性，name 属性的值为：当前对应的状态名称**
- 6 在 handleChange 这个统一的事件处理程序中，通过 e.target.name 来获取到当前要更新的状态名称
- 7 使用 ES6 中的属性名表达式，来更新状态即可
- 注意：因为 checkbox 复选框，操作的是 checked 属性（也就是是否选中），所以，需要对 checkbox 进行特殊的处理。

```js
import React from 'react'

export default class CommentForm extends React.Component {
  // 1 提供状态
  state = {
    // 评论人
    name: '',
    // 评论内容：
    content: '',
    // city
    city: ''
  }

  handleChange = e => {
    const target = e.target
    // 针对于表单元素进行处理：
    const value = target.type === 'checkbox' ? target.checked : target.value

    // name 就是要更新的状态名称
    const name = target.name

    // http://es6.ruanyifeng.com/#docs/object#%E5%B1%9E%E6%80%A7%E5%90%8D%E8%A1%A8%E8%BE%BE%E5%BC%8F
    this.setState({
      [name]: value
    })
  }

  // 发表评论：
  addComment = () => {
    const { name, content, city } = this.state
    console.log(name, content, city)
  }

  render() {
    const { name, content, city } = this.state

    return (
      <div>
        {/* 给每一个表单项添加 name 属性，值为：当前表单项对应的状态 */}
        <input
          type="text"
          placeholder="评论人"
          value={name}
          name="name"
          onChange={this.handleChange}
        />
        <br />
        <textarea
          cols="30"
          rows="10"
          placeholder="评论内容"
          value={content}
          name="content"
          onChange={this.handleChange}
        />
        <br />
        <select name="city" value={city} onChange={this.handleChange}>
          <option value="1">北京</option>
          <option value="2">上海</option>
          <option value="3">航头</option>
        </select>
        <br />
        <input
          type="checkbox"
          name="isChecked"
          checked={isChecked}
          onChange={this.handleChange}
        />
        <button onClick={this.addComment}>发表评论</button>
      </div>
    )
  }
}
```

## setState 的说明

- 注意：`setState({})` 方法是异步更新数据的！如果同时调用 setState() 方法多次，后面的 setState() 不要依赖于前面的 setState() 结果。
- 不管同时调用多少次 setState()，都只会触发一次重新渲染

- 推荐使用：`setState((state, props) => {})`

  - 通过该语法形式，就可以做到：后面的 setState()可以依赖于上面 setState()的值

- setState() 方法由两个参数：
  - 1 第一个参数用来更新状态，最新的 state，最新的 props
  - 2 第二个参数是一个回调函数，表示组件状态更新后，立即出发的操作（知道）

```js
// 修改状态：
// setState() 是异步更新数据的
handleClick = () => {
  console.log('setState前的状态：', this.state.count)

  // 回调函数的参数：
  // 1 state 表示最新的状态
  // 2 props 表示最新的 props
  // 通过回调函数的返回值，来更新状态
  this.setState(
    (state, props) => {
      return {
        count: state.count + 2
      }
    },
    () => {}
  )

  console.log('setState后的状态：', this.state.count)
}
```

## JSX 语法的转化过程

- JSX -> React.createElement() -> JS 对象（用来告诉 React 最终要渲染在页面中的内容）

## React 组件更新机制

- 特点：只要父组件更新了，那么，父组件自己以及它的所有子组件（后代组件），全部会被更新。

## 组件性能优化

### 1 减轻 state

- 只把更组件渲染内容相关的数据放在 state 中
  - 1 count（计数器）
  - 2 list（评论列表数据）
  - 3 loading（是否加载中，它会控制组件要渲染的内容）
- 注意：不要把跟组件渲染无关的数据，放在 state 中，而把这些数据直接放在 this 中即可

### 2 shouldComponentUpdate

- 使用场景：阻止不必要的更新
- 作用：通过返回值来决定是否重新渲染组件

  - 如果返回 true，就会更新组件；
  - 如果返回 false，就不会更新组件

- 参数表示最新的 props 和 state
- 可以通过 this.props 和 this.state 来获取到上一次（更新前的）的值

```js
// 第一个参数：表示最新的props值
// 第二个参数：表示最新的state值
shouldComponentUpdate(nextProps, nextState) {
  if (nextProps.count % 2 === 0) {
    // 此时为 偶数
    return false
  }
  return true
}
```

### 3 使用纯组件

- 用法：只要将 React.Component 替换为 React.PureComponent 即可
- 原理：内部会自动实现 shouldComponentUpdate 钩子函数，会分别对比 更新前后的 props 和 state，只要有一个发生变化了，就会更新组件；换句话说，也就是：如果 props 或 state，都没有改变，此时，组件就不会更新了。

```js
class Child2 extends React.PureComponent {
  render() {
    console.log('Child2 组件重新渲染了')
    return <h1>随机数：{this.props.number}</h1>
  }
}
```

### 纯组件内部的原理

- 原理：内部进行的是浅对比（shallow compare）
- 对于值类型，直接修改即可，没有坑
- 但是，对于引用类型来说：（只比较对象的地址）
  - 1 如果直接修改当前对象中属性的值，那么，在更新状态的时候，即便数据变化了，组件也不会被重新渲染
  - 2 应该创建新的引用类型值，再更新状态

```js
// 1 不要这么做：
// 在 PureComponent 中，不会让组件重新渲染
const { obj } = this.state
const newObj = obj
newObj.number = number

this.setState({
  obj: newObj
})
```

```js
// 2 正确做法：
const { obj } = this.state
// 注意：此处创建了一个新的对象 newObj
const newObj = { ...obj }
newObj.number = number

this.setState({
  obj: newObj
})
```

## 更新组件的原则

- **不要直接修改当前状态的值（引用类型），而是创建一个新的对象或数组**

```js
// 推荐修改数组值的方式：
this.setState({
  list: [...this.state.list, { ..省略对象结构 }]
})
// ES5：
// const newList = list.concat([ ... ])

// 推荐修改对象值的方式：
this.setState({
  obj: {...this.state.obj, number: ...}
})
// ES5：
// Object.assign(目标对象, 原来的状态对象, 新的状态对象)
// 当前例子中：const newObj = Object.assign({}, this.state.obj, { number: 9 })
```

## 虚拟 DOM 和 Diff 算法

- React 中一个组件的更新方式：只要调用 setState() 当前这个组件就会被更新。也就是会调用 render() 方法。

  - 但是：不是 render() 方法被调用，整个组件的内容，就会被全部更新！！！

- 实际上，React 内部会实现：**部分更新**，也就是，哪个地方需要更新，只会把这个地方对应的 DOM 重新渲染

### Diff 算法的说明 - 1

- 如果两棵树的根元素类型不同，React 会销毁旧树，创建新树

```js
// 旧树
<div>
  <Counter />
</div>

// 新树
<span>
  <Counter />
</span>

执行过程：destory Counter -> insert Counter
```

### Diff 算法的说明 - 2

- 对于类型相同的 React DOM 元素，React 会对比两者的属性是否相同，只更新不同的属性
- 当处理完这个 DOM 节点，React 就会递归处理子节点。

```html
// 旧
<div className="before" title="stuff"></div>
// 新
<div className="after" title="stuff"></div>
只更新：className 属性

// 旧
<div style={{color: 'red', fontWeight: 'bold'}}></div>
// 新
<div style={{color: 'green', fontWeight: 'bold'}}></div>
只更新：color属性
```

### Diff 算法的说明 - 3

- 1 当在子节点的后面添加一个节点，这时候两棵树的转化工作执行的很好

```js
// 旧
<ul>
  <li>first</li>
  <li>second</li>
</ul>

// 新
<ul>
  <li>first</li>
  <li>second</li>
  <li>third</li>
</ul>

执行过程：
React会匹配新旧两个<li>first</li>，匹配两个<li>second</li>，然后添加 <li>third</li> tree
```

- 2 但是如果你在开始位置插入一个元素，那么问题就来了：

```js
// 旧
<ul>
  <li>1</li>
  <li>2</li>
</ul>

// 新
<ul>
  <li>3</li>
  <li>1</li>
  <li>2</li>
</ul>

执行过程：
React将改变每一个子节点，而非保持 <li>Duke</li> 和 <li>Villanova</li> 不变
```

### key 属性

> 为了解决以上问题，React 提供了一个 key 属性。当子节点带有 key 属性，React 会通过 key 来匹配原始树和后来的树。

```js
// 旧
<ul>
  <li key="2015">1</li>
  <li key="2016">2</li>
</ul>

// 新
<ul>
  <li key="2014">3</li>
  <li key="2015">1</li>
  <li key="2016">2</li>
</ul>

执行过程：
现在 React 知道带有key '2014' 的元素是新的，对于 '2015' 和 '2016' 仅仅移动位置即可
```

- 说明：key 属性在 React 内部使用，但不会传递给你的组件
- 推荐：在遍历数据时，推荐在组件中使用 key 属性：`<li key={item.id}>{item.name}</li>`
- 注意：**key 只需要保持与他的兄弟节点唯一即可，不需要全局唯一**
- 注意：**尽可能的减少数组 index 作为 key，数组中插入元素的等操作时，会使得效率底下**

## 虚拟 DOM 的真正价值从来不是性能，而是让他拜托了浏览器的限制

## vue 中路由规则里有 model 属性，设置 history 模式，就没有#号了

## 路由的基本使用

- React 路由中的一切都是组件，所以，如何使用 React 的组件，就如何使用 React 路由。
- 1 安装：`yarn add react-router-dom`
- 2 导入路由中的三个组件：`Router` / `Route` / `Link`
- 3 使用 Router 组件包裹整个应用
- 4 使用 Link 组件配置路由的入口
  - 通过 to 属性来指定 pathname（也就是浏览器地址栏中的地址）
- 5 使用 Route 组件配置路由出口
  - path 属性：指定路由规则
  - component 属性：指定该路由规则匹配时要展示的组件

```js
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// 创建First组件
const First = () => <p>这是 First 组件的内容</p>
const Home = () => <div style={{ color: 'red' }}>这是 Home 组件</div>

class App extends React.Component {
  render() {
    return (
      // 3 使用 Router 组件包裹整个应用
      <Router>
        <div>
          <h1>使用 react 路由</h1>
          {/* 4 配置路由的入口（也就是一个导航菜单） */}
          <Link to="/first">页面一</Link>
          <br />
          <Link to="/home">首页</Link>

          {/* 5 配置路由的出口（配置路由规则和要展示的组件） */}
          <Route path="/first" component={First} />

          {/* 再创建另一外一个路由： */}
          <Route path="/home" component={Home} />
        </div>
      </Router>
    )
  }
}
```

## React 路由使用的说明

- Router 组件：整个应用使用**一次**即可！也就是用 Router 包裹整个应用
- React 路由有两种模式：
  - 1 使用哈希值实现（hash）： HashRouter
  - 2 使用 H5 中的 history API： BrowserRouter（推荐）
- Link 组件：用来设置导航菜单
  - 这个组件最终会被渲染成一个 a 标签
  - to 属性：用来指定浏览器地址栏中的 哈希值 或者 pathname
- Route 组件：用来设置路由规则
  - path 属性：配置路由规则
  - component 属性：指定要展示的组件

```js
// H5 中的 history API
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// 使用 哈希值（浏览器地址栏中的 #/） 来实现路由：
import { HashRouter as Router, Route, Link } from 'react-router-dom'
```

## 编程式导航

- 编程式导航：可以通过 JS 代码的方式，来实现路由跳转
- 组件中通过 `props` 来获取到路由信息

  - 对于函数组件来说就是通过 参数 props 来获取
  - 对于类组件来说，就是通过 this.props 来获取

- `push(path)`：跳转到参数中指定的路由地址
- `go(n)`：前进（1）或后退（-1）

```js
const First = props => {
  const handleClick = () => {
    // push 方法用来实现路由的跳转
    // 参数：表示要跳转到的路由的路径
    props.history.push('/login')
  }

  return (
    <p>
      这是 First 组件的内容
      <button onClick={handleClick}>跳转到登录页面</button>
    </p>
  )
}
```

## 默认路由

- 默认路由地址为：`/`
- 默认路由，在进入页面时，就会被匹配

```js
const Home = () => <p>这是首页，进入页面时，就会展示该组件内容</p>
<Route path="/" component={Home} />
```

## 路由匹配规则

- 默认情况下，路由是**模糊匹配**的
- 也就是说：只要 pathname 是以 path 开头，那么， 这个路由规则就会匹配成功
  - 比如：pathname 是 '/first'，path 是 '/'，此时，pathname 是以 / 开头的，所以，此时，这个路由规则就被匹配了，也就是 会展示该规则对应的组件

```js
<Route path="/" component={Home} />
```

## 精确匹配

- 给 Route 添加 `exact` 属性，就会让当前路由规则变为精确匹配
- 此时，只有当 pathname 和 path 完全匹配时，才会展示该组件。

```js
// 精确匹配：
// pathname 是 '/first'，path 是 '/'，此时，就不会匹配了
// 只有当 pathname 是 '/' 并且 path 也是 '/' ，此时才会匹配
<Route exact path="/" component={Home} />
```

## 重定向

```js
import { Redirect } from 'react'
;<Route path="/" render={() => <Redirect to="/index" />} />
```

## 图片加载事件

onLoad，加载事件

onError，加载失败事件

## css 书写顺序

位置属性 => 自身属性宽高 => 文字样式字体颜色 => 文本属性 => 其他属性

## H5 获取地理位置 API

```js
navigation.geolocation.getCurrentPosition(position => {
  //经纬度
  position.coords.latitude
  position.coords.longtitude
})
```

# 配置反向代理

- 作用：解决跨域问题

## 步骤

- 1 在 Vue-cli 生成的项目根目录中创建一个 `vue.config.js`（与 package.json 同级）
- 2 在配置文件中添加以下代码：

```js
// https://cli.vuejs.org/zh/config/#devserver-proxy

module.exports = {
  // 选项...

  // devServer 实际上就是 webpack-dev-server 这个包
  devServer: {
    // proxy 设置代理的配置项
    // 配置文档：https://github.com/chimurai/http-proxy-middleware#proxycontext-config
    proxy: {
      // '/api' 表示 代理规则
      // 在 Vue 组件中使用 axios 发送请求的时候： axios.get('/api/xxx')
      // 也就是你的请求地址需要以当前规则（比如：/api）开头，那么，本次请求才会被代理
      // 如果某一个接口不需要被代理，就可以直接： axios.get('http://localhost:8080/api/xxx')
      // 这样配置后，最终的得到的接口地址为： http://localhost:8080/api/xxx
      '/api': {
        // 目标服务器地址，也就是接口服务器的真实地址
        target: 'http://localhost:8080/',
        // 跨域时一般都设置该值 为 true
        changeOrigin: true,
        // 重写接口路由
        pathRewrite: {
          '^/api': '' // 这样处理后，最终得到的接口路径为： http://localhost:8080/xxx
        }
      },

      // 其他代理~
      '/foo': {
        target: '<other_url>'
      }
    }
  }
}
```

## Object.keys(obj)

获取对象所有键值，放入一个数组

## 长列表性能优化 react-virtualized

1. 插件
   react-virtualized

2. 原因：
   每次滚动 DOM 会有大量的重绘重排

3. 人眼出现卡顿
   1000ms/60HZ=16.67ms
   期间进行重绘重排等操作
   所以留给计算的时间大概 12ms 左右

4. 解决方案
   1、懒渲染
   2、可视区域渲染

5. windowScroller 高阶组件让 list 跟随整个页面滚动

## 创建一个依赖浏览器的对象

```js
const BMap = window.BMap
const map = new BMap.Map('container')
```

## 度文档

函数签名
(参数):返回值类型

## react 拿到 dom 对象 ??没写完

react.creatRef

## react-props 属性

this.props.location.pathname
this.props.history.go()
this.props.history.push()

## lodash js 的库

## 只有通过路由渲染出来的组价才有路由信息，history 等，通过路由的高阶组件进行封装

## react 中样式覆盖问题

- 因为我们是通过路由来实现整个应用功能的，在 App.js 我们为了配置路由，导入所有的组件。只要导入了组件，那么，组件中 导入样式 的代码就会执行，最终，产生的结果：_在项目加载的时候，所有组件的所有样式，都会被加载到页面中，这样，就会导致组件之间样式相互影响相互覆盖了_
  - 比如：在 CityList/index.scss 中添加的样式，对 Map 组件产生了影响！

解决方案：1、手动处理，不能重名
2、css in js 如(styled component---ES6 标签语法，css-modules) ==> 实现方式：（webpack 的 css-loader 插件）==> 命名方式 BEM（组件名-元素名-标识符）
3、 文件名：[name].module.css
==> 全局类名用:global(.类名)：，这样就不会修改类名（有预处理器的:global{写在这里}）
==> 正常导入 style
==> style 是一个对象
==> style.样式名字 调用
4、避免类名嵌套，因为使用了 css-modules 之后就不需要嵌套了，类名尽量使用驼峰命名法，因为需要通过对象调用，书写起来方便

## CSS IN JS

- `CSS IN JS`：是 React 中用来解决组件之间样式相互影响、覆盖问题的一类解决方案的统称
- 常用的两个方案：1 styled-components 2 CSS Modules（推荐）
- CSS Modules 方案解决样式冲突的原理：将我们写的类名，替换为全局唯一的样式名称
  - React 脚手架中使用 CSSModules 对 CSS 命名采用了 `BEM` 的命名规范
  - 比如：`[filename]_[classname]__[hash]`
  - 实际上，我们只需要提供 classname ，其他的两部分，脚手架会自动生成

## CSS Modules 在脚手架中的使用

- 1 创建名称为：`[name].module.css` 的样式文件
- 2 导入样式文件：`import styles from './index.module.css'`
- 3 使用样式：`<div className={styles.navBar} />`

```js
// navBar 就是我们自己写的 CSS 类名
// 'NavHeader_navBar__Sby3N' 这是 脚手架 自动生成的全局唯一的类名
styles => {
  navBar: 'NavHeader_navBar__Sby3N'
}
```

## CSS Modules 的使用原则

- 0 推荐使用驼峰命名，来指定 CSS 类名
- 1 避免嵌套
  - 因为 CSS Modules 中的类名都是全局唯一的，实际上，如果所有样式全部使用 CSS Modules 来实现，就不需要嵌套
  - 因为 嵌套 的目的，就是为了提升权重，或者，只让某个样式在某种条件下生效。。。
- 3 对于全局的样式，需要使用 `:global()` 包裹

```css
/* 通过 :global() 来告诉 react 脚手架这是一个全局类名，不要对它进行重命名 */
.navBar :global(.icon-back) {
  color: #333;
}

.navBar :global(.am-navbar-title) {
  color: #333;
}

/* SASS 配合 CSSModules 使用 */
.navBar {
  margin-top: -45px;
  background-color: #f6f5f6;

  // 全局样式：
  :global {
    .icon-back,
    .am-navbar-title {
      color: #333;
    }
  }
}
```

## 使用 classnames 第三方库处理类名

- [classnames](https://github.com/JedWatson/classnames)

```js
// 安装：yarn add classnames

import classNames from 'classnames'

classNames('a', { b: true }) // -> 'a b'
classNames('a', { b: false }) // -> 'a'

<div
  className={classNames(styles.houseList, {
    [styles.show]: this.state.isShowHouseList
  })}
></div>
```

## 两种环境

- 1 开发环境： development（ 开发期间的环境 ）
- 2 生产环境： prodcution（ 线上环境，给用户使用 ）

### 根据不同环境配置不同的接口地址

- 为开发环境创建一个： .env.development （文件）。
  - 在这个配置文件中，就可以配置 开发期间 使用的接口地址了
- 为生产环境创建一个： .env.production （文件）。
  - 在这个配置文件中，就可以配置 项目上线 使用的接口地址了
- 然后，在代码中，读取 配置文件 中的接口地址，而不是，直接写死在项目页面代码中了

### 环境变量在项目中的使用总结

- 在项目根目录中创建 `.env.development`
  - 项目打包上线时，应该为生产环境提供一个环境变量文件 `.env.prodction`

```bash
# 开发期间的 URL 地址的环境变量
REACT_APP_URL=http://localhost:8080
```

- 添加后，注意 **重启脚手架**，配置才会生效
- 在代码中通过 `process.env.REACT_APP_URL`
  - 约定：不同环境中的配置项名称是相同的，值分别设置为不同环境的接口地址即可

```js
// 导入并导出的语法：
// import ...
// export ...
export { BASE_URL } from './url'
```

## axios 的优化处理

- 在 `utils/api.js` 文件中，创建 axios 的实例，并且配置 baseUrl，然后，导出该实例

```js
const instance = axios.creat({
  baseURL:"http...."
})

二、
axios.defaults.baseURL="http"
```

- 将来在其他的组件中如果要发送请求，直接导入自己封装好的 axios 实例即可。

## 开发环境、生产环境

配置环境变量文件
开发环境：development
生产环境：production(上线后使用)

1. 所有环境变量必须以。REACT_APP_URL 开头
2. 在.env.development 文件下设置值 REACT_APP_URL 的值为：http。。。
3. 在 utils/url.js 中创建 BASE_URL 变量，设置职位 process.env.REACT_APP_URL

## 单一数据源原则

## 虚拟 dom 和 diff 算法 通过判断 key 值来决定是否复用组件，不一样就会重新渲染组件，从新走 constructor

## object.keys 遍历对象

## infiniteLoader 组件实现无限加载

## 默认参数，直接在参数里赋值

## getBoundingClientRect()方法获取 dom 元素的位置等信息，dom 对象的方法

## 获取 ref 对象 this.refname.current

## classList.add/classList.remove

## window.scrollTo(0,0)

## 给 body 加 overflow 就可以不滚动了

## react-spring

## 一个路由规则匹配多个路由 => 动态路由 => react 中参数是通过 this.props.match.params 获取的

## formik 进行表单校验+处理 => 校验 validate 或者 validationSchema 配合 yup 使用

## axios 请求拦截器

## react-router-dom 鉴权路由，AuthRoute

## 通过延时器实现防抖

## 请求，响应拦截，来判断返回码是多少，300 跳转页面，做状态保持

## axios 第三个参数可以设置 config 的请求头

## h5 表单提交方法(获取地理位置，navigator.geolocation.getCurrentPosition())

```js
let form = new formDate()
form.append("键名"，值)

```

## npm i -g serve

serve -s build
可以看打包后的效果

## npm run eject 释放 webpack 配置

或者使用第三方插件进行修改===> 实现按需加载
react-app-rewired

## 首屏优化

基于路由的代码分割

const 组件名 = React.lazy(()=>important)

## react 的反向代理

yarn add http-proxy-middleware
在 src 下新建 setupProxy.js 文件

##-------------------------------------------------------------------

# Redux

## 三个核心概念

- 1 action 动作，用来描述要执行的动作

  - 比如：计数器案例中的 +1 就是一个动作
  - 比如：登录功能中，登录就是一个动作
  - 比如：todos 案例中，添加任务、删除任务、切换任务状态都是一个个的动作
  - 可以比喻成：“砖”家，仅仅是提出想法

- 2 reducer 接收到 action ，并且来完成这个动作

  - 可以比喻成：搬砖的，就是干活的人

- 3 store 是 Action 和 Reducer 的桥梁，将 Action 传递给 Reducer，由 reducer 来完成整个动作
  - 可以比喻成：管理者

整个过程： 管理者（store） 将 专家提出来的想法（action） 传递给 搬砖的人（reducer），最终，由 reducer 完成了这个任务（动作）。

### action

- action 用来描述要执行的动作（功能）
- action 实际上就是普通的 JS 对象
- 约定 1：必须提供 type 属性，type 属性用来描述当前动作的类型
- 约定 2：type 属性的值是一个字符串，任务类型使用纯大写字母来表示，多个单词之间使用 \_ 分割
- 约定 3：可以携带完成该工作需要的其他数据，这些数据（属性名）是可以任意名称

```js
// action

// 添加任务的动作：
{ type: 'ADD_TODO' }

// 因为为了完成添加任务的动作，需要一个任务名称，所以，动作中可以携带完成该动作需要的数据：
{ type: 'ADD_TODO', name: '吃饭' }

// 删除任务的动作：
{ type: 'DELETE_TODO', id: 3 }
```

### reducer

- reducer 是用来完成 action 的
- reducer 实际上就是一个普通的 JS 函数
- 该函数能够接收两个参数：(state, action) => newState
- 作用：根据旧状态 和 action（动作），来计算出新的状态
- **注意：reducer 一定要有返回值！！！**
- 注意：在 reducer 中不要直接修改 state，而应该创建新的 state！！！
  - 状态不可变的原则
- 注意：reducer 应该是一个纯函数（同样的输入，必定得到同样的输出，每次调用的时候结果一样），不要有修改参数、调用 Math.random() 等不纯的操作。

```js
// action => { type: 'ADD_TODO', name: '吃饭' }
// 假设 state => [{}, {}]
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // 1 执行 添加任务 的逻辑代码
      // state.push() 不要这么做！！！
      // 2 返回 添加任务 后的新状态
      return [...state, { name: action.name }]
    case 'DELETE_TODO':
      // 1 执行 删除任务 的逻辑代码
      // 2 返回 删除任务 后的新状态
      return state.filter(item => item.id !== action.id)
    default:
      // 如果当前 reducer 遇到无法处理的 action，就会执行 default
      // 此时，应该直接返回 state
      return state
  }
}
```

```js
// 纯函数
const fn = num => num + 1

fn(1) // 2
fn(1) // 2
fn(1) // 2

// 不纯的函数：
const foo = num => Math.random() + num

fn(1) // 1.421434213203
fn(1) // 1.123918239112
fn(1) // 1.980809182312
```

### store

- 注意：一个 redux 应用中只应该有一个 store（仓库）
- 作用：将 action 和 reducer 组合到一起。

```js
import { createStore } from 'redux'
// 将 reducer 作为参数传递给 store，那么，store 中就可以拿到 reducer
const store = createStore(reducer)

// 通过 store 中的 dispatch 分发任务
// dispatch 的参数：就是 action （动作）
store.dispatch({ type: 'ADD_TODO', name: '睡觉' })

// 获取状态：
const state = store.getState()
```

## redux 的执行过程

- 1 在创建 store 的时候，redux 会自动触发一次 reducer，目的：**为了得到初始状态**

```js
// 模拟 redux 内部初始化操作：
reducer(undefined, { type: '@@redux/INITx.n.f.s.j.5' })

function reducer(state = 0, action) {
  // state 此时为默认值： 0 （因为第一次 redux 传入的值为 undefined）
  // action ==> { type: '@@redux/INITx.n.f.s.j.5' }

  switch (action.type) {
    case 'ADD':
      return state + 1
    default:
      // 因为该 reducer 无法处理 redux 生成的随机 动作类型
      // 所以，执行了此处的 default，也就是返回了 默认状态：0
      return state
  }
}

// 最终调用 store.getState() 得到了初始状态：0
```

## react-redux

- 如果需要将 react 和 redux 配合到一起使用，就需要借助于这个 绑定库 react-redux

### 核心 API

- `Provider 组件`：
  - 1 导入 Provider 组件
  - 2 使用 Provider 组件包裹整个应用
  - 3 提供 store 属性，值为：redux 中 createStore 方法创建的 store
  - 这样的话，将来就可以在 组件 中，通过 props 来获取到 store 提供的 state 和操作状态的方法了

```js
<Provider store={store}>
  <App />
</Provider>
```

- `connect 函数`：

注意：仅仅使用 Provider 组件包裹整个应用，组件是无法直接获取到 redux 中的 state 和操作 state 的方法的！！！
**所以，如果要在组件中获取到 redux 中的 state 和操作 state 的方法，就使用 connect 函数来包裹组件，那么，组件中就可以获取到 redux 中的内容了**

- 其实，connect 函数就是一个 高阶组件！！！

```js
// 第一次调用：可以传入一些配置
// 第二次调用：用来包装想要获取到 redux 状态的组件
connect()(Counter)

// 第一个函数：用来为组件提供状态
// 第二个函数：用来为组件提供操作状态的方法

connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
```

# REDUX

## store----------------------
store.dispatch方法会触发 Reducer 的自动执行。为此，Store 需要知道 Reducer 函数，做法就是在生成 Store 的时候，将 Reducer 传入createStore方法。
```js
import {creatStore} from 'redux'
const sotre = creatStore(reducer)
```

## state-----------------------
```js
import {creatStore} from 'redux'
const sotre = creatStore(fn)

const state = store.getState()
```

## action----------------------
实际上就是一个对象
```js
const action = {
  type:'ADD_TODO',
  paylod:'learn redux'
}
```

## action creator--------------

```js
const ADD_TODO = '添加 TODO';

function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

const action = addTodo('Learn Redux');
```

## store.dispatch
store.dispatch()是 View 发出 Action 的唯一方法。
store.dispatch方法会触发 Reducer 的自动执行。为此，Store 需要知道 Reducer 函数，做法就是在生成 Store 的时候，将 Reducer 传入createStore方法。
```js
import { createStore } from 'redux';
const store = createStore(reducer);

store.dispatch({
  type: 'ADD_TODO',
  payload: 'Learn Redux'
});
```

## reducer
Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。
Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。
```js
const defaultState = 0;
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    default: 
      return state;
  }
};

const state = reducer(1, {
  type: 'ADD',
  payload: 2
});
```

## store.subscribe()

## 中间件-applyMiddlewares
```js
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
const logger = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(logger)
);
```

（1）createStore方法可以接受整个应用的初始状态作为参数，那样的话，applyMiddleware就是第三个参数了。
```js
const store = createStore(
  reducer,
  initial_state,
  applyMiddleware(logger)
);
```
