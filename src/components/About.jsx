export default function Aboutme() {
    return (
        <>

            <a
                href="https://www.linkedin.com/in/janrojascs/"
                target="_blank"
                rel="noreferrer"
                className="sideProfileLink"
            >
                <div className="sideProfile">
                    <img
                        src="/images/profile.jpeg"
                        alt="Jan Rojas"
                    />

                    <div className="sideProfileText">
                        <strong>Jan Rojas</strong>
                        <span>WSU</span>
                    </div>
                </div>
            </a>

        <section id="about" className="about">
            <p className="about-intro">
                I’m Jan, a computer science student at Worcester State University
                concentrating in Software Development and Big Data Analytics,
                with a minor in Economics.
            </p>

            <p>
                I enjoy building useful software, exploring data, and solving
                problems with others.
            </p>

            <div className="about-education">
                <h2>Education</h2>

                <h3>Worcester State University</h3>
                <p className="about-meta">Expected graduation · 2027</p>

                <p>
                    Computer Science · Software Development and Big Data Analytics
                    <br />
                    Minor in Economics
                </p>

                <h3>Relevant coursework</h3>
                <ul className="course-list">
                    <li>Cloud Computing</li>
                    <li>Data Mining</li>
                    <li>Software Quality Assurance and Testing</li>
                    <li>Software Construction and Architecture</li>
                    <li>Data Structures and Algorithms</li>
                    <li>Operating Systems</li>
                    <li>Computer Networking and Security</li>
                    <li>Database Design</li>
                </ul>

                <h3>AWS Academy Graduate — Cloud Foundations</h3>
                <p>
                    Completed 20 hours of AWS cloud training covering cloud services,
                    architecture, security, networking, storage, and databases.
                </p>
            </div>
        </section>
</>
    )
}