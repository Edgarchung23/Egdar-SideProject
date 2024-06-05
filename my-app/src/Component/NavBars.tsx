import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../Css/NavBars.module.css'
import { Link } from 'react-router-dom';

// ===================================================================
function NavBars() {
  return (
    <Navbar expand="lg" className={styles.firstContainer}>
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to="/" className={styles.navBarTitle}><h4>Edgar Chung</h4>@Junior Web Developer</Nav.Link>
        </Navbar.Brand>
        <Nav className={styles.navBarLink}>
          <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
          <Nav.Link as={Link} to="/project">Project</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

// ===================================================================

export default NavBars;