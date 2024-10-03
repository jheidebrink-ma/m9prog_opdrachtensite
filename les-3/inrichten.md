---
title: Les 3
layout: page
permalink: :path/:basename
nav_exclude: true
---


## Inrichten
{: .text-green-100 .fs-6 }
Voordat je website automatisch deployed word op de server moet je een aantal stappen doorlopen.  
Je maakt straks eerst een placeholder website aan, stelt de beveiliging tussen de host en git in en daarna stel je de git flow in.

---
### 1- Wordpress installatie
Stel nu een standaard WordPress installatie in op deze server zodat de structuur en database ingericht zijn.  
Na het doorlopen vna de installatie kun je inloggen via ftp of via de file browser om alle inhoud uit de `wp-content` te verwijderen.  
Dit is belangrijk omdat je straks een repository gaat koppelen en deployen.

---
### 2- Negeer uploads folder
Uploads op de server mogen niet overschreven worden door jouw lokale uploads omdat dit variabele bestanden zijn afhankelijk van de omgeving waar het project staat. Daarom mag de uploads folder straks niet overschreven worden door de inhoud uit git.  
Verwijder deze `upload` folder in github lokaal of via de web interface.  
Stel in `.gitignore` in dat de `uploads` folder niet bijgehouden mag worden door git. 

---
### 3- Negeer plugin folder
Plugins op de server mogen niet overschreven worden door jouw lokale plugin folder omdat dit variabele bestanden zijn afhankelijk van de omgeving waar het project staat.   
Verwijder deze `plugins` folder in github lokaal of via de web interface.  
Stel in `.gitignore` in dat de `plugins` folder niet bijgehouden mag worden door git. 

---
### 4- SSH-sleutel
Voeg de **SSH-Key** van de server toe aan **git**.  
1. Genereer een SSH-Key
  ![generate_key.png](images/generate_key.png)
2. ga nu naar [gighub.com](https://github.com/) en zoek jouw repository op in het overzicht.  
3. ga naar de tab 'settings' en maak een nieuwe `deploy key` aan waar je de **SSH-Key** van de host aan toevoegt.  
  ![deploy_keys.png](images/deploy_keys.png)
4. Plak in het veld voor de SSH-Key de key van de hosting.
5. Vanaf dit moment heeft de hosting server toegang tot jouw git omgeving.

---
### 5- Link de repository 
Ga nu weer naar de hosting partij en vul de gegevens voor het koppelen van een **Repository** in door het formulier van `Create a New Repository` in te vullen.    
1. gebruik bij de url de beveiligde url uit git _( begint met `git@github.com:` )_ 
2. de master branch/tak heet bij jou waarschijnlijk **main**
3. de folder is **wp-content**
  ![repository.png](images/repository.png)

---
### 6- testen
Log nu in op jouw website _( wp-admin )_ en voeg een nieuwe pagina toe **inclusief** een afbeelding.

---
### 7- CD _( Continues Delivery )_
Wil je het voor jouw zelf nog makkelijker maken?  
Stel dan de auto deployment in, volg hiervoor de stappen die je ziet als je klikt op 'auto deployment'

---
### 8- testen
Test nogmaals door lokaal een aanpassing te doen in jouw thema, **commit** en **push** deze wijziging en zie dat dit direct is doorgevoerd op de live website.