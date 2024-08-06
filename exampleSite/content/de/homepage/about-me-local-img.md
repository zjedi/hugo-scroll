---
title: "Über mich (DE folder)"
weight: 3
header_menu: true
---

This demonstates localized content placed in dedicated language folder, `content/de`. This way you won't have to use localization suffix with the `.md` file. Both localisation approaches (separate folder, suffixes in the same folder) can be used and even mixed.

See i18n configuration in `[languages]` section of `hugo.toml`.

#### Local content

Localised content can be put in dedicated folder `content/de/`. Images should be naturally found from there:
![Image from content/de ](de-happy-ethnic-woman-sitting-at-table-with-laptop-3769021.jpg)

#### Assets

Images in assets folder can be localised, conventionally by adding `.de` suffix. However, assets may be tricky, see next section for details
![Broken DE Image from assets](images/asset-happy-ethnic-woman-sitting-at-table-with-laptop-3769021.de.jpg)

Note the filename of this section is a bit artificial to avoid conflict with other examples in en folder. If named the same, this one wouldn't render. However normally you wouldn't have one page localized two ways.
