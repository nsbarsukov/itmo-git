---
class: host
---

# git checkout


Эта команда может:
* Создавать ветки
* Переключаться между ветками
* Откатывать текущее состояние файлов до их состояние в каком-то прошлом
* Многое другое

<br />

<div v-click>
Эти команды эквивалентны:

```shell
git checkout my-branch
git switch my-branch
```

<br />

```shell
git checkout -b my-branch
git switch -c my-branch
```
</div>

<style>
    .host code {
        font-size: 1.5rem;
    }
</style>
