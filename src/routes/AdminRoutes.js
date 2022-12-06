import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import AdminLayout from 'layout/AdminLayout';

// login option 3 routing
// dashboard routing
const Dashboard = Loadable(lazy(() => import('views/admin/dashboard')));
const Dashboard2 = Loadable(lazy(() => import('views/admin/dashboard2')));
const UsersPage = Loadable(lazy(() => import('views/admin/users')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <AdminLayout />,
    children: [
        {
            path: '/admin/reservations',
            element: <Dashboard />
        },
        {
            path: '/admin/servers',
            element: <Dashboard2 />
        },
        {
            path: '/admin/users',
            element: <UsersPage />
        }
    ]
};

export default AuthenticationRoutes;
