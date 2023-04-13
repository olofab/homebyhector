import { useCart } from "@/context/CartProvider";
import {Ingress, IngressSmall, Undertittel} from "@/components/typography";
import { SmallFooter } from "@/components/footer";
import styles from "@/styles/Cart.module.css";
import { ChangeEvent, useState } from "react";

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
                <Undertittel>Ingenting i kurven</Undertittel>
            </>
        );
    }

    return (
        <>
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
                <Undertittel>{totalPrice}</Undertittel>
            </div>
            <SmallFooter />
        </>
    );
}
