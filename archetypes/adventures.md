---
title: "{{ replace .TranslationBaseName "-" " " | humanize }}"
date: {{ .Date }}
draft: true
readyToPlay: false
duration: Short
optional: false
map: ""
weight: 10
premise: ""
details: ""
intro: "This adventure follows a linear storyline."
storyline: []
villains: []
npcs: []
tips: []
startingEncounter: ""
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