import { NavLink } from "react-router-dom";
import clsx from "clsx";
import Logo from "../../public/LearnLingo.svg";
import styles from "./Headline.module.css";
import icon from "../../public/ukraine (1).svg";

export const Headline =() => {
    return (
        <header className={styles.headlineContainer}>
            <div className={styles.logo}>
                <img src={icon} alt="Ukraine Icon" className={styles.icon} />
                <img src={Logo} alt="LearnLingo Logo"  />
            </div>
        
            <nav className={styles.nav}>
                <NavLink to="/" className={({ isActive }) =>
                    clsx(styles.link, isActive && styles.active)
                    
        }>Home</NavLink>
               
                
                <NavLink to="/teachers" className={({ isActive }) =>
          clsx(styles.link, isActive && styles.active)
        }> Teachers</NavLink>
                
      
            </nav>
            <div className={styles.loginRegister}>
                <NavLink to="/Login" className={styles.loginLink} >Log in</NavLink>
                <button className={styles.registerButton}>Register</button>
            </div>
                
        </header>
    );
}