## 修改 commit 信息

```
1. get rebase -i HEAD~3     // 修改前三次commit信息

2. ‘i’进入编辑状态，将‘pick’改为‘edit’

3. ‘Esc’退出编辑，‘:wq’保存并退出

4. git commit --amend   //进入commit信息编辑

5. ‘i’进入编辑状态，修改commit信息，‘:wq’保存并退出

6. git rebase --continue    //进入下一个commit信息编辑 或 退出编辑

```

## 配置账号密码

```
git config --global credential.helper store

```
会在本地生产一个 `.git-credentials` 文件，用来记录账号和密码，当下次输入账号和密码后会被写入这个文件，再次需要输入账号密码时就会从这个文件中读取。

## windows 使用 Git Bash 上下箭头不生效的解决方案

1. 用数字替代

    ![](https://gitee.com/jerry-zhang/image-database/raw/master/img/Screenshot0609-1543.jpg)

2. 使用 winpty

    `winpty vue.cmd create hello-world`