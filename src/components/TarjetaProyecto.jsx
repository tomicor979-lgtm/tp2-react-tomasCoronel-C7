export default function TarjetaProyecto({ proyecto }) {
  return (
    <article className="tarjeta">
      <h3>{proyecto.nombre}</h3>
      <p>{proyecto.descripcion}</p>
      <p><strong>Tecnologías:</strong> {proyecto.tecnologias}</p>
      <p>Proyecto de práctica</p>
    </article>
  );
}
