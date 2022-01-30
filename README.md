# to-bigmax
> 站点地址：https://robin2017.github.io/to-bigmax/#/
## 1、相关资料
[文档](https://rax.js.org/docs/guide/about)  
[脚手架](https://github.com/raxjs/rax-app)
[rpx问题](https://www.wenjiangs.com/doc/rax-guide-style)

## 2、部署到github pages
#### 2.1、gh-pages操作
https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f
#### 2.1、相对路径
添加build.plugin.js
```
module.exports = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig((config) => {
    config.output.publicPath('./');
  })
}
```

