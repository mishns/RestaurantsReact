import React from "react";
import styles from "./app.css";
import { Card } from "@ui/Card";

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
        <Card
          imgPath={"burger-joint.png"}
          title={"Burger Joint"}
          descr={"American, 4.6 stars"}
          cardStars={4}
        />
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
