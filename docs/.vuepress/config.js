/*
 * File: config.js
 * Project: mypress
 * File Created: Wednesday, 10th July 2019 1:51:42 pm
 * Author: hansel
 * Description:
 * -----
 * Last Modified: Thursday, 11th July 2019 12:41:00 pm
 * Modified By: hansel
 * -----
 * Copyright © 2017-2018 Newland Payment Technology Limited. All rights reserved.
 */
module.exports = {
    title: '个人博客',
    description: '学习vuepress的demo',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: 'hero.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/press/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'vue学习笔记', link: '/vuebook/' }, // 内部链接 以docs为根目录
            //{ text: '博客', link: 'http://obkoro1.com/' }, // 外部链接
            // 下拉列表
            { text: 'GitHub', link: 'https://github.com/hansel-zhou/press' },
        ],
        // 侧边栏
        sidebar: [
            {
                title: 'vue学习总结',
                collapsable: false, //是否展开
                children: [
                    '/vuebook/',
                ]
            },
            
            {
                title: 'react学习总结',
                collapsable: false, //是否展开
                children: [
                    ['/reactbook/','学习总结'],
                ]
            },
            
        ],
    }
}
