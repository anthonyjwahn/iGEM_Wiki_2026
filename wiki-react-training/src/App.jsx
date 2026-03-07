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
      name: "Anthony Anh",
      role: "Subteam Lead",
      year: "2026",
      bio: "Short bio here...",
    },
    {
      id: 2,
      name: "Alex Peng",
      role: "Wiki Member",
      year: "2027",
      bio: "Short bio here...",
    },
    {
      id: 3,
      name: "Audrey Fu",
      role: "Wiki Member",
      year: "2028",
      bio: "Short bio here...",
    },
    {
      id: 4,
      name: "Maxwell Swann",
      role: "Wiki Member",
      year: "2027",
      bio: "Short bio here...",
    },
    {
      id: 5,
      name: "Nicole Zhu",
      role: "Wiki Member",
      year: "2027",
      bio: "Short bio here...",
    },
    {
      id: 6,
      name: "Wendy Wu",
      role: "Wiki Member",
      year: "2027",
      bio: "Short bio here...",
    },
    {
      id: 7,
      name: "Winnie Lin",
      role: "Wiki Member",
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
      description: "A project that focused on solving one of the biggest challenges in space agriculture and planetary exploration: toxic perchlorates in Martian soil.",
      leads: ["Coco", "Jeff", "Eujin"]
    },
    {  id: 2,
      title: "ENERGEM",
      description: "A project aimed at bio-producing caffeine derivatives such as 7-methylxanthine and paraxanthine using engineered microbes. The goal was to create a more efficient and sustainable biosynthesis pathway for these valuable compounds used in pharmaceuticals and research.",
      leads: ["Coco", "Jeff", "Eujin"]
    },
    {  id: 3,
      title: "Oncurex",
      description: "A synthetic biology platform that engineers yeast to biosynthesize ursolic acid, a natural compound with anti-cancer properties. The goal was to create a more sustainable and scalable method of producing the compound compared with extracting it from plants.",
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
          <div 
           style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
    padding: "40px"
  }}
          
          className="team-grid">
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
        <section 
         style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
    padding: "40px"
  }}
        className="projects-section">
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