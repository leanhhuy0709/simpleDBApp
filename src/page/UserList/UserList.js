
import {Container, Table, Button} from 'react-bootstrap';
import React, {useState} from 'react';
import NavigationBar from '../../component/NavigationBar/NavigationBar';
import UserListModal from './UserListModal';


function UserList({data}) {
    var data2 = [{"username":"emma123","password":"emma123","fname":"Emma","mname":"","lname":"Watson","dob":"1990-04-15","email":"emma123@gmail.com","address":"Paris","phone":"0123456789","mem_id":0,"rank":0,"registration_date":"2022-11-26","accumulated_point":0},{"username":"tony789","password":"tony789","fname":"Tony","mname":"","lname":"Stark","dob":"1970-05-29","email":"tony789@gmail.com","address":"New York","phone":"0123789789","mem_id":0,"rank":1,"registration_date":"2022-10-16","accumulated_point":150}];
    console.log(data2);
    return (
        <>
        <NavigationBar data = {data}/>
        <Container style={{marginTop: "40px"}}>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>BDate</th>
          <th>Email</th>
          <th>Button</th>
        </tr>
      </thead>
      <tbody>
        {
            data2.map((item, idx)=>{
                return (
                <tr key = {idx}>
                    <td>{item.fname}</td>
                    <td>{item.lname}</td>
                    <td>{item.username}</td>
                    <td>{item.dob}</td>
                    <td>{item.email}</td>
                    <td style={{textAlign: "center"}}><UserListModal customer = {item}/> <Button>Delete</Button></td>
                </tr>
                );
            })
        }
      </tbody>
        </Table>
        </Container>
        </>
    )
}

export default UserList;
