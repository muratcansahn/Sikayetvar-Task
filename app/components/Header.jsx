import styles from "../../styles/header.module.scss";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div>
          <Image src="/return.svg" width={18} height={18}></Image>
        </div>
        <div>
          <Image src="/notification2.svg" width={18} height={18}></Image>
        </div>
      </div>
    </div>
  );
};

export default Header;
