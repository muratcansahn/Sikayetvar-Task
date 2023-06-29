import styles from "./page.module.css";
import UsersList from "./components/UsersList";

export default function Home() {
  return (
    <main className={styles.main}>
      <UsersList />
    </main>
  );
}
