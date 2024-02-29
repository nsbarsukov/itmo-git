---
layout: full
class: host
transition: fade
---

# Шаг 3. Создаем ветку testing

```shell
git branch testing
```

```mermaid {scale: 2}
%%{init: {"flowchart": {"htmlLabels": false}} }%%
flowchart LR
    commit0(("`C0`"))
    commit1(("`C1`"))
    commit2(("`C2`"))
    master["master"]:::branch
    testing["testing"]:::branch
    head["HEAD"]:::head
    head -.-> master
    master -.-> commit2
    testing -.-> commit2
    commit2 --> commit1
    commit1 --> commit0
    classDef branch fill:lightgray,stroke:gray,stroke-dasharray: 5 5
    classDef head fill:orange,color:white,stroke:gray,stroke-dasharray: 5 5
```

<style>
.host {
    display: flex;
    flex-direction: column;
}

.mermaid {
    margin: auto;
}
</style>
