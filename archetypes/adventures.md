---
title: "{{ replace .TranslationBaseName "-" " " | humanize }}"
date: {{ .Date }}
draft: true
readyToPlay: false
map: ""
premise: ""
tips: []
weight: 10

storyline: []
creatureDetails: []
npcs: []

duration: Short
details: ""
intro: "This adventure follows a linear storyline."
critical: []
startingEncounter: ""
creatures: []
items: []
scenery: []
props: []
---

{{%location title="" encounters=""%}}
Location description...
{{%/location%}}

### Oakenshire

{{%encounter order="a" title="" tips="" difficulty="" battle="" villains="" success="" failure=""%}}
Encounter description...
{{%/encounter%}}

{{%encounter order="z" title="" tips="" difficulty="" battle="" villains="" success="" failure=""%}}
Encounter description...
{{%/encounter%}}

## Conclusion

Conclusion text...