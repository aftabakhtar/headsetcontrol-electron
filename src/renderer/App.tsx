import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { AppLayout } from '../components/AppLayout/AppLayout';
import { Home } from '../components/Home/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/settings" element={<></>} />
          <Route path="/equalizer" element={<></>} />
        </Route>
      </Routes>
    </Router>
  );
}
