// material-ui
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
// material-ui
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';

import SampleService from 'services/sample/SampleService';
import ServiceCaller from 'services/ServiceCaller';
import Reservation from 'components/Reservation/Reservation';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [reservationList, setReservationList] = useState([]);

    const [data, setData] = useState([]);
    const [isSuccess, setSuccess] = useState(false);
    const getData = () => {
        let serviceCaller = new ServiceCaller();
        SampleService.getProducts(serviceCaller, '', (res) => {
            setSuccess(true);
            setData(res.products);
        }, (err) => {
            setSuccess(false);
            console.log(err);
        })
    }

    useEffect(() => {
        getData()

        fetch("/reservations")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setReservationList(result);

                },
                (error) => {
                    console.log(error);
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    if (error) {
        return <div> Error! </div>;
    } else if (!isLoaded) {
        return <div> Loading... </div>;
    } else {

        return (
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    {data?.map((product) => (
                        <Typography variant="body2">
                            {/* {product.title} */}
                            <React.Fragment>
                                <CssBaseline />
                                <Container fixed>
                                    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
                                        {reservationList.map(reservation => (
                                            <Reservation firstName={reservation.firstName} lastName={reservation.lastName}
                                                serverName={reservation.serverName} reservationDate={reservation.reservationDate}
                                                userId={reservation.userId}></Reservation>
                                            /* {reservation.id} {reservation.server} */
                                        ))}
                                    </Box>

                                </Container>
                            </React.Fragment>
                        </Typography>
                    )
                    )}:(
                    <Typography variant="body2">
                        No Product Data
                    </Typography>
                    )


                </Grid>
            </Grid>
        )
    };
}
    export default SamplePage;

