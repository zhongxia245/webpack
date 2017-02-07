## webpack 和 React 一起使用
>时间：2017-02-07 16:27:55

基于 上节课的基础来进行集成 react 的使用

### 一、安装一些必要的JS库

既然使用react， 则需要下载 react，  react 的JSX语法， 不能直接被浏览器识别，因此我们还需要下载 babel， 开发中， 可能使用到 ES6， 因此还需要下载 babel的一些插件来解析 ES6 和 JSX 语法

```bash
npm install --save react react-dom babel babel-core babel-preset-es2015 babel-preset-react babel-preset-stage-0
```

### 二、修改app.js

创建一个输出 Hello React 的 React 组件。

```javascript
import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import monent from 'moment'

setInterval(function() {
  document.getElementById('time').innerHTML = moment().format('YYYY-MM-DD HH:mm:ss')
}, 1000)

class Demo extends Component {
  render() {
    return (
      <div>
        <h2> Hello React!</h2>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.body.appendChild(document.createElement('div')))
```

### 三、添加一些 webpack.config 的配置

```javascript
//添加js文件的加载器，解析jsx 和 es6
module: {
      noParse: [/moment-with-locales/],
      loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
      }]
  },
```

### 四、创建babel的配置 .babelrc 文件
在根目录下创建 .babelrc 文件
```
{
    "presets": ["react", "es2015", "stage-0"]
}
```

### 五、打包运行即可

```bash
# 打包
npm run build

# 运行 访问 localhost:8080
http-server 

```
