import styles from './ProductGrid.module.css';
import { Undertittel } from '@/components/typography';
import {useState} from "react";

export interface Product {
    image: string;
    name: string;
    price: number;
    description?: string;
    id: number;

}

interface Props {
    products: Product[];
}

const ProductGrid = (props: Props) => {
    const [imageSrc, setImageSrc] = useState('./etiketter/testbilde.jpeg');

    const showProductInfo = (event: any) => {
        const productCard = event.currentTarget;
        const productInfo = productCard.querySelector(`.${styles.productInfo}`);
        productInfo.style.display = 'flex';
        setImageSrc('./bilde2.jpeg');
    };

    const hideProductInfo = (event: any) => {
        const productCard = event.currentTarget;
        const productInfo = productCard.querySelector(`.${styles.productInfo}`);
        productInfo.style.display = 'none';
        setImageSrc('./etiketter/testbilde.jpeg')
    };

    return (
        <div className={styles.productsContainer}>
            {props.products.map((product, index) => (
                <a href={`/products/${product.name.toLowerCase().replace(' ', '-')}`} className={styles.productCard} key={index} onMouseOver={showProductInfo} onMouseOut={hideProductInfo}>
                    <img src={imageSrc} alt={product.name} className={styles.productImage} />
                    <div className={styles.productInfo}>
                        <Undertittel>{product.name}</Undertittel>
                        <Undertittel>{product.price.toString()}</Undertittel>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default ProductGrid;
