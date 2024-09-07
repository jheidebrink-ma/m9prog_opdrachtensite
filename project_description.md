---
layout: home
title: Project omschrijving
nav_order: 1
---

# Project omschrijving

## Als een bezoeker van de website wil ik een overzicht van muziek singles hebben waar ik doorheen kan zoeken.
Op een web pagina wil ik een overzicht van minimaal 5 verschillende muziek singles waar ik door middel van een zoek formulier kan aangeven wat ik wil zien.  
Elke single heeft een eigen detail pagina.

## Muziek bibliotheek
Dit project bestaat uit verschillende onderdelen die samen één geheel gaan vormen, de informatie van de singles zal in een database staan.  
Dit is geen CRUD applicatie, aanpassingen doen wij direct in de database.

## Doel
Aan het eind van dit project heb je een website ontwikkeld en weet je hoe bestanden op een server gestructureerd moeten worden.

## Omschrijving
Er komen in dit project 3 verschillende type pagina’s:
1. overzicht pagina, met een overzicht van muziek singles
2. detail pagina met informatie over het nummer
3. informatie pagina met statische tekst

Op het een overzicht pagina zijn minimaal 5 singles van minimaal 3 verschillende artiesten zichtbaar.  
Per item is minimaal het volgende zichtbaar:
- Titel van het nummer 
- Naam van de artiest 
- Genre 
- Afbeelding

Ergens op de home pagina komt een formulier met een zoek functie waardoor het resultaat gefilterd wordt, dit zoeken kan op basis van een drop-down én een open zoekveld.  
Als je de home pagina op een muziek item klikt, kom je op een vervolg pagina waar meer informatie over dit item staat:
- Titel van het nummer 
- Naam van de artiest 
- Genre 
- Duur van het nummer 
- Release datum ( jaar is goed genoeg )
- Lijst met andere nummers van deze artiest 
- Afbeelding van het nummer

De informatie tekst pagina’s zijn standaard tekst pagina’s voor de volgende twee pagina’s:
- informatie over dit systeem
- algemene voorwaarden

## Validatie
- Als een gebruiker zoekt op een niet bestaande term dan moet dit weergegeven worden.
- Als er een pagina opgevraagd wordt die niet gevonden is dan moet dit duidelijk gemaakt worden aan de bezoeker.

## Randvoorwaarden:
- De applicatie moet ontwikkeld worden in PHP eventueel in combinatie met JavaScript.
- Het lokaal ontwikkelen van dit project gaat via een Docker container.
- De data wordt in de database opgeslagen
- Er moet een error afhandeling zijn die de gebruiker informeert waarom een zoek actie wel of niet informatie terug geeft.
- Deze module moet functioneren in de laatste versies van Chrome, Safari, Firefox en Edge

## Optioneel
- Is het mogelijk om ook een afbeelding van de artiest weer te geven?
- Als je in het overzicht op een single klikt, kun je dan de detail pagina in een modal ( popup ) weergeven?