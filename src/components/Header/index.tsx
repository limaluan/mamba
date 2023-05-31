import { HeaderContainer } from "./styles";
import { Button } from "../Button";

import logoImg from "../../assets/mamba_logo.svg";
import buttonImg from "../../assets/button_mobile.svg"

export function Header() {
  return (
    <HeaderContainer>
      <section className="header-content">
        <img className="logo" src={logoImg} />
        <ul className="menu desktop-only">
          <li><a>Home</a></li>
          <li><a>Services</a></li>
          <li><a>About</a></li>
          <li><a>Testimonials</a></li>
          <li><a>Careers</a></li>
          <li><a>Our Blog</a></li>
        </ul>
        <button className="mobile-only">
          <img src={buttonImg} alt="" />
        </button>
        <div className="desktop-only">
          <Button>Contact Us</Button>
        </div>
      </section>
    </HeaderContainer>
  );
}
