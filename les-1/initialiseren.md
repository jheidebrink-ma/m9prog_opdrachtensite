---
title: Les 1
layout: page
permalink: :path/:basename
nav_exclude: true
---

## HTML bestanden
{: .text-green-100 .fs-6 }
Nu je de structuur hebt van je project is het tijd omervoor te zorgen dat je ook iets kunt zien. 

---
### 1- index.php
In je **index.php** bestand plaats je een HTML structuur, bijvoorbeeld:
```html
<html>
<head>
    <title>Music Library</title>
    <!-- ik laad op dit moment een simpele bootstrap css library -->
    <!-- zie: https://getbootstrap.com/docs/5.3/getting-started/introduction/ -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link href="assets/css/style.css" rel="stylesheet">
</head>

<body>
    <div class="container">
        <header>
            Header information
        </header>

        <div class="album py-5 bg-light">
            <div class="row">
                Content of this project
            </div>
        </div>
    </div>
    <!-- ik laad op dit moment een simpele bootstrap JavaScript library -->
    <!-- zie: https://getbootstrap.com/docs/5.3/getting-started/introduction/ -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"></script>
</body>
</html>
```

---
### 2- Demo data
In mijn voorbeeld maak ik gebruik van Bootstrap, hiermee kan ik snel een basis structuur voor een website opzetten.

---
### 3- css
Je ziet in de code dat ik een stylesheet bestand laad `assets/css/style.css`.  
Zorg dat je die ook aangemaakt hebt in de public folder zodat de browser bij deze bestanden kan.

---
{% include commit_push.md %}

---
### Volgende stap:
{: .text-green-100 .fs-4 }  
[testen](testen)