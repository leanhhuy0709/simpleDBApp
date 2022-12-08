
import {Container, Button, Modal, Form, Card} from 'react-bootstrap';
import React, {useState} from 'react';


function Cart() {
  const [data, setData] = useState([]);
  React.useEffect(() => {
  fetch("/customer/" + localStorage.getItem('login_usr') + "/cart")
    .then((res) => res.json())
    .then((data) => setData(data));
  }, []);
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
    //----------------------------------------------------
    const [voucher, setVoucher] = useState(0);
    const [discount, setDiscount] = useState(0);
    if (data.length > 0)
      return (<>
        {React.createElement('div', null,(<h1 style = {{textAlign: 'center'}}>CART</h1>) ,data.map((item, idx) => (
      <Card key = {idx} className = 'm-3 p-1' style={{ width: '18rem', display: 'inline-block' }}>
      <Card.Img variant="top" style = {{height: '11rem'}} src={'./images/' + item.picture} />
      <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text className = "text-center">{item.unit_price.toString() + '.000'}</Card.Text>
          <Form className = 'text-center'>
            <Form.Group className="mb-3" controlId = {'food' + item.f_id.toString()}>
              <Form.Control name = {'food' + item.f_id.toString()}
                className = 'text-center border-0 bg-white fw-bold' type="text" readOnly value = {item.quantity.toString()}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId = {'plusMinusfood' + item.f_id.toString()}>
              <Form.Control name = {'plusMinusfood' + item.f_id.toString()} hidden
                className = 'text-center border-0 bg-white fw-bold' type="text" readOnly value = 'plus'/>
            </Form.Group>
            <Button className = 'm-2' variant="primary" type = 'button' onClick={() => {document.getElementById('plusMinusfood' + item.f_id.toString()).value = 'minus'}}>-</Button>
            <Button className = 'm-2' variant="primary" type = 'button' onClick={() => {document.getElementById('plusMinusfood' + item.f_id.toString()).value = 'plus'}}>+</Button>
          </Form>
          <div className = "text-center">
            
          </div>
      </Card.Body>
      </Card>
  )))}
        {/**-=----------------------------- */}
        <Container className = 'text-center'>
            <Button onClick={handleShow}>Thanh toán</Button>
        </Container>
        <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Order infomation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
            <p><input readOnly hidden name = 'username' value = {localStorage.getItem('login_usr')}/></p>
            <p>Order Time: {getOrderTime()}<input readOnly hidden name = 'order_time' value = {getOrderTime()}/></p>
            <p>Shipper Name: 1ShiperForAll<input readOnly hidden name = 'shipper_name' value = '1ShiperForAll'/></p>
            <p>Shipper Phone: 0123456781<input readOnly hidden name = 'shipper_phone' value = '0123456781'/></p>
            <p>Note: <input name = 'note'/></p>
            <p>Address: {data[0].address}</p>
            <p>Status: Đang chờ</p>
            <p>Payment Method: <input name = 'payment_method'/></p>
            <p>Tổng tiền đơn hàng: {data.length > 0 ?  data.reduce((cb, curr) => cb + curr.unit_price * curr.quantity, 0) : 0}.000 <input hidden name = 'quoted_price'/></p>
            <p>Promotion User: {data.length > 0 ? data[0].rank : 0}% <input hidden name = 'promotion_user'/></p>
            <p>Total Voucher: {voucher}.000<input hidden name = 'voucher'/></p>
            <p>Total Discount: {discount + (data.length > 0 ? data[0].rank : 0)}%<input hidden name = 'discount'/></p>
            <p>Delivery Cost: 20.000</p>
            <p>Tổng tiền phải trả: {(data.length > 0 ?  data.reduce((cb, curr) => cb + curr.unit_price * curr.quantity, 0) : 0) * (1 - discount/100)}</p>
            <Button type = 'submit'>Submit</Button>
        </form>
      </Modal.Body>
    </Modal>
    </>
    );
}

export default Cart;
