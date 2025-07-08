// File: src/App.jsx or Dashboard.jsx
import './dashboard.css';
import { useState } from 'react';

function Dashboard() {
  const [selectedAOI, setSelectedAOI] = useState('');

  const handleAOIChange = (e) => {
    setSelectedAOI(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedAOI) {
      console.log(`Fetching satellite images for AOI: ${selectedAOI}`);
      // TODO: send AOI to backend to fetch Bhoonidhi images
    } else {
      alert('Please select an Area of Interest first.');
    }
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Change Detection Dashboard</h1>
      </header>

      <main className="dashboard-content">
        <div className="dropdown-container">
          <label htmlFor="aoi-select">Select Area of Interest (AOI):</label>
          <select id="aoi-select" value={selectedAOI} onChange={handleAOIChange}>
            <option value="">-- Select AOI --</option>
            <option value="forests">Forest Monitoring and Conservation</option>
            <option value="urban">Urban Expansion & Land Use Planning</option>
            <option value="agriculture">Agricultural Monitoring</option>
            <option value="water">Water Bodies & Wetland Management</option>
            <option value="mining">Mining and Industrial Activities</option>
            <option value="coastal">Coastal Zone Monitoring</option>
            <option value="disaster">Disaster Monitoring & Response</option>
          </select>
        </div>

        {/* Replaced image uploads with a fetch action */}
        <div className="card" onClick={handleSubmit}>Fetch Satellite Images</div>
        <div className="card">Run Change Detection</div>
        <div className="card">View Results</div>
      </main>

      <footer className="dashboard-footer">
        <p>&copy; 2025 Cool Coders Team</p>
      </footer>
    </div>
  );
}

export default Dashboard;
