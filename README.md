- build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
- ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
- docs：文档更新
- feat：新增功能
- fix：bug 修复
- perf：性能优化
- refactor：重构代码(既没有新增功能，也没有修复 bug)
- revert：回滚某个更早之前的提交
- style：不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
- test：新增测试用例或是更新现有测试
- chore：不属于以上类型的其他类型(日常事务)

```ts
    文件引入规则:
    内置
    import {useState} from 'react'
    类型
    import type {type} from './ts' 
    组件
    import  Card from './jsx'
    初始化
    import '.css'
    自定义方法
    import { set } from '.ts'
```
