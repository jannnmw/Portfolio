export default function Projects() {


    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>

            <article className="project">
                <p className="project-context">CODE2040 Hackathon</p>
                <h3>SIREN</h3>
                <p className="project-tech">JavaScript · React · Firebase</p>

                <p>
                    An application for documenting law enforcement encounters through
                    continuous audio recording, with offline buffering during network
                    interruptions.
                </p>

                <details className="project-details">
                    <summary>Technical details</summary>
                    <ul>
                            <li>
                                Collaborated with a team to prototype SIREN,
                                an application designed to preserve independent documentation during
                                high-stress encounters.
                            </li>

                            <li>
                                Built a React-based recording interface capable of continuously capturing
                                audio in 15-second chunks rather than relying on one long recording.
                            </li>

                            <li>
                                Designed the chunked recording workflow so recording could continue while
                                previously completed audio segments were uploaded in the background.
                            </li>
                    </ul>
                </details>


                <details className={"Pictures-Demo"}>
                    <summary> Demo Pictures </summary>
                    <div className={"project-gallery"}>
                        <img
                            src="/images/Siren-hack-Prototype1.png"
                            alt="SIREN prototype screen 1"
                            loading="lazy"
                        />
                        <img
                            src="/images/Sire-hack-Prototype2.png"
                            alt="SIREN prototype screen 2"
                            loading="lazy"
                        />
                        <img
                            src="/images/Siren-hack-prototype3.png"
                            alt="SIREN prototype screen 3"
                            loading="lazy"
                        />

                    </div>
                </details>
        </article>

            <article className="project">
                <h3>Stock Market Analytics Pipeline</h3>
                <p className="project-tech">
                    AWS S3 · Amazon Athena · SQL · Excel
                </p>

                <p>
                    A cloud-based analytics workflow for exploring historical stock
                    returns, market trends, and company performance.
                </p>

                <details className="project-details">
                    <summary>Technical details</summary>
                    <ul>
                        <li>
                            Built a cloud-based analytics pipeline using Amazon S3, Athena, and SQL
                            to analyze historical stock-market datasets from Kaggle.
                        </li>

                        <li>
                            Organized raw datasets into separate S3 prefixes for macro-market data
                            and individual company data, creating a structured storage layer for analysis.
                        </li>

                        <li>
                            Created an Athena database and external tables that mapped directly to
                            datasets stored in Amazon S3.
                        </li>

                        <li>
                            Configured a separate S3 bucket for Athena query results and connected
                            it to the Athena workgroup/query environment.
                        </li>

                        <li>
                            Diagnosed schema and table-definition issues by comparing Athena column
                            definitions against the original CSV datasets and AWS documentation.
                        </li>

                        <li>
                            Wrote analytical SQL queries to calculate long-term stock returns,
                            compare company performance, and identify high-growth stocks.
                        </li>

                        <li>
                            Analyzed historical returns beginning in 2009, identifying large
                            long-term percentage gains across companies such as NVIDIA, Apple,
                            ASML, TSMC, and Google.
                        </li>

                        <li>
                            Exported Athena query results into Excel for additional visualization,
                            reporting, and comparison.
                        </li>

                        <li>
                            Developed an end-to-end understanding of a cloud analytics workflow:
                            raw data in S3, schema-on-read through Athena, SQL analysis, and
                            downstream reporting.
                        </li>
                    </ul>
                </details>
            </article>

            <article className="project">
                <h3>MotorMatch</h3>
                <p className="project-tech">
                    Java · Android Studio · SQL · SQLite · Room
                </p>

                <p>
                    An internal Android application that helps a transportation
                    company compare vehicles and make purchasing decisions.
                </p>

                <details className="project-details">
                    <summary>Technical details</summary>
                    <ul>
                        <li>
                            Developed MotorMatch, an Android application designed to help JJE
                            Transportation compare vehicles and make more informed purchasing decisions.
                        </li>

                        <li>
                            Designed a multi-step filtering workflow across six vehicle criteria,
                            including manufacturer, transmission, drivetrain, body style,
                            fuel efficiency, and maximum budget.
                        </li>

                        <li>
                            Sourced vehicle data from Kaggle, converted the original CSV dataset
                            into SQLite, and integrated the database into the Android application.
                        </li>

                        <li>
                            Used Android Room Persistence Library to manage and access the application's
                            local relational database.
                        </li>

                        <li>
                            Built parameterized SQL queries that dynamically filter vehicle records
                            based on combinations of user-selected purchasing criteria.
                        </li>

                        <li>
                            Used Java ExecutorService to run database imports and searches on
                            background threads, preventing database operations from blocking the
                            main Android UI thread.
                        </li>

                        <li>
                            Designed the results workflow to return vehicle recommendations that
                            match the transportation company's specific budget and vehicle requirements.
                        </li>

                        <li>
                            Integrated the device accelerometer to support shake-to-clear functionality,
                            allowing users to quickly reset search inputs.
                        </li>

                        <li>
                            Integrated the ambient light sensor to automatically adjust the application's
                            display based on surrounding lighting conditions.
                        </li>

                        <li>
                            Continued developing the original project into a more practical internal
                            tool focused on real vehicle-search and purchasing needs for JJE Transportation.
                        </li>
                    </ul>
                </details>

                <details className={"Demo Pictures"}>
                    <summary>Demo Pictures</summary>
                    <div className="project-gallery">
                        <img
                            src="/images/MotorMatch-Prototype1.png"
                            alt="MotorMatch prototype screen 1"
                            loading="lazy"
                        />
                        <img
                            src="/images/MotorMatch-Prototype2.png"
                            alt="MotorMatch prototype screen 2"
                            loading="lazy"
                        />
                        <img
                            src="/images/MotorMatch-Prototype3.png"
                            alt="MotorMatch vehicle matches with prices and specifications"
                            loading="lazy"
                        />

                    </div>
                </details>



            </article>

            <article className="project">
                <h3>Calorie Tracking API</h3>
                <p className="project-tech">
                    Java · Spring Boot · PostgreSQL · Docker
                </p>

                <p>
                    A backend API for managing user profiles, logging meals,
                    and tracking calories.
                </p>

                <details className="project-details">
                    <summary>Technical details</summary>
                    <ul>
                        <li>
                            Developed a Spring Boot REST API for managing user profiles,
                            meal records, and daily calorie tracking.
                        </li>

                        <li>
                            Designed RESTful CRUD endpoints for creating, retrieving,
                            updating, and deleting application data.
                        </li>

                        <li>
                            Modeled relational entities and database relationships using
                            JPA and PostgreSQL.
                        </li>

                        <li>
                            Organized the backend using controller, service, repository,
                            and persistence layers to separate application responsibilities.
                        </li>

                        <li>
                            Added request validation to prevent invalid application data
                            from reaching the persistence layer.
                        </li>

                        <li>
                            Implemented custom exception handling to return clearer and
                            more consistent API error responses.
                        </li>

                        <li>
                            Connected Spring Boot to PostgreSQL for persistent relational
                            data storage.
                        </li>

                        <li>
                            Containerized both the Spring Boot application and PostgreSQL
                            environment using Docker for reproducible local development.
                        </li>
                    </ul>
                </details>
            </article>
        </section>
    )
}