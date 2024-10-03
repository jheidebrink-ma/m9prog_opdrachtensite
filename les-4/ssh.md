---
title: Les 4
layout: page
permalink: :path/:basename
nav_exclude: true
---

## SSH commando's 
{: .text-green-100 .fs-6 }

SSH, _Secure Shell_, is een protocol dat veilige communicatie mogelijk maakt tussen een client en een server.
Het wordt vaak gebruikt voor remote access tot servers, waarbij je commando's kunt uitvoeren en bestanden kunt overdragen.
SSH zorgt ervoor dat deze verbinding versleuteld is, waardoor gevoelige gegevens veilig blijven.

---
### 1- SSH
Het basiscommando om verbinding te maken met een remote server. 
De syntaxis is `ssh gebruikersnaam@server_ip`, waarbij je de gebruikersnaam en het IP-adres of de hostname van de server invult.  
Bij de eerste verbinding moet je de server identificeren door een sleutel te accepteren.

### 2- scp  
Met `scp` _(Secure Copy Protocol)_ kun je veilig bestanden kopiëren tussen je lokale machine en een remote server. 
De syntaxis is `scp lokaal_bestand gebruikersnaam@server_ip:/doelmap`.  
Dit maakt het eenvoudig om gegevens over te dragen zonder dat je extra tools nodig hebt.

### 3- sftp
`sftp` _(SSH File Transfer Protocol)_ biedt een interactieve manier om bestanden tussen lokale en remote systemen te beheren. 
Start met `sftp gebruikersnaam@server_ip`. 
Eenmaal verbonden, kun je bestanden uploaden, downloaden, en beheren met commando's zoals `put` en `get`.

### 4- ssh-keygen  
Dit commando genereert een SSH-sleutelpaar `(public en private key)` voor veilige authenticatie. 
Gebruik `ssh-keygen` om een nieuw paar sleutels te maken, en sla deze veilig op. 
De public key moet je op de server plaatsen om password-less login mogelijk te maken.

### 5- ssh-copy-id  
Met `ssh-copy-id` voeg je eenvoudig je publieke sleutel toe aan de `authorized_keys` op de remote server. 
Het commando is `ssh-copy-id gebruikersnaam@server_ip`, waardoor je voortaan zonder wachtwoord kunt inloggen.

### 6- ssh-agent 
`ssh-agent` is een programma dat je SSH-sleutels beheert en ze automatisch aan de SSH-client aanbiedt, zodat je niet telkens je wachtwoord hoeft in te voeren. 
Start het met `eval $(ssh-agent)` en voeg je sleutel toe met `ssh-add`.

### 7- ssh-config  
Met een configuratiebestand (`~/.ssh/config`) kun je standaardinstellingen voor je SSH-verbindingen beheren, zoals aliasnamen, poorten en sleutels. 
Dit maakt het eenvoudiger om verbinding te maken zonder steeds lange commando's te hoeven typen.

### 8- ssh -L  
Met port forwarding (`ssh -L`) kun je lokale poorten doorsturen naar een remote server. 
Het commando `ssh -L lokale_poort:remote_host:remote_poort gebruikersnaam@server_ip` maakt het mogelijk om een beveiligde tunnel te creëren voor applicaties die normaal niet via SSH toegankelijk zijn.

### 9- chmod
Het chmod-commando wordt gebruikt om de toegangsrechten van bestanden en mappen te wijzigen. 
Je kunt hiermee instellen wie een bestand kan lezen, schrijven of uitvoeren.  
De syntaxis is `chmod [rechten] [bestand]`, waarbij rechten kunnen worden aangegeven in octale notatie (bijv. **755**) of met symbolische notatie (bijv. **u+x** om uitvoerrechten voor de eigenaar toe te voegen). 
Dit is essentieel voor het beheer van de beveiliging van je bestanden.

### 10- chown
Met het chown-commando kun je de eigenaar en/of groep van een bestand of map wijzigen.   
De syntaxis is `chown [nieuwe_eigenaar]:[nieuwe_groep] [bestand]`.  
Dit is handig als je wilt dat een andere gebruiker toegang heeft tot bepaalde bestanden of als je de eigenaar wilt veranderen na het verplaatsen van bestanden naar een nieuwe locatie. 
Het correct instellen van eigenaarschap is cruciaal voor systeembeveiliging en gebruikersbeheer.

### 10- ln
Het ln-commando wordt gebruikt om links naar bestanden aan te maken.  
Met `ln [origineel_bestand] [linknaam]` maak je een harde link, terwijl `ln -s [origineel_bestand] [linknaam]` een symbolische link creëert. 
Harde links delen dezelfde inode _(index node)_, terwijl symbolische links verwijzen naar de originele bestandslocatie. 
Dit kan nuttig zijn voor het organiseren van bestanden of het maken van snelkoppelingen naar veelgebruikte bestanden.

### Conclusie  
Met deze basiscommando's ben je goed uitgerust om effectief gebruik te maken van SSH voor veilige communicatie en bestandsoverdracht. 
Experimenteer met deze commando's om je vaardigheden verder te ontwikkelen!
