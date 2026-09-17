---
title: Les 1
layout: page
permalink: :path/:basename
nav_exclude: true
---

## Ssh key instellen voor Github én NexEd
{: .text-green-100 .fs-6 }

1- Maak een nieuwe ssh key
2- maak in je ~/.ssh folder een bestand met de naam 'config'
3- In dit bestand plaats je:
```ssh

# --- Nexed ---
Host gitnext.com
HostName gitnext.com
User nexedUserJasper
PreferredAuthentications publickey
IdentityFile ~/.ssh/nexed_rsa
UseKeychain yes
AddKeysToAgent yes
# ----------------------------


# --- Github ---
Host github.com
HostName github.com
User jasperGitUser
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_ed25519
# ----------------------------

```

4- Stel deze gegevens zo in dat deze overeenkomen met de juiste ssh keys.
5- In Github kun je onder jouw user en dan de settings je ssh key toevoegen.