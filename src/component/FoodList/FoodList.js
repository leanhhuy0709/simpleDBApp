import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, {useState} from 'react';

function FoodList() {
  /*
    const [data, setData] = useState([]);
    React.useEffect(() => {
    fetch("/foodlist")
      .then((res) => res.json())
      .then((data) => setData(data));
    }, []);*/
    var data = [
      {'res_id': '1', 'res_name': 'Gordon Ramsay', 'f_id': 0, 'name': 'Cơm sườn', 
        'type': 'cơm', 'unit_price': 30, 'picture': 'com_suon.jpg', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'status': true, 'size': 'L'},
      {'res_id': '1', 'res_name': 'Gordon Ramsay', 'f_id': 1, 'name': 'Phở', 
        'type': 'phở', 'unit_price': 50, 'picture': 'pho.jpg', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'status': true, 'size': 'L'}
    ];

    
  return React.createElement('div', null,(<h1 style = {{textAlign: 'center'}}>FOOD LIST</h1>) ,data.map(item => (
    <Card key = {item.res_id.toString() + '_' + item.f_id.toString()} className = 'm-3 p-1' style={{ width: '18rem', display: 'inline-block' }}>
    <Card.Img variant="top" style = {{height: '11rem'}} src={'./images/' + item.picture} />
    <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
            {item.description}
        </Card.Text>
        <Card.Title>Co-R: {item.res_name}</Card.Title>
        <Card.Text className = "text-center">{item.unit_price.toString() + '.000'}</Card.Text>
        <div className = "text-center"><Button variant="primary">Add to cart</Button></div>
    </Card.Body>
    </Card>
)));
}

export default FoodList;