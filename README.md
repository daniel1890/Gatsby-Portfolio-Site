# Gatsby Portfolio Website

## Project Informatie

Dit wordt een Portfolio website die wat informatie over mij laat zien, de pagina's die de website gaat hebben zijn:

- Index Pagina
- About Me Pagina
- Projecten Pagina

Met behulp van Gatsby is het makkelijk om een statische website te bouwen die een snelle response tijd heeft, je kunt makkelijk componenten creeëren net zoals je dat in React doet en deze zijn makkelijk te gebruiken in de markup van de pagina's. Ook is het met Gatsby makkelijk om een CMS / Headless CMS te koppelen aan de website en om deze data dan te gebruiken/transformeren met Gatsby.

## Stappenplan

1. Creeër een index pagina, een about me pagina, een 404 pagina en een projects pagina.
2. Creeër een Navbar component, deze kan je makkelijk importeren in een pagina en gebruiken; dit is het voordeel van het gebruik van componenten.
3. In plaats van dat de navbar in elke pagina geïmporteerd wordt is het makkelijker om een Layout component te maken, hierin bepaal je van te voren al wat de layout van de pagina is en het is makkelijk als boilerplate te gebruiken op elke pagina van de website, dit voorkomt veel dubbele code schrijven en copy paste werk.
4. Creeër een Layout component, hierin verwerk je alle content die op elke pagina weergeven wordt en deze layout is makkelijk te gebruiken over alle pagina's, ook kan je met behulp van de props parameters kun je children aanroepen, dit zorgt ervoor dat alle onderliggende data van het element gebruikt kan worden, hiermee wordt de content makkelijk ingevuld in de markup.
5. Creeër een css file in een nieuwe styles folder, deze css is makkelijk globaal toe te passen door de css file te importeren in de Layout component, doordat de |Layout component op elke pagina gebruikt wordt hoeft er maar 1 aanpassing gedaan te worden en de globaal verandert de styling.
6. Creeër een module.css file, deze wordt gebruikt wanneer css op 1 pagina toegepast moet worden, door de componenten van de module 1 per 1 te importeren kunnen ze makkelijk gebruikt worden de klassenamen te gebruiken van de desbetreffende componenten op de pagina.
7. Voeg een lokale StaticImage component toe, dit doe je door een image file toe te voegen aan de public folder, met gatsby-plugin-image en gatsby-plugin-sharp kan je een static image file toe voegen aan de markup, deze bestanden zijn bedoelt om zo snel mogelijk te renderen.

## Gebruikte Programmeertalen

- HTML & CSS
- Gatsby.JS / React

## Gatsby Plugins

- Gatsby Plugin Image
- Gatsby Plugin Sharp
