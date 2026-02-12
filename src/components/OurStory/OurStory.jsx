import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import styles from './OurStory.module.css';

const OurStory = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className={styles.section} ref={ref}>
            <div className="container">
                <div className={styles.content}>
                    <motion.div
                        className={styles.imageColumn}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.clayPotIllustration}>
                            <span className={styles.potEmoji}>🏺</span>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.textColumn}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={fadeInUp}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className={styles.decorativeLine}></div>

                        <h2 className={styles.sectionTitle}>OUR STORY</h2>
                        <h3 className={styles.subtitle}>A Legacy of Love in Every Glass</h3>

                        <div className={styles.storyText}>
                            <p>
                                In 1970, in a small corner of the city, our grandfather opened a humble lassi shop
                                with one simple belief: that the best lassi comes from the heart, not shortcuts.
                            </p>
                            <p>
                                For over 50 years, we've been whisking fresh dahi in the same traditional clay pots,
                                using the same time-honored method. Each glass carries the warmth of our family's
                                dedication and the authentic taste of heritage.
                            </p>
                            <p>
                                Today, three generations later, we still handcraft every lassi with the same love
                                and care that started it all.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
