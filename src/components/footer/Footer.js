import styles from "./Footer.module.scss";
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
        <h6>Discover</h6>
        <li>
          <a href="#" children="Make a donation" />
        </li>
        <li>
          <a href="#" children="Offer a product" />
        </li>
        <li>
          <a href="#" children="Applying for a product" />
        </li>
      </ul>
      <ul className={styles.listWrapper}>
        <h6>Connect</h6>
        <li>
          <a href="#" children="Contact" />
        </li>
        <li>
          <a href="#" children="Help" />
        </li>
      </ul>
      <div className={styles.listWrapper}>
        <h6 style={{ marginBottom: "1vh" }}>Community & Help desk</h6>
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
            svg.setAttribute("style", "height: 6vh");
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
