import trickData from "./Tricktionary.json"

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
        <div className={styles.container}>
          <div className={styles.titleLeft}>
            <span> Advenced </span>
          </div>
          <div className={styles.logo}>
            <img src="{`${process.env.PUBLIC_URL}/Tricking_logo.png`}" alt="ncku Tricking" />
          </div>
          <div className={styles.titleRight}>
            <span> Threshold </span>
          </div>
        </div>
      </div>

      <Container >
      
      <InnerContainer >
        <TrickList trickData={trickData} trickId={trickId} setTrickId={setTrickId}/>
      </InnerContainer>
      
      <InnerContainer>
        <TrickDetail trickData={trickData} trickId={trickId}/>
      </InnerContainer>

      </Container>
    </div>
  );
}

export default App;
