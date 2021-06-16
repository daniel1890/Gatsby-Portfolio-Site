import React from "react"
import Navbar from "../pages/components/Navbar"

export default function Home() {
  return (
    <section>
      <Navbar />
      <div>
        <h2>Design</h2>
        <h3>Ontwikkel & Deploy</h3>
        <p>
          Programmeer liefhebber geïnteresseerd in Web-Deb; front- & back-end.
        </p>
      </div>
    </section>
  )
}

// Functies kunnen op 2 manier geschreven worden, snel met: export default function FunctionName() { }
// Of: Const Home = () => { }
// export default Home;
