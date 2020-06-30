# 设置淘宝镜像

## 临时使用
    ```js
    npm --registry https://registry.npm.taobao.org install express
    ```
## 持久使用
    ```js
    npm config set registry https://registry.npm.taobao.org
    ```
## 查看npm源地址有没有换成功
    ```js
    npm config get registry
    ```
## 查看cnpm镜像设置
    ```js
    cnpm config get registry
    输出：https://r.npm.taobao.org/
    ```
## 重置为官方源
    ```js
    npm config set registry https://registry.npmjs.org/
    ```
## 使用cnpm命令代替npm
    ```js
    // 安装cnpm命令,不会改变npm的源
    npm install -g cnpm --registry=https://registry.npm.taobao.org

    //使用
    cnpm install
    ```
