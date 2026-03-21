import ProjectCard from "./components/ProjectCard";

function Projects () {
    const projects = [
    {title: "Prosper - 2025", description: "Dechlorination/desalination of martian regolith with an E. coli and Synechococcus co-culture", leads: "Jeffrey Ho, Coco Poopat, George Zeng, Richard Lin, Alvin Fang, Nicoletta Sodini, Taikary, Eujin Lee"},
    {title: "Oncurex - 2024", description: "Streamlining the biosynthesis and delivery of ursolic acid for oncology", leads: "Michael Constant, Coco Poopat, Jeffrey Ho, Isaac Chang, Jean-luc Shimizu, Ishaan Nanal, Jatin Mukerji"},
    {title: "Energem - 2023", description: "E. coli engineered to produce enzymes to synthesize beneficial high-value methylxanthines in a cell-free immobilized-enzyme reactor", leads: "Siddhanth Bhatt, Aindri Patra, Shohum Finkelstein, Pedro Da Silveira, Vernetta Huang, Michael Constant, Adithya Prabakaran, David Xiang"},
    {title: "Micromurals - 2022", description: "Handheld 3D bioprinter aimed at bridging the gap between the arts and STEM in early interdisciplinary education", leads: "Deniz Sinar, Jacob Novozhenets, Abraham Sinfort, Emma Taigounov, Maggie Wan, Grace Gentner, Tarun Vallabhaneni"},
    {title: "Collatrix - 2021", description: "Protein-based hydrogel scaffolds for wound-healing research, applications, and optimal tissue repair", leads: "Xihang Wang, Margaret Keymakh, Deniz Sinar, Renee Shen, Sarah Kenney, Gabby Lee, Anish Navada"},
    {title: "Lumicure - 2020", description: "E. coli engineered to produce fluorescent reporter and cancer therapeutic for metastatic breast cancer", leads: "Lucas Evans, Leo Song, Sophia Windemuth, Emma Kranich, Swasti Shree, Karen Zhan, Brian Li"}
    ];

    return (
    
        <div>
            {projects.map((project) => (
                <ProjectCard
                title={project.title}
                description={project.description}
                leads={project.leads}
                />
            ))}
        </div>
    );
}
export default Projects;