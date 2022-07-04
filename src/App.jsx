//App.jsx
import { useState } from 'react';
import './App.css'
import Button from "./Button";

function App(){
  const [selecionado, setSelecionado] = useState(false);

  function mudaIcones() {
      setSelecionado(!selecionado);
      console.log(selecionado);
  }

  const icones = [
    {
      link: "Ifro.png",
      nome: "AVA",
    },
    {
      link: "brainly.png",
      nome: "brainly",
    },
    {
      link: "youtube.jpg",
      nome: "YouTube",
    },
    {
      link: "pinterest.png",
      nome: "Pinterest",
    },
    {
      link: "muitomanga.png",
      nome: "MuitoManga",
    },
    {
      link: "Wattpad.png",
      nome: "Wattpad",
    },
    {
      link: "mais.png",
      nome: "Adicionar ata...",
    },

  ]

  return(
      <div className="Icones">
        {icones.map((icone) => {
          return <Button link={icone.link} nome={icone.nome} />
        })}
      </div>
  );
}
export default App