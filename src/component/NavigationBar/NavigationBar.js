import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';


function NavigationBar({data}) {
    function handleLogout()
    {
        localStorage.removeItem('login_usr');
        localStorage.removeItem('login_psw');
        localStorage.removeItem('login_type');
    }
    const handleSearch = () => {
        let search_input = document.getElementById('search-input').value;
        data.filter((item)=>item.name == search_input);
        return data;
    }
    console.log(data);
    if(data.length > 0)
        return (
    <>
        <Navbar fixed="top"  bg="light" expand="lg" className= 'border-bottom border-2 text-dark' style = {{height: '68px'}}>
            <Container fluid>
                <Navbar.Brand href="/">BKU Food</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/user">User Info</NavDropdown.Item>
                    <NavDropdown.Item href="/userlist">
                    User List
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/login" onClick = {handleLogout}>
                        Logout
                    </NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                    <Navbar.Text className = 'p-3 text-dark'>
                        {data[0].fname + ' ' + data[0].lname}
                    </Navbar.Text>
                    <Navbar.Text className = 'p-3 text-dark'>
                        Rank {data[0].rank}
                    </Navbar.Text>
                    <Navbar.Text className = 'p-3 text-dark'>
                        {data[0].accumulated_point}
                    </Navbar.Text>
                    <Nav.Link href="/cart" className = 'p-3 text-dark'>Cart <i className = 'bi-cart'></i></Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        id = "search-input"
                    />
                    <Button variant="outline-success" onClick={handleSearch}>Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div style = {{width: '100%', height: '68px'}}></div>
    </>
        );
    else 
        return (<div/>)
}

export default NavigationBar;