import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Admin from '../../Admin/Admin/Admin';
import UserDashboard from '../../UserDashboard/UserDashboard/UserDashboard';

const Dashboard = () => {
    const [user] = useContext(UserContext);

    return (
        <section>
            {
                user.isAdmin ? <Admin /> : <UserDashboard />
            }
        </section>
    );
};

export default Dashboard;