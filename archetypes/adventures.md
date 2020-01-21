---
title: "{{ replace .TranslationBaseName "-" " " | humanize }}"
date: {{ .Date }}
draft: false
duration: short
premise: ""
details: ""
startingEncounter: ""
creatures: []
items: []
scenary: []
map: ""
---

{{%encounter order="1" title="" prompt="" tips="" difficulty="" battle="" villains="" success="" failure="" location="" scenary="" item="" next=""%}}
Encounter description...
{{%/encounter%}}

{{%encounter order="Bonus 1" title="" prompt="" tips="" difficulty="" battle="" villains="" success="" failure="" location="" scenary="" item="" next=""%}}
Bonus encounter description...
{{%/encounter%}}

## Conclusion

{{%conclusion location="" item=""%}}
Conclusion text...
{{%/conclusion%}}