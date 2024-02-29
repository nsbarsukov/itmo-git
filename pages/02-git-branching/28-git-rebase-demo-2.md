---
layout: full
class: host
---

```shell
git switch new-feature
git rebase master
```

```mermaid {scale: 1.5}
%%{init: {"flowchart": {"htmlLabels": false}} }%%
flowchart LR
    commit0(("`C0`"))
    commit1(("`C1`"))
    commit2(("`C2`"))
    commit3(("`C3`"))
    commit4new(("`C4'`"))
    commit4old(("`C4`")):::lost
    master["master"]:::branch
    feature["new-feature"]:::branch
    feature -.-> commit4new
    master -.-> commit3
    commit4new --> commit3
    commit4old --> commit2
    commit3 --> commit2
    commit2 --> commit1
    commit1 --> commit0
    classDef branch fill:lightgray,stroke:gray,stroke-dasharray: 5 5
    classDef lost fill:none,color:lightgray,stroke:lightgray,stroke-dasharray: 5 5
```

<style>
.host {
    display: flex;
    flex-direction: column;
}

.mermaid {
    margin: auto;
}

.host code {
    font-size: 2rem;
}
</style>
