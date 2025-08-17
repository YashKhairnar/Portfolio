import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Code, Zap, Users } from 'lucide-react';

const ProjectsShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Slique",
      description: "Slique is a web platform designed to streamline collaboration between models and recruiters. It enables seamless job posting, real-time messaging, and personalized dashboards for both parties. With features like dynamic resume generation, application tracking, advanced job search and filtering, and digital contract signing, Slique simplifies the hiring process. Transparent reviews and bookmarking options further enhance trust and user experience, making it a comprehensive solution for the modeling and talent recruitment industry.",
      image: "/public/assets/slique.png",
      category: "fullstack",
      technologies: ["NextJs", "PostgreSQL", 'AWS', "Docker", 'Vercel', 'TailwindCSS', 'TypeScript'],
      liveUrl: "https://slique.vercel.app",
      githubUrl: "https://github.com/YashKhairnar/Slique",
      featured: true,
      status: "completed",
      date: "2025",
      metrics: { users: "1.2K", performance: "95%" }
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-yellow-500';
      case 'planning': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'planning': return 'Planning';
      default: return 'Unknown';
    }
  };

  return (
    <div id='projects' className="min-h-screen bg- p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of projects I've built using various technologies and frameworks. 
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                  <Zap className="w-3 h-3 inline mr-1" />
                  FEATURED
                </div>
              )}

              {/* Status Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${getStatusColor(project.status)}`}></div>
                <span className="text-xs text-white font-medium bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                  {getStatusText(project.status)}
                </span>
              </div>

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Overlay Actions */}
                <div className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <a
                    href={project.liveUrl}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                    title="View Live Project"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                    title="View Source Code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="bg-white/10 text-white px-2 py-1 rounded-lg text-xs font-medium border border-white/20 hover:bg-white/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                {/* <div className="flex justify-between items-center pt-4 border-t border-white/20">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Users className="w-4 h-4 mr-1" />
                    {project.metrics.users} users
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Code className="w-4 h-4 mr-1" />
                    {project.metrics.performance} score
                  </div>
                </div> */}
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectsShowcase;