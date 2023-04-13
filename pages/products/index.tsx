import styles from "@/styles/Home.module.css";
import {Hovedtittel, Ingress} from "@/components/typography";
import ProductSlider, {Product} from "@/components/product-grid";
import {FC} from "react";
import {products_data} from "@/pages/api/products";
import {GetStaticProps} from "next";
type Props = {
    products: Product[]
}
const Products: FC<Props> = ({products}) => {
    return(
        <div className={styles.center}>
            <header className={styles.sectionHeader}>
                <Hovedtittel>Products</Hovedtittel>
            </header>
            <ProductSlider products={products}/>
        </div>
    )
}

export const getStaticProps: GetStaticProps<Props> = () => {
    // Fetch products data from server API
    const data = products_data;

    // Return the products data as props
    return {
        props: {
            products: data,
        },
    };
}
export default Products;