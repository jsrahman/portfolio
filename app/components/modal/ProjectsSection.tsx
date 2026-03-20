import { modalContent, portfolioProjects } from "../../data/portfolioData";



function ProjectsSection() {
  return (
    <div className="modal-section">
      <h3>{modalContent.projectTitle}</h3>
      <div className="projects-grid-full">
        {portfolioProjects.map((project) =>
          project.static ? (
            <div key={project.title} className="proj-item" title={project.tooltip}>
              <i className={project.iconClass}></i>
              <div>
                <strong>{project.title}</strong>
                <small>{project.subtitle}</small>
              </div>
            </div>
          ) : (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-item"
            >
              <i className={project.iconClass}></i>
              <div>
                <strong>{project.title}</strong>
                <small>{project.subtitle}</small>
              </div>
            </a>
          ),
        )}
      </div>
    </div>
  );
}

export default ProjectsSection;
