---
layout: page
title: Complete lesbrief
nav_order: 1
has_toc: true
---

# Lesbrief M9PROG - live WordPress-portfolio

## Doel van de periode

In negen onderwijsweken, met één vakantieweek, ontwikkelt iedere student een persoonlijke portfolio-website voor stagebedrijven en opdrachtgevers. De student bouwt een custom WordPress-theme vanaf scratch, gebruikt Bootstrap met Sass en Webpack, beheert projecten met een Custom Post Type en deployt de site naar een live omgeving.

De eerste les gebruikt AI om snel een eerste, zichtbaar resultaat te bereiken. Vervolgens verschuift het zwaartepunt naar begrip, aanpassen, testen en verantwoorden. AI is een hulpmiddel; de student blijft eigenaar van de code en kan keuzes uitleggen.

## Eindresultaat

De student levert een publiek bereikbare portfolio-URL, de Git-repository en een korte technische verantwoording op. Het portfolio bevat ten minste een homepagina, over-mij-pagina, contactmogelijkheid, projectoverzicht en drie projectdetails. De site gebruikt een eigen custom WordPress-theme, een Custom Post Type voor projecten en een front-end build met Sass en Webpack.

Zie ook de volledige [projectomschrijving](project_description).

## Vaste opbouw van ieder lesmoment (120 minuten)

| Tijd | Activiteit | Waarom |
|---|---|---|
| 0-10 min | Binnenkomst, doel op het bord, korte check-in en ophalen van de vorige stap | Geeft rust en maakt het doel concreet. |
| 10-25 min | Compacte instructie met een live demo | De docent modelleert één afgebakende vaardigheid. |
| 25-40 min | *Denk - doe - bespreek*: ieder werkt eerst, daarna legt een duo de aanpak aan elkaar uit | Maakt voorkennis zichtbaar en voorkomt passief meekijken. |
| 40-85 min | Zelfstandig bouwen met docentcoaching | Studenten passen de vaardigheid toe in hun eigen portfolio. |
| 85-105 min | Peer-principe: review, demo of debuggesprek in tweetallen | Studenten ervaren dat medestudenten waardevolle feedback en uitleg geven. |
| 105-120 min | Bewijs vastleggen, exit ticket en volgende stap | Houdt de voortgang zichtbaar en maakt problemen vroeg bespreekbaar. |

Gebruik waar passend de **M9 Leercoach** voor een uitleg of debugstap. De student werkt eerst vijf minuten zelf, formuleert daarna een concrete vraag en legt na afloop in eigen woorden uit wat de oplossing doet.

## Peer-principe

Het peer-principe is geen “vraag het maar aan elkaar”, maar een vaste werkvorm met rollen:

- **Bouwer:** deelt scherm, benoemt doel en toont wat al geprobeerd is.
- **Coach:** stelt eerst vragen, leest foutmeldingen mee en geeft geen code zonder uitleg.
- **Bewaker:** controleert in de rubric/checklist of het resultaat aan de eis voldoet. Deze rol rouleert bij een drietal.

Sluit iedere peer-ronde af met: “Wat verander ik nu?”, “Waarom werkt dit?” en “Welk bewijs commit of noteer ik?” De docent loopt rond, luistert naar uitleg en pakt alleen patronen klassikaal op. Zo krijgen studenten inhoudelijke steun én een reden om fysiek aanwezig en betrokken te zijn.

## Lesmomenten

### Les 1 - Introductie: portfolio en AI

**Student leert:** het doel van een stageportfolio, waar AI kan helpen en waarom gegenereerde code gecontroleerd moet worden.

**Instructie:** laat een kort voorbeeld zien van een goede en slechte prompt. Demonstreer hoe een prompt leidt tot een eerste theme-opzet, hoe je de output controleert en hoe je `prompt.md` en `ai-log.md` bijhoudt.

**Doen:** studenten kiezen doelgroep en stijl, schrijven een prompt en maken een eerste theme-structuur of homepage-opzet. Zij bewaren prompt en resultaat.

**Peer-activiteit:** duo’s beoordelen elkaars prompt op doelgroep, concrete eisen, techniek en toetsbare output. Laat elk duo één verbeterde prompt demonstreren.

**Bewijs:** portfolio-concept, `prompt.md`, `ai-log.md` en eerste eigen theme-map.

### Les 2 - Local development setup

**Student leert:** Docker, `.env`, lokale WordPress-installatie, database en het verschil tussen lokale en live omgeving.

**Instructie:** bouw één werkende lokale installatie voor, inclusief waar het theme staat en wat nooit in Git hoort.

**Doen:** studenten starten WordPress en MySQL, ronden de installatie af, activeren hun theme en schrijven startinstructies in de README.

**Peer-activiteit:** tweetallen wisselen README uit en proberen uitsluitend met die instructies elkaars omgeving te starten.

**Bewijs:** lokale WordPress-site met actief theme en een geteste README.

### Les 3 - Custom theme vanaf scratch

**Student leert:** welke bestanden een WordPress-theme herkenbaar maken en hoe styles en scripts via WordPress worden geladen.

**Instructie:** demonstreer `style.css`, `functions.php`, enqueueing, `front-page.php` en de template hierarchy.

**Doen:** studenten maken de minimale theme-bestanden, vullen de metadata aan en activeren het theme.

**Peer-activiteit:** codewalk: student A wijst de bestanden aan; student B legt hun functie uit. Daarna wisselen zij.

**Bewijs:** geactiveerd custom theme met eigen metadata, templates en commit.

### Les 4 - Header, footer en Loops

**Student leert:** gedeelde templates, `wp_head()`, `wp_footer()`, navigatie en dynamische content via de WordPress Loop.

**Instructie:** demonstreer één pagina die hardcoded is en maak die vervolgens dynamisch.

**Doen:** studenten maken header/footer, zetten menu en twee pagina’s op en tonen titel, afbeelding en content dynamisch.

**Peer-activiteit:** each pair checks one page in logged-out mode and geeft feedback op navigatie en dynamische content.

**Bewijs:** twee dynamische pagina’s met gedeelde header en footer.

### Les 5 - Sass, npm en Webpack

**Student leert:** waarom een buildstap nodig is en hoe Bootstrap, Sass en eigen variabelen worden gecompileerd.

**Instructie:** demonstreer bronbestanden versus gecompileerde bestanden en voer `npm run build` uit.

**Doen:** studenten configureren npm/Webpack, importeren Bootstrap via Sass en passen de visuele basis aan.

**Peer-activiteit:** build-buddy: student A verwijdert tijdelijk de output en student B controleert of de buildinstructie het project herstelt.

**Bewijs:** `package.json`, Webpack-configuratie, eigen Sass en werkende productie-build.

### Les 6 - Contactformulier

**Student leert:** welke informatie een opdrachtgever nodig heeft, hoe een formulier toegankelijk wordt en hoe foutscenario’s worden getest.

**Instructie:** bespreek labels, validatie, foutmeldingen, spam en privacy. Demonstreer één fout en één succesvolle inzending.

**Doen:** studenten maken een contactpagina en testen de belangrijkste scenario’s.

**Peer-activiteit:** testduo: één student vult het formulier in zonder uitleg, de ander observeert waar de interface onduidelijk is.

**Bewijs:** geteste contactmogelijkheid met duidelijke foutmeldingen.

### Les 7 - Designimplementatie

**Student leert:** een ontwerp vertalen naar mobile-first componenten, eigen typografie, kleuren en consistente spacing.

**Instructie:** demonstreer van wireframe naar hero, navigatie en projectkaart; benadruk herbruikbare Sass-componenten.

**Doen:** studenten bouwen home, over-mij, projectkaarten en contact volgens hun eigen stijl.

**Peer-activiteit:** drie-minuten gebruikerstest op mobiel: bezoeker zoekt wie de student is, een project en contact.

**Bewijs:** responsive portfolio-uitstraling en minimaal één verwerkt feedbackpunt.

### Les 8 - Custom Post Type: projecten

**Student leert:** waarom projecten eigen content zijn, hoe een Custom Post Type werkt en hoe archive- en detailtemplates verschillen.

**Instructie:** registreer een voorbeeld-`project`, maak inhoud aan en toon `archive-project.php` en `single-project.php`.

**Doen:** studenten registreren het type, voeren minstens drie projecten in en bouwen overzicht en detailweergave.

**Peer-activiteit:** contentredactie: duo’s controleren of elk project rol, techniek, resultaat en beeldmateriaal bevat.

**Bewijs:** drie beheersbare projectitems met werkende overzichts- en detailpagina.

### Les 9 - Tussenbeoordeling

**Student leert:** voortgang onderbouwen, feedback ophalen en werk prioriteren voor livegang.

**Instructie:** maak beoordelingscriteria expliciet en toon hoe een goede demo in twee minuten werkt.

**Doen:** studenten tonen hun werk, verwerken feedback en maken een backlog.

**Peer-activiteit:** gallery walk met rubric. Iedere student geeft twee concrete observaties en één prioriteit aan een andere student.

**Bewijs:** ingevulde feedback, geprioriteerde backlog en korte demo.

### Les 10 - WP-CLI en SSH

**Student leert:** veilig terminalbeheer, basis-WP-CLI-commando’s, SSH en het verschil met `wp-admin`.

**Instructie:** demonstreer read-only commando’s, `--dry-run` en het veilig omgaan met sleutels en wachtwoorden.

**Doen:** studenten voeren lokaal beheercommando’s uit en oefenen `search-replace` uitsluitend met dry-run.

**Peer-activiteit:** commando-kaarten: een student verklaart doel, risico en verwachte output; de ander valideert die uitleg.

**Bewijs:** korte commandolog met uitleg en veilige omgang met credentials.

### Les 11 - Hosting voorbereiden

**Student leert:** vereisten van een live omgeving, production configuration, back-up en deploymentplanning.

**Instructie:** bespreek hosting, SFTP/SSH, database, uploads, secrets en rollback. Loop samen de checklist door.

**Doen:** studenten richten hosting voor, verzamelen gegevens en maken hun persoonlijke deployment-checklist.

**Peer-activiteit:** checklist review: partner zoekt ontbrekende stappen of risicovolle aannames.

**Bewijs:** gekozen hostingomgeving en beoordeelde deployment-checklist.

### Les 12 - Deployment

**Student leert:** een WordPress-project gecontroleerd publiceren en de productieversie onafhankelijk verifiëren.

**Instructie:** demonstreer back-up, productie-build, databasedomeinwijziging met dry-run en controle in privévenster.

**Doen:** studenten publiceren eigen theme, content en media volgens checklist.

**Peer-activiteit:** live-paarcontrole: partner opent de URL op eigen apparaat en noteert de eerste drie bevindingen.

**Bewijs:** publiek bereikbare portfolio-URL en vastgelegde live-controle.

### Les 13 - Testen en releasecontrole

**Student leert:** systematisch testen van functies, responsive layout, toegankelijkheid en build-output.

**Instructie:** modelleer een compacte testlijst en laat zien hoe je een bug helder rapporteert en hertest.

**Doen:** studenten testen live en lokaal, lossen prioritaire bugs op en voeren een regressiecheck uit.

**Peer-activiteit:** cross-browser/cross-device test in duo’s met vooraf bepaalde testtaken.

**Bewijs:** testlijst, opgeloste bugs en hertestbewijs.

### Les 14 - SEO en vindbaarheid

**Student leert:** basis-SEO voor een portfolio: zoekintentie, content, headings, metadata, alt-tekst en interne links.

**Instructie:** vergelijk een onvindbare projectpagina met een duidelijke projectpagina voor een stagebedrijf.

**Doen:** studenten verbeteren titels, descriptions, headings, beelden en projectteksten.

**Peer-activiteit:** stagebedrijf-scan: partner zoekt op de site antwoord op “wie, wat kan deze student, welk project past?”

**Bewijs:** verbeterde metadata en inhoudelijke portfolio-check.

### Les 15 - Portfolio presenteren

**Student leert:** een productdemo geven en technische keuzes begrijpelijk koppelen aan het eindresultaat.

**Instructie:** geef een voorbeeld van een korte demo met probleem, oplossing, live resultaat en technische toelichting.

**Doen:** studenten oefenen een demo van maximaal vijf minuten.

**Peer-activiteit:** oefenpresentatie in trio’s; publiek geeft feedback op helderheid, bewijs en technische uitleg.

**Bewijs:** live demo, peer-feedback en aangevulde backlog.

### Les 16 - Beoordeling en backlog

**Student leert:** eindoplevering verantwoorden en een professioneel vervolgplan formuleren.

**Instructie:** loop de eindchecklist door: URL, repository, theme, build, projecten, AI-log, testbewijs en backlog.

**Doen:** studenten leveren alle links en bewijs aan, herstellen laatste issues en schrijven reflectie.

**Peer-activiteit:** eindcheck in koppels: elk onderdeel wordt door een tweede persoon geopend en afgevinkt.

**Bewijs:** complete eindoplevering en een backlog met minimaal drie vervolgstappen.

## Beoordelingsbewijs

Beoordeel het product én het proces. Vraag minimaal om:

- Live URL en Git-repository.
- Werkend custom theme en project-CPT.
- Bewijs van Bootstrap/Sass/Webpack-build.
- Responsieve, toegankelijke basis en geteste contactmogelijkheid.
- `prompt.md` en `ai-log.md` met kritische AI-reflectie.
- Testlijst, deployment-checklist en backlog.
- Korte mondelinge demonstratie.

## Docentinterventies die betrokkenheid vergroten

- Geef maximaal vijftien minuten klassikale technische uitleg voordat studenten zelf toepassen.
- Vraag niet “is iedereen klaar?”, maar laat studenten een zichtbaar artefact tonen: URL, commit, foutmelding of checklist.
- Beloon uitleg aan medestudenten: vraag een student die een oplossing vond om de aanpak, niet alleen de code, te delen.
- Laat AI-antwoorden nooit het eindpunt zijn. Laat studenten steeds voorspellen, testen en in eigen woorden verklaren.
- Gebruik de tussenbeoordeling om de scope kleiner te maken als livegang in gevaar komt; de live portfolio blijft de harde eindvoorwaarde.
