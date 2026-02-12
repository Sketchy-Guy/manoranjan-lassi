import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import styles from './OurMenu.module.css';

const OurMenu = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
    };

    const menuItems = [
        {
            name: 'Sweet Lassi',
            description: 'Classic sweet lassi with a touch of sugar and cardamom',
            price: '₹40',
            emoji: '🥛'
        },
        {
            name: 'Salted Lassi',
            description: 'Traditional salted lassi with cumin and mint',
            price: '₹40',
            emoji: '🧂'
        },
        {
            name: 'Mango Lassi',
            description: 'Seasonal fresh mango blended with creamy dahi',
            price: '₹60',
            emoji: '🥭',
            seasonal: true
        },
        {
            name: 'Rose Lassi',
            description: 'Delicate rose-flavored lassi with a hint of sweetness',
            price: '₹50',
            emoji: '🌹'
        },
        {
            name: 'Kesar Badam Lassi',
            description: 'Premium saffron and almond lassi',
            price: '₹70',
            emoji: '✨'
        },
        {
            name: 'Plain Dahi',
            description: 'Fresh homemade yogurt in traditional clay pot',
            price: '₹30',
            emoji: '🏺'
        }
    ];

    return (
        <section className={styles.section} ref={ref} id="menu">
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.sectionTitle}>OUR MENU</h2>
                    <h3 className={styles.subtitle}>Timeless Flavors</h3>
                </motion.div>

                <div className={styles.menuGrid}>
                    {menuItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.menuCard}
                            initial="hidden"
                            animate={isVisible ? "visible" : "hidden"}
                            variants={fadeInUp}
                            transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                        >
                            {item.seasonal && (
                                <div className={styles.seasonalBadge}>Seasonal</div>
                            )}
                            <div className={styles.menuIcon}>{item.emoji}</div>
                            <h4 className={styles.menuName}>{item.name}</h4>
                            <p className={styles.menuDescription}>{item.description}</p>
                            <div className={styles.menuPrice}>{item.price}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurMenu;
