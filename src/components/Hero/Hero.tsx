import myImage from "/assets/hero/myImage1.jpg";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mujeeb</h1>
        <p className={styles.description}>
          I'm an entry level software engineer with React and NodeJS looking for
          my first full-time role. Please reach out if you want to learn more
        </p>
        <a href="mailto:diplomatmujeeb@gmail.com" className={styles.contactBtn}>
          Contact me
        </a>
      </div>
      <div className={styles.heroImgContainer}>
        <img src={myImage} alt="Mujeeb's photo" className={styles.heroImg} />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
export default Hero;
