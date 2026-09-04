---

## Afronden: testen, committen en pushen
{: .text-green-200 .fs-5 }

### 1. Wat heb je getest?

Noteer in je `ai-log.md`, README of lesnotities:

- Welke functionaliteit of pagina heb je getest?
- Wat verwachtte je dat er zou gebeuren?
- Wat gebeurde er daadwerkelijk?
- Op welk apparaat of in welke browser heb je gecontroleerd?
- Welke fout vond je en hoe heb je die opgelost, of wat staat er nog op je backlog?

Controleer altijd minimaal de nieuwe functionaliteit van deze les in je browser. Test na een wijziging opnieuw; een foutmelding of een niet-werkende pagina is nog geen afgerond resultaat.

### 2. Commit en push naar Git

1. Controleer met `git status` welke bestanden je hebt gewijzigd.
2. Controleer dat `.env`, wachtwoorden, sleutels en andere gevoelige bestanden **niet** in de lijst staan.
3. Voeg alleen de relevante bestanden toe en maak een duidelijke commit, bijvoorbeeld:

   ```shell
   git add .
   git commit -m "Les {{ include.lesson.number }}: beschrijf wat je hebt gemaakt"
   git push
   ```

4. Open je repository in GitHub en controleer of de commit zichtbaar is.

**Bewijs van deze les:** een getest resultaat, een korte testnotitie en een zichtbare commit in je repository.
