import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard'; // Keep for now if referenced else where
import Vision from './pages/Vision';
import Projects from './pages/Projects';
import Team from './pages/Team';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Fallback redirect for old routes to home anchors if users bookmark them */}
          <Route path="vision" element={<Navigate to="/#vision" replace />} />
          <Route path="projects" element={<Navigate to="/#projects" replace />} />
          <Route path="team" element={<Navigate to="/#team" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
