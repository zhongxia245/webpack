## Webpack + React 的打包方式
>时间：2017-02-07 15:40:25

使用Webpack打包React 会造成重新打包出来的JS文件非常大，但是如果把React,ReactDOM 使用CDN直接去加载进来，则打包出来的文件会变成很小。废话少说，实例为证。


### 一、实例代码

```javascript
import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import monent from 'moment'

class Demo extends Component {
  render() {
    return (
      <div>
        <h2> Hello React!</h2>
      </div>
    );
  }
}

setInterval(function() {
  document.getElementById('time').innerHTML = moment().format('YYYY-MM-DD HH:mm:ss')
}, 1000)


ReactDOM.render(<Demo />, document.body.appendChild(document.createElement('div')))
```


单纯的打包，不压缩，也不引用CDN上的React  727K
![](http://ww1.sinaimg.cn/large/006tKfTcjw1fchy62j9tmj30y80c0tbh.jpg)
---

添加下webpack.config的配置
```javascript
plugins: [
    new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false
        },
        compress: {
            warnings: false
        }
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV) || "production"
        }
    })
]
```

压缩合并，不打包注释喝开发时的提示   216k  
![](http://ww2.sinaimg.cn/large/006tKfTcjw1fchyas5axgj30ua09mgnl.jpg)
---

添加引用外部JS文件的配置

```javascript
externals: {
    'react': 'var React',
    'react-dom': 'var ReactDOM',
    'react-addons-css-transition-group': 'var ReactCSSTransitionGroup'
},
```
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
    <script src="//cdn.bootcss.com/react/15.4.2/react.min.js"></script>
    <script src="//cdn.bootcss.com/react/15.4.2/react-dom.min.js"></script>
    <script src="dist/bundle.js"></script>
</body>

</html>
```

引用外部的React, ReactDOM, 同样压缩打包的代码  2.63k  【减少了100倍】
>可能自己没有搞CDN，那么可以把React,ReactDom的js文件下载下来，然后放到自己的服务器上，地址指向过去即可。
![](http://ww2.sinaimg.cn/large/006tKfTcjw1fchycf03lkj30oc084abm.jpg)

