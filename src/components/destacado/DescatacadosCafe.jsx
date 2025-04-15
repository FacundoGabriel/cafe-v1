import './DescatacadosCafe.css'

export const DescatacadosCafe = () => {
  return (
    <>
      <div className="container-destacado container-fluid" data-aos="fade-up">
        <div className="row text-center">
          <div className="col-12 col-md-6 col-lg-3 card-destacado">
            <span><i className="mdi mdi-coffee"></i></span>
            <h3>Variedad de Café</h3>
            <p>Disfruta de espresso, capuchino y otras especialidades preparadas con granos selectos.</p>
          </div>

          <div className="col-12 col-md-6 col-lg-3 card-destacado">
            <span><i className="mdi mdi-thumb-up"></i></span>
            <h3>Tostado propio</h3>
            <p>Cada grano es tostado con precisión para lograr un sabor y aroma inigualables.</p>
          </div>

          <div className="col-12 col-md-6 col-lg-3 card-destacado">
            <span><i className="mdi mdi-sale"></i></span>
            <h3>Venta al por mayor y al por menor</h3>
            <p>Ofrecemos café en grano o molido, tanto para clientes particulares como para negocios.</p>   
          </div>

          <div className="col-12 col-md-6 col-lg-3 card-destacado">
            <span><i className="mdi mdi-truck"></i></span>
            <h3>Entrega exprés</h3>
            <p>Realizamos envíos en todo el país para que disfrutes de un buen café sin demoras.</p>
          </div>
        </div>
      </div>
    </>
  );
};
