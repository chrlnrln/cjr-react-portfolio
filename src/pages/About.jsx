import aboutMeImage from "../assets/img/about.png";

function About() {
    const handleResume = () => {
        alert("Connect your resume PDF here.");
    };

    return (
        <section id="about" className="about">

            <div className="about-visual">
                <div className="about-circle">
                    <img
                        src={aboutMeImage}
                        alt="Profile Image"
                    />
                </div>
            </div>

            <div className="about-content">

                <p className="eyebrow">
                    ABOUT ME
                </p>

                <h2>
                    Welcome to my
                    <br />
                    <span>Creative World</span>
                </h2>

                <p>
                    My passion for crafting digital experiences
                    started with a curiosity about how design
                    shapes the way we interact with the world.
                </p>

                <p>
                    During my academic journey in Information
                    Technology, I became interested in combining
                    creativity, technology, and problem-solving.
                </p>

                <button
                className="primary-button"
                onClick={handleResume}
                >
                    ↓ Download Resume
                </button>

            </div>

            <div className="about-highlights">

                <div>
                    <span>01</span>

                    <div>
                        <h3>Design</h3>

                        <p>
                            Thoughtful visual systems that balance
                            clarity and personality.
                        </p>
                    </div>
                </div>

                <div>
                    <span>02</span>

                    <div>
                        <h3>Development</h3>

                        <p>
                        Responsive interfaces built using
                        modern web technologies.
                        </p>
                    </div>
                </div>

                <div>
                    <span>03</span>

                    <div>
                        <h3>Problem Solving</h3>

                        <p>
                            Turning ideas and requirements into
                            practical digital experiences.
                        </p>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default About;