---
layout: home
title: Project omschrijving
nav_order: 1
---

# Project omschrijving

## Als jouw stage begeleider wil ik een verslag van jouw stage kunnen lezen om je goed te kunnen begeleiden tijdens de stage. 
- Op een website moet een afgeschermde blog beschikbaar zijn die alleen voor genodigden toegankelijk is.  
- Elke keer als er een nieuw bericht is moeten alle abonnees een mail krijgen dat er een nieuw bericht is.
- Het is voor de stagebegeleider mogelijk om bij een bericht comments te plaatsen, deze zijn alleen zichtbaar voor de stagebegeleider én de admin

## Blog
Voor deze blog kun je de standaard functionaliteit van WordPress gebruiken.  
Voor het beheren van de toegang van gebruikers en het versturen van mails maken wij straks een custom plugin. 

## Doel
Aan het eind van dit project heb je een website ontwikkeld die je kunt gebruiken voor je stage.

## Omschrijving
Er komen in dit project verschillende onderdelen op de website:
1. geen toegang tot blogs pagina, voor mensen die niet ingelogd zijn
2. overzicht van blogs pagina 
3. detail informatie van een bericht
4. mogelijkheid om comments te plaatsen bij elk bericht
5. menu waarbij je kunt kiezen tussen **stage 1** én **stage 2**
6. wie ben ik pagina _( about pagina over jou )_

### 1. Gast pagina  
Op deze pagina is duidelijk dat iemand niet is ingelogd en daardoor geen blog berichten mag lezen.

### 2. Overzicht blogs
Hier is straks een lijst met blog items zichtbaar, per bericht is het volgende zichtbaar:
- Titel
- Datum
- Intro  
De volgorde is op datum, nieuwste bericht staat bovenaan.

### 3. Bericht pagina
Per bericht is straks het volgende zichtbaar:
- Titel
- Datum
- Content
- Categorie _( stage 1 / stage 2 )_
- Comments

## Randvoorwaarden:
- De applicatie moet ontwikkeld worden in PHP eventueel in combinatie met JavaScript.
- Het lokaal ontwikkelen van dit project gaat via een Docker container.
- De data wordt in de database opgeslagen
- Er moet een error afhandeling zijn die de gebruiker informeert waarom iemand een bericht niet mag bekijken.
- Deze module moet functioneren in de laatste versies van Chrome, Safari, Firefox en Edge
- Ontwikkel deze website **'Mobile-first'**
- Taal: minimaal Nederlands
