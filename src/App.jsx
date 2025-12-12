import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import SobreMi from "./SobreMi";


// AQUEST COMPONENT ÉS LA TEVA PÀGINA DE PROJECTES (abans era tot l'App)
function Home() {
  return (
    <>
      <main className="section-main">
        <div className="section-inner">
          <div className="section-video">
            <video
              src="./src/assets/videogrito.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="video-element"
            />
          </div>

          <div className="section-content">
            <h1 className="section-title">GRITO FESTIVAL</h1>

            <p className="section-description">
              Grito és una pàgina web dedicada a un festival de música Tecno, Rap, Trap i HardTechno.
              A més de proporcionar informació bàsica sobre l'esdeveniment, inclou una secció de gestió que permet
              afegir, editar i eliminar artistes, però només per a usuaris amb permisos d'administrador. Es tracta
              d'un projecte escolar desenvolupat seguint el patró d'arquitectura MVC (Model-Vista-Controlador).
            </p>

            <p className="section-description-tecno">
              JavaScript • PHP • MySQL
            </p>

            <a href="https://github.com/alexmoreno94/grito" className="section-link">
              Visitar projecte →
            </a>
          </div>
        </div>
      </main>

      <main className="section-main">
        <div className="section-inner">
          <div className="section-video">
            <video
              src="./src/assets/videoparataula.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="video-element"
            />
          </div>

          <div className="section-content">
            <h1 className="section-title">PARA TAULA</h1>

            <p className="section-description">
              Para Taula és un projecte per a la gestió de comandes, plats i menús d’un restaurant.
              El sistema funciona en un restaurant que ofereix un menú diari, on els clients poden escollir
              tres plats per comanda: un entrant, un primer i un postre. Un cop feta la comanda, els clients poden consultar
              l’historial de totes les seves comandes realitzades. L’administrador té la capacitat de gestionar totes
              les comandes dels clients, acceptant-les o cancel·lant-les segons convingui. A més, pot afegir nous plats als menús i crear-ne de nous.
            </p>

            <p className="section-description-tecno">
              Vue3 • PHP • MySQL • JavaScript
            </p>

            <a href="#" className="section-link">
              Visitar projecte →
            </a>
          </div>
        </div>
      </main>

      <main className="section-main">
        <div className="section-inner">
          <div className="section-video">
            <video
              src="./src/assets/videoautomocio.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="video-element"
            />
          </div>

          <div className="section-content">
            <h1 className="section-title">AUTOMOCIÓ</h1>

            <p className="section-description">
              L’objectiu principal del projecte va ser desenvolupar des de zero una plataforma web on els
              usuaris poguessin consultar totes les activitats de l’esdeveniment i inscriure’s amb facilitat. Al mateix temps, els organitzadors necessitaven una eina tan editable com fos possible, ja que no disposaven de coneixements tècnics de programació.
              El resultat és un lloc web totalment gestionable: permet editar textos, crear nous esdeveniments,
              afegir imatges, documents i patrocinadors, tot des d’un panell d’administració intuïtiu.
            </p>

            <p className="section-description-tecno">
              Vue3 • PHP • MySQL • JavaScript
            </p>

            <a href="https://github.com/nilpuerto/Automocio" className="section-link">
              Visitar projecte →
            </a>
          </div>
        </div>
      </main>

      <main className="section-main">
        <div className="section-inner">
          <div className="section-video">
            <video
              src="./src/assets/videorepartirb.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="video-element"
            />
          </div>

          <div className="section-content">
            <h1 className="section-title">REPARTIR B</h1>

            <p className="section-description">
              He desenvolupat la web de RepartirB amb l’objectiu de crear una identitat digital moderna,
              clara i professional per al servei. La web està pensada per transmetre immediatament el concepte
              del projecte i destacar les funcionalitats del sistema.
            </p>

            <p className="section-description-tecno">
              HTML • CSS • JavaScript
            </p>

            <a href="https://repartirb.com/" className="section-link">
              Visitar projecte →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobremi" element={<SobreMi />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
