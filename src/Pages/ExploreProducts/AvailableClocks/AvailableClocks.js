import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AvailableClock from '../AvailableClock/AvailableClock';
import {Container} from '@mui/material';

const AvailableClocks = () => {
    const [availableClocks, setAvailableClocks] = useState([])
    useEffect(() => {
        fetch('https://infinite-tor-54657.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setAvailableClocks(data))
    }, []);
    return (
        <Box sx={{
                flexGrow: 1
            }}>
            <Container>
                <Typography
                    sx={{
                        fontWeight: 600,
                        mt: 8
                    }}
                    variant="h4"
                    component="div">
                    Available Clocks
                </Typography>
                <Grid style={{margin: '50px 0'}}
                    container="container"
                    spacing={{
                        xs: 2,
                        md: 3
                    }}
                    columns={{
                        xs: 4,
                        sm: 8,
                        md: 12
                    }}>
                    {
                        availableClocks.map(
                            availableClock => <AvailableClock key={availableClock._id} availableClock={availableClock}></AvailableClock>
                        )
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default AvailableClocks;