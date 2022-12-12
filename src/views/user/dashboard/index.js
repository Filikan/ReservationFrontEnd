import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
// import EarningCard from './EarningCard';
import { gridSpacing } from 'store/constant';
// import Reservation from './Reservation';
import EarningCard3 from './EarningCard3';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                {/* <EarningCard isLoading={isLoading} /> */}
                {/* <Reservation isLoading={isLoading} /> */}
                <EarningCard3 isLoading={isLoading} />
            </Grid>
        </Grid>
    );
};

export default Dashboard;
