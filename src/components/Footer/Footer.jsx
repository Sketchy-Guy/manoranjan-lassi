import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import styles from './Footer.module.css';

const Footer = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <footer className={styles.footer} ref={ref}>
            <div className="container">
                <motion.div
                    className={styles.content}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.column}>
                        <h3 className={styles.brandName}>Manoranjan Lassi</h3>
                        <p className={styles.tagline}>Handcrafted with love since 1970</p>
                        <p className={styles.description}>
                            Three generations of tradition in every glass. Experience the authentic taste of heritage.
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Quick Links</h4>
                        <ul className={styles.linkList}>
                            <li><a href="#story">Our Story</a></li>
                            <li><a href="#special">What Makes It Special</a></li>
                            <li><a href="#menu">Our Menu</a></li>
                            <li><a href="#visit">Visit Us</a></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Connect</h4>
                        <ul className={styles.linkList}>
                            <li><a href="#instagram">Instagram</a></li>
                            <li><a href="#facebook">Facebook</a></li>
                            <li><a href="#whatsapp">WhatsApp</a></li>
                            <li><a href="tel:+91">Phone</a></li>
                        </ul>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.bottomBar}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={fadeInUp}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p>© 2024 Manoranjan Lassi. All rights reserved.</p>
                    <p>Made with ❤️ in India</p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
