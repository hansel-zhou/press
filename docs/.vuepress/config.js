/*
 * File: config.js
 * Project: mypress
 * File Created: Wednesday, 10th July 2019 1:51:42 pm
 * Author: hansel
 * Description:
 * -----
 * Last Modified: Wednesday, 10th July 2019 5:09:47 pm
 * Modified By: hansel
 * -----
 * Copyright © 2017-2018 Newland Payment Technology Limited. All rights reserved.
 */
module.exports = {
    title: '网站标题',
    description: '网站描述',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/press/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        nav: [
            { text: '前端算法', link: '/algorithm/' }, // 内部链接 以docs为根目录
            { text: '博客', link: 'http://obkoro1.com/' }, // 外部链接
            // 下拉列表
            {
                text: 'GitHub',
                items: [
                    { text: 'GitHub地址', link: 'https://github.com/OBKoro1' },
                    {
                        text: '算法仓库',
                        link: 'https://github.com/OBKoro1/Brush_algorithm'
                    }
                ]
            }
        ],
        sidebar: {
            // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
            '/accumulate/': [
                '/accumulate/', // accumulate文件夹的README.md 不是下拉框形式
                {
                    title: '侧边栏下拉框的标题1',
                    children: [
                        '/accumulate/JS/test', // 以docs为根目录来查找文件 
                        // 上面地址查找的是：docs>accumulate>JS>test.md 文件
                        // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
                    ]
                }
            ],
            // docs文件夹下面的algorithm文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
            '/algorithm/': [
                '/algorithm/',
                {
                    title: '第二组侧边栏下拉框的标题1',
                    children: [
                        '/algorithm/simple/test'
                    ]
                }
            ]
        }
    }
}
