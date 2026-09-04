---
title: Les 1
layout: page
permalink: :path/:basename
nav_exclude: true
---

## Docker: lokale WordPress-omgeving opzetten
{: .text-green-100 .fs-6 }

Je ontwikkelt dit project lokaal met Docker. Docker start drie losse services die samen jouw WordPress-website vormen:

- **WordPress:** de website en `wp-admin`.
- **MariaDB:** de database waarin WordPress pagina's, projecten en instellingen bewaart.
- **phpMyAdmin:** een hulpmiddel om de database alleen tijdens het ontwikkelen te bekijken.

Iedere student heeft hierdoor dezelfde basisomgeving. Je installeert WordPress dus niet los op je laptop en je zet deze Docker-omgeving de rest van de module steeds opnieuw aan met één commando.

## Requirements
{: .text-red-100 .fs-6 }
Er zijn een aantal vereisten aan dit project:
1. Je hebt een werkende [Docker Desktop](https://www.docker.com/products/docker-desktop/) installatie en Docker Desktop staat aan.
2. De volgende poorten zijn niet in gebruik:
   - 80
   - 1089
3. Je hebt een werkende IDE waarmee je websites kunt ontwikkelen, bijvoorbeeld [Visual Code](https://code.visualstudio.com/download) of [PhpStorm](https://www.jetbrains.com/phpstorm/download/)

---
### 1- Repository
1- Maak een nieuwe repository aan in [GitHub](http://github.com/) voor **m9prog-portfolio**, zorg dat de repository _private_ is.  
2- Navigeer op je computer naar de folder waar je project straks komt te staan, _niet een nieuwe lege folder aanmaken_.   
3- [Clone je github project](https://git-scm.com/docs/git-clone) zodat je een nieuwe folder hebt die gekoppeld is aan git en waar straks je bestanden in komen.  

---
### 2- Docker-configuratie toevoegen
1. Start eerst [Docker Desktop](https://www.docker.com/products/docker-desktop/)  
2. Navigeer naar de repo folder die je net gekloond hebt
3. Download of kopieer [docker-compose.yml](data/docker-compose.yml) naar de hoofdmap van je repository.
4. Lees het bestand door. Zoek de drie services `wordpress`, `mariadb` en `phpmyadmin` op en benoem aan een medestudent welke taak iedere service heeft.

---
### 3- Variabelen in `.env`
1. Download [`.env.example`](data/env.example), plaats die in de hoofdmap van je repository en zorg dat deze met een **punt** begint.
2. Maak een kopie van dit bestand en noem dat: `.env`.
3. Vul eigen lokale waarden in. Deze gegevens zijn alleen voor jouw Docker-omgeving.
4. Controleer dat `.env` in `.gitignore` staat. _Deel of commit dit bestand nooit._

---
### 4- Bestanden negeren in Git
Kopieer de [`.gitignore`](data/gitignore) naar de hoofdmap van je repository. Controleer dat `.env`, `node_modules/` en je IDE-instellingen niet per ongeluk worden gecommit.

---
### 5- Mappen voor WordPress-content
Maak de volgende drie folders aan waar je straks je plugins en thema kunt plaatsen:  
- themes
- plugins
- uploads

---
### 6- Containers starten en controleren
Start de omgeving vanuit de hoofdmap van je repository:

```shell
docker compose up -d
```

Controleer daarna de status:

```shell
docker compose ps
```

Je ziet drie draaiende services. Open vervolgens:

- WordPress: [http://localhost](http://localhost)
- phpMyAdmin: [http://localhost:1089](http://localhost:1089)

Zie je geen WordPress-installatiescherm? Gebruik dan eerst `docker compose logs wordpress` en bespreek de foutmelding met je peer of de M9 Leercoach. Stop je omgeving na het werken met:

```shell
docker compose down
```

Met `docker compose down` verwijder je de containers, maar de gemounte mappen `themes`, `plugins` en `uploads` blijven in je project staan.

---
{% include commit_push.md %}

---
### Volgende stap:
{: .text-green-100 .fs-4 }  
[Initialiseren van WordPress](initialiseren)
