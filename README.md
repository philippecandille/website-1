Thème WordPress pour Virgo Coop
===============================

* Thème basé sur https://github.com/Automattic/_s.
* Créé dans le contexte d'un WordPress dockerisé (https://github.com/visiblevc/wordpress-starter).
* Stack : Webpack, React, WordPress REST API.

## Mise en place

- `docker-compose up`
  - installe WordPress tel que configuré selon le docker-compose.yml
  - monte les volumes décrits dans le docker-compose.yml, y compris le thème Virgo Coop
- activer le thème Virgo Coop dans le back-office WordPress
- travailler sur le thème dans theme-virgo-coop/
  - `npm run [build|watch]`

## TODO

Application React isomorphique dans un contexte WP-REST-API ?

- la solution https://prerender.io/ me paraît bancale, il faut màj etc.
- du coup, isomorphique « pur » => pre-rendering de la route demandée (Node.js) pour la SEO
- si isomorphique « pur » trop chiant, on peut imaginer un contenu statique optimisé pour la SEO, mais non-affiché, et garder une SPA classique à l'affichage (loading async de la route demandée). Le contenu statique serait alors toujours le même, quelle que soit la route demandée (ie. utiliser le fallback contenu de WordPress pour servir cette version SEO-aware statique, quelle que soit l'url)
- coté client, utilisation de React-Router + Redux (middleware) pour charger le contenu depuis l'API REST de WordPress, en fonction de la route
