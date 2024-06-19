import { Link } from "react-router-dom";
import { routes, socialMediaLinks } from "./routes";
import { NavbarContainer, Navlist } from "./style";
import { DisplayCard } from "../../components/displayCard";
import { BurgerMenuIcon, TariotyIcon } from "../../assets/icons";

const Navbar = () => {
  return (
    <DisplayCard backgroundColor={"#0A0A0A"}>
      <NavbarContainer>
        <Navlist>
          {routes.map((item) => {
            return (
              <Link id="navShadowlink" to={item.link}>
                <div className="navNames">
                  <p id="navName">{item.page}</p>
                  <div id="line"></div>
                  <div id="navNameShadow">{item.page}</div>{" "}
                </div>
              </Link>
            );
          })}
        </Navlist>
        <div id="img">
          <Link to={"*"}>
            <TariotyIcon />
          </Link>
        </div>
        <Navlist>
          {socialMediaLinks.map((item) => (
            <Link id="navShadowlink" to={item.link}>
              <div className="navNames">
                <p id="navName">{item.name}</p>
                <div id="line"></div>
                <div id="navNameShadow">{item.name}</div>
              </div>
            </Link>
          ))}
        </Navlist>
        <div id="burgerMenu">
          <BurgerMenuIcon />
        </div>
      </NavbarContainer>
    </DisplayCard>
  );
};

export default Navbar;
