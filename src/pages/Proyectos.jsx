import TarjetaProyecto from '../components/TarjetaProyecto.jsx';
import { proyectos } from '../datos.js';

export default function Proyectos() {
  return (
    <section>
      <h2>Proyectos</h2>
      <p>Ideas de práctica, reales o ficticias, para seguir aprendiendo:</p>
      <div className="lista-tarjetas">
        {proyectos.map((proyecto) => (
          <TarjetaProyecto key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </section>
  );
}
