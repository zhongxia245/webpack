## webpack 手把手创建一个实例

来实现一个闹钟的小小demo，使用到一个时间格式化的类库，moment. 其他的就单纯的javascript 和 html

### 一、创建项目
```bash
mkdir webpack01

cd webpack01

npm init

npm install --save-dev webpack 

npm install --save moment

```

### 二、创建 html  文件
创建 index.html 文件
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h5>当前时间:</h5>
    <span id="time"></span>
    <script src="dist/bundle.js"></script>
</body>

</html>
```

### 三、创建app.js

```javascript
import monent from 'moment'

setInterval(function() {
  document.getElementById('time').innerHTML = moment().format('YYYY-MM-DD HH:mm:ss')
}, 1000)
```


### 四、创建 webpack.config.js

```javascript
//最简单的配置
module.exports = {
    entry: './app.js',
    output: {
        path: 'dist',
        filename: 'bundle.js'
    }
}
```

### 五、运行项目

```bash
npm i -g http-server 

http-server

#访问  localhost:8080
```

## 总结
这里还没有用到 react， 只是单独的使用webpack 去打包 js 资源模块

如何集成 react 呢， 来看 下一章节。 【TODO】
