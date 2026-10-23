import { Route, Routes } from 'react-router-dom';
import BarraLateral from './components/BarraLateral.jsx';
import Encabezado from './components/Encabezado.jsx';
import PiePagina from './components/PiePagina.jsx';
import Inicio from './pages/Inicio.jsx';
import SobreMi from './pages/SobreMi.jsx';
import Habilidades from './pages/Habilidades.jsx';
import Proyectos from './pages/Proyectos.jsx';
import Contacto from './pages/Contacto.jsx';

function NoEncontrada() {
  return <section><h2>Página no encontrada</h2><p>Elegí una sección del menú para continuar.</p></section>;
}

export default function App() {
  return (
    <div className="distribucion">
      <BarraLateral />
      <div className="zona-principal">
        <Encabezado />
        <main className="contenido">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/about" element={<SobreMi />} />
            <Route path="/skills" element={<Habilidades />} />
            <Route path="/projects" element={<Proyectos />} />
            <Route path="/contact" element={<Contacto />} />
            <Route path="*" element={<NoEncontrada />} />
          </Routes>
        </main>
        <PiePagina />
      </div>
    </div>
  );
}
