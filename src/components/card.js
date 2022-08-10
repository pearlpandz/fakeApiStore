import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Title, Price } from '../styleComponents/title';

export default function ProductCard({ product }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom component="div">
                    <Title>{product.title}</Title>
                </Typography>
                <Typography color="text.secondary" component="div">
                    <Price>${product.price}</Price>
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography> */}
            </CardContent>
            <CardActions>
                <Button size="small">View Prodcut</Button>
                <Button size="small">Add to Cart</Button>
            </CardActions>
        </Card>
    );
}
