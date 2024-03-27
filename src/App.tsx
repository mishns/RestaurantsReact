import React from "react";
import styles from "./app.css";

function App() {
  return (
    <div className={styles.app}>
      <header>
        <div className={styles.logo}>
          {/* <LogoIcon width={16} height={16} className={styles.logo__icon} /> */}
          <span>Eats</span>
        </div>
        <div className={styles.profile}>
          <img alt="profile" src="/avatar.png" />
        </div>
      </header>
      <main>
        <input placeholder="Search for restaurants" />
        <section></section>
      </main>
      <footer>
        <p>Privacy Policy</p>
        <p className={styles.corporation}>2022 Eats</p>
        <p>Terms Of Service</p>
      </footer>
    </div>
  );
}

export default App;
