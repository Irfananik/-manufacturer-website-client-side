import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth)
        localStorage.removeItem('accessToken')
    }


    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
        <li><Link to='/blog'>Blogs</Link></li>
        <li><Link to='/myportfolio'>My Portfolio</Link></li>
        {/* <li><Link to='/purchase'>Purchase</Link></li> */}
        <li>{user ? <button class="btn btn-ghost" onClick={logout}>SignOut</button> : <Link to='/login'>Login</Link>}</li>
    </>

    return (
        <div>
            <div className="navbar bg-primary p-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                            {
                                menuItems
                            }
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">eBikeParts</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {
                            menuItems
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <label for="my-drawer-2" tabindex="1" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;