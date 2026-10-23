import { NavLink } from 'react-router-dom';

const secciones = [
  { ruta: '/', nombre: 'Inicio', exacta: true },
  { ruta: '/about', nombre: 'Sobre mí' },
  { ruta: '/skills', nombre: 'Habilidades' },
  { ruta: '/projects', nombre: 'Proyectos' },
  { ruta: '/contact', nombre: 'Contacto' },
];

export default function BarraLateral() {
  return (
    <aside className="barra-lateral">
      <h1>Tomas Coronel</h1>
      <p>Portfolio personal</p>
      <nav className="navegacion">
        {secciones.map((seccion) => (
          <NavLink
            key={seccion.ruta}
            to={seccion.ruta}
            end={seccion.exacta}
            className={({ isActive }) => isActive ? 'enlace activo' : 'enlace'}
          >
            {seccion.nombre}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
