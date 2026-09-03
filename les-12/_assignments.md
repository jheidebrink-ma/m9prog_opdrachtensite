## Deployment
{: .text-green-200 .fs-5 }

1. Maak eerst een back-up van je lokale database en de productieomgeving als die al bestaat.
2. Maak een productie-build van je front-end met `npm run build`.
3. Verplaats database, uploads, plugins en jouw custom theme volgens je checklist.
4. Gebruik bij een domeinwijziging eerst een WP-CLI `search-replace --dry-run` en controleer het resultaat.
5. Controleer de live URL in een privévenster, op mobiel en als niet-ingelogde bezoeker.

**Resultaat:** jouw portfolio is publiek bereikbaar op een live URL.
