import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div  className='bg-warning'>
            <nav className='bg-danger p-2 text-center'>
                <Link style={{fontSize:'30px', color:'black', textDecoration:'none', margin:'10px', fontWeight:'bold'}} to='/login'>Login</Link>
                <Link style={{fontSize:'30px', color:'black', textDecoration:'none', margin:'10px', fontWeight:'bold'}} to='/register'>Register</Link>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;