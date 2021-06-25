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
8. Creeër een graphql query, dit is nodig om externe data op te halen vanuit een externe endpoint, een graphql query returned altijd een JSON object. Door graphql te importeren met gatsby is de graphql library makkelijk te gebruiken.
9. Voeg de gatsby-source-filesystem plugin toe, mbv deze plugin kan je lokale data gebruikelijk maken in de markup. Plugins moeten altijd geïnitialiseerd worden in de gatsby-config.js file, hier moet de plugin aangeroepen worden en in dit geval zijn ook een aantal opties aan verbonden.
10. Gebruik de localhost:8000/\_\_graphql url om de juiste queries mee te schrijven, schrijf de juiste queries om data vanuit de projects & notes folder op te vragen.
11. Verwijder notes folder want die is niet meer nodig, voeg de gatsby-transformer-remark plugin toe, deze plugin is nodig om markdown syntax te parsen naar HTML syntax, als dit niet gebeurt zou de tekst onleesbaar zijn. In de index page van projects wordt een graphql query toegevoegd, met deze query is de data op te halen van de bestanden uit de projects folder, door de data van de query mee te passen naar ons Projects component kunnen we de data als constante gebruiken waar we ook willen in de HTML markup, door template strings te gebruiken kan binnen een string een verschillende route meegegeven worden in de link per project, hierdoor wordt de project.frontmatter.slug gebruikt om de link de juiste route te geven. Mbv de map methode van JS kan je makkelijk door een lijst loopen, uit deze lijst selecteer je met elk element wat ermee moet gebeuren, hierdoor kan je makkelijk voor elk element dezelfde indeling en styling geven. Met de styles.module componenten kan je makkelijk compontenten individueel van elkaar styles, mbv css grid zijn de projecten makkelijk in een rij in de delen, oefen css grid meer is aangeraden.
12. Voeg een datum toe aan elk test-project.md bestand, met graphql kan je makkelijk een sort uitvoeren op de query, dit kan meer dan alleen de datum zijn maar in dit geval gebruiken we de datum om overheen te sorteren, als je bijvoorbeeld een blog zou maken kan je makkelijk de nieuwe posts bovenaan plaatsen en naar ouder sorteren.
13. Voeg een extra query toe aan de query op de projects/index page, met 1 query kunnen meerdere queries uitgevoerd worden, handig is dan wel om elke query te benoemen want vanuit de graphql query-namen is niet altijd duidelijk welke informatie opgehaald wordt, het is ook handig om dan elke query te verdelen in een eigen const voor elke query dan zijn de queries goed benoemd en verdeeld.
14. Creeër een nieuwe images folder in de src folder, dit is nodig omdat images nu eerst verwerkt worden nadat ze queried worden, dit is nodig zodat gebruikers op een kleiner scherm niet een volledig HD image hoeven te downloaden maar dat voor hen een kleinschaliger formaat gebruikt wordt, dit alles om data te besparen wanneer het niet nodig is om gebruikt te worden. Voeg een nieuwe instantie in van de gatsby-source-filesystem en verwijs hierin naar de src/images folder, dit is nodig zodat we queries uit kunnen voeren naar deze locatie. Mbv de gatsby-plugin-image kan je in de graphql query veel opties aanpassen, wat ook een leuke optie is is om de image blurry in te laden voordat de image volledig geladen is, dit ziet er wat netter uit wanneer meerdere images geladen moeten worden.
15. Voeg aan de images folder een featured en thumbs folder toe, deze gaan gebruikt worden om afbeeldingen in te stoppen die voor de dummy projecten gebruikt worden. Aan de dummy projecten voegen we een verwijzing toe aan de thumbnails en featured png bestanden, aan de query die al op de pagina staat voegen we aan de frontmatter { thumb { gatbsyImageData}}, hiermee kunnen op dezelfde manier als bij .14 de afbeeldingen optimaliseren voor de gebruikers, ook kunnen we aan zetten dat de afbeeldingen blurry ingeladen worden, dit is mooier voor de opmaak van de webpagina.

## Gebruikte Programmeertalen

- HTML & CSS
- Gatsby.JS / React

## Gatsby Plugins

- Gatsby Plugin Image
- Gatsby Plugin Sharp
- Gatsby Source Filesystem
- Gatsby Transformer Remark
