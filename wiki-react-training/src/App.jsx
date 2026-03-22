import "./App.css";
import Header from "./components/Header";
import TeamMember from "./components/TeamMember";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import igemLogo from "./image/igem_logo.png";
import prosperLogo from "./image/prosper_logo.png";
import oncurexLogo from "./image/oncurex.png";

function App() {
  const navLinks = [
    { label: "Team", href: "#team" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Anthony Ahn",
      role: "Wiki Lead",
      year: "2027",
      bio: "Idk, he buys the boba.",
    },
    {
      id: 2,
      name: "Winnie Lin",
      role: "Developer",
      year: "2027",
      bio: "I like Audrey's Boba Order.",
    },
    {
      id: 3,
      name: "Maxwell Swann",
      role: "Developer",
      year: "2029",
      bio: "Brown sugar milk tea (with boba ofc), 50% sugar 50% ice (or whatever's closest)",
    },
    {
      id: 4,
      name: "Alex Chen",
      role: "Developer",
      year: "2028",
      bio: "Oolong milk tea regular boba quarter sugar",
    },
    {
      id: 5,
      name: "Nicole Zhu",
      role: "Designer",
      year: "2027",
      bio: "Not sure, she has great taste tho.",
    },
    {
      id: 6,
      name: "Audrey Fu",
      role: "Designer",
      year: "2028",
      bio: "Boba Order: lychee peach oolong tea from elife large regular sugar less ice (and it should come with jelly).",
    },
    {
      id: 7,
      name: "Wendy Wu",
      role: "Designer",
      year: "2029",
      bio: "Best Snipper of iGEM. Lowkey, an alocholic ",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Prosper",
      description: `Currently, one of the largest barriers to Mars exploration is sustainability. Martian regolith (the equivalent of soil) is very difficult to grow crops on due to its chemical composition. Perchlorate accounts for 0.4% to 0.6% of the regolith and serves as a key barrier to plant growth. In addition, perchlorates at such concentrations is harmful to human health, impacting thyroid function as seen in regions of Chile where perchlorate is abundant. This year's project focuses on developing a microbial co-culture system for Martian regolith remediation, targeting the high perchlorate toxicity and salt concentration.

Our system consists of three primary stages:

(1) Engineering and characterization of E. coli to express key perchlorate reduction proteins in perchlorate reductase [pcr] and chlorite dismutase [cld]

(2) Cultivation and optimization of Synechococcus sp. PCC 7002, which naturally uptakes chloride byproducts from the perchlorate reduction process and recycles organic carbon through sucrose secretions

(3) Development of a two-stage fixed-bed biofilm bioreactor, incorporating easily replaceable biofilm carriers to support the growth of both organisms for the 1st stage, and conduct perchlorate treatment and desalination under controlled conditions in the 2nd stage. The Wiki subteam will collaborate with the Product Development subteam to program a user-friendly interface of the Arduino bioreactor connected to a cell phone.

On the social awareness side, the Policy and Practices subteam has been focusing on interviews with not only researchers but also experts in space policy and ethics. The subteam has been focused on sharing the information learned from these interviews with the community through various educational opportunities. In conjunction, the Business subteam has been focusing on developing a business plan to commercialize and scale up the project after the competition. The subteam has also been working on finding partners and sponsors for our project.`,
      leads: ["Coco", "Jeff", "Eujin", "George", "Taritary"],
      imageUrl: prosperLogo,
      badge: "Most Recent",
    },
    {
      id: 2,
      title: "Oncurex",
      description: `Team Cornell 2024 aims to synthetically manufacture Ursolic Acid within yeast using a continuous bioreactor, which will provide a more sustainable and efficient pathway compared to existing manufacturing methods. Ursolic Acid is a natural product that has been discovered to have numerous medically beneficial properties. Preliminary studies have shown therapeutic potential for cancer, liver disease, and obesity, among other benefits [1]. It is currently obtained through extraction from fruits, such as loquats and apples, which is environmentally taxing [2]. Furthermore, apples represent a significant part of Ithaca, NY’s local agriculture, where Cornell University is based. In 2022, Tompkins County reported nearly 200 acres of apple-bearing land use [3]. Current research shows that a biological pathway exists within yeast to produce this compound, but it has only been done at a lab scale.`,
      imageUrl: oncurexLogo,
    },
  ];

  return (
    <div className="app">
      <Header links={navLinks} logoSrc={igemLogo} />
      <section id="team" className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <TeamMember
              key={member.id}
              name={member.name}
              role={member.role}
              year={member.year}
              bio={member.bio}
            />
          ))}
        </div>
      </section>

      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              leads={project.leads}
              imageUrl={project.imageUrl}
              badge={project.badge}
            />
          ))}
        </div>
      </section>
      <FAQ />
      <Footer teamName="Cornell iGEM" />
    </div>
  );
}

export default App;