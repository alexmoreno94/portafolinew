export default function SobreMi() {
  return (
    <main className="about-main">
      <div className="about-inner">

        {/* FOTO MEVA */}
        <div className="about-photo">
          <img src="/perfil.jpeg" alt="Foto de l’Alex" />
        </div>

        {/* TEXT */}
        <div className="about-content">
          <h1 className="about-title">SOBRE MI</h1>

          <p className="about-description">
            Hola, soc l’Alex. Vinc del món de la gràfica publicitària, on em vaig formar a l’Escola d’Art d’Olot i on vaig aprendre a donar forma a idees, organitzar projectes i moure’m entre conceptes creatius i direcció d’art. Amb el temps, aquesta base visual i conceptual em va portar a expandir el meu perfil cap al desenvolupament web.
          </p>

          <p className="about-description">
            Actualment combino aquests dos àmbits: el sentit visual i estratègic del disseny amb la capacitat de crear aplicacions funcionals i eficients. M’apassiona la programació, explorar noves tecnologies i trobar solucions que millorin l’experiència digital de manera pràctica, intuïtiva i atractiva. Sempre busco noves formes d’unir creativitat i tecnologia per aportar valor en cada projecte.
          </p>
        </div>

      </div>
    </main>
  );
}
