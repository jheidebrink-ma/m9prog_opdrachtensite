## Bootstrap, Sass, npm en Webpack
{: .text-green-200 .fs-5 }

1. Installeer npm-dependencies en maak een `package.json` met `dev`- en `build`-scripts.
2. Configureer Webpack voor JavaScript en Sass.
3. Importeer Bootstrap via Sass en overschrijf ten minste kleuren, spacing of typografie met eigen variabelen.
4. Enqueue alleen de gecompilede bestanden vanuit je theme.
5. Controleer met een productie-build dat de website zonder ontwikkelserver goed werkt.

## Voorbeeld
In dit voorbeeld heb ik in de thema folder een `src` folder met daarin een `js`, `scss`, `images` en `fonts` folder. 
Door gebruik te maken van mijn webpack kopiëer en compile ik de bestanden naar de `dist` folder. Deze `dist` fodler gaat straks naar de live omgeving, mijn `src` folder blijft alleen **lokaal** en in **git**. 
### Fonts
In de fonts folder zitten fonts die ik kopieer naar de dist folder en die ik in mijn scss gebruik. 
### Images
In de images folder zitten afbeeldingen die ik kopieer naar de dist folder en die ik in thema gebruik.
### Scss
In de scss folder zit een `main.scss` bestand waarin ik bootstrap importeer en mijn eigen scss bestanden. In de `main.scss` importeer ik eerst mijn variabelen.
### Js
In de js folder zit een `main.js` bestand waarin ik mijn eigen js code schrijf en compile naar de dist folder.

### Compile
De compile process zorgt ervoor dat mijn JavaScript en Sass bestanden worden omgezet naar een vorm die in de browser goed werkt. 
Dit voer ik straks uit met je `npm run build` command.

### bestanden
Hier kun je een voorbeeld van de [package.json](./data/package.json) en [webpack.config.js](./data/webpack.config.js) vinden.

**Resultaat:** je front-end wordt reproduceerbaar gecompileerd en heeft een eigen visuele basis.
