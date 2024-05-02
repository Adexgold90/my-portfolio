import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: {
    title: string;
    imageSrc: string;
    description: string;
    skills: string[];
    demo: string;
    source?: string; // Making source optional
    "FE source"?: string; // Making FE source optional
    "BE source"?: string; // Making BE source optional
  };
}

export const ProjectCard = ({
  project: {
    title,
    imageSrc,
    description,
    skills,
    demo,
    source,
    "FE source": feSource,
    "BE source": beSource,
  },
}: ProjectCardProps) => {
  return (
    <div className={styles.container}>
      <img src={imageSrc} alt={`Image of ${title}`} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={feSource ? styles.smallLink : styles.link}>
          Demo
        </a>
        {source && (
          <a
            href={source}
            className={feSource ? styles.smallLink : styles.link}
          >
            Code
          </a>
        )}
        {feSource && (
          <a
            href={feSource}
            className={feSource ? styles.smallLink : styles.link}
          >
            Frontend code
          </a>
        )}
        {beSource && (
          <a
            href={beSource}
            className={feSource ? styles.smallLink : styles.link}
          >
            Backend code
          </a>
        )}
      </div>
    </div>
  );
};
