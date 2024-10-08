---
title: Les 5
layout: page 
permalink: :path/:basename 
nav_exclude: true
---

## Mails versturen
{: .text-green-100 .fs-6 }

Binnen php kun je gebruik maken van een `mail` functie waarmee je mails kunt sturen naar een klant.  
Deze functie werkt alleen niet op alle servers, daar moet je rekening mee houden.  
Binnen WordPress kun je gebruik maken van de `wp_mail()` functie, zie: [https://developer.wordpress.org/reference/functions/wp_mail/](https://developer.wordpress.org/reference/functions/wp_mail/)

---
### 1- Implementatie mail functie
Met de volgende code kun je mails versturen via wp_mail().  
Waarbij `$to` het mail adres van de ontvanger is.  
Gebruik als afzender hetzelfde domain als waar de site staat om spam issues te voorkomen.
```php

// Headers instellen voor HTML e-mail
$headers = array('Content-Type: text/html; charset=UTF-8');

// Extra headers, zoals van wie de mail afkomstig is
$headers[] = 'From: Jouw Naam <jouwnaam@voorbeeld.com>';

// Verstuur de e-mail
if(wp_mail($to, $subject, $message, $headers)) {
    echo "E-mail succesvol verzonden via wp_mail!";
} else {
    echo "Er is een fout opgetreden bij het verzenden van de e-mail.";
}
```

---
### 2- Test en controleer
Kijk nu eens of je mails kunt versturen.

---

{% include commit_push.md %}



