import { useState } from "react";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        budget: "",
        description: "",
    });

    const [submitted, setSubmitted] =
        useState(false);

    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));

        setSubmitted(false);
    };

    const handleSubmit = (event) => {

        event.preventDefault();

        setSubmitted(true);
    };

    return (
        <section id="contact" className="contact">

            <div className="contact-heading">

                <p className="eyebrow">
                    GET IN TOUCH
                </p>

                <h2>
                    I'd love to hear
                    <br />
                    from you!
                </h2>

                <p>
                    Have a project, collaboration, or idea
                    in mind? Let's talk.
                </p>

                <div className="social-links">

                    <a
                        href="https://github.com/chrlnrln"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub ↗
                    </a>

                    <a
                        href="https://www.facebook.com/charlene.realin/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Facebook ↗
                    </a>

                    <a
                        href="mailto:charlenejoyrealin@gmail.com"
                    >
                        Email ↗
                    </a>

                </div>

            </div>

            <form
                className="contact-form"
                onSubmit={handleSubmit}
            >

                <label>
                    Name <span>*</span>

                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Email Address <span>*</span>

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Your Budget

                    <input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        placeholder="e.g. ₱10,000"
                    />
                </label>

                <label>
                    Description

                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="5"
                    />
                </label>

                <button
                    type="submit"
                    className="primary-button"
                >
                    Submit ↗
                </button>

                {submitted && (
                    <div className="form-success">
                        Thank you, {formData.name || "there"}!
                        Your message has been submitted.
                    </div>
                )}

            </form>

        </section>
    );
}

export default Contact;