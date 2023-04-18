## 学习笔记

[目录](./index.md)

## 如果处理sideMenu

看`./siderbar.js`


## 收集的C++ 有意思的项目

 - 命令行解析  [C++17 Command Line Parsing!](http://schneegans.github.io/tutorials/2019/08/06/commandline)



## 电子书设计思路

界面参考https://labuladong.gitbook.io/algo-en

界面

```plaintext
+----------+-------------------+
|          |                   |
|          |                   |
|          |                   |
| side     |                   |
| Menu     |   Iframe          |
|          |                   |
|          |                   |
|          |                   |
|          |                   |
|          |                   |
|          |                   |
|          |                   |
+----------+-------------------+
```

1. 手动设计一个`src/menu.ts`,存储`side menu`的数据
2. `sideMenu`是一个二级菜单
  - 使用 递归组件来设计
  - [Build A Collapsible Tree Menu With Vue.js Recursive Components | by Anthony Gore | Vue.js Developers | Medium](https://medium.com/js-dojo/build-a-collapsible-tree-menu-with-vue-js-recursive-components-e598306dc3d1)
  - 样式参考[Responsive Collapsible Tree Menu In HTML CSS (Free Download)](https://code-boxx.com/css-collapsible-tree-menu/)
3. 当点击链接时,右侧加载对应的iframe


编译后输出的html的文件在dist文件下,通过ngnix的配置,如果访问网站的首页,就访问 dist/目录下,其它的访问/(书的直接路径下)

一个nginx配置的例子

感谢 [Keldos-Li/typora-latex-theme: 将Typora伪装成LaTeX的中文样式主题，本科生轻量级课程论文撰写的好帮手。This is a theme disguising Typora into Chinese LaTeX style.](https://github.com/Keldos-Li/typora-latex-theme)