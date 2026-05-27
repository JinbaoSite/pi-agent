import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Pi Agent 教程',
  description: '从零到一实现一个 AI Agent（基于 Pi 思想）',
  themeConfig: {
    nav: [
      { text: '开始', link: '/guide/intro' },
      { text: 'Demo', link: '/demos/demo1-loop' },
      { text: '最终项目', link: '/project/final-agent' }
    ],
    sidebar: [
      {
        text: '导学',
        items: [
          { text: '课程介绍', link: '/guide/intro' },
          { text: 'Pi 架构总览', link: '/guide/architecture' },
          { text: '核心模块拆解', link: '/guide/modules' }
        ]
      },
      {
        text: '渐进式 Demo',
        items: [
          { text: 'Demo 1: Agent Loop', link: '/demos/demo1-loop' },
          { text: 'Demo 2: Tool Calling', link: '/demos/demo2-tools' },
          { text: 'Demo 3: Session 与记忆', link: '/demos/demo3-session' }
        ]
      },
      {
        text: '最终实战',
        items: [
          { text: '教学版目标项目', link: '/project/final-agent' },
          { text: '运行与扩展', link: '/project/run-and-extend' }
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/earendil-works/pi' }]
  }
})
