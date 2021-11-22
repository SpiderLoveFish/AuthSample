本示例代码将展示通过 jsapi 生成网页内嵌登录二维码的功能，更多关于扫码登录的内容，可参考Api 文档 扫码授权登录。



## 下载示例代码
打开命令行工具，执行以下命令，下载服务端代码。

``` bash
git clone https://github.com/WecomTeam/AuthSample.git
```


## 配置项目信息
打开下载的代码工程，在根目录将 `main.config.demo.js` 复制一份到 `main.config.js` 文件中，并根据实际项目情况补充以下配置信息：

提示：该文件配置的信息极其重要，切勿泄漏。

``` javascript
module.exports = {
    // 企业corpid
    corpid:'YOUR_CORP_ID',
    // 自建应用secret
    secret:'YOUR_APP_SECRET',
    // 自建应用 agentid
    agentid:'YOUR_AGENT_ID'
}
```
## 安装项目依赖
在已下载的示例代码项目根目录下，执行以下代码完成依赖安装：

```
# with npm
npm install 
# with yarn
yarn i
``` 

## 启动服务
执行以下命令，启动后端服务

```
# with npm
npm run start
# with yarn
yarn  start
```

## 访问服务
在浏览器中访问 `http://localhost:3000/login` 检查服务是否启动成功。

![扫码登录](https://wwcdn.weixin.qq.com/node/wework/images/202111081441.947a824d94.png)
