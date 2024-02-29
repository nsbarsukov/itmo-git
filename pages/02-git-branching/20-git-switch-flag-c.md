---
layout: full
class: host
---

# Одна команда вместо двух

<br />
<br />

```shell
git branch new-branch
git switch new-branch
```

<p class="vs">↓</p>

```shell
git switch -c new-branch
```

<style>
.host code {
    font-size: 2rem;
}

.vs {
    text-align: center;
    font-weight: bolder;
    font-size: 3rem;
}
</style>
