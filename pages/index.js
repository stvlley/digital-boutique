import { Card, CardMedia, CardActionArea, Grid, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import Layout from '../components/Layout'
import NextLink from 'next/link'
import db from '../utils/db'
import Product from '../models/Product'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { Store } from '../utils/Store'
import About from '../public/about.gif'
import Image from 'next/image'

export default function Home(props) {
  const { products } = props;
  const router = useRouter();
  const { dispatch, state } = useContext(Store)

  const addToCartHandler = async (product) => {
    

    const existItem = state.cart.cartItems.find(x => x._id === product._id)
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`)
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
  }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } })
    router.push('/cart')
  }
  return (
    <Layout>
      
      <div>
      
        <h1>Products</h1>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item md={4} key={product.name} >
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                    ></CardMedia>
                    
                    <CardContent>
                      <Typography>{product.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>${product.price}</Typography>
                  <Button onClick={() => addToCartHandler(product)} size="small" color="primary">
                    Add to cart
                  </Button>
                </CardActions>
                <footer></footer>
              </Card>
            </Grid>
          ))}
          
        </Grid>
        
      </div>
      
    </Layout>

  )
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}