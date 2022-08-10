import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Container, Grid } from '@mui/material';
import ProductCard from '../components/card';



function Homepage() {

    const [produts, setProduts] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then(res => {
            console.log(res);
            setProduts(res.data);
        }).catch(error => {
            console.log(error);
        })
    }, [])


    return (
        <Container maxWidth="xl" style={{marginTop: 30}}>

            <Grid container spacing={2} className='products'>
                {
                    produts?.map((product, index) => (
                        <Grid item xs={3} key={index}>
                            <ProductCard product={product} />
                        </Grid>
                    ))
                }

            </Grid>


        </Container>
    )
}

export default Homepage