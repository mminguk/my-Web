import { Routes, Route } from "react-router-dom";
import Login from './Login';
import List from './List';
import UserInfo from './UserInfo';
import Register from './Register';
import Welcome from './Welcome';
import Create from '../crud/Create';
import Item from './Item';
import Home from "./Home";
import '../App.css';

export default function Routers(){
    return (
        <>
          <div>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/login" element={<Login />}/>
              <Route path='/user_info' element={<UserInfo />} />
              <Route path="/shopping_list" element={<List />}/>
              <Route path="/item/:id" element={<Item />}/>
              <Route path="/register" element={<Register />}/>
              <Route path="/welcome" element={<Welcome />}/>
              <Route path="/create" element={<Create />}/>
            </Routes>
          </div>
        </>
      );
}