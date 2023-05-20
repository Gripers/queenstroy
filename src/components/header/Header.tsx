import styles from "./Header.module.scss";

import { useIsMobile } from "@/hooks/useIsMobile";
import HeaderTop from "./parts/HeaderTop";
import HeaderBottom from "./parts/HeaderBottom";
import HeaderBottomHidden from "./parts/HeaderBottomHidden";

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        {/* <HeaderTop styles={styles} /> */}
        <HeaderBottom styles={styles} />
        {useIsMobile() ? <HeaderBottomHidden styles={styles} /> : null}
      </div>
    </header>
  );
};

export default Header;
