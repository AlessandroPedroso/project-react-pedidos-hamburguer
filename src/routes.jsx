import React from "react";

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Home from './Containers/Home'
import Pedidos from './Containers/Pedidos'

const MyRoutes = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/pedidos" element={<Pedidos/>}></Route>
            </Routes>
        </Router>
    )
}

export default MyRoutes