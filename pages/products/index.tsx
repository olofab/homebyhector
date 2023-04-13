import styles from "@/styles/Home.module.css";
import {Hovedtittel, Ingress} from "@/components/typography";
import ProductSlider, {Product} from "@/components/product-grid";
import {FC} from "react";
import {products_data} from "@/pages/api/products";
import {GetStaticProps} from "next";
import {PageHeader} from "@/components/header";
import {PageWrapper} from "@/components/wrappers/PageWrapper";
import Footer, {SmallFooter} from "@/components/footer";
type Props = {
    products: Product[]
}
const Products: FC<Props> = ({products}) => {
    return(
        <>
        <PageHeader/>
            <PageWrapper>
                <div className={styles.center}>
                <div className={styles.sectionHeader}>
                    <Hovedtittel>Products</Hovedtittel>
                </div>
                <ProductSlider products={products}/>
                </div>

            </PageWrapper>
            <SmallFooter />
        </>
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