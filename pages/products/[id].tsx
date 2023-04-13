import {FC, useState} from "react";
import {Product} from "@/components/product-grid";
import {products_data} from "@/pages/api/products";
import {CartItem} from "@/types/types";
import {useCart} from "@/context/CartProvider";
import {GetStaticProps} from "next";
import styles from "@/styles/Products.module.css";
import {Hovedtittel, Ingress, IngressSmall, Mellomtittel, Undertittel} from "@/components/typography";
import {SmallFooter} from "@/components/footer";
import {PageWrapper} from "@/components/wrappers/PageWrapper";
import {TopHeader} from "@/components/header";

type ProductProps = {
    product: Product
};

const  Id: FC<ProductProps> = ({ product }) => {
    const { id, name, price, image, description } = product
    const { addItem } = useCart();
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        const item: CartItem = { id, name, price, image, quantity };
        addItem(item);
    };

    return (
        <>
            <TopHeader/>
        <PageWrapper>
            <div className={styles.productcontainter}>
            <div className={styles.productimage}>
                <img src={image} alt={name} className={styles.image} />
            </div>
            <div className={styles.productdetails}>
                <Undertittel>{name}</Undertittel>
                <IngressSmall>{description}</IngressSmall>
                <div className={styles.addtocartContainer}>
                <div className={styles.quantity}>
                    <button
                        onClick={() => setQuantity(quantity - 1)}
                        disabled={quantity === 1}
                    >
                        -
                    </button>
                    <Undertittel style={styles.span}>{quantity.toString()}</Undertittel>
                    <button
                        onClick={() => setQuantity(quantity + 1)}
                    >
                        +
                    </button>
                </div>
                <button
                    className={styles.addtocart}
                    onClick={handleAddToCart}
                >
                    <Ingress>Add to cart</Ingress>
                    <IngressSmall style={styles.addtocartText}>{`Kr ${price.toFixed(2)}`}</IngressSmall>
                </button>
                </div>
            </div>
        </div>
        <SmallFooter/>
    </PageWrapper>
        </>
    );
};


export async function getStaticPaths() {
    // Return a list of possible value for id
    const products = products_data;

    return {
        paths: products.map((product: Product) => ({
            params: {id: product.name.toLowerCase().replace(' ', '-')},
        })),
        fallback: "blocking",
    };
}
export const getStaticProps: GetStaticProps<ProductProps> = async ({ params }) => {
    if (!params) {
        // return an error or a default product here
        return {
            notFound: true,
        };
    }

    const { id } = params;
    const data = products_data;
    const product = data.find((res) => res.name.toLowerCase().replace(' ', '-') === id);

    if (!product) {
        // return an error or a default product here
        return {
            notFound: true,
        };
    }

    return {
        props: {
            product,
        },
    };
};
export default Id;