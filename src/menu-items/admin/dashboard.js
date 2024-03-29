// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard-group',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'dashboard1',
            title: 'Reservations',
            type: 'item',
            url: '/admin/dashboard',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'dashboard2',
            title: 'Servers',
            type: 'item',
            url: '/admin/dashboard2',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
