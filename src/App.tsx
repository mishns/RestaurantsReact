import React from "react";
import styles from "./app.css";
import { FetchCardList } from "@pages/RestList/FetchCardList";
import { LogoIcon } from "@ui/LogoIcon";

function App() {
  return (
    <div className={styles.App}>
      <header>
        <div className={styles.Logo}>
          <LogoIcon className={styles.LogoIcon} width={30} height={30} />
          <h1>Eats</h1>
        </div>
        <div className={styles.Profile}>
          <img alt="profile" src="/avatar.png" />
        </div>
      </header>
      <main>
        <FetchCardList />
      </main>
      <footer>
        <p>Privacy Policy</p>
        <p className={styles.Corporation}>2022 Eats</p>
        <p>Terms Of Service</p>
      </footer>
    </div>
  );
}

export default App;
