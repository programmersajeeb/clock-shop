import {Container, Divider, Grid, Typography} from '@mui/material';
import {Box} from '@mui/system';
import React from 'react';
const ClientReview = (props) => {
    const {rate, discription} = props.clientReview;
    return (
        <Grid item="item" xs={12} textAlign="left" marginBottom="15px">
            <Typography variant="h6" gutterBottom="gutterBottom" component="div">
            <span style={{fontSize:"18px", color:"#757575", fontWeight:"bold"}}>Rating:</span> <span style={{color:"#faaf00", fontWeight:"bold"}}>{rate} Star</span>
            </Typography>
            <Typography variant="body1" gutterBottom="gutterBottom">
              <span style={{fontSize:"18px", color:"#757575", fontWeight:"bold"}}>Unknown:</span> {discription}
            </Typography>
            <Divider/>
        </Grid>
    );
};

export default ClientReview;