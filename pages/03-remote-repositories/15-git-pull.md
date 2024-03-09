---
layout: default
class: host
transition: fade
---

# Вытягиваем данным с удаленного репозитория
Время 15:01 | Мержим в нашу локальную ветку правки из удаленной ветки

```shell
git fetch origin
git switch main
git merge origin/main 
```

<p class="vs" v-click>↓</p>

<p v-after>

```shell
git pull origin main

# если main --> origin/main
git pull
```

</p>

<style>
.host code {
    font-size: 1.75rem;
}

.vs {
    text-align: center;
    font-weight: bolder;
    font-size: 3rem;
}
</style>
