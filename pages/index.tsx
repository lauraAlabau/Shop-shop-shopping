import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import { ShopLayout } from "../components/layout";
import { ProductList } from "../components/products";

import { initialData } from "../database/products";

const Home: NextPage = () => {
  return (
    <ShopLayout
      title={"My Shop - Home"}
      pageDescription={
        "Shop created with Next, Typescript, MaterialUI, Auth for admin pages"
      }
    >
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>

      <ProductList products={ initialData.products as any } /> {/* TODO: arreglar el any */}

    </ShopLayout>
  );
};

export default Home;
