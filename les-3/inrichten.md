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
Die moet om ervoor te zorgen dat je straks de repository kunt koppelen en de bestanden goed kunt deployen

---
### 2- Negeer uploads folder
Uploads op de server mogen niet overschreven worden door jouw lokale uploads, daarom moet de uploads folder straks niet overschreven worden.  
Stel in je lokale `.gitignore` in dat de `uploads` folder niet bijgehouden mag worden door git.  
Verwijder deze `upload` folder in github via de web interface.

---
### 3- SSH-sleutel
Voeg de sleutel van de server toe aan git.  
1- Genereer een ssh sleutel  
![generate_key.png](images/generate_key.png)
2- ga nu naar [gighub.com](https://github.com/) en zoek jouw repository op in het overzicht.  
3- ga naar de tab 'settings' en maak een nieuwe deploy key aan waar je de ssh key van de hosting in plakt.  
![deploy_keys.png](images/deploy_keys.png)
Plak in deze in het ssh key veld.  
Op dit moment heeft de hosting server toegang tot jouw git omgeving.

---
### 4- Link de repository 
Ga nu weer naar de hosting partij en vul de gegevens voor het koppelen van een Repository in door het formulier van `Create a New Repository` in te vullen.    
- gebruik bij de url de beveiligde verbinding
- de master branch/tak heet bij jou waarschijnlijk **main**
- de folder is wp-content
  ![repository.png](images/repository.png)

---
### 5- testen
Log nu in op jouw website en voeg een nieuwe pagina toe **inclusief** een afbeelding.

---
### 6- CD
Wil je het voor jouw zelf nog makkelijker maken?  
Stel dan de auto deployment in, volg hiervoor de stappen die je ziet als je klikt op 'auto deployment'

---
### 7- testen
Test nogmaals door lokaal een aanpassing te doen in jouw thema, commit en push deze wijziging en zie dat dit direct is doorgevoerd op de live website.