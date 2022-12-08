import Login from './page/Login/Login';
import NavigationBar from './component/NavigationBar/NavigationBar';
import Home from './page/Home/Home';
import Cart from './page/Cart/Cart';

import {Route, BrowserRouter, Routes} from 'react-router-dom';
import User from './page/User/User';
import React, {useState} from 'react';
import UserList from './page/UserList/UserList';

function App() {
  /*
  const [data, setData] = useState([]);
    React.useEffect(() => {
    fetch("/customer")
      .then((res) => res.json())
      .then((data) => setData(data.filter((e) => e.username === localStorage.getItem('login_usr') && e.password === localStorage.getItem('login_psw'))));
    }, []);
    */
   const data = [{"username":"emma123","password":"emma123","fname":"Emma","mname":"","lname":"Watson","dob":"1990-04-15","email":"emma123@gmail.com","address":"Paris","phone":"0123456789","mem_id":0,"rank":0,"registration_date":"2022-11-26","accumulated_point":0},
   {"username":"tony789","password":"tony789","fname":"Tony","mname":"","lname":"Stark","dob":"1970-05-29","email":"tony789@gmail.com","address":"New York","phone":"0123789789","mem_id":0,"rank":1,"registration_date":"2022-10-16","accumulated_point":150}];
  return (
    <BrowserRouter>
      <NavigationBar data = {data}/>
      <Routes>
        <Route path = '/login' element = {<Login/>}/>
        {/**-------------------------------Customer----------------*/} 
        <Route path = '/cart' element = {<Cart/>}/>
        <Route path = '/user' element = {<User data = {data}/>}/>
        <Route path = '/userlist' element = {<UserList data = {data}/>}/>
        <Route path = '/' element = {<Home data = {data}/>}/>
        {/**-------------------------------Admin----------------*/} 
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
