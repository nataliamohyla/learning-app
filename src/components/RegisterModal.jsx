import { createPortal } from "react-dom";
import styles from "./RegisterModal.module.css";



const modalRoot = document.getElementById("modal-root");

export default function RegisterModal({ onClose }) {
    return createPortal(
        <div className={styles.backdrop} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}> × </button>
                <h1>Registration</h1>
                <p>Thank you for interest in our platform! In order to register,we need some information. Please provide us with the following information</p>

                <form className={styles.form}>
                    <input className={styles.input} type="name" placeholder="Name" required></input>
                    <input className={styles.input} type="email" placeholder="Email" required></input>
                    <input className={styles.input} type="password" placeholder="Password" required></input>
                    <button className={styles.submitButton}type="submit">Register</button>
                </form>
            </div>
        </div>,
        modalRoot
    )
}