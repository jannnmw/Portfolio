


export default function Skills() {
    const skillGroups = [
        {
            title: "Programming Languages",
            skills: [
                "Java",
                "Python",
                "JavaScript",
                "C",
                "SQL",
                "R",
                "HTML",
                "CSS"
            ]
        },
        {
            title: "Frameworks & Libraries",
            skills: [
                "Spring Boot",
                "Spring Security",
                "Spring AI",
                "React",
                "JPA",
                "Room",
                "JUnit"
            ]
        },
        {
            title: "Databases & Cloud",
            skills: [
                "PostgreSQL",
                "SQLite",
                "Amazon S3",
                "Amazon Athena",
                "AWS",
                "Relational Database Design",
                "Cloud Data Pipelines"
            ]
        },
        {
            title: "Data & Analytics",
            skills: [
                "Data Cleaning",
                "Data Validation",
                "Exploratory Data Analysis",
                "Data Visualization",
                "Trend Analysis",
                "Microsoft Excel",
                "RStudio"
            ]
        },
        {
            title: "Developer Tools",
            skills: [
                "Git",
                "Docker",
                "Maven",
                "IntelliJ IDEA",
                "Android Studio"
            ]
        },
        {
            title: "Software Engineering",
            skills: [
                "Object-Oriented Programming",
                "REST APIs",
                "CRUD",
                "Debugging",
                "Testing",
                "Input Validation",
                "Authentication & Authorization"
            ]
        },
        {
            title: "Professional Skills",
            skills: [
                "Communication",
                "Collaboration",
                "Teamwork",
                "Problem Solving",
                "Data Integrity"
            ]
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="skills-header">
                <h2>Skills</h2>
                <p>
                    Technologies and engineering concepts I have worked with
                    across software development, cloud computing, and data analytics.
                </p>
            </div>

            <div className="skills-grid">
                {skillGroups.map((group) => (
                    <article className="skill-card" key={group.title}>
                        <h3>{group.title}</h3>

                        <div className="skill-list">
                            {group.skills.map((skill) => (
                                <span className="skill-pill" key={skill}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}