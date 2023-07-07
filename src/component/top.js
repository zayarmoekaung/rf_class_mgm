import styles from '../styles/top.module.css'
import Image from 'next/image'
import react from 'react';
import localFont from 'next/font/local'
const aileron = localFont({ src: '../fonts/Anurati-Regular.otf' })
export default function top() {

    return (
        <>
            <div className={`${styles.hero}`}>
                <Image
                    className={styles.landing_image}
                    src="/images/hero_bg.jpg"
                    alt='Image by <a href="https://pixabay.com/users/jamesmarkosborne-1640589/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1076536">James Osborne</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1076536">Pixabay</a>'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                />
                <div className={styles.text_box}>
                    <div className={styles.text}>
                        <div className={`${styles.welcome_box}`}>
                        <h2 className={`${styles.out_bound} ${aileron.className}`}>
                            <i >W</i>
                            elcome to the Web Development Class!
                        </h2>
                        </div>
                        <p>
                            At our web development class, we believe in fostering a collaborative and inclusive learning environment. Connect with a vibrant community of fellow learners, exchange ideas, and grow together. Our dedicated support team is always available to provide guidance and assistance, ensuring you have a seamless learning experience from start to finish.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}