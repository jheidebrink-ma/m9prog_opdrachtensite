---
title: Les 5
layout: page 
permalink: :path/:basename 
nav_exclude: true
---

## WordPress plugins
{: .text-green-100 .fs-6 }

Binnen verschillende frameworks heb je diverse plugins, soms heten deze extensies en soms plugins.  
In alle gevallen bereiden ze het bestaande framework uit met nieuwe functionaliteit.  
Wij gaan nu een WordPress plugin ontwikkelen, volgens deze structuur kun je straks zelf ook plugins ontwikkelen en uiteindelijk beschikbaar maken voor ander developers.  
Afhankelijk van jouw doel kun je hier ook geld mee verdienen.  

---
### 1- Structuur
Begin met het opzetten van de structuur.  
1. Maak een nieuwe folder in je plugins folder en geef deze de naam van jouw plugin.
2. Plaats een php bestand in deze folder met dezelfde naam als jouw folder.

---
### 2- Definieer de plugin
Net als bij het thema heb je een DocBlok waar de informatie over dit thema in staat.  
Dit doe je nu bovenin het php bestand. 
Bijvoorbeeld in mijn geval heb ik een `blog plugin`.
```php

/**
 * @package blog_plugin
 * @version 1.7.2
 */
/*
Plugin Name: Blog Plugin
Plugin URI: https://mediacollege.rocks/blog
Description: Dit is een voorbeeld plugin
Author: Jasper Heidebrink
Version: 1.0.0
Author URI: https://mediacollege.rocks
*/
```

---
### 3- Voeg functionaliteit
Voeg nu een extra metabox toe aan de post page waar iemand kan aanvinken of de pagina of post **geblokkeerd** moet zijn en of er een **mail** verstuurd moet worden.   
Hiervoor kun je de volgende hooks gebruiken:
- admin_init (action)
- save_post (action)
En de volgende fucnties:
- add_meta_box
- wp_verify_nonce

Bijvoorbeeld:
```php
// register the meta box
add_action( 'add_meta_boxes', 'my_custom_field_checkboxes' );
function my_custom_field_checkboxes() {
    add_meta_box(
        'my_meta_box_id',          // this is HTML id of the box on edit screen
        'My Plugin Checkboxes',    // title of the box
        'my_customfield_box_content',   // function to be called to display the checkboxes, see the function below
        'post',                     // on which edit screen the box should appear
        'normal',                   // part of page where the box should appear
        'default'                   // priority of the box
    );
}

// display the metabox
function my_customfield_box_content() {
    echo '<input type="checkbox" name="my_plugin_blocked" value="1" /> blocked content <br />';
    echo '<input type="checkbox" name="my_plugin_mail" value="1" /> send a mail on update';
}

// save data from checkboxes
add_action( 'save_post', 'my_custom_field_data' );
function my_custom_field_data($post_id) {

    // check if this isn't an auto save
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE )
        return;

    // now store data in custom fields based on checkboxes selected
    if ( isset( $_POST['my_plugin_blocked'] ) )
        update_post_meta( $post_id, 'my_plugin_blocked', 1 );
    else
        update_post_meta( $post_id, 'my_plugin_blocked', 0 );

    if ( isset( $_POST['my_plugin_mail'] ) )
        update_post_meta( $post_id, 'my_plugin_mail', 1 );
    else
        update_post_meta( $post_id, 'my_plugin_mail', 0 );
}
``` 

Later kun je controleren bij het opslaan of een post bepaalde meta data heeft en of je aan de hand daarvan een moet mail versturen.  


---
### 4- Controleer
Bekijk je website nu in de browser.  
Als het goed is zie je nu een extra element in je edit scherm van de post.

---

{% include commit_push.md %}

---
### Volgende stap:
{: .text-green-100 .fs-4 }  
In de volgende pagina ga je één enkele pagina of blog item weergeven.  
[Mails versturen](mail)


