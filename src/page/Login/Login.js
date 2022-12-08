import {Form, Button} from 'react-bootstrap';

function Login() {
    function handleLogin()
    {
        localStorage.removeItem('login_usr');
        localStorage.removeItem('login_psw');
        localStorage.removeItem('login_type');
        localStorage.setItem('login_usr', document.getElementById('login_usr').value);
        localStorage.setItem('login_psw', document.getElementById('login_psw').value);
        localStorage.setItem('login_type', document.getElementById('login_type').value);

        /** */
        

    }
    console.log(localStorage.getItem('usr'));
    return (
    <Form className = 'd-flex align-items-center flex-column position-absolute top-50 start-50 translate-middle border border border-2 border-dark rounded p-3 w-50' 
         onSubmit={handleLogin}> {/*method = 'post' */}
        <Form.Group className="mb-3" controlId="login_title">
            <h1>LOGIN</h1>
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="login_usr">
            <Form.Label>Username</Form.Label>
            <Form.Control name = 'usr' type="username" placeholder="Enter username" />
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="login_psw">
            <Form.Label>Password</Form.Label>
            <Form.Control name = 'psw' type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3 w-100" controlId="login_type">
            <Form.Select name = 'type' aria-label="Default select example">
                <option value="customer">Customer</option>
                <option value="co-restaurant">Co-Restaurant</option>
                <option value="admin">Admin</option>
            </Form.Select>   
        </Form.Group>   
        <Form.Group className="mb-3" controlId="login_btn">
            <Button variant="primary" type="submit" href = "/">
                Login
            </Button>
            <Button variant="primary" type="submit" style={{margin: "20px"}}>
                Sign up
            </Button>
        </Form.Group>
    </Form>
    );
}

export default Login;
