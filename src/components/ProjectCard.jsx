import styles from "./ProjectCard.module.css";

function ProjectCard({ project, onProjectSelect }) {

    const handleClick = () => {
        onProjectSelect(project);
    };

    return (
        <article className={styles.card}>

            <div className={styles.preview}>

                <div className={styles.previewTop}>
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                </div>

                <img
                    className={styles.projectImage}
                    src={project.image}
                    alt={project.title}
                />

            </div>

            <div className={styles.content}>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <button onClick={handleClick}>
                    View Project ↗
                </button>

            </div>

        </article>
    );
}

export default ProjectCard;