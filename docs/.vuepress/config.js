module.exports = {
    title: '余光实战', // 标题
    description: 'Just playing around', // 描述
    theme: 'antdocs',
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