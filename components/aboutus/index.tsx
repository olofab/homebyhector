import styles from './AboutUs.module.css';
import {Hovedtittel, Ingress} from "@/components/typography";

const AboutUs = () => {
    return (
        <section className={styles.aboutMe}>
            <div className={styles.aboutText}>
                <Hovedtittel style={styles.margin}>How did the scented candle addiction begin?</Hovedtittel>
                <Ingress style={styles.margin}>We started making scented candles because we love them ourselves and wanted to create something of our own. There is something special about lighting a scented candle and letting the room fill with a delightful aroma that can help us relax and enjoy the moment.</Ingress>
                <Ingress style={styles.margin}>We wanted to share this experience with others and create our own unique scents that would be suitable for different situations and occasions. So now, we have dedicated ourselves to making high-quality scented candles that can provide a fantastic experience for anyone who loves to light a candle and be enveloped by a delightful scent.</Ingress>
                <Ingress>Andy and Sof</Ingress>
            </div>
            <div className={styles.aboutImage}>
                <img src={'../oss.jpg'} alt={'oss'} />
            </div>
        </section>
    );
};

export default AboutUs;