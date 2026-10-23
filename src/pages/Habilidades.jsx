import TarjetaHabilidad from '../components/TarjetaHabilidad.jsx';
import { habilidades } from '../datos.js';

export default function Habilidades() {
  return (
    <section>
      <h2>Habilidades</h2>
      <p>Estas son algunas de las tecnologías y herramientas que estoy aprendiendo:</p>
      <ul className="lista-tarjetas">
        {habilidades.map((habilidad) => (
          <TarjetaHabilidad key={habilidad.id} habilidad={habilidad} />
        ))}
      </ul>
    </section>
  );
}
