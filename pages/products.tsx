import React, { useState } from 'react';
import styles from '@/styles/Products.module.css'

interface Candle {
    name: string;
    scent: string;
    price: number;
    quantity: number;
}

interface CandleProps {
    candle: Candle;
}

const CandleProductPage: React.FC<CandleProps> = () => {

    const candle : Candle = {
        name: 'Thai collection',
        scent: 'Lemongrass',
        price: 300,
        quantity: 1
    }
    const [quantity, setQuantity] = useState(1);

    const buyCandle = () => {
        if (quantity > candle.quantity) {
            console.log("Sorry, we don't have enough candles in stock.");
        } else {
            console.log(`Thank you for your purchase of ${quantity} ${candle.name} candle(s) for a total of $${(candle.price * quantity).toFixed(2)}.`);
            setQuantity(1);
            candle.quantity -= quantity;
        }
    };

    return (
        <div className={styles.productPage}>
        <div className={styles.productDetails}>
            <h2>{candle.name}</h2>
            <p>Scent: {candle.scent}</p>
            <p>Price: ${candle.price.toFixed(2)}</p>
            <p>Quantity: {candle.quantity}</p>
            <label htmlFor="quantity">Quantity:</label>
            <input
                type="number"
                id="quantity"
                min={1}
                max={candle.quantity}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <button className={styles.buyButton} onClick={buyCandle}>Buy</button>
        </div>
        </div>
    );
};

export default CandleProductPage;
