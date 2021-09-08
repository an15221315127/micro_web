# micro_web 是一个基于 webpack5 实现的微前端开发 demo

```bash
 git clone git@gitlab.syy.dongchali.cn:anguodong/micro_web.git
```

## 基座项目为：platform 子模块项目分别为:product,order,finance

### 首先分别启动每个应用

# 开发模式

## 子模块是独立的模块，可单独开发，可通过引入基座模块的 layout

```js
/**
注意 ：
1.开发子模块时，子模块中有用到 vuex 时，在开发完成阶段，需要将子模块中使用到的 vuex 的 store 和基座 vuex 的store 同步.(子模块中定义的store只是为了方便在子模块中开发与调试，其最终运行环境是在基座项目中)
2.如果开发时，子模块有用到其他子模块的 vuex 数据，则需要通过基座应用来调试.
3.子模块在开发中所有依赖必须和基座一致.
4.子模块中开发的组件需要对外暴露，基座通过引入子模块组件的方式来合成完整项目。
**/
```
