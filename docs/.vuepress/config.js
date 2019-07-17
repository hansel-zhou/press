/*
 * File: config.js
 * Project: mypress
 * File Created: Wednesday, 10th July 2019 1:51:42 pm
 * Author: hansel
 * Description:
 * -----
 * Last Modified: Wednesday, 17th July 2019 3:08:08 pm
 * Modified By: hansel
 * -----
 * Copyright © 2017-2018 Newland Payment Technology Limited. All rights reserved.
 */
module.exports = {
    head: [
        ['link', { rel: 'icon', href: 'hero.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/press/',
    dest: "dist", //输出目录
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        locales: {
            '/': {
                // 语言下拉菜单的展示文本
                selectText: "选择语言",
                // 该语言在下拉菜单中的 label 标签
                label: "简体中文",
                // github 编辑链接的文字
                // editLinkText: "在 GitHub 上编辑此页",
                nav: [
                    { text: 'Home', link: '/' },
                    { text: 'vue学习笔记', link: '/vuebook/' }, // 内部链接 以docs为根目录
                    { text: 'React学习笔记', link: '/reactbook/' }, // 内部链接 以docs为根目录
                    { text: '浏览器', link: '/browser/' }, // 内部链接 以docs为根目录
                    { text: 'GitHub', link: 'https://github.com/hansel-zhou/press' },
                ],
                sidebar: {
                    '/vuebook/': [ '', 'idea', ],
                    '/browser/': [ '' ],
                    '/reactbook/': [ '' ],
                    '/': [ '' ]
                }
            },
            '/en/': {
                nav: [
                    { text: 'Home', link: '/en/' },
                    { text: 'vue notes', link: '/en/vuebook/' }, // 内部链接 以docs为根目录
                    { text: 'React notes', link: '/en/reactbook/' }, // 内部链接 以docs为根目录
                    { text: 'browser', link: '/en/browser/' }, // 内部链接 以docs为根目录
                    { text: 'GitHub', link: 'https://github.com/hansel-zhou/press' },
                ],
                sidebar: {
                    '/en/vuebook/': [ '', 'idea', ],
                    '/en/browser/': [ '' ],
                    '/en/reactbook/': [ '' ],
                    '/en/': [ '' ]
                }
            }
        }
    },
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN',
            title: '个人博客',
            description: '个人学习心得记录'
        },
        '/en/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: 'Mybook',
            description: 'My learning experience'
        }
    }
}
