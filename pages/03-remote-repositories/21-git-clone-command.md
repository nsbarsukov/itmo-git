---
layout: default
class: host
---

# Создание локальной копии удаленного репозитория

<br />

```shell
git clone https://github.com/taiga-family/argus.git

# под капотом эта команда сделает и такое тоже:
# git remote add origin https://github.com/taiga-family/argus.git
```

<p class="logs">

```shell
# Cloning into 'argus'...
# remote: Enumerating objects: 1851, done.
# remote: Counting objects: 100% (450/450), done.
# remote: Compressing objects: 100% (106/106), done.
# remote: Total 1851 (delta 331), reused 427 (delta 322), pack-reused 1401
# Receiving objects: 100% (1851/1851), 1.06 MiB | 1.49 MiB/s, done.
# Resolving deltas: 100% (1265/1265), done.
```

</p>

<style>
    .host h1 {
        font-size: 2rem;
    }
    
    .host code {
        font-size: 1.25rem;
    }

    .host .logs code {
        font-size: 1rem;
    }
</style>
