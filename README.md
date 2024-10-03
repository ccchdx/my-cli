1 初始化文件 `npm init`
2 在根目录下创建`bin/index.js`文件作为入口文件并添加如下代码
```javascript
"bin": {
  "create-cli": "/bin/index.js",
}
```
3 调试时使用`npm link`将此包链接到全局


相关依赖
实现一个脚手架，通常会用到以下依赖包：
- commander: 命令行处理工具
- chalk: 命令行输出美化工具, 例如改变字体样式等
- inquirer: 命令行交互工具
- ora: 终端loading美化工具
- git-clone: 下载项目模板工具
- figlet：终端生成艺术字
- fs-extra: 用来操作本地目录