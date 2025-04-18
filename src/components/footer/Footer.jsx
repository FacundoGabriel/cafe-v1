import "./Footer.css";

export const Footer = () => {
  return (
    <div className="container-fluid container-footer">
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3 mb-4 text-center text-lg-start">
          <p className="footer-logo">Logo</p>
          <p className="footer-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
            enim, doloribus veniam amet illo commodi aliquid facilis quod magni.
          </p>
        </div>

        <div className="col-12 col-md-4 col-lg-3 mb-4 text-center">
          <h3 className="mb-4 mb-md-3">Redes</h3>
          <ul className="footer-social d-flex flex-column align-items-center">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="mdi mdi-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="mdi mdi-instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="mdi mdi-twitter"></i> Twitter
              </a>
            </li>
          </ul>
        </div>

        <div className="col-12 col-md-4 col-lg-3 mb-4 footer-contacto text-center text-lg-start">
          <h3 className="mb-2 ">Contacto</h3>
          <div className="d-flex flex-column align-items-center justify-content-center footer-info ps-0">
            <p>
              <i className="mdi mdi-map-marker"></i> Calle 1234
            </p>
            <p>
              <i className="mdi mdi-cellphone"></i> +54 9 1234 5678
            </p>
            <p>
              <i className="mdi mdi-email"></i> correo@correo.com
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4 col-lg-3 mb-4 footer-politicas text-center text-lg-start">
          <h3>Políticas</h3>
          <div className="politicas-info text-lg-start">
            <p>
              <a href="#">Privacidad</a>
            </p>
            <p>
              <a href="#">Términos y condiciones</a>
            </p>
            <p>
              <a href="#">Cookies</a>
            </p>
            <p>
              <a href="#">Preguntas frecuentes</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
