import { useState } from 'react';

export default function SobreMi() {
  const [mostrarMas, setMostrarMas] = useState(false);

  return (
    <section>
      <h2>Sobre mí</h2>
      <p>Soy Tomas Coronel y estudio en la UTN, Facultad Regional Tucumán. Me interesa aprender cómo se construyen páginas y aplicaciones web.</p>
      <p>Mi objetivo es seguir practicando programación y mejorar mis proyectos con lo que aprendo en la carrera.</p>
      <button onClick={() => setMostrarMas(!mostrarMas)}>
        {mostrarMas ? 'Ver menos' : 'Ver más'}
      </button>
      {mostrarMas && <p>En este portfolio reúno mis habilidades y proyectos de práctica.</p>}
    </section>
  );
}
