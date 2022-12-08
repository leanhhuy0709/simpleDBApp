
import {Container, Table} from 'react-bootstrap';
import React, {useState} from 'react';
import NavigationBar from '../../component/NavigationBar/NavigationBar';


function User({data}) {
    if (data.length > 0)
        return (
            <>
            <NavigationBar
                data = {data}
            />
        <Container className = 'm-3 p-3'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>User infomation</th>
                        <th></th>
                    </tr>
                </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>{data[0].fname + ' ' + data[0].lname}</td>
                </tr>
                <tr>
                    <td>Username</td>
                    <td>{data[0].username}</td>
                </tr>
                <tr>
                    <td>Day Of Birth</td>
                    <td>{data[0].dob}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{data[0].email}</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>{data[0].address}</td>
                </tr>
                {   
                    data.map((item, idx) => (
                        <tr key = {idx}>
                        <td>Phone {idx + 1} </td>
                        <td>{item.phone}</td>
                        </tr>
                    ))
                }
            </tbody>
            </Table>
        </Container></>
        );
    else return (<div></div>)
}

export default User;
