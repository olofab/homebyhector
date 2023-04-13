import styles from '@/styles/Home.module.css'
import Header, { TopHeader} from "@/components/header";
import {Hovedtittel, Ingress, Mellomtittel, Title} from "@/components/typography";
import ProductSlider, {Product} from "@/components/product-grid";
import {FC, useEffect, useState} from "react";
import AboutUs from "@/components/aboutus";
import Footer, {SmallFooter} from "@/components/footer";
import {products_data} from "@/pages/api/products";
import {PageWrapper} from "@/components/wrappers/PageWrapper";
import {GetStaticProps} from "next";

type Props = {
    products: Product[]
}


const Home: FC<Props> = ({products}) => {
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        if (window.innerWidth > 767) {
            setImageSrc('/backdrop.jpg');
        } else {
            setImageSrc('/backdrop_mobil.jpg');
        }

        // Re-run this effect when window size changes
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function handleResize() {
        if (window.innerWidth > 767) {
            setImageSrc('/backdrop.jpg');
        } else {
            setImageSrc('/backdrop_mobil.jpg');
        }
    }

    function Products (){
        return(
            <>
                <header className={styles.sectionHeader}>
                    <Hovedtittel>Products</Hovedtittel>
                </header>
            <ProductSlider products={products}/>
        <a href={'/products'} className={styles.sectionElement}>
            <button className={styles.productButton}><Ingress>SEE ALL PRODUCTS</Ingress></button>
        </a>
            </>
        )
    }
    return (
        <>
            <TopHeader/>
<PageWrapper>
    <div className={styles.container}>
                    <img src={imageSrc} alt={imageSrc} className={styles.bgImg}/>
                    <div className={styles.text}>
                        <Header/>
                    </div>
                </div>
                <section className={styles.center}  id="products">
                <Products/>
                </section>
                <section className={styles.centerAboutUs} id="aboutus">
                    <AboutUs/>
                </section>
                <section className={styles.center}>
                    <Footer/>
                </section>
<SmallFooter/>
</PageWrapper>
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

export default Home;