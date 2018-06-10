## taopp

> 这是一个 react 仿淘票票练手项目 [效果地址](https://namepain.github.io/taopp/).

项目主要使用了 react、react-router-dom、react-redux 、flex 布局 等。实现了四个主界面：

- 电影列表主页
  - 一个轮播加典型 flex 布局的电影列表
- 城市选择页
  - 按首字母分组的城市列表，右边锚点导航
- 电影详情评论页
  - 电影评分统计、用户评论列表简单的按标签筛选功能
- 选座页 
  - canvas 画影厅座位实现选座、取消选座功能
<br>

## 说明
数据部分根据真实数据改编，使用 easy-mock 模拟网络请求。<br/>
图片则来自于阿里 cdn 的图片，因此加载可能有点慢。<br/>
目前作为练习熟悉 react 开发，后续随缘优化。

## 安装及运行

`npm install`

`npm start`

## 注意*
由于项目使用了 `BrowserRouter` 路由，且为了发布到 gh-pages 作为展示（简单的展示项目丢到服务器太浪费了...），代码中路由跳转部分手动增加了 `/taopp/` 前缀，`npm start` 跑起项目后可能需手动增加 `/taopp/` 路径才能正确显示。。。
