import styles from './Home.module.css';
import imaging from "../../public/block.svg";
import {useNavigate} from "react-router-dom";

const statsData = [
  { number: "32,000+", label: "Experienced tutors" },
  { number: "300,000+", label: "5-star reviews" },
  { number: "120+", label: "Subjects taught" },
  { number: "200+", label: "Tutor nationalities" },
];
const Home = () => {
const navigate = useNavigate();
    return (
        < div className={styles.homeContainer}>
           <div className={styles.content}>
            <h1>Unlock your potential with the best <span className={styles.word}>language </span>tutors</h1>
            <p> Embark on an Exciting Language Journey with Expert Language
                Tutors: Elevate your language proficiency to new heights by
                    connecting with highly qualified and experienced tutors.</p>
                 <button type='button' className={styles.button} onClick={() => navigate('/teachers')}>Get Started</button>
            </div>
             
            <div className={styles.imaging}>
              <img src={imaging} alt="Home Image" className={styles.image} />
            </div>
            <ul className={styles.statsList}>
                {statsData.map((item, index) => (
                    <li key={index} className={styles.statsItem}>
                        <span className={styles.statsNumber}> {item.number}</span>
                        <span className={styles.statsLabel}>{ item.label}</span>
                    </li>
                ))}
            </ul>
          
        </div>
    );
};
 export default Home;