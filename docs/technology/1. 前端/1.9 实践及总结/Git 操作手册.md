## 修改 commit 信息

```
1. get rebase -i HEAD~3

2. 将‘’改为‘edit’

3. git commit --continue

4. git commit --amend

重复 3、4

```

## 配置账号密码

```
git config --global credential.helper store

```
会在本地生产一个 `.git-credentials` 文件，用来记录账号和密码，当下次输入账号和密码后会被写入这个文件，再次需要输入账号密码时就会从这个文件中读取。