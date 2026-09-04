## Custom theme structureren
{: .text-green-200 .fs-5 }

**Voorwaarde:** je custom theme uit les 2 is actief. Je werkt nu verder aan hetzelfde theme, niet aan een nieuw theme.

1. Maak `functions.php` als dit bestand nog niet bestaat en laad styles en scripts via `wp_enqueue_style()` en `wp_enqueue_script()`.
2. Voeg `add_theme_support( 'post-thumbnails' )` toe en leg in `ai-log.md` uit welk effect dit heeft.
3. Maak `front-page.php` en `page.php`. Geef iedere template een herkenbare testkop, zodat je kunt zien welk bestand WordPress kiest.
4. Lees de WordPress-templatehiërarchie en noteer welke template gebruikt wordt voor de homepagina en een gewone pagina.
5. Maak in WordPress een homepagina en een over-mij-pagina. Controleer dat de juiste templates worden geladen.

**Resultaat:** een gestructureerd custom theme waarin WordPress verschillende templates aantoonbaar correct kiest.
