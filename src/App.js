import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomeNews from './components/HomeNews';
import NewsDetails from './components/NewsDetails';


const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<HomeNews />} />
      <Route exact path="/articlesList/:id" element={<NewsDetails />} />
    </Routes>
  </Router>
);

export default App;
