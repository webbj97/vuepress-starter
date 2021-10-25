# 打造自己的静态网站
> 🎆 上手难度低、扩展性强、0成本
> 😊 手把手教你托管自己的个人网站，包含评论+自动化构建推送+GithubPages在线地址预览
> 📚 <font color="red">收藏</font>不走丢啊～
> [实战源代码仓库-来个star鼓励一下吧]()

## 一、VuePress

> 本小节会帮助你从头搭建一个简单的 VuePress 文档。
> 默认大家安装了node环境和yarn～

* VuePress —— 一个极简静态网站生成器，它包含由Vue驱动的主题系统和插件API。
   1. 门槛低、上手快，扩展性强
   2. 与Vue紧密贴合，支持自定义Vue组件
   3. 推荐使用v1.x版本
   4. 主要使用场景、个人网站、开源项目文档等
   5. [官方文档地址](https://vuepress.vuejs.org/zh/)

1. **创建**并**进入**一个新目录
	```bash
	mkdir vuepress-starter && cd vuepress-starter
	```
2. 使用你喜欢的包管理器进行初始化
 	```bash
	yarn init 或 npm init
	// 一路回车即可
	```
3. 将 VuePress 安装为本地依赖
	```bash
	yarn add -D vuepress # npm install -D vuepress
	```

4. 创建你的第一篇文档
	```bash
	mkdir docs && echo '# Hello VuePress' > docs/README.md
	```
5. 在 package.json 中添加一些 scripts(opens new window)

	这一步骤是为了方便我们本地进行预览调试
	```js
	{
	  "scripts": {
	    "dev": "vuepress dev docs",
	    "build": "vuepress build docs"
	  }
	}
	```
6. 在本地启动服务器
	```bash
	yarn docs:dev # npm run docs:dev
	```
	
VuePress 会在 http://localhost:8080 (opens new window)启动一个热重载的开发服务器。

打开它，应该是这样子的：

![](https://img-blog.csdnimg.cn/b907fbf5c5ad4cb2a96c4ef2a9750d4a.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5L2Z5YWJ44CB,size_20,color_FFFFFF,t_70,g_se,x_16)


现在，你应该已经有了一个简单可用的 VuePress 文档。不要担心它的简陋，本篇文章的目的就是帮助你打造自己的个人网站，每一小节我们都会逐渐地填充内容，加油～

**注意：**

如果你的现有项目依赖了 webpack 3.x，我们推荐使用 Yarn (opens new window)而不是 npm 来安装 VuePress。因为在这种情形下，npm 会生成错误的依赖树 —— 官方文档

# 二、基本文件介绍介绍

文件展开结构⬇️ 

```md
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (自定义组件-可选的)
│   │   ├── theme (主题-可选的)
│   │   │   └── Layout.vue
│   │   ├── public (静态资源目录-可选的)
│   │   ├── styles (全局样式-可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── config.js (Vuepress解析配置文件)
│   ├── README.md
│   ├── guide // 文档文件夹A
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```

首先我们必须知道：

1. docs/.vuepress: 用于存放全局的配置、组件、静态资源等。✅
2. docs/.vuepress/components: 该目录中的 Vue 组件将会被自动注册为全局组件。✅
3. docs/.vuepress/theme: 用于存放本地主题。✅
4. docs/.vuepress/styles: 用于存放样式相关的文件。
5. docs/.vuepress/styles/index.styl: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
6. docs/.vuepress/public: 静态资源目录。✅
7. docs/.vuepress/config.js: 配置文件的入口文件，也可以是 YML 或 toml。✅

其中✅ 的是我们需要简单了解的，其他的再精力有限的情况下了解即可。

## 2.1 基本配置

1. docs下创建 .vuepress文件夹
2. .vuepress下创建 config.js文件
3. 添加下面的代码：
	```js	
	module.exports = {
    	title: '余光实战', // 标题
    	description: 'Just playing around', // 描述
	}
	```
## 2.2 首页

1. docs > README.md

Vuepress默认的主题提供了一个首页（Homepage）的布局 (用于 这个网站的主页)。以下是一个如何使用的例子：

```md
---
home: true
heroImage: /img/timg.jpg
heroText: 填写标题
tagline: 填写 副标题
actionText: 按钮文案 →
actionLink: /guide/
features:
- title: 分栏1
  details: 分栏1 描述
- title: 分栏2
  details: 分栏2 描述
- title: 分栏3
  details: 分栏3 描述
footer: MIT Licensed | Copyright © 2018-present your name
---
```

注意：你需要代码放在文件的首部(不会忽略- - -)，如果你对这样的导航不满意，可以自己编写markdown来调整布局，之后我们也会利用**自定义组件**来替换我们的首页～


## 2.3 头部导航

导航栏可能包含你的页面标题、搜索框、 导航栏链接、多语言切换、仓库链接，它们均取决于你的配置。

### 2.3.1 导航栏 Logo

你可以通过 `themeConfig.logo` 增加导航栏 Logo ，Logo 可以被放置在公共文件目录：

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    logo: '/assets/img/logo.jpg',
  }
}
```
### 2.3.2 导航栏链接

你可以通过 `themeConfig.nav` 增加一些导航栏链接:

外部链接 `<a>` 标签的特性将默认包含`target="_blank"` 

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '引导', link: '/guide/' },
      { text: '谷歌地址', link: 'https://google.com', target:'_blank' },
    ]
  }
}
```

## 2.4 侧边栏

这里，我直接使用了分模块的侧边栏配置，代码如下：


```js
module.exports = {
    title: '余光实战', // 标题
    description: 'Just playing around', // 描述
    themeConfig: {
        logo: '/img/timg.jpg',
        nav: [
            { text: 'Home', link: '/' },
          { text: '引导', link: '/guide/' },
          { text: '谷歌地址', link: 'https://google.com', target:'_blank' },
        ],
        sidebar: {
            // 根目录文件夹 - 模块
            '/guide/': [{
                title: '引导文件夹', // 必要的，模块名称
                sidebarDepth: 1,
                children: [
                    '/guide/guide1', // 自动取文件的一级标题为导航标题
                    '/guide/guide2', 
                ]
            },]
        }
    }
}
```

**文件结构更新为：**

```md
├── docs
│   ├── .vuepress
│   │   ├── public
│   │   │   ├── img
│   │   │   │   ├── timg.jpg
│   │   ├── config.js
│   ├── .vuepress
│   ├── README.md
│   ├── guide
│   │   ├── README.md
│   │   ├── guide1.md
│   │   └── guide2.md
│   └── zh
│       ├── csdn.md
│       └── guide.md
├── package.json
└── yarn.lock
```

此时文件大致是这样子的：

![在这里插入图片描述](https://img-blog.csdnimg.cn/13fbdaa4830d493eaf2eb5faf869102e.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5L2Z5YWJ44CB,size_20,color_FFFFFF,t_70,g_se,x_16)


# 三、一个“好看”的主题

antDesign是前端开发绕不开的开源组件库，它的风格简洁、流畅，我们就要把自己的个人网站风格换一下！

## 3.1 下载主题

[AntDocs官方文档](https://antdocs.vercel.app/)，不需要过多的配置，就可以讲自己的项目装饰的很好。

跟其他主题相对比，出了这款主题维护力度比较大之外：

1. 简洁的风格，最大限度优化各种显示以及动画效果。
2. 支持 Markdown 语法与Ant Design组件混用

使用 yarn 安装 AntDocs 主题：
   
    ```bash
    yarn add vuepress-theme-antdocs
    ```

## 3.2 使用主题

打开 .vuepress/config.js 文件，然后在合适位置引用它：

```js
module.exports = {
  ...
  theme: 'antdocs',
  ...
}
```

再次运行项目，即可查看效果：

![在这里插入图片描述](https://img-blog.csdnimg.cn/1221245962884e17a7e67e7c003862ff.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5L2Z5YWJ44CB,size_20,color_FFFFFF,t_70,g_se,x_16)

emmmm略有不同略有不同~


# 四、定制组件首页组件


在一些特殊场景下，Vuepress支持我们利用自定义vue组件，并直接在markdown上使用

我们需要添加一个自定义组件，并应用到home首页

## 4.1 编写组件

1. 在.vuepress下创建components文件夹
2. 创建Home.vue文件

```vue
<!-- 组件说明 -->
<template>
  <div class="home-readme">
    <div class="home-readme__bg">
      <img
        class="home-readme__img"
        :src="$withBase('./logo.gif')"
        autoplay="autoplay"
        loop="loop"
        muted
      />
    </div>
    <a-button
      type="link"
      size="large"
      @click="start"
      class="home-readme__btn"
    >
      开始体验
    </a-button>
  </div>
</template>

<script>
import Button from "ant-design-vue/lib/button";
import "ant-design-vue/lib/button/style/css";

export default {
  name: "Home",
  components: {
    "a-button": Button,
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {
  },
  methods: {
    start() {
      window.location.href = "/guide";
    },
  },
};
</script>

<style>

.home-readme{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.home-readme__bg{
    width: 100%;
    height: 100vh;
    overflow: hidden;
}
.home-readme__img{
    position: fixed;
    right: 0px;
    bottom: 0px;
    min-width: 100%;
    min-height: 100%;
    height: auto;
    width: auto;
}
.home-readme__btn{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -30px;
    margin-left: -150px;
    width: 300px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    color: #fff;
    font-size: 50px;
}
</style>
```

## 4.2 首页引入组件

```md
---
layout: Home // 使用Home组件布局
navbar: false // 取消导航
sidebar: false // 取消侧边栏
---
```

## 4.3 查看效果

![在这里插入图片描述](https://img-blog.csdnimg.cn/6a42e46b123e4f8897fd1b05b8a320a8.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5L2Z5YWJ44CB,size_20,color_FFFFFF,t_70,g_se,x_16)

## 4.4 最新文档结构


```md
├── docs
│   ├── .vuepress
│   │   ├── components
│   │   │   ├── Home.vue // 新增
│   │   ├── public
│   │   │   ├── img
│   │   │   │   ├── timg.jpg
│   │   │   ├── logo.gif // 新增
│   │   ├── config.js
│   ├── .vuepress
│   ├── README.md
│   ├── guide
│   │   ├── README.md
│   │   ├── guide1.md
│   │   └── guide2.md
│   └── zh
│       ├── csdn.md
│       └── guide.md
├── package.json
└── yarn.lock
```


# 五、Gitalk

> Gitalk 是一个基于 GitHub Issue 和 Preact 开发的评论插件。

**特性**

* 使用 GitHub 登录
* 支持个人或组织
* 快捷键提交评论 （cmd|ctrl + enter）


**接入文档地址**

1. 直接引入
2. npm安装

[官方文档传送门](https://github.com/gitalk/gitalk/blob/master/readme-cn.md)


由于篇幅问题，这里建议大家根据官方文档接入，官方文档已经是保姆级别的了，如果有什么问题，欢迎大家留言～

### 案例展示 

<img src="https://img-blog.csdnimg.cn/7c97bd19dbbf4e0287b5443e7844d7e4.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5L2Z5YWJ44CB,size_20,color_FFFFFF,t_70,g_se,x_16">


# 六、发布更新 - shell

> 这里有一个前置知识点，github pages

[github pages官网文档](https://pages.github.com/)

## 6.1 编写自动发布命令

Shell 是一个用 C 语言编写的程序，它是用户使用 Linux 的桥梁。Shell 既是一种命令语言，又是一种程序设计语言。—— 菜鸟教程

有了shell的能力，就可以将我们的流程步骤集成在一个文件内，打包、编译、上传

```shell
# 发布流程
# 注意：本流程将直接发布至github-pages

# 提前填写commit信息
read -p "请输入commit文本：" msg 

# 打包流程
yarn build
# 进入打包之后文件夹
cd docs/.vuepress/dist

# 提交流程
git init
git add -A
git commit -m $msg

# 推送流程
# xxxxx:你的文件地址
# bbbbb:项目仓库名称
# 本句含义发布到对应仓库的gh-pages分支
git push -f git@github.com:xxxx/bbbbbb.git master:gh-pages

cd -
```

## 6.2 准备

1. 个人项目仓库创建gh-pages分支
2. 执行脚本 `bash deploy.sh`


# 七、发布更新 - Github Actions

1. [上手文档地址](https://docs.github.com/cn/actions/quickstart)  
2. [阮一峰Github Actions入门](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)

创建文件：.github/workflows/xxx.yml 文件

**利用actions完成发布任务**

下面代码表示：

1. push至master时动作触发工作
2. 执行steps内的代码
3. run表示具体执行代码


```js
name: GitHub Actions Demo
on:
  push:
    branches:    
      - master
jobs:
  Explore-GitHub-Actions:
    runs-on: ubuntu-latest
    steps:
      - run: echo "🎉 触发动作：${{ github.event_name }}"
      - run: echo "🐧 托管服务器：${{ runner.os }} server hosted by GitHub!"
      - run: echo "🔎 当前分支：${{ github.ref }} "
      - run: echo "🏠 当前仓库：${{ github.repository }}."
      - name: Check out repository code
        uses: actions/checkout@v2
      - run: echo "💡 获取源码：The ${{ github.repository }} repository has been cloned to the runner."
      - run: echo "🖥️ 工作流准备：The workflow is now ready to test your code on the runner."
      - name: Build and Deploy
        run: |
          yarn install
          yarn build
      - run: echo "✅依赖安装并编译完成"
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }} # 默认环境变量
          publish_dir: docs/.vuepress/dist # 发布本地文件地址
      - run: echo "🍏 This job's status is ${{ job.status }}."
```

1. workflow 文档流里我们可以用 ${{ secrets.GITHUB_TOKEN }} 做权限认证，是一个默认存在的变量，并不需要我们去添加 ACCESS_TOKEN ，当然你也可以自己添加自己的 token 到项目的 secrets 里并使用。
2. FOLDER 是 build 之后生成的代码位置，如果你是 vue 、react 等项目可能在根目录 build 文件夹下，那就写成 build 。


###  检查流程

1. 在仓库名称下，单击 Actions（操作）
![在这里插入图片描述](https://img-blog.csdnimg.cn/5315354c0c4e4ef8bf8d280c6d0f6ef6.png#pic_center)
2. 从工作流程运行列表中，单击要查看的运行的名称。
![在这里插入图片描述](https://img-blog.csdnimg.cn/3c0d2be558cb41dd8e52885d43ba11d1.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5L2Z5YWJ44CB,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)
3. 日志显示每个步骤的处理方式。 展开任何步骤以查看其细节
![在这里插入图片描述](https://img-blog.csdnimg.cn/2818c899031c46fd98ee9ffbded083e2.png)

## 写在最后

本篇是剑指Offer的第一题，俗话说好的合理的数据结构+算法才是写好代码的关键，不妨跟我一起来吧～

**热门开源项目**

* [前端进阶指南](https://github.com/webbj97/summary)
* [高频经典手撕代码实现](https://github.com/webbj97/fe-questions)
* [剑指Offer题解](https://github.com/webbj97/fe-questions/tree/master/docs/algorithm)
