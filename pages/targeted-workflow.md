---
layout: section-title
---

# Targeted workflow

---
layout: section
---

# Main goals

<v-clicks>

- **Avoid direct edition** of XLIFF/YAML files
- **Do not mix up** code and static text
- **Automate** translation keys extraction
- Stick to **translation keys nomenclature**
- **Suppress deployment dependency** to fix a translation

</v-clicks>

---
layout: section
---

# The targeted workflow

<!-- ![workflow.png](../assets/workflow.png) -->

<v-switch>
  <template #1>

```mermaid {theme: 'redux'}
flowchart LR
    subgraph Developers
        direction TB
        n0(["Developers **create** translation keys"]) --> n1(["Developers **extract** keys to XLIFF (or YAML) files"])
        n1 --> n2(["Developers **push** files to the TMS API"])
    end
    
    style n0 stroke:#2962FF,fill:transparent
    style n1 stroke:#2962FF,fill:transparent
    style n2 fill:transparent,stroke:#2962FF
    style Developers fill:#BBDEFB,stroke:#2962FF
```

  </template>
  <template #2>

```mermaid {theme: 'redux'}
flowchart LR
    subgraph Developers
        direction TB
        n0(["Developers **create** translation keys"]) --> n1(["Developers **extract** keys to XLIFF (or YAML) files"])
        n1 --> n2(["Developers **push** files to the TMS API"])
    end
    subgraph Translators
        direction TB
        n3(["Translators **translate** on TMS platform"])
    end
    Developers --> Translators
    style n0 stroke:#2962FF,fill:transparent
    style n1 stroke:#2962FF,fill:transparent
    style n2 fill:transparent,stroke:#2962FF
    style n3 fill:transparent,stroke:#FFD600
    style Developers fill:#BBDEFB,stroke:#2962FF
    style Translators fill:#FFF9C4,stroke:#FFD600
```

  </template>
  <template #3>

```mermaid {theme: 'redux'}
flowchart LR
    subgraph Developers
        direction TB
        n0(["Developers **create** translation keys"]) --> n1(["Developers **extract** keys to XLIFF (or YAML) files"])
        n1 --> n2(["Developers **push** files to the TMS API"])
    end
    subgraph Translators
        direction TB
        n3(["Translators **translate** on TMS platform"])
    end
    subgraph Environments
        direction TB
        n4(["Environments **pull** translations periodically from TMS API"])
        n4 --> n5(["Translation are automatically **up to date**"])
    end
    Developers --> Translators
    Translators --> Environments
    style n0 stroke:#2962FF,fill:transparent
    style n1 stroke:#2962FF,fill:transparent
    style n2 fill:transparent,stroke:#2962FF
    style n3 fill:transparent,stroke:#FFD600
    style n4 fill:transparent,stroke:#00C853
    style n5 fill:transparent,stroke:#00C853
    style Developers fill:#BBDEFB,stroke:#2962FF
    style Translators fill:#FFF9C4,stroke:#FFD600
    style Environments fill:#C8E6C9,stroke:#00C853
```

  </template>
</v-switch>

<!--
- **1/** Developers create translation keys, 
- extract them to XLIFF/YAML files (using `bin/console translation:extract`, previously `translation:update`) 
- and push them to the TMS via API (using `bin/console translation:push`)

- **2/** Translators translate them on the TMS platform, mark them as "translated" and "approved" (or "rejected")

- **3/** Environments pull translations periodically from the TMS via API (using `bin/console translation:pull`)
-->
