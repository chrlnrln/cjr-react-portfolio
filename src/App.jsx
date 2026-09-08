import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Gallery from "./pages/Gallery";
// import Gallery from "./pages/Services";
// import Contact from "./pages/Contact";

import "./App.css";

function App() {
	const [selectedProject, setSelectedProject] = useState(null);

	const handleProjectSelect = (project) => {
		setSelectedProject(project);
	};

	const closeProject = () => {
		setSelectedProject(null);
	};

	return (
		<div className="app">

			<Header />

			<main>
				<Home />
				<About />
				{/* <Projects onProjectSelect={handleProjectSelect} />
				<Gallery onProjectSelect={handleProjectSelect} />
				<Services />
				<Contact /> */}
			</main>

			<Footer />

			{/* Project Modal */}
			{selectedProject && (
				<div className="modal-overlay" onClick={closeProject}>
					<div
						className="project-modal"
						onClick={(event) => event.stopPropagation()}
					>
						<button
							className="modal-close"
							onClick={closeProject}
						>
							×
						</button>

						<span className="modal-category">
							{selectedProject.category}
						</span>

						<h2>{selectedProject.title}</h2>

						<p>
							{selectedProject.description}
						</p>

						<button
							className="modal-button"
							onClick={closeProject}
						>
							Close
						</button>
					</div>
				</div>
			)}

		</div>
	);
}

export default App;