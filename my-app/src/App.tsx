import styles from "./Css/App.module.css";
import { HomePage } from "./Component/HomePage";
import { MyProject } from "./Component/MyProject";
import NavBars from "./Component/NavBars";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Resume } from "./Component/Resume";
import { Contact } from "./Component/Contact";

// ===================================================================
function App() {

  return (
    <Router>
      <div className={styles.bigContainer}>
        <NavBars />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project" element={<MyProject />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;