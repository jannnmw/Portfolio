

export default function Experience() {
    return (
        <section id="experience" className="experience">
            <h2>Experience</h2>

            <article className="experience-role">
                <header>
                    <h3>JJEC Transportation</h3>
                    <p className="experience-title">
                        IT and Software Development Associate
                    </p>
                    <p className="experience-meta">Part-time</p>
                </header>

                <ul className="experience-list">
                    <li>
                        Provide day-to-day IT support, including computer setup,
                        business file and user data transfers, and hardware and
                        software troubleshooting.
                    </li>

                    <li>
                        Developed <strong>MotorMatch</strong>, an internal Java/Android
                        tool supporting vehicle purchasing decisions as the company
                        expanded its fleet to more than 15 vehicles.
                    </li>

                    <li>
                        Structured vehicle datasets using SQLite and Room, with
                        parameterized SQL queries to filter vehicles by price, fuel
                        efficiency, transmission, brand, and ratings.
                    </li>

                    <li>
                        Built an initial company website prototype, establishing
                        page layouts and the foundation for an online presence.
                    </li>

                    <li>
                        Currently developing <strong>DigitalSign</strong>, an
                        electronic-signature platform for transportation documents
                        intended to reduce reliance on third-party services.
                    </li>

                    <li>
                        Designed DigitalSign’s architecture using React, JavaScript,
                        Java, Spring Boot REST APIs, and PostgreSQL, with AWS planned
                        for deployment and document storage.
                    </li>
                </ul>
            </article>
        </section>
    )
}