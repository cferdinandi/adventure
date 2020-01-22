---
title: "{{ replace .TranslationBaseName "-" " " | humanize }}"
date: {{ .Date }}
draft: true
duration: Short
premise: ""
details: ""
startingEncounter: ""
creatures: []
items: []
scenary: []
map: ""
---

{{%encounter order="1" title="" prompt="" tips="" difficulty="" battle="" villains="" success="" failure="" location="" scenary="" next="" bonus=""%}}
Encounter description...
{{%/encounter%}}

{{%encounter order="Bonus 1" title="" prompt="" tips="" difficulty="" battle="" villains="" success="" failure="" location="" scenary="" next=""%}}
Bonus encounter description...
{{%/encounter%}}

## Conclusion

{{%conclusion location="" item=""%}}
Conclusion text...
{{%/conclusion%}}