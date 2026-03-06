import './App.css';
import Header from './components/Header';
import TeamMember from './components/TeamMember';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';


function App() {
  // Team data - array of objects
  const teamMembers = [
    {
      id: 1,
      name: "Your Name",
      role: "Your Role",
      year: "2027",
      bio: "Short bio here...",
    },
    // Add more team members...
  ];
 
  // Project data
  const projects = [
    {
      id: 1,
      title: "Prosper",
      description: "Planetary Removal of Soil Perchlorates and...",
      leads: ["Coco", "Jeff", "Eujin"]
    },
    // Add more projects...
  ];


  return (
    <div className="app">
      <Header
        title="Cornell iGEM"
        subtitle="Wiki Team"
      />
     
      <main>
          {/* Team Section */}
        <section className="team-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <TeamMember
                key={member.id}
                name={member.name}
                role={member.role}
                year={member.year}
                bio={member.bio}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
        </section>
       
        {/* Projects Section */}
        <section className="projects-section">
          <h2>Our Projects</h2>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              leads={project.leads}
            />
          ))}
        </section>
      </main>
     
      <Footer teamName="Cornell iGEM" />
    </div>
  );
}


export default App;