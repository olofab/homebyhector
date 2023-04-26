import styles from "@/styles/Cart.module.css";
import {IngressSmall} from "@/components/typography";
import {CartItem} from "@/types/types";

interface Props {
    cartItem: CartItem
}
const CartContent = (props: Props) => {
    const totalPrice = props.cartItem.price * props.cartItem.quantity;

    return (
        <div className={styles.cartItem}>
            <img src={props.cartItem.image} className={styles.cartImage}/>
            <IngressSmall>{props.cartItem.name}</IngressSmall>
            <IngressSmall>{props.cartItem.quantity}</IngressSmall>
            <IngressSmall>{`kr ${totalPrice}`}</IngressSmall>
        </div>
    )
}

export default CartContent;