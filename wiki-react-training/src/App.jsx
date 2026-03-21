import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home';
import Faq from './faq';
import Projects from './Projects';
import Wiki from './Wiki';

import {Routes, Route, useLocation} from 'react-router-dom';

function App() {
  const location = useLocation();

  const getSubtitle = (path) => {
    switch (path) {
      case '/Wiki': return 'Wiki and Design Team';
      case '/Projects': return 'Projects';
      case '/Faq' : return 'FAQ';
      default: return 'Welcome to the Home Page';
    }
  };

 return (
  <div>
  <Header
    title='Cornell iGEM'
    subtitle={getSubtitle(location.pathname)}
  />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Projects' element={<Projects/>} />
        <Route path='/Wiki' element={<Wiki/>} />
        <Route path='/Faq' element={<Faq/>} />
      </Routes>

  <Footer
    teamName='Cornell iGEM'
  />
</div>
 ); 
}
export default App;