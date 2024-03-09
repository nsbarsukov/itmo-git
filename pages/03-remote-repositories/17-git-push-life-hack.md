---
class: host
---

# Хитрости с git push

<div/>

Если текущая выбранная локальная ветка уже отслеживает какую-то из удаленных веток:

```shell
# никаких аргументов не нужно
➜ git push
```

<br />

<p v-click>

А если нет:

```shell
➜ git push

# fatal: The current branch your-hotfix-branch has no upstream branch.
# To push the current branch and set the remote as upstream, use
#
#    git push --set-upstream origin your-branch
#
# To have this happen automatically for branches without a tracking
# upstream, see 'push.autoSetupRemote' in 'git help config'.
```

</p>

<style>
    .host h3 {
        color: var(--slidev-theme-primary);
        font-style: italic;
    }
    
    .host code {
        font-size: 1rem;
    }
</style>
