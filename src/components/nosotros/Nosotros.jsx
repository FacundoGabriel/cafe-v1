import "./Nosotros.css";
import empleados from "../../empleados.json";

export const Nosotros = () => {
  return (
    <>
      <div className="container-fluid container-nosotros">
        <h3 className="pt-5" data-aos="fade-right">
          ¿Quienes somos?
        </h3>
        <div className="info-nosotros mt-4">
          <h2 data-aos="fade-left">Una historia que comenzó con aroma</h2>
          <p data-aos="fade-left">
            Todo empezó en una pequeña cocina, con una vieja cafetera que reunía
            amigos, risas y sueños. Lo que era una simple costumbre se
            transformó en pasión: compartir el mejor café, hecho con dedicación
            y mucho amor. Así nació nuestra cafetería, como un lugar donde cada
            taza cuenta una historia, y cada persona forma parte de ella.
          </p>
          <p data-aos="fade-up">Conocé a quienes hacen esto posible:</p>
        </div>

        <div className="row mt-5">
          {empleados.map((item, index) => (
            <div
              className="col-12 col-md-6 col-lg-3 empleados-info" data-aos="fade-up"
              key={index}>
              <div className="img-wrapper">
                <img src={item.foto} className="img-fluid" alt="foto del empleado/dueños"/>
              </div>
              <h2>{item.nombre}</h2>
              <p>{item.cargo}</p>
              <p>{item.description}</p>

              <ul className="list-unstyled d-flex gap-3 justify-content-center align-items-center m-0 p-0 list-iconos">
                <li><a href={item.redes.facebook} target="_blank">
                    <i className="mdi mdi-facebook"></i>
                  </a>
                </li>
                <li><a href={item.redes.instagram} target="_blank"><i className="mdi mdi-instagram"></i></a></li>
                <li><a href={item.redes.twitter} target="_blank"><i className="mdi mdi-twitter"></i></a></li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
