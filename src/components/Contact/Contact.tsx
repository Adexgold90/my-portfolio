import styles from "./Contact.module.css";
import emailIcon from "/assets/contact/emailIcon.png";
import linkedInIcon from "/assets/contact/linkedinIcon.png";
import githubIcon from "/assets/contact/githubIcon.png";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:diplomatmujeeb@gmail.com">diplomatmujeeb@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={linkedInIcon} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/mujeeb-adetokunbo-b725a41b6/">
            Mujeeb Adetokunbo
          </a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/mujeebcodes">@mujeebcodes</a>
        </li>
      </ul>
    </footer>
  );
};
export default Contact;
