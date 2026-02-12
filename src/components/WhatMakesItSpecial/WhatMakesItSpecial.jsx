import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import styles from './WhatMakesItSpecial.module.css';

const WhatMakesItSpecial = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
    };

    const cards = [
        {
            icon: '🏺',
            title: 'Traditional Clay Pots',
            description: 'We still use authentic clay pots that keep the lassi cool naturally and add that earthy, authentic flavor.'
        },
        {
            icon: '🥛',
            title: 'Fresh Daily Ingredients',
            description: 'Fresh dahi made every morning from pure milk. No preservatives, no shortcuts, just pure goodness.'
        },
        {
            icon: '🥄',
            title: 'Hand-Whisked with Love',
            description: 'Every glass is hand-whisked to perfection, creating that perfect creamy texture you can\'t get from machines.'
        }
    ];

    return (
        <section className={styles.section} ref={ref}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.sectionTitle}>WHAT MAKES IT SPECIAL</h2>
                    <h3 className={styles.subtitle}>The Manoranjan Difference</h3>
                </motion.div>

                <div className={styles.cardsGrid}>
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial="hidden"
                            animate={isVisible ? "visible" : "hidden"}
                            variants={fadeInUp}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        >
                            <div className={styles.iconWrapper}>
                                <span className={styles.icon}>{card.icon}</span>
                            </div>
                            <h4 className={styles.cardTitle}>{card.title}</h4>
                            <p className={styles.cardDescription}>{card.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatMakesItSpecial;
