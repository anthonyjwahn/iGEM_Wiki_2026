import TeamMember from "./components/TeamMember";

function Wiki () {
    const teamMembers = [
    {name: "Anthony", role: "Team Lead", year: "2027", bio: "Ferarri fan smh"},
    {name: "Alex", role: "Developer", year: "2028", bio: "badminton blah blah blah"},
    {name: "Winnie", role: "Developer", year: "2028", bio: ""},
    {name: "Audrey", role: "Designer", year: "2028", bio: ""},
    {name: "Nicole", role: "Designer", year: "2028", bio: ""},
    {name: "Wendy", role: "Designer", year: "2029", bio: ""},
    {name: "Max", role: "Developer", year: "2029", bio: ""}
  ];
  
    return (
    
        
        <div className="container2">
            {teamMembers.map((member) => (
                <TeamMember
                name={member.name}
                role={member.role}
                year={member.year}
                bio={member.bio}
                />
            ))}
        </div>
    );
}
export default Wiki;