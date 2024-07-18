import './NavigationBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
    return (
        <Navbar expand="lg" className="navbar">
            <Container>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link target="_blank" href="https://github.com/SkylarKorn">GitHub</Nav.Link>
                        <Nav.Link target="_blank" href="https://github.com/SkylarKorn">LinkedIn</Nav.Link>
                        <Nav.Link target="_blank" href="https://github.com/SkylarKorn">Resume</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;