import "./Menu.css";
import menu from "../../menu.json";

export const Menu = () => {
  return (
    <>
      <div className="container-fluid container-menu">
        <h2 className="pt-5" data-aos="fade-right">Menú</h2>

        <div className="row mt-5" data-aos="fade-up"  >
          {menu.map((item, index) => (
            <div className="col-12 col-md-6 col-lg-3 menu-item px-3" key={index}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>${item.price}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
