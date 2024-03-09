---
layout: default
class: host
---

# Создаем локальную копию удаленной ветки

```shell
git branch --remotes
```

<p class="logs">

```shell
# origin/gh-pages
# origin/main
# origin/v1
```

</p>

<br />
<hr />
<br />

```shell
git switch v1
```

<p class="logs">

```shell
# branch 'v1' set up to track 'origin/v1'.
# Switched to a new branch 'v1'
```

</p>

<style>
    .host code {
        font-size: 1.5rem;
    }

    .host .logs code {
        font-size: 1rem;
    }
</style>
