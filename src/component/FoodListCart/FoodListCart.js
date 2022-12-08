import {Button, Form, Card} from 'react-bootstrap';
import React, {useState} from 'react';

function FoodListCart() {
    const [data, setData] = useState([]);
    React.useEffect(() => {
    fetch("/customer/" + localStorage.getItem('login_usr') + "/cart")
      .then((res) => res.json())
      .then((data) => setData(data));
    }, []);
  if (data.length > 0)
    return React.createElement('div', null,(<h1 style = {{textAlign: 'center'}}>CART</h1>) ,data.map((item, idx) => (
      <Card key = {idx} className = 'm-3 p-1' style={{ width: '18rem', display: 'inline-block' }}>
      <Card.Img variant="top" style = {{height: '11rem'}} src={'./images/' + item.picture} />
      <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text className = "text-center">{item.unit_price.toString() + '.000'}</Card.Text>
          <Form className = 'text-center'>
            <Form.Group className="mb-3" controlId = {'food' + item.f_id.toString()}>
              <Form.Control name = {'food' + item.f_id.toString()}
                className = 'text-center border-0 bg-white fw-bold' type="text" value = {item.quantity.toString()}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId = {'plusMinusfood' + item.f_id.toString()}>
              <Form.Control name = {'plusMinusfood' + item.f_id.toString()} hidden
                className = 'text-center border-0 bg-white fw-bold' type="text" value = 'plus'/>
            </Form.Group>
            <Button className = 'm-2' variant="primary" type = 'submit' onClick={() => {document.getElementById('plusMinusfood' + item.f_id.toString()).value = 'minus'}}>-</Button>
            <Button className = 'm-2' variant="primary" type = 'submit' onClick={() => {document.getElementById('plusMinusfood' + item.f_id.toString()).value = 'plus'}}>+</Button>
          </Form>
          <div className = "text-center">
            
          </div>
      </Card.Body>
      </Card>
  )));
  else
      return (<h1>Loading...</h1>);
}

export default FoodListCart;