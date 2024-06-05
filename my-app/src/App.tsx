import styles from "./App.module.css";
import { AboutMyself } from "./Component/AboutMyself";
import { Heading } from "./Component/Heading";
import { MyProject } from "./Component/MyProject";

// ===================================================================
function App() {

  return (
    <div className={styles.bigContainer}>
      <div  className={styles.firstContainer}>
        <Heading/>
      </div>

      <div className={styles.secondContainer}> 
      <AboutMyself/>
      </div>

      <div className={styles.thirdContainer}>
      <MyProject/>
      </div>
    </div>
  );
}

// ===================================================================

export default App;
