---
title: Les 2
layout: page
permalink: :path/:basename
nav_exclude: true
---

## Stel de style.css in
{: .text-green-100 .fs-6 }

In het style.css bestand kun je aangeven hoe het thema heet en wie hem gemaakt heeft.    

---
### 1- style.css
In dit bestand geef je aan hoe je thema heet en wat de parent is.  
In dit voorbeeld heb ik een nieuw thema gemaakt met de naam `M5PROG`  
Zie voor alle opties: [https://developer.wordpress.org/themes/core-concepts/main-stylesheet/](https://developer.wordpress.org/themes/core-concepts/main-stylesheet/)  
Dit zijn de minimale instellingen voor een **gewoon** thema
```css
/*
Theme Name: M5PROG
Author: Jasper
*/
```
Dit zijn de minimale instellingen voor een gewoon **child** thema
```css
/*
Theme Name: M5PROG
Author: Jasper
Template: cue
*/
```


Hierbij een uitgebreide lijst met instellingen, bekijk deze maar eens om te zien wat je zelf wilt gebruiken.  
```css
/**
 * Theme Name:        M5PROG Child theme
 * Theme URI:         https://ma-web.nl
 * Description:       This is a custom child theme
 * Version:           1.0.0
 * Template:          cue
 * Author:            Jasper Heidebrink
 * Author URI:        https://ma-web.nl
 * Tags:              m5prog
 * Text Domain:       m5prog
 * Domain Path:       /languages
 * Tested up to:      6.4
 * Requires at least: 6.2
 * Requires PHP:      7.4
 * License:           GNU General Public License v2.0 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 */
```


---

{% include commit_push.md %}

---
### Volgende stap:
{: .text-green-100 .fs-4 }  
[Activeer en controleer dit thema](check)

