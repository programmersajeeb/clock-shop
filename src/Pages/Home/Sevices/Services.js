import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Service from '../Sevice/Service';
import { Button, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';



const Services = () => {
  const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://infinite-tor-54657.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

  return (
    <Box sx={{ flexGrow: 1, margin:"50px 0"}}>
      <Container>
      <Typography sx={{ fontWeight: 600, margin:"30px 0" }} variant="h4" component="div">
        Featured Products
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
          products.slice(0, 6).map(product=><Service
          key={product.name}
          product={product}
          ></Service>)
        }
      </Grid>
      <Link style={{textDecoration:"none"}} to="/exploreProducts">
        <Button style={{marginTop: "30px"}} variant="contained">Explore Products</Button>
      </Link>
      </Container>
    </Box>
  );
};

export default Services;