import { Link } from 'react-router-dom';

export default function Inicio() {
  return (
    <section>
      <h2>Hola, soy Tomas</h2>
      <p>Estudio en la Universidad Tecnológica Nacional, Facultad Regional Tucumán.</p>
      <p>Estoy aprendiendo desarrollo web y armé este portfolio para mostrar mi perfil, mis habilidades y algunos proyectos de práctica.</p>
      <Link to="/about">Conocé más sobre mí</Link>
    </section>
  );
}
