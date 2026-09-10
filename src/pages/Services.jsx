import ServiceCard from "../components/ServiceCard";

function Services() {

    const services = [
        {
            number: "01",
            title: "Front-End Development",
            description:
                "Building responsive interfaces and turning design ideas into functional web experiences.",
            icon: "</>",
        },

        {
            number: "02",
            title: "UI / Web Design",
            description:
                "Creating clean visual systems that combine usability, personality, and clear communication.",
            icon: "◈",
        },

        {
            number: "03",
            title: "Creative Development",
            description:
                "Combining creative thinking with technology to make digital projects distinctive.",
            icon: "✦",
            },
    ];

    return (
        <section id="services" className="services">

            <div className="services-title">

                <p className="eyebrow">
                    WHAT I DO
                </p>

                <h2>
                    SERVICES
                </h2>

            </div>

            <div className="services-list">

                {services.map((service) => (

                <ServiceCard
                    key={service.number}
                    number={service.number}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                />

                ))}

            </div>

        </section>
    );
}

export default Services;