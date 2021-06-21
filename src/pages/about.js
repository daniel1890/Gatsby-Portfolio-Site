import React from "react"
import Layout from "../components/Layout"
import { header } from "../styles/about.module.css"

export default function about() {
  return (
    <Layout>
      <div class="text-mid-justify">
        <section className={header}>
          <h2>About Pagina</h2>
          <p>
            In het begin van 2020 ben ik begonnen met het leren van
            programmeren. Als eerste begon ik te werken met Processing 3.0 en
            hierin heb ik de basics van programmeren mee geleerd (for-loops,
            lists, basic data types).
          </p>
          <p>
            In de tweede helft van 2020 ben ik begonnen met de basis van object
            georiënteerd programmeren, in het begin deed ik dat nog in
            Processing 3.0 maar na een tijdje stapte ik over naar Eclipse. In
            Eclipse heb ik geleerd om object georiënteerd te programmeren ik heb
            geleerd om classes te schrijven met daarin data en functionaliteit
            en hiermee programma's te schrijven. Ik heb een beetje geleerd over
            de Swing framework in Java maar sindsdien ben ik overgestapt naar C#
            en Visual Studio. In 2021 ben ik C# gaan leren, eerst ben ik
            begonnen met het schrijven van console apps maar ik ben nu ook
            ASP.net en Forms/WPF aan het ontdekken.
          </p>

          <h2>Wat wil ik leren in de toekomst/waarmee ben ik bezig</h2>

          <p>
            <ul>
              <li>Meer kennis over Javascript</li>
              <li>Websites leren bouwen mbv Gatsby.js</li>
              <li>Meer ontdekken over het Node.js ecosysteem</li>
              <li>Leren werken met ASP.NET en Entity Framework</li>
              <li>SQL/werken met databases</li>
              <li>
                De fundamentelen van OOP beter controleren(overerfing,
                interfaces & polymorphisme)
              </li>
            </ul>
          </p>
        </section>
      </div>
    </Layout>
  )
}
