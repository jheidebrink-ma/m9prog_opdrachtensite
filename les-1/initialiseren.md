---
title: Les 1
layout: page
permalink: :path/:basename
nav_exclude: true
---

## HTML bestanden
{: .text-green-100 .fs-6 }
Nu je de server structuur hebt van je project is het tijd je thema klaar te zetten. 

---
### 1- Thema folder
Maak een nieuwe folder aan binnen in je thema folder en geef deze de naam van je thema, _(gebruik geen kapitalen en spaties)_.

---
### 2- Structuur van de thema folder
1. Plaats hierin een nieuw bestand met de naam `style.css`
2. Plaats hierin een nieuw bestand met de naam `index.php`
3. Plaats hierin een nieuw bestand met de naam `functions.php`
4. Plaats hierin een nieuw bestand met de naam `screenshot.png`
   Meer informatie over thema's: [https://codex.wordpress.org/Theme_Development](https://codex.wordpress.org/Theme_Development)

---
### 3- style.css
Weet je nog hoe het werkt?  
In dit bestand geef je aan hoe je thema heet.  
In dit voorbeeld heb ik een nieuw thema gemaakt met de naam `M9PROG_VOORBEELD_NAAM`  
Zie voor alle opties: [https://developer.wordpress.org/themes/core-concepts/main-stylesheet/](https://developer.wordpress.org/themes/core-concepts/main-stylesheet/)  
{: .mb-0 }
## Dit is een voorbeeld, let op dat je wel de juiste versie van php én WordPress instelt, anders werkt het thema niet.
{: .text-red-100 .fs-4 .mt-2 .mb-4 }

```css
/**
 * Theme Name:        M9PROG_VOORBEELD_NAAM
 * Theme URI:         https://ma-web.nl
 * Description:       This is a custom WordPress theme example
 * Version:           0.0.1
 * Author:            Jasper Heidebrink
 * Author URI:        https://ma-web.nl
 * Tags:              m9prog
 * Text Domain:       M9PROG_VOORBEELD_NAAM
 * Domain Path:       /languages
 * Tested up to:      6.5
 * Requires at least: 6.4
 * Requires PHP:      8.2
 * License:           GNU General Public License v2.0 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 */
 ```

---
### 4- index.php
Plaats hierin de basis elementen zoals:
```php
get_header();
```
```
De while loop
```
```php
get_footer();
```

---
### 5- functions.php
Plaats hierin de benodigde functies, laat het leeg als je nog geen nieuwe filters of functies hebt.

---
### 6- screenshot
Zorg dat dit een afbeelding is waar te zien is hoe je website eruit gaat zien.

---
### 7- initialisatie
Nu je de structuur hebt ingesteld is het eindelijk tijd om **docker te starten** en naar je browser te gaan om WordPress te initialiseren.   

---
{% include commit_push.md %}

---
### Volgende stap:
{: .text-green-100 .fs-4 }  
[testen](testen)