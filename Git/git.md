# 初始化本地仓库并上传到 github

## 初始化

```js
1).git init //初始化代码仓
2).git add . //添加本地文件到代码仓
3).git commit -m //提交相关信息
4).git remote add origin 地址 //建立关联，地址起名origin
5).git pull --rebase origin master //有reademe的需要下载并整合
6).git push origin master //推送

```

## 拉取远程分支

```js

1)、本地无代码
git clone -b dev 代码仓库地址 （dev是分支名称）

2)、本地有代码
git fetch origin dev（dev即分支名）
git checkout -b LocalDev origin/dev (LocalDev 为本地分支名，dev为远程分支名)

```
