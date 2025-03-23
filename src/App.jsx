import trickData from "./Tricktionary.json"

import logo from "./assets/Tricking_logo.png";
import "./App.css";
import styles from "./App.module.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import TrickList from "./components/TrickList";
import { useState } from "react";
import TrickDetail from "./components/TrickDetail";

function App() {
  const [trickId, setTrickId] = useState("k4"); //remember to set default value!!!!!!!!!!!!!!

  return (
    <div className="App">

      <div className={styles.topbar}>
        <div className={styles.titlecontainer}>
          <div className={styles.titleLeft}>
            <span> Advanced </span>
          </div>
          <div className={styles.logo}>
            <img src={logo} alt="LOGO" />
          </div>
          <div className={styles.titleRight}>
            <span> Threshold </span>
          </div>
        </div>
      </div>

      <Container className={styles.container}>
      
      <InnerContainer className={styles.left}>
        <TrickList trickData={trickData} trickId={trickId} setTrickId={setTrickId}/>
      </InnerContainer>
      
      <InnerContainer className={styles.right}>
        <TrickDetail trickData={trickData} trickId={trickId}/>
      </InnerContainer>

      </Container>
    </div>
  );
}

export default App;
