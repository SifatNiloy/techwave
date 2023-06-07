import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Topbar from '../Shared/Navbar/Navbar';


const Main = () => {
    return (
        <div>
            <Topbar/>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;