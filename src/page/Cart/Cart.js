
import {Container, Button, Modal, Card} from 'react-bootstrap';
import React, {useState} from 'react';


function Cart() {
  /*
  const [data, setData] = useState([]);
  //{'f_id': 0, 'quantity': 0}
  React.useEffect(() => {
  fetch("/customer/" + localStorage.getItem('login_usr') + "/cart")
    .then((res) => res.json())
    .then((data) => setData(data));
  }, []);
  const [voucher, setVoucher] = useState([]);
  React.useEffect(() => {
    fetch("/voucher")
      .then((res) => res.json())
      .then((data) => setVoucher(data));
    }, []);
  const [discount, setDiscount] = useState([]);
  React.useEffect(() => {
    fetch("/discount")
      .then((res) => res.json())
      .then((data) => setDiscount(data));
    }, []);
  */
 var data = [{"username":"emma123","address":"Paris","f_id":0,"quantity":1,"name":"Cơm sườn","unit_price":30,"picture":"com_suon.jpg","rank":0,"accumulated_point":0}];
 var voucher = [{"code":"helloworld!","numberof":10,"exp":"20221130","voucher_value":10},{"code":"lucky","numberof":1,"exp":"20221130","voucher_value":100}];
 var discount = [{"code":"a","numberof":10,"exp":"20221130","discount_%":1},{"code":"bcd","numberof":1,"exp":"20221130","dicount_%":10}];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function getOrderTime()
  {
    // Calculate milliseconds in a year
    const d = new Date()
    var result = d.toString();
    return result.substring(0, 25);
  }
  function plusFood(idx)
  {
    if (data.length > 0) {
      data[idx].quantity = data[idx].quantity + 1;
      document.getElementById('food' + String(idx)).innerHTML = data[idx].quantity;
      document.getElementById('inputfood' + String(idx)).value = String(data[idx].quantity);
      document.getElementById('cardfood' + String(idx)).style.display = data[idx].quantity > 0 ? 'inline-block' : 'none';
    }
  }
  function minusFood(idx)
  {
    if (data.length > 0) {
      if(data[idx].quantity > 0) {
        data[idx].quantity = data[idx].quantity - 1;
        document.getElementById('food' + String(idx)).innerHTML = data[idx].quantity;
        document.getElementById('inputfood' + String(idx)).value = String(data[idx].quantity);
        document.getElementById('cardfood' + String(idx)).style.display = data[idx].quantity > 0 ? 'inline-block' : 'none';
      }
    }
  }
  function checkPromotion(code)
  {
    if (data.length === 0) return;
    var tmp;
    var a = '', b = 0, c = data.length > 0 ? data[0].rank : 0;
    var d = 'Tổng tiền phải trả: ' 
      + String((data.reduce((cb, curr) => cb + curr.unit_price * curr.quantity, 0)) * (1 - parseFloat(1)/100));
    if (voucher.length > 0)
    {
      tmp = voucher.find((e) => e.code === code);
      if (tmp !== undefined) 
      {
        a = 'Voucher: ' + tmp.voucher_value + '.000';
        b = tmp.voucher_value;
        c = data.length > 0 ? data[0].rank : 0;
      }   
    }
    if (discount.length > 0)
    {
      tmp = discount.find((e) => e.code === code);
      if (tmp !== undefined) 
      {
        a = 'Discount: ' + tmp['discount_%'] + '%';
        b = 0;
        c = Number(tmp['discount_%']) + data[0].rank;
      }   
    }
    document.getElementById('voucher/discount').innerHTML = a;
    document.getElementById('total_voucher').value = b;
    document.getElementById('total_discount').value = c;
    d = 'Tổng tiền phải trả: ' 
    + String(parseInt((data.reduce((cb, curr) => cb + curr.unit_price * curr.quantity, 0)) * (1 - parseFloat(c)/100) - b)) + '.000';
    document.getElementById('final_price').innerHTML = d;
    if (a === '')
      alert('Code không tồn tại!');
    return 0;
  }


    if (data.length > 0)
      return (<div>
        {React.createElement('form', {id: 'form_food_in_cart'},
        (<h1 style = {{textAlign: 'center'}}>CART <br/><Button className = 'm-2 p-2' type = 'submit' onClick = {() => {document.getElementById('thanh_toan').hidden = false}}>Save changes</Button></h1>) ,data.map((item, idx) => (
        <Card id = {'cardfood' + String(idx)} key = {idx} className = 'm-3 p-1' style={{ width: '18rem', display: data[idx].quantity > 0 ? 'inline-block' : 'none' }}>
        <Card.Img variant="top" style = {{height: '11rem'}} src={'./images/' + item.picture} />
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text className = "text-center">
              {item.unit_price.toString() + '.000'}<br/>
              <Button className = 'm-1 p-1 fw-bold' style = {{width: '2rem'}} onClick = {() => {minusFood(idx);document.getElementById('thanh_toan').hidden = true}}>-</Button>
              <span id = {'food' + String(idx)} className = 'm-1 p-1 fw-bold'>{data[idx].quantity}</span>
              <Button className = 'm-1 p-1 fw-bold' style = {{width: '2rem'}} onClick = {() => {plusFood(idx);document.getElementById('thanh_toan').hidden = true}}>+</Button>
            </Card.Text>
            
            <input hidden id = {'inputfood' + String(idx)} name = {item.f_id} value = {data[idx].quantity} readOnly/>
        </Card.Body>
        </Card>
  )))
  }
      <Container className = 'text-center'>
            <Button id = 'thanh_toan' onClick={handleShow} hidden = {false}>Thanh toán</Button>
        </Container>
        <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Order infomation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
            <p><input readOnly hidden name = 'username' value = {localStorage.getItem('login_usr')}/></p>
            <p>Order Time: {getOrderTime()}</p>
            <p>Shipper Name: 1ShiperForAll</p>
            <p>Shipper Phone: 0123456781</p>
            <p>Note: <input name = 'note'/></p>
            <p>Address: {data[0].address}</p>
            <p>Status: Đang chờ <input readOnly hidden name = 'status' value = {false}/></p>
            <p>Payment Method: 
              <input className = 'm-1 p-1' type = 'radio' name = 'payment_method' value = 'card' required/> Card
              <input className = 'm-1 p-1' type = 'radio' name = 'payment_method' value = 'e-wallet' required/> E-wallet</p>
            <p>Tổng tiền đơn hàng: {data.reduce((cb, curr) => cb + curr.unit_price * curr.quantity, 0)} </p>
            <p>Voucher/Discount Code: 
              <input name = 'promotion_name' id = 'promotion_check' placeholder = 'Enter code to check Voucher'/>
              <button type = 'button' onClick = {() => checkPromotion(document.getElementById('promotion_check').value)}>Check</button>
            </p>
            <p id = 'voucher/discount' className = 'bg-danger'></p>
            <p>Promotion User: {data.length > 0 ? data[0].rank : 0}% </p>
            <p>Total Voucher: <input readOnly value = {0} id = 'total_voucher' /></p>
            <p>Total Discount: <input readOnly value = {data[0].rank} id = 'total_discount'/>%</p>
            <p>Delivery Cost: 20.000</p>
            <p id = 'final_price'>Tổng tiền phải trả: {parseInt((data.reduce((cb, curr) => cb + curr.unit_price * curr.quantity, 0)) * (1 - parseFloat(data[0].rank)/100) + 20)}.000</p>
            <Button type = 'submit' onSubmit = {() => document.getElementById('form_food_in_cart').submit()}>Submit</Button>
        </form>
      </Modal.Body>
    </Modal>
    </div>
    );
}

export default Cart;
