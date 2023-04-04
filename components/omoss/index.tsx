import styles from './AboutMe.module.css';
import {Hovedtittel, Ingress} from "@/components/typography";

const AboutUs = () => {
    return (
        <section className={styles.aboutMe}>
            <div className={styles.aboutText}>
                <Hovedtittel style={styles.margin}>Hvordan begynte dette?</Hovedtittel>
                <Ingress style={styles.margin}>Vi begynte å lage duftlys fordi vi selv elsker dem og ønsket å skape noe eget. Det er noe spesielt med å tenne et duftlys og la rommet fylles med en herlig aroma som kan hjelpe oss å slappe av og nyte øyeblikket.</Ingress>
                <Ingress style={styles.margin}>Vi ville dele denne opplevelsen med andre og skape våre egne unike dufter som passer til ulike situasjoner og anledninger. Så nå har vi dedikert oss til å lage duftlys av høy kvalitet som kan gi en fantastisk opplevelse for alle som elsker å tenne et lys og la seg bli omfavnet av deilig duft.</Ingress>
                <Ingress>Andreas og Sofie</Ingress>
            </div>
            <div className={styles.aboutImage}>
                <img src={'../oss.jpg'} alt={'oss'} />
            </div>
        </section>
    );
};

export default AboutUs;