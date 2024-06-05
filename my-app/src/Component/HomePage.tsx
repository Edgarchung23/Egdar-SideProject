import { Link } from "react-router-dom";
import styles from "../Css/HomePage.module.css";

// ===================================================================
export function HomePage(){
    return(
        <>
        <div className={styles.heading}>
            <div className={styles.icon}>
                <img src="/Cat.png" alt="cat" id={styles.myIcon} />
            </div>
            <div className={styles.aboutMeContent}>
                <div className={styles.title}><b>Hello</b></div>
                <h2>About me</h2>
                <h4 className={styles.bodyContent}> I am a Junior Web Developer,qqqqqqqqqqqqqqqq <br/>
                I am a Junior Web Developerm,qweqwewqewqeqe
                <br/>
                I am a Junior Web Developer</h4>
            </div>
        </div>
        <div className={styles.footer}>
                <Link to="https://www.facebook.com/EdgarchungMt">
                    <img src="/FacebookIcon.png" alt="facebook" id={styles.contactIcon} />
                </Link>
                <Link to="">
                    <img src="/InstagramIcon.png" alt="instagram" id={styles.contactIcon} />
                </Link>
                <Link to="https://wa.me/85255014876">
                    <img src="/WhatsAppIcon.png" alt="whatsapp" id={styles.contactIcon} />
                </Link>
        </div>
        </>
    )
}