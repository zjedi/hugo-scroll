---
title: "Über mich (DE Ordner)"
weight: 3
header_menu: true
---

Hier zeigen wir lokalisierte Inhalte, die in einem eigenen Sprachordner `content/de` abgelegt sind. Auf diese Weise müssen Sie keinen Lokalisierungs-Suffix an die `.md` Datei schreiben. Beide Lokalisierungsansätze (separater Ordner, Suffixe im gleichen Ordner) können verwendet und sogar vermischt werden.

Siehe i18n-Konfiguration im `[languages]`-Abschnitt von `hugo.toml`.

#### Lokalisierte Inhalte

Lokalisierte Inhalte können im dedizierten Ordner `content/de/` abgelegt werden. Bilder sollten dort auch gefunden werden:
![Bild aus content/de ](de-happy-ethnic-woman-sitting-at-table-with-laptop-3769021.jpg)

#### Assets

Bilder im Assets-Ordner können lokalisiert werden, konventionsgemäß durch Hinzufügen eines `.de` Suffixes. Allerdings gibt es Einschränkungen, die zu beachten sind.

![Defektes DE-Bild aus assets](images/asset-happy-ethnic-woman-sitting-at-table-with-laptop-3769021.de.jpg)

Beachten Sie, dass der Dateiname dieses Abschnitts etwas künstlich ist, um Konflikte mit anderen Beispielen im en-Ordner zu vermeiden. Wären sie gleich benannt, würde dieser nicht gerendert werden. Normalerweise würden Sie jedoch nicht eine Seite auf zwei Arten lokalisieren.
