

export default function Contacts() {
    return (
        <section id="contact" className="contact">
            <div className="contact-header">

                <h2>Contact</h2>

            </div>

            <div className="contact-links">
                <a
                    href="https://www.linkedin.com/in/janrojascs/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                >
                    <span>LinkedIn</span>
                    <span>↗</span>
                </a>

                <a
                    href="https://github.com/jannnmw"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                >
                    <span>GitHub</span>
                    <span>↗</span>
                </a>

                <a
                    href="https://gitlab.com/jrojas31"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                >
                    <span>GitLab</span>
                    <span>↗</span>
                </a>

                <a
                    href="mailto:jrojas3@worcester.edu"
                    className="contact-link"
                >
                    <span>Email</span>
                    <span>↗</span>
                </a>
            </div>
        </section>
    );
}