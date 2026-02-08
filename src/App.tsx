import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingpage/view/landingpage';
import EventDetails from './pages/eventdetails/view/EventDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/details" element={<EventDetails />} /> {/* Fallback for general details link */}
      </Routes>
    </Router>
  );
}

export default App;
