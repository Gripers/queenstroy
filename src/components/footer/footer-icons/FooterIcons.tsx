import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import TelegramIcon from "@/components/icons/TelegramIcon";

const FooterIcons = ({ styles }: any) => {
  return (
    <div className={styles.icons}>
      <ul>
        <li>
          <a href="https://www.facebook.com" target="_blank">
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com" target="_blank">
            <LinkedinIcon />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blank">
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a href="https://t.me/queenstroy_uz" target="_blank">
            <TelegramIcon />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterIcons;
