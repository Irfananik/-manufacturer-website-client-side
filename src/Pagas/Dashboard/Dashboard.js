import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';


const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <h2 className="text-accent font-bold text-2xl mt-6 ml-3">Your dashboard</h2> */}
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {!admin && <li><Link to="/dashboard">My Order</Link></li>}
                    {!admin && <li><Link to="/dashboard/addreview">Add Review</Link></li>}
                    <li><Link to="/dashboard/myprofile">My Profile</Link></li>
                    {admin && <li><Link to="/dashboard/user">Make Admin</Link></li>}
                    {admin && <li><Link to="/dashboard/addproduct">Add Products</Link></li>}
                    {admin && <li><Link to="/dashboard/manageallorders">Manage All Orders</Link></li>}
                    {admin && <li><Link to="/dashboard/manageproduct">Manage Product</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;