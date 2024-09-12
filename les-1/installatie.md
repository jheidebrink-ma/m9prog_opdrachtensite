---
title: Les 1
layout: page
permalink: :path/:basename
nav_exclude: true
---

## Development omgeving instellen
{: .text-green-100 .fs-6 }

We gaan een Docker container samenstellen.  
Deze omgeving gaan wij tijdens deze gehele module gebruiken.

## Requirements
{: .text-red-100 .fs-6 }
In de vorige les heb je een aantal requirements samengesteld, een aantal daarvan gaan wij nu instellen.  
Er zijn een aantal vereisten aan dit project:
1. Je hebt een werkende Docker Desktop installatie.
2. De volgende poorten zijn niet in gebruik:
   - 80
   - 3305
   - 8805
3. Je hebt een werkende IDE waarmee je websites kunt ontwikkelen, bijvoorbeeld [Visual Code](https://code.visualstudio.com/download) of [PhpStorm](https://www.jetbrains.com/phpstorm/download/)

---
### 1- Repository
1- Maak een nieuwe repository aan in [GitHub](http://github.com/) voor **m9prog-blog**, zorg dat de repository _private_ is.  
2- Navigeer op je computer naar de folder waar je project straks komt te staan, _niet een nieuwe lege folder aanmaken_.   
3- [Clone je github project](https://git-scm.com/docs/git-clone) zodat je een nieuwe folder hebt die gekoppeld is aan git en waar straks je bestanden in komen.

---
### 2- Docker container initialiseren
1. Start eerst [Docker Desktop](https://www.docker.com/products/docker-desktop/)  
2. Navigeer naar de repo folder die je net gekloond hebt
3. Maak een nieuw bestand aan met de naam: `docker-compose.yml`
4. maak de structuur van dit yml bestand
```yaml
services:
    NAAM:
        image: WELKE IMAGE HEB JE NODIG
        container_name: prog_m5_TYPE
        environment:
           title: waarde
           INTERNE CONSTANTEN
        ports:
           - EXTERN:INTERN
           - 9999:80
        links:
           - IS DEZE CONTAINER GEKOPPELD AAN EEN ANDERE CONTAINER?
        volumes:
            - './:/var/www/html'
        depends_on:
            - HEEFT DEZE CONTAINER EEN ANDERE CONTAINER NODIG?
```

---
### 3- Definieer de volgende containers:
- **wordpress** met image: wordpress:latest
- **mariadb** met de image: mariadb:latest
- **phpmyadmin** met de image: phpmyadmin:latest en de externe poort **8805**
- De wordpress container heeft de volgende environment constanten nodig:
```yml
    WORDPRESS_DB_HOST: '${DB_HOST}'
    WORDPRESS_DB_NAME: '${DB_NAME}'
    WORDPRESS_DB_USER: '${DB_USERNAME}'
    WORDPRESS_DB_PASSWORD: '${DB_PASSWORD}'
```
- De wordpress container heeft de volgende volumes nodig: _(vergeet niet om een - teken voor elke regel te plaatsen)_  
```yml
   ./themes:/var/www/html/wp-content/themes
   ./plugins:/var/www/html/wp-content/plugins
   ./uploads:/var/www/html/wp-content/uploads
```
- De Mariadb container heeft de volgende environment constanten nodig: 
```yml
    MYSQL_DATABASE: '${DB_NAME}'
    MYSQL_USER: '${DB_USERNAME}'
    MYSQL_PASSWORD: '${DB_PASSWORD}'
    MYSQL_ROOT_PASSWORD: '${DB_ROOT_PASSWORD}'
```
- De PhpMyAdmin container heeft de volgende environment constanten nodig: 
```yml
   PMA_HOST: '${DB_HOST}'
   PMA_USER: '${DB_USERNAME}'
   PMA_PASSWORD: '${DB_PASSWORD}'
```

---
### 4- Variabele in een .env file
Zoals in andere projecten maak je ook nu weer een .env file
- maak een voorbeeld .env file aan met de naam: `.env.example`
- plaats hierin de variabele die je straks gaat gebruiken:
```env
DB_NAME=
DB_USERNAME=
DB_PASSWORD=
DB_ROOT_PASSWORD=
```
- dupliceer dit bestand naar: `.env`
- vul de waardes in deze .env file

---
### 5- Negeren van bestanden via de .gitignore
Maak nu een .gitignore file aan om te zorgen dat niet alles naar git gaat.  
Hierbij een voorbeeld inhoud:
```gitignore
### Node an Vendor files
node_modules/
vendor/

### JetBrains
.idea

### Linux
*~
.Trash-*

### Windows
Thumbs.db
ehthumbs.db
Desktop.ini
$RECYCLE.BIN/
*.cab
*.msi
*.msm
*.msp
*.lnk

### OSX
.DS_Store
.AppleDouble
.LSOverride
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns

### Application
.env
_sources
```

---
### 6- Folders 
Maak de volgende drie folders aan waar je straks je plugins en thema kunt plaatsen:  
- themes
- plugins
- uploads

---
### 7- Start container
Start nu je docker container om je project in de browser te kunnen testen.  
```docker compose up```

---
{% include commit_push.md %}

---
### Volgende stap:
{: .text-green-100 .fs-4 }  
[Initialiseren van WordPress](initialiseren)
