---
title: Les 7
layout: page 
permalink: :path/:basename 
nav_exclude: true
---

## Backend testing
{: .text-green-100 .fs-6 }

Een `backend test` is een type softwaretest dat de functionaliteit, prestaties en betrouwbaarheid van de serverkant van een applicatie controleert. Dit omvat het testen van de databases, API's, servers en logica die `niet direct zichtbaar` zijn voor de gebruiker, maar wel `cruciaal` zijn voor het `correct functioneren van de applicatie`.   
Bij `backend tests` wordt vaak gekeken of data correct wordt verwerkt, opgeslagen en opgehaald, of de API's correct reageren op verzoeken, en of de applicatie efficiënt omgaat met belasting en schaalbaarheid.  
Het doel is om ervoor te zorgen dat de backend **stabiel** en **foutloos** werkt.

**Doel:** In deze opdracht leer je hoe je een eenvoudige test schrijft en uitvoert met PHPUnit in PHP.
Deze opdracht kun je ook zonder WordPress uitvoeren, gebruik hiervoor jouw blog project.  
Let op dat bij sommige omgevingen het installeren van composer minder soepel gaat, tijdens de les bespreken wij dit.  

---
### 1. Installatie van PHPUnit
1. Open de terminal van je **WordPress** container in `Docker`.
2. Installeer composer als je deze nog niet hebt geïnstalleerd: [https://getcomposer.org/download/](https://getcomposer.org/download/)
3. Installeer PHPUnit via Composer.
```bash
composer require --dev phpunit/phpunit
```
Of als je geen alias hebt geïnstalleerd:
```bash
php composer.phar require --dev phpunit/phpunit
```

---
### 2. Maak een eenvoudige PHP-functie
Maak een bestand aan, bijvoorbeeld `Rekenmachine.php`, met de volgende eenvoudige functie:
```php
<?php

class Rekenmachine
{
    public function optellen($a, $b)
    {
        return $a + $b;
    }
}
```

---
### 3. Schrijf een PHPUnit test
Maak nu een bestand `RekenmachineTest.php` in een nieuwe map genaamd `tests`, en schrijf de volgende test:
```php
<?php

use PHPUnit\Framework\TestCase;

class RekenmachineTest extends TestCase
{
    public function testOptellen()
    {
        $rekenmachine = new Rekenmachine();
        $resultaat = $rekenmachine->optellen(2, 3);
        
        $this->assertEquals(5, $resultaat);
    }
}
```

---
### 4. Voer de test uit
In de terminal voer je de test uit met het volgende commando:

```bash
vendor/bin/phpunit tests
```

#### Verwacht resultaat:
Je zou een succesmelding moeten zien als de test slaagt, zoals:
```
OK (1 test, 1 assertion)
```
---
#### Bonus:
- Pas de functie of de test aan, bijvoorbeeld om negatieve getallen op te tellen, en voer opnieuw de tests uit om te zien hoe PHPUnit werkt.

---
#### Meer informatie:
[PhpUnit](https://phpunit.de/index.html)  
[WordPress PHP Unit Documentation](https://make.wordpress.org/core/handbook/testing/automated-testing/phpunit/)

---
{% include commit_push.md %}

---
### Volgende stap:
{: .text-green-100 .fs-4 }  
In de volgende opdracht ga je een de tests automatisch uitvoeren.  
[Automatische code testing](git_hooks)
