import './App.css';

function App() {
  const teamName = "Cornell iGEM";
  const memberCount = 49;
  const foundedYear = 2009;
  const yearsActive = 2026 - foundedYear;
  
  return (
    <div>
      <h1>Welcome to {teamName}!</h1>
      <p>We have {memberCount} amazing members.</p>
      <p>Founded in {foundedYear} ({yearsActive} years ago!)</p>
    </div>
  );
}

export default App;
