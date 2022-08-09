import { Typography } from '@mui/material';
import type { NextPage } from 'next'
import { ShopLayout } from '../components/layout';

const Home: NextPage = () => {
  return (
   <ShopLayout title={'My Shop - Home'} pageDescription={'Shop created with Next, Typescript, MaterialUI, Auth for admin pages'}>
    <Typography variant='h1' component='h1'>Tienda</Typography>
    <Typography variant='h2' sx={{ mb:1 }}>Todos los productos</Typography>
   </ShopLayout>
  )
}

export default Home
