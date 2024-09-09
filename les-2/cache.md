---
title: Les 2
layout: page
permalink: :path/:basename
nav_exclude: true
---

## Verschillende type cache
{: .text-green-100 .fs-6 }

Als developer loop je tegen verschillende type cache aan.  
Deze verschillende soorten caching worden gebruikt om de prestaties van een website of applicatie te verbeteren.  
Hier bespreek ik de belangrijkste types en hoe je deze geforceerd kunt legen.

---
### 1- Server-side Cache
Op de server wordt de gegenereerde informatie voor een bepaalde tijd opgeslagen.  
Hierdoor hoeft de server niet steeds dezelfde gegevens opnieuw te berekenen of ophalen uit de database.  
Dit kan een full-pagina-cache _( HTML )_ of een object-cache _( gedeelte van een web pagina )_ 
**Geforceerd legen**
- via een deploy _( komt later )_
- via een cli script zoals: `php artisan cache:clear`

---
### 2- Database Cache
Als je meerdere keren een database query uitvoert zal het resultaat opgeslagen worden op de database server om de server te ontlasten.  
**Geforceerd legen**
- met de mysql query: `RESET QUERY CACHE;`  

---
### 3- Browser Cache
De browser slaat bestanden zoals afbeeldingen, CSS en JavaScript lokaal op de computer van de gebruiker op.  
Dit zorgt ervoor dat bij een volgend bezoek dezelfde bestanden niet opnieuw van de server hoeven te worden gedownload, wat de laadtijd versnelt.  
Dit is de belangrijkste cache, maar ook de **vervelendste**.  
Om ervoor te zorgen dat je een nieuwe versie van bijvoorbeeld de css moet laden kun je de cache legen in de browser, maar dit kun je je klanten niet laten doen.  
Daarom moet je tegen de browser vertellen dat je een nieuwe versie wilt laden, door bijvoorbeeld een variabele toe te voegen achter de url: `?v=VERSION_NUMBER`  
Door `VERSION_NUMBER` te vervangen door een nieuw nummmer zal de browser zien dat er een ander bestand geladen moet worden.  
Je kunt in je thema het versie nummer van WordPress overschrijven om zo zelf controle te hebben over de versies met het volgende filter:  
Voor nu kun je jouw css te laden door een nieuw filter aan te maken:    
```php
/**
 * Replace WP version with custom version number 
 *
 * @param $src
 *
 * @return string
 */
public function filter_custom_version( $src ) {
    if ( strpos( $src, 'ver=' ) ) {
        $src = remove_query_arg( 'ver', $src );
        $src .= '?ver=' . D_VERSION;
    }

    return $src;
}
add_filter( 'the_generator', [ $this, 'filter_custom_version' ] );
```

**Let op:**  
Ik heb ergens anders de constante `D_VERSION` gedefinieerd, die is noodzakelijk in deze code. 


---

{% include commit_push.md %}

