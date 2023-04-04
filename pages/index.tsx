import styles from '@/styles/Home.module.css'
import Header, { TopHeader} from "@/components/header";
import {Hovedtittel, Ingress} from "@/components/typography";
import ProductSlider, {Product} from "@/components/product-grid";
import {FC} from "react";
import AboutUs from "@/components/aboutus";
import Footer from "@/components/footer";

type Props = {
    products: Product[]
}


const Home: FC<Props> = ({products}) => {
    return (
        <>
            <TopHeader/>
            <main className={styles.main}>
                <div className={styles.container}>
                    <img src="https://images.unsplash.com/photo-1542112958-09dbbba26152?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Example Image" className={styles.bgImg}/>
                    <div className={styles.text}>
                        <Header/>
                    </div>
                </div>
                <section className={styles.center}  id="products">
                    <header className={styles.sectionHeader}>
                        <Hovedtittel>Produkter</Hovedtittel>
                    </header>
                    <ProductSlider products={products}/>
                    <div className={styles.sectionElement}>
                        <button className={styles.productButton}><Ingress>SE ALLE DUFTLYS</Ingress></button>
                    </div>

                </section>
                <section className={styles.center} id="aboutus">
                    <AboutUs/>
                </section>
                <div className={styles.center}>

                </div>
                <section className={styles.center}>
                    <Footer/>

                </section>
            </main>
        </>
    )
}

export async function getServerSideProps() {
    // Fetch products data from server API
    const data : Product[] = [
            {
                "name": "Kjærlighetsbrisen",
                "image": './etiketter/brisen.png'
            },
            {
                "name": "Clean Slate",
                "image": './etiketter/cleanslate.png'
            },
            {
                "name": "Glam & Go",
                "image": './etiketter/glamngo.png'
            },
            {
                "name": "Morning Boozt",
                "image": './etiketter/morningboozt.png'
            },
            {
                "name": "Mountain Retreat",
                "image": './etiketter/mountainretreat.png'
            },
            {
                "name": "Night-home Nostalgia",
                "image": './etiketter/nighthome.png'
            }
        ]
    ;

    // Return the products data as props
    return {
        props: {
            products: data,
        },
    };
}

export default Home;