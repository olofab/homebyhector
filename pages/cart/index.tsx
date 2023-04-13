import { useCart } from "@/context/CartProvider";
import {Ingress, IngressSmall, Undertittel} from "@/components/typography";
import { SmallFooter } from "@/components/footer";
import styles from "@/styles/Cart.module.css";
import { ChangeEvent, useState } from "react";
import {PageWrapper} from "@/components/wrappers/PageWrapper";
import Header, {PageHeader} from "@/components/header";

export default function Cart() {
    const { cartItems, updateCartItem, removeItem } = useCart();
    const [quantities, setQuantities] = useState<{ [key: string]: number }>(
        cartItems.reduce((acc: any, curr) => {
            acc[curr.id] = curr.quantity;
            return acc;
        }, {})
    );
    const totalPrice = cartItems.reduce(
        (acc, curr) => acc + curr.quantity * curr.price,
        0
    );

    const handleQuantityChange = (
        e: ChangeEvent<HTMLInputElement>,
        id: number
    ) => {
        const quantity = parseInt(e.target.value);
        setQuantities({
            ...quantities,
            [id]: quantity,
        });
        updateCartItem(id, quantity);
    };

    const handleDeleteItem = (
        id: number
    ) => {

        removeItem(id);
    };

    if (cartItems.length === 0) {
        return (
            <>
                <PageHeader/>
            <PageWrapper>
                <Undertittel style={styles.empty}>Looks like your shopping cart is feeling a bit lonely. Add some items and give it some company</Undertittel>
                <a href={'/products'} className={styles.sectionElement}>
                    <button className={styles.deleteButton}><Ingress>See all products</Ingress></button>
                </a>
            </PageWrapper>
            </>
        );
    }

    return (
        <>
            <PageHeader/>
            <div className={styles.cartContainer}>
                {cartItems.map((item, index) => {
                    const totalItemPrice = quantities[item.id] * item.price;
                    return (<div className={styles.cartItem} key={index}>
                        <img src={item.image} className={styles.cartImage} />
                        <Ingress>{item.name}</Ingress>
                        <input
                            type="number"
                            min={1}
                            value={quantities[item.id]}
                            onChange={(e) => handleQuantityChange(e, item.id)}
                            className={styles.quantityBox}
                        />
                        <button onClick={() => handleDeleteItem(item.id)} className={styles.deleteButton}>Delete</button>
                        <Ingress>{`kr ${totalItemPrice}`}</Ingress>
                    </div>)
                })
                }
                <Undertittel  style={styles.total}>{totalPrice}</Undertittel>
            </div>
            <SmallFooter />
        </>
    );
}
