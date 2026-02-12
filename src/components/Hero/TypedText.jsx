import { TypeAnimation } from 'react-type-animation';
import styles from './TypedText.module.css';

const TypedText = () => {
    return (
        <div className={styles.typedTextContainer}>
            <TypeAnimation
                sequence={[
                    'Manoranjan Lassi',
                    1000,
                    (el) => el.classList.add(styles.complete),
                ]}
                wrapper="h1"
                speed={50}
                className={styles.brandName}
                cursor={false}
            />

            <TypeAnimation
                sequence={[
                    1500, // Wait for brand name
                    'Handcrafted with love since 1970',
                ]}
                wrapper="p"
                speed={50}
                className={styles.tagline}
                cursor={false}
            />
        </div>
    );
};

export default TypedText;
