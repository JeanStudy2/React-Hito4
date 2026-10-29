import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


let NavBar = () => {

const total = 25000;
const token = false;

    return(
        <>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="#">Pizzeria Mamma Mia!</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0 text-center"
                    // style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">🍕Home</Nav.Link>
                    {token
                    ?<>
                        <Nav.Link href="#action1">🔓Profile</Nav.Link>
                        <Nav.Link href="#action2">🔒Logout</Nav.Link>
                    </>
                    :<>
                        <Nav.Link href="#action2">🔐Login</Nav.Link>
                        <Nav.Link href="#action2">🔐Register</Nav.Link>
                    </>}
                </Nav>
                    <Button variant="outline-success">🛒 Total: ${total.toLocaleString()}</Button>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}

export default NavBar