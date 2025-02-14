import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <div className="project-card">
        <h3 className="project-title">Quotes in Videos</h3>
        <p className="project-description">
        The animated-vid project is an automation-driven tool designed to generate portrait videos featuring quotes sourced from the web. The project was created by integrating web scraping techniques to collect quotes and leveraging text-to-speech (TTS) technology for AI-generated narration. The project automates the entire video creation pipeline, combining text, audio, and background animations to produce engaging content similar to Instagram reels featuring Reddit stories.
        </p>
        <a className="project-link" href="https://github.com/shubhushan49/animated-vid" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
      <div className="project-card">
        <h3 className="project-title">Clustering Rabbit</h3>
        <p className="project-description">
        The Clustering Rabbit project demonstrates how to deploy a RabbitMQ cluster using Kubernetes for scalability and high availability. It includes scripts and configurations to automate the setup, leveraging containerization and orchestration to manage distributed messaging efficiently. The repository is primarily built with Shell scripts and Dockerfiles, showcasing expertise in DevOps, infrastructure automation, and message brokering. This project is a practical example of deploying resilient, scalable messaging systems using modern cloud-native technologies.
        </p>
        <a className="project-link" href="https://github.com/shubhushan49/clustering-rabbit" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
