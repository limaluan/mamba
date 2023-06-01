import { Button } from "../Button";
import { HomeContainer } from "./styles";

import demoImg from "../../assets/dashboard_demo.png";
import demoMobileImg from "../../assets/dashboard_full_demo.png";
import trustpilotImg from "../../assets/trustpilot.svg";
import starsImg from "../../assets/stars.svg";

export function Home() {
  return (
    <HomeContainer>
      <section className="content">
        <div className="text-section">
          <div className="ranking">
            <img src={trustpilotImg} alt="Trustpilot" />
            <img src={starsImg} alt="5 Stars Classification" />
            <p>4900+</p>
            <p>5 Stars</p>
          </div>
          <h1>Learning <s style={{color: "var(--blue-500)"}}>experiences</s> made easy, social and interactive</h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software & APIs to accept payments, send payouts
          </p>
          <div className="form-container">
            <input type="text" placeholder="Enter your email" />
            <Button>Get Started</Button>
          </div>
        </div>

        <div className="img-section">
          <img className="dashboard-img desktop-only" src={demoImg} alt="Dashboard demonstration" />
          <img className="dashboard-img mobile-only" src={demoMobileImg} alt="Dashboard demonstration" />
        </div>

        <div className="bg-items">
          <div className="bg"></div>
          <div className="bg"></div>
          <div className="bg"></div>
          <div className="bg"></div>
        </div>
      </section>
    </HomeContainer>
  );
}
