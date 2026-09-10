import ProjectCard from "../components/ProjectCard";

// import quietPenImage from "../assets/img/the-quiet-pen.png";
// import inkInsightsImage from "../assets/img/ink-insights.png";
// import g1AcademyImage from "../assets/img/g1-academy.png";

function Projects({ onProjectSelect }) {

    const projects = [
        {
            id: 1,
            title: "The Quiet Pen",
            category: "Portfolio",
            year: "2025",
            // image: quietPenImage,
            description:
                "A personal creative writing portfolio featuring original poetry, reflections, and creative work.",
        },

        {
            id: 2,
            title: "Ink & Insights",
            category: "Blog Site",
            year: "2025",
            // image: inkInsightsImage,
            description:
                "A personal blog focused on books, stories, characters, and thoughtful reflections.",
        },

        {
            id: 3,
            title: "G1 Academy",
            category: "Web Application",
            year: "2025",
            // image: g1AcademyImage,
            description:
                "A school-focused web application developed as part of an academic information system project.",
        },
    ];

    return (
        <section id="projects" className="projects">

            <div className="section-heading">

                <div>
                    <p className="eyebrow">
                        SELECTED WORK
                    </p>

                    <h2>
                        Project <span>Showcase</span>
                    </h2>
                </div>

                <p>
                    A selection of creative, academic,
                    and web development projects.
                </p>

            </div>

            <div className="project-grid">

                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onProjectSelect={onProjectSelect}
                    />
                ))}

            </div>

        </section>
    );
}

export default Projects;