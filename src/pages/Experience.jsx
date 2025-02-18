import React from 'react';
import './Experience.css'; // Import the new stylesheet

const experiences = [
  {
    company: "BAUHAUS Deutschland",
    duration: "1 yr 10 mos, Remote",
    roles: [
      {
        title: "DevOps Engineer",
        period: "Mar 2024 – Present",
        responsibilities: [
        ]
      },
      {
        title: "Associate DevOps Engineer",
        period: "May 2023 – Mar 2024",
        responsibilities: [
          "Reduced deployment time by 40% by containerizing applications using Docker for serverless architectures.",
          "Increased developer efficiency by 30% by creating automation scripts and internal tools.",
          "Developed and maintained an API specification linter, ensuring 100% compliance with internal best practices across the organization.",
          "Enhanced system monitoring accuracy by 50%, analyzing real-time traffic data using DataDog and LookerStudio.",
          "Managed infrastructure as code with Terraform, leading a zero-downtime migration of legacy infrastructure.",
          "Optimized data warehouse queries, cutting query execution time by 60% and reducing costs significantly.",
          "Designed CI/CD pipelines with GitHub Workflows, automating 95% of build, test, and deployment processes, accelerating release cycles."
        ]
      }
    ]
  },
  {
    company: "Yuri",
    duration: "Feb 2023 – May 2023, Hybrid, Germany",
    roles: [
      {
        title: "Missions Software Engineer",
        period: "Feb 2023 – May 2023",
        responsibilities: [
          "Debugged a 10,000+ line C++ legacy codebase, improving performance and stability of the Random Positioning Machine (RPM).",
          "Researched and selected new electronics hardware, reducing system latency by 25% and ensuring compatibility with upcoming mission requirements.",
          "Initiated the software redesign for the next-generation RPM, laying the foundation for a 2x improvement in processing efficiency."
        ]
      }
    ]
  },
  {
    company: "HelloFresh",
    duration: "Aug 2021 – Aug 2022, Hybrid, Germany",
    roles: [
      {
        title: "Automation Engineer (Working Student)",
        period: "Aug 2021 – Aug 2022",
        responsibilities: [
          "Developed Python automation scripts for networking devices and dashboards, boosting warehouse operational efficiency by 35%.",
          "Managed and optimized Windows/Linux servers and networking devices, ensuring 99.9% system uptime across multiple warehouses."
        ]
      }
    ]
  },
  {
    company: "Jacobs University Bremen",
    duration: "Mar 2022 – Jun 2022, Remote, Germany",
    roles: [
      {
        title: "Teaching Assistant (Software Engineering)",
        period: "Mar 2022 – Jun 2022",
        responsibilities: [
          "Reviewed and provided feedback on 100+ student projects, improving their understanding of Flask and React frameworks.",
          "Automated team assignments, feedback emails, and GitHub repo management, reducing administrative workload by 70% for course TAs."
        ]
      }
    ]
  }
];

const Experience = () => (
  <div id="experience"> {/* Add id for styling */}
    {experiences.map((experience, index) => (
      <div key={index} className="container"> {/* Add class for styling */}
        <div className="company-header"> {/* Add class for styling */}
          <h2>{experience.company}</h2>
          <p>{experience.duration}</p>
        </div>
        {experience.roles.map((role, roleIndex) => (
          <div key={roleIndex} className="role"> {/* Add class for styling */}
            <div className="role-header"> {/* Add class for styling */}
              <h3>{role.title}</h3>
              <p>{role.period}</p>
            </div>
            <ul className="responsibilities"> {/* Add class for styling */}
              {role.responsibilities.map((responsibility, respIndex) => (
                <li key={respIndex}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default Experience;
