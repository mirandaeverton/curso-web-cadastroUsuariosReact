import React from "react";
import { Routes, Route } from 'react-router'

import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";

export default props =>
    <Routes>
        <Route extact path="/" element={<Home />} />
        <Route path="/users" element={<UserCrud />} />
        <Route extact path="*" element={<Home />} />
    </Routes>