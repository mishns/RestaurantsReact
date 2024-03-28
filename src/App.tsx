import React from "react";
import styles from "./app.css";
import { FetchRestList } from "@pages/RestList/FetchRestList";
import { Content } from "@pages/Content";
import { Header } from "@pages/Header";
import { Footer } from "@pages/Footer";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <main className={styles.Main}>
        <Content>
          <FetchRestList />
        </Content>
      </main>
      <Footer />
    </div>
  );
}

export default App;
