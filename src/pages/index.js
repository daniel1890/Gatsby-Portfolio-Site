import React from "react"
import Layout from "../components/Layout"
import { header } from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Ontwikkel & Deploy</h3>
          <p>
            Programmeer liefhebber geïnteresseerd in Web-Deb; front- & back-end.
          </p>
        </div>
      </section>
    </Layout>
  )
}

// Functies kunnen op 2 manier geschreven worden, snel met: export default function FunctionName() { }
// Of: Const Home = () => { }
// export default Home;
