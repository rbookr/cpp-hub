//markdown-it plugin
import sidebar from '../siderbar'

//import anchor from 'markdown-it-anchor'
//


const customElements = ['mjx-container'];

export default {

  lang: 'zh-CN',
  title: 'C++笔记',
  description: 'c++学习笔记大仓库',
  appearance: true,
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/favicon/site.webmanifest"}],
    ['link', { rel: "shortcut icon", href: "/favicon/favicon.ico"}],
  ],

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },

  markdown: {
    theme: 'material-palenight',
    lineNumbers: true,

    // options for markdown-it-anchor
    // https://github.com/valeriangalliat/markdown-it-anchor#permalinks
    //anchor: {
      //permalink: anchor.permalink.headerLink()
    //},

    // options for markdown-it-toc-done-right
    toc: { level: [1, 2,3] }
  },


  themeConfig: {
    logo:'/cppIcon.png',
    siteTitle:'C++笔记',
    //根据
    siteConfgByRoute: [
      {start:"/cpp11",title:'c++11',logo:'/cppIcon.png'},
      {start:"/cpp14",title:'c++14',logo:'/cppIcon.png'},
      {start:"/cpp17",title:'c++17',logo:'/cppIcon.png'},
      {start:"/cpp20",title:'c++20',logo:'/cppIcon.png'},
    ],



    editLink: {
      pattern: 'https://github.com/rbookr/cpp-hub/edit/master/:path',
      text: 'Edit this page on GitHub'
    },

    toGitLink: {
      pattern: 'https://github.com/rbookr/cpp-hub/:type/master/:path',
      text: 'GitHub上打开:'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rbookr/cpp-hub' }
    ],

    nav: [
      { text: 'c++11', link: '/cpp11/' },
      { text: 'c++14', link: '/cpp14/' },
      { text: 'c++17', link: '/cpp17/' },
      { text: 'c++20', link: '/cpp20/' },
    ],

    sidebar: sidebar
  }
}
