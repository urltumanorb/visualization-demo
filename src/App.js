import CytoscapeGraph from './Cytoscape/CytoscapeGraph';
import AntvGraph from './AntvGraph/AntvGraph';
import ECharts from './ECharts/ECharts';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  const navStyle = {
    background: '#333',
    padding: '10px',
  };
  
  const ulStyle = {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  };
  
  const liStyle = {
    marginRight: '20px',
  };
  
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  };
  return (
    <Router>
      <nav style={navStyle}>
          <ul style={ulStyle}>
            <li style={liStyle}>
              <Link to="/cytoscape" style={linkStyle}>Cytoscape</Link>
            </li>
            <li style={liStyle}>
              <Link to="/antvg6" style={linkStyle}>AntV</Link>
            </li>
            <li style={liStyle}>
              <Link to="/echarts" style={linkStyle}>ECharts</Link>
            </li>
          </ul>
        </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/cytoscape" />} />
        <Route path="/cytoscape" element={<CytoscapeGraph />} />
        <Route path="/antvg6" element={<AntvGraph />} />
        <Route path="/echarts" element={<ECharts />} />
      </Routes>
    </Router>
  );
}

export default App;
