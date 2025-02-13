import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>Hi👋</h2>
        <p>I'm a <strong>DevOps Engineer</strong> at Bauhaus, passionate about automation, cloud computing, and building scalable infrastructure. My mission? To bridge the gap between development and operations, ensuring smooth deployments, high availability, and rock-solid security.</p>
        
        <h2>My DevOps Journey 🚀</h2>
        <p>I started my tech journey as a [previous role or background], but quickly found my passion in DevOps. There's something incredibly satisfying about automating workflows, optimizing CI/CD pipelines, and making deployments seamless. Over the years, I've worked with tools like <strong>Docker, Kubernetes, Terraform, AWS/GCP, Ansible, and GitHub Actions</strong>, constantly refining my approach to infrastructure as code and cloud-native development.</p>
        
        <h2>What I Do 🔧</h2>
        <ul>
            <li><strong>Automate everything</strong> – from infrastructure provisioning to deployment pipelines.</li>
            <li><strong>Optimize CI/CD workflows</strong> – making releases faster, safer, and more efficient.</li>
            <li><strong>Cloud & containerization</strong> – leveraging Kubernetes and cloud platforms to scale applications.</li>
            <li><strong>Monitor & secure</strong> – ensuring performance, security, and compliance across environments.</li>
        </ul>
        
        <h2>Lessons & Philosophy 📖</h2>
        <p>I believe in the <strong>DevOps mindset</strong>—collaboration, continuous learning, and automation-first thinking. My biggest lesson? <strong>The best infrastructure is invisible when it works seamlessly.</strong></p>
        
        <h2>Outside of Work</h2>
        <p>When I’m not fine-tuning pipelines or optimizing cloud costs, you’ll find me <strong>learning German and Spanish</strong>, <strong>reading books</strong>, or exploring the latest in <strong>[tech-related interest]</strong>. I'm also a fan of <strong>[favorite book, show, or fun fact]</strong>.</p>
        
        <h2>Let’s Connect 🤝</h2>
        <p>I love discussing all things DevOps, automation, cloud computing, Robotics and AI. Feel free to reach out via <strong><a href="https://github.com/shubhushan49" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a> or <a href="https://www.linkedin.com/in/shubhushan-kattel-aa19291b2/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a></strong> if you want to chat or collaborate!</p>
      </div>
    </section>
  );
};

export default About;
