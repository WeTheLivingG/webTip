# 初始化本地仓库并上传到 github

## 使用前配置

```js
git config --global user.name gaowei
git config --global user.email 912887957@qq.com
git config --list 查看信息
```

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

2)、本地有代码，但是没有分支
git fetch origin dev（dev即分支名）
git checkout -b LocalDev origin/dev (LocalDev 为本地分支名，dev为远程分支名)、

3)、本地有分支代码
git pull origin <远程分支名>:<本地分支名>
git pull origin <远程分支名>
```

## 推送代码
```js
git push origin <本地分支名>:<远程分支名>
git push origin <本地分支名>
```

## 分支
```js
1)、 查看分支信息(在 git 中有一个默认的分支，叫 master，默认的提交都在这个分支上)
   git branch
2)、 新建分支
   git branch "分支名字"
3)、 切换分支
   git checkout 分支名字
4)、 分支合并
   git merge 要合并到当前分支的分支名
5)、 删除分支
   git branch -d 分支名称
6)、 创建并切换分支
   git checkout -b 分支名字
```

## 版本log
```js
5)、使用这个命令，我们可以查看，以往提交的历史版本信息
git log
7)、回到当指定版本
git reset --hard 版本号
git checkout 文件名 //从暂存区拉取到工作区
8)、拉取服务器最近一次提交到暂存区
git reset --hard HEAD^
git reset --hard HEAD~n //回退到第n次
git checkout 文件名 //从暂存区拉取到工作区
```