import profileImage from "../assets/img/profile.png";

function Home() {

    const handleExplore = () => {
        document
        .getElementById("projects")
        ?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <section id="home" className="home">

            <div className="home-content">

                <span className="availability">
                    AVAILABLE FOR WORK
                </span>

                <p className="initials">
                    CJ
                </p>

                <h1>
                    CREATIONS
                </h1>

                <p className="home-description">
                    I blend artistry with cutting-edge
                    technology to deliver websites that
                    not only look stunning but also drive
                    results.
                </p>

                <button
                    className="primary-button"
                    onClick={handleExplore}
                >
                    Explore More ↗
                </button>

            </div>

            <div className="home-portrait">
                <img
                    src={profileImage}
                    alt="Profile Image"
                />
            </div>

        </section>
    );
}

export default Home;