import { NavLink } from "react-router-dom";
import clsx from "clsx";
import Logo from "../../public/LearnLingo.svg";
import styles from "./Headline.module.css";

export const Headline =() => {
    return (
        <header>
            <div className={styles.headlineContainer}>
                <img src={Logo} alt="LearnLingo Logo" className={styles.logo} />
            </div>
            <nav>
                <NavLink to="/" className={({ isActive }) =>
          clsx("nav-link", isActive && "active")
        }>Home</NavLink>
               
                
                <NavLink to="/teachers" className={({ isActive }) =>
          clsx("nav-link", isActive && "active")
        }> Teachers</NavLink>
                
                <NavLink to="/Login" className={({ isActive }) =>
          clsx("nav-link", isActive && "active")
        }>Log in</NavLink>
                
            </nav>
        </header>
    );
}