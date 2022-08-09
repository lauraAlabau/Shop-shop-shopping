import Head from "next/head";

import { FC } from "react";
import { Navbar, SideMenu } from "../ui";

import styles from "./ShopLayout.module.css";

interface Props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
  children?: React.ReactNode;
}

export const ShopLayout: FC<Props> = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />

        {/* SEO para redes sociales */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={pageDescription} />

        {imageFullUrl && ( 
          // Si existe la imagen se agrega
          <meta property="og:image" content={imageFullUrl} />
        )}

      </Head>
      
      <nav>
        <Navbar />
      </nav>

      <SideMenu/>

      <main className={styles.shop_layout_main}>{children}</main>

      {/* Footer */}
      <footer>{/* TODO: custom footer */}</footer>
    </>
  );
};
