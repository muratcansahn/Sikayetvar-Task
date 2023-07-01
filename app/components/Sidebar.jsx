import Image from "next/image";
import styles from "../../styles/sidebar.module.scss";
import { SidebarItems } from "../utils/utils.js";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <div></div>
          <span>MANAGE COURSES</span>
        </div>
        <div className={styles.user}>
          <div className={styles.userImageContainer}>
            <Image
              src="/avatar.svg"
              width={128}
              height={128}
              className={styles.userImage}
            />
          </div>
          <div className={styles.userDetails}>
            <h2>John Doe</h2>
            <p>Admin</p>
          </div>
        </div>
      </div>
      <div className={styles.center}>
        {SidebarItems.map((item) => (
          <div key={item.title} className={styles.centerContainer}>
            <Link href={item.path}>
              <Image src={item.icon} width={19} height={17}></Image>
            </Link>
            <span className={styles.centerTitle}>{item.title}</span>
          </div>
        ))}
      </div>
      <div className={styles.bottom}>
        <span className={styles.bottomTitle}>Logout</span>
        <Link href="/">
          <Image
            src="/logout.svg"
            width={17}
            height={12.75}
            className={styles.bottomIcon}
          ></Image>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
