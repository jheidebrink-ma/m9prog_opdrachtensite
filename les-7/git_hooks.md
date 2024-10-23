---
title: Les 7
layout: page 
permalink: :path/:basename 
nav_exclude: true
---

## Automatische code testing
{: .text-green-100 .fs-6 }

`Git-hooks` zijn scripts die automatisch worden uitgevoerd bij specifieke gebeurtenissen in de `Git-workflow`, zoals bij een **commit** of **push**.  
Door `git-hooks` te gebruiken, kun je consistentie en kwaliteit in je codebase verbeteren.  
Bijvoorbeeld: je kunt ervoor zorgen dat code automatisch wordt gecontroleerd op **fouten** of **stijlproblemen** voordat deze wordt gepushed naar de productie omgeving.  
Ook kun je tests automatisch laten draaien om te voorkomen dat gebroken code op productie terechtkomt. Dit helpt teams om efficiënter samen te werken, fouten te minimaliseren en processen te automatiseren zonder handmatige interventie.

---
## Githook
Je gaat jouw `Selenium` script koppelen aan een `Git Hook`, zodat de `Selenium-test` automatisch wordt uitgevoerd telkens wanneer er een **push** wordt gedaan naar de `main branch`.  

Git heeft een ingebouwd `hook-systeem` waarmee je scripts kunt koppelen aan specifieke gebeurtenissen (zoals `commit`, `push` of `merge`).  
Je gaat nu een `post-push` **hook** instellen om een `Selenium-test` uit te voeren na een `push` naar de `master` branch.  

---
### 1. Maak een post-push hook aan  
Zorg ervoor dat je in de root van je repository zit in je `terminal` of `command prompt`.  
Git hooks bevinden zich in de `.git/hooks/` map.  
Je maakt nu een `post-push` hook aan die een Selenium-test zal uitvoeren:
```bash
touch .git/hooks/post-push
chmod +x .git/hooks/post-push
```

---
### 2. Schrijf het hook-script
Voeg het volgende script toe om het Selenium-script uit te voeren na een `push`:
```bash
#!/bin/bash
# Controleren of de push naar de master branch is
current_branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$current_branch" == "main" ]; then
    echo "Push naar master gedetecteerd. Selenium test wordt uitgevoerd..."
    
    # Voer het Selenium-script uit
    python3 /pad/naar/jouw/selenium_script.py
    
    if [ $? -eq 0 ]; then
        echo "Selenium test succesvol uitgevoerd."
    else
        echo "Selenium test is mislukt."
        exit 1
    fi
else
    echo "Niet gepusht naar master branch, geen Selenium-test uitgevoerd."
fi
```
**Let op:** vervang `/pad/naar/jouw/selenium_script.py` door het pad naar jouw script, bijvoorbeeld `/tests/script1.py`

---
### 3. Test de Git Hook
Test nu jouw script door een code aan te passen, te pushen en te pushen naar main.  
Na je push zou je in de terminal een bericht moeten zien dat de `Selenium-test` wordt uitgevoerd en de **paginatitel** van de website zou worden **afgedrukt**.

---
{% include commit_push.md %}

---
### Volgende stap:
{: .text-green-100 .fs-4 }  
In de volgende opdracht ga je een `categorie` toevoegen.  
[Registreren van een taxonomie](taxonomy)


