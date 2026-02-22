import './App.css';
import Header from './components/Header';
import TeamMember from './components/TeamMember';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="team-page">
      <h1>Our Team</h1>
      <TeamMember 
        name="Anthony" 
        role="Wiki Lead" 
        year="2027"
        bio="CS major blah blah"
      />
      <TeamMember 
        name="Alex" 
        role="Developer" 
        year="2028"
        bio="Badminton blah blah"
      />
    </div>
  );
}
export default App;