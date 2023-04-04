import Image from 'next/image';
import styles from './ProductSlider.module.css';
import {Undertittel} from "@/components/typography";

export interface Product {
    image: string;
    name: string;
}

interface Props {
    products: Product[],
}
const ProductSlider = (props: Props) => {
    return (
        <div className={styles.productsContainer}>
            {props.products.map((product, index) => (
                <div className={styles.productCard} key={index}>
                    <img src={product.image} alt={product.name} className={styles.productImage} />
                    <Undertittel>{product.name}</Undertittel>
                </div>
            ))}
        </div>
    )
};

export default ProductSlider;