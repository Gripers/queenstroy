import styles from "./Footer.module.scss";

import Image from "next/image";

import HeadsetIcon from "../icons/HeadsetIcon";
import FooterIcons from "./footer-icons/FooterIcons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        {/* <div className={styles.top}>
          <Image src="/static/images/logo.svg" alt="" width={170} height={40} />
        </div> */}
        <div className={styles.middle}>
          <HeadsetIcon />
          <div>
            <p>Телефон службы поддержки</p>
            <a href="tel:+998881112200">+998 88 111 22 00</a>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>
            <b>Адрес: </b> Дом 1, 6-й проезд Исламобад 66, Юнусабад, Ташкент
          </p>
          <FooterIcons styles={styles} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
