import { featuredProjects } from "../../data/portfolioData";

function FeaturedProjectsSection() {
  return (
    <>
      {featuredProjects.map((project) => (
        <a key={project.title} href={project.href} className={project.className}>
          <div className="project-content">
            <div className="project-top">
              <i className={project.iconClass}></i>
              <span className="project-tag">{project.tag}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
          <i className="fas fa-arrow-up-right-from-square arrow-icon"></i>
        </a>
      ))}
    </>
  );
}

export default FeaturedProjectsSection;
