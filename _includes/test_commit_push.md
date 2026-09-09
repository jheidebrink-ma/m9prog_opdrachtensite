---

## Afronden: testen, committen en pushen
{: .text-green-200 .fs-5 }

### 1. Wat heb je getest?

Noteer in je `ai-log.md`:
- Welke functionaliteit of pagina heb je getest?
- Wat verwachtte je dat er zou gebeuren?
- Wat gebeurde er daadwerkelijk?
- Was er een fout en hoe heb je die opgelost?

_Controleer altijd minimaal de nieuwe functionaliteit van deze les in je browser._   
## Test na een wijziging opnieuw; een foutmelding of een niet-werkende pagina is nog geen afgerond resultaat.
{: .text-red-100 .fs-3 }

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
