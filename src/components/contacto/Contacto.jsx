import './Contacto.css'

export const Contacto = () => {
  return (
    <>
        <div id='contacto' className='container-fluid container-contacto  mt-5'>
            <h2>Contacto</h2>

            <div className='contacto-info d-flex justify-content-center flex-column flex-lg-row gap-10 mt-5'>
                <h3 className='mt-5 mt-lg-0' >Contactanos</h3>
                <input type="email" className='' placeholder='correo'/>
                <button className='btn-style '>Enviar</button>

                <ul className="list-unstyled d-flex gap-10 justify-content-center align-items-center m-0 p-0 list-iconos">
                <li><a href="#" target="_blank">
                    <i className="mdi mdi-facebook"></i>
                  </a>
                </li>
                <li><a href="#" target="_blank"><i className="mdi mdi-instagram"></i></a></li>
                <li><a href="#" target="_blank"><i className="mdi mdi-twitter"></i></a></li>
              </ul>
            </div>
        </div>

    </>
  )
}
