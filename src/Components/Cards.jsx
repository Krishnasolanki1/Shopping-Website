import React, { useEffect, useState } from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import axios from 'axios';
import Grid from '@mui/material/Grid'; // Import from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../redux/Slice';
import Myslider from './Myslider';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function Cards(props) {
  const [cardData, setCardData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:5000/product')
      .then((res) => {
        setCardData(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  let begitem = useSelector((store)=>store.addCart.cart);
  const elemantFound = cardData.indexOf(begitem) >= 0;
// console.log(elemantFound,"done")
console.log(begitem,"add")
console.log(cardData,"cards")
  const handleAddToCart = (item) => {
    dispatch(addCart(item)); // Dispatching the addCart action with the item data
  };
  const handleRemoveFromCart = (item) => {
    // Dispatch an action to remove the item from the cart
    dispatch(removeCart(item)); // Assuming removeCart action takes item id as an argument
  };
  

  return (
    <>
      <Myslider />
      <br />
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        {cardData.map((data, index) => (
          <Grid key={index} xs={12} sm={6} md={4} lg={3} item>
            <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
              <CardOverflow>
                <img src={data.image} height={250} loading="lazy" alt="" />
              </CardOverflow>
              <CardContent>
                <Link href="#product-card" fontWeight="md" color="neutral" textColor="text.primary" overlay height={70} endDecorator={<ArrowOutwardIcon />} >
                  {data.title}
                </Link>
                <Typography level="title-lg" sx={{ mt: 1, fontWeight: 'xl' }} endDecorator={<Chip component="span" size="sm" variant="soft" color="success"> Lowest price </Chip> }>
                  ${data.price}
                </Typography>
                <Typography level="body-sm">
                  (Only <b>{data.rating.count} </b> left in stock!)
                </Typography>
              </CardContent>
              <CardOverflow>
                <Button
                  variant="solid"
                  color="danger"
                  size="lg"
                  onClick={() => handleAddToCart(data)} // Pass the data object to handleAddToCart function
                >
                  Add To Cart &nbsp;<ShoppingBasketIcon />
                </Button>
                {/* <Button
                  variant="soft"
                  color="danger"
                  size="lg"
                  onClick={() => handleRemoveFromCart(data.id)}
                  // Pass the data object to handleAddToCart function
                >
                  Remove &nbsp;<ShoppingBasketIcon />
                </Button> */}
              </CardOverflow>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
