import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import DiscordLogo from "../../assets/images/icon_awesome_discord.png";
import TwitterLogo from "../../assets/images/icon_awesome_twitter.png";
import ITULogo from "../../assets/svgs/ITU.svg";
import ObyteLogo from "../../assets/svgs/obyte.svg";
import ScrumwiseLogo from "../../assets/svgs/scrumwise.svg";
import KEALogo from "../../assets/images/kea_logo.png";
import { ReactSVG } from "react-svg";

export default function Footer(props) {
  return (
    <footer style={{ styles }}>
      <ul className={styles.listWrapper}>
        <h5>Discover</h5>
        <li>
          <Link to="/applications" children="Make a donation"></Link>
        </li>
        <li>
          <a href="#" children="Offer a product" />
        </li>
        <li>
          <a href="#" children="Applying for a product" />
        </li>
      </ul>
      <ul className={styles.listWrapper}>
        <h5>Connect</h5>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
      </ul>
      <div className={styles.listWrapper}>
        <h5 style={{ marginBottom: "1vh" }}>Community & Help desk</h5>
        <a href="https://discord.gg/kQzuR4c">
          <img
            src={DiscordLogo}
            alt="discord logo"
            className={styles.soMeLogos}
          />
        </a>
        &emsp; &emsp;
        <a href="https://twitter.com/PolloPolloOrg">
          <img
            src={TwitterLogo}
            alt="twitter logo"
            className={styles.soMeLogos}
          />
        </a>
      </div>
      <div className={styles.listWrapper} style={{ lineHeight: 2.8 }}>
        <ReactSVG
          src={ScrumwiseLogo}
          afterInjection={(error, svg) => {
            if (error) {
              console.error(error);
              return;
            }
          }}
          beforeInjection={(svg) => {
            svg.classList.add("svgScrumwiseLogo");
            svg.setAttribute("style", "width: 100px");
          }}
        />
        <ReactSVG
          src={ObyteLogo}
          afterInjection={(error, svg) => {
            if (error) {
              console.error(error);
              return;
            }
          }}
          beforeInjection={(svg) => {
            svg.classList.add("svgObyteLogo");
            svg.setAttribute("style", "width: 100px");
            svg.setAttribute("style", "height: 50px");
          }}
        />
        <ReactSVG
          src={ITULogo}
          afterInjection={(error, svg) => {
            if (error) {
              console.error(error);
              return;
            }
          }}
          beforeInjection={(svg) => {
            svg.classList.add("svgITULogo");
            svg.setAttribute("style", "width: 140px");
          }}
        />
        <img src={KEALogo} alt="KEA logo" className={styles.keaLogo}></img>
      </div>
    </footer>
  );
}
