import {
    Container,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import {Box} from '@mui/system';
import React, {useState, useEffect} from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const {user} = useAuth();
    const [orderProducts, setOrderProducts] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/orderProducts?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrderProducts(data));
    }, [])
    return (
        <Box>
            <Container>
                <Box
                    margin="0 auto"
                    sx={{
                        width: 4/ 4,
                        mt: 8
                    }}>
                    <Grid container="container" spacing={0}>
                        <Grid item="item" xs={12} md={12} xl={12} backgroundColor="rgba(193,164,130,.3)">
                            <h2>Total Order: {orderProducts.length}</h2>
                            <TableContainer component={Paper}>
                                <Table
                                    // sx={{
                                    //     minWidth: 650
                                    // }}
                                    aria-label="Order Table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell align="left">Product Name</TableCell>
                                            <TableCell align="left">Price</TableCell>
                                            <TableCell align="right">Update</TableCell>
                                            <TableCell align="right">Delete</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            orderProducts.map((row) => (
                                                <TableRow
                                                    key={row._id}
                                                    sx={{
                                                        '&:last-child td, &:last-child th' : {
                                                            border: 0
                                                        }
                                                    }}>
                                                    <TableCell component="th" scope="row">
                                                        {row.buyerName}
                                                    </TableCell>
                                                    <TableCell align="left">{row.productName}</TableCell>
                                                    <TableCell align="left">${row.price}</TableCell>
                                                    <TableCell align="right">{row.carbs}</TableCell>
                                                    <TableCell align="right">{row.protein}</TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default DashboardHome;