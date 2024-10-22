import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const dataSources = [
  { id: 1, name: "20 Newsgroups", modality: "Text", provider: "Public", dataAvailability: "Jason Rennie", personalData: "Anonymized", terms: "CC0-1.1", homepage: "Link" },
  { id: 2, name: "2018 Data Science", modality: "Images", provider: "Geated", dataAvailability: "Jason Rennie", personalData: "No Personal Data", terms: "CC0-1.3", homepage: "Link" },
  { id: 3, name: "20 Newsgroups", modality: "Video", provider: "Public", dataAvailability: "Jason Rennie", personalData: "Personally identifiable", terms: "CC0-1.1", homepage: "Link" },
  { id: 4, name: "2010 i2b2/VA", modality: "Tabular", provider: "Geated", dataAvailability: "Jason Rennie", personalData: "Anonymized", terms: "CC0-1.4", homepage: "Link" },
  { id: 5, name: "2018 Data Science", modality: "Audio", provider: "Public", dataAvailability: "Jason Rennie", personalData: "No Personal Data", terms: "CC0-1.0", homepage: "Link" },
  { id: 6, name: "20 Newsgroups", modality: "Text", provider: "Geated", dataAvailability: "Jason Rennie", personalData: "Anonymized", terms: "CC0-1.1", homepage: "Link" },
  { id: 7, name: "2018 Data Science", modality: "Images", provider: "Public", dataAvailability: "Jason Rennie", personalData: "No Personal Data", terms: "CC0-1.3", homepage: "Link" },
  { id: 8, name: "20 Newsgroups", modality: "Video", provider: "Public", dataAvailability: "Jason Rennie", personalData: "Personally identifiable", terms: "CC0-1.1", homepage: "Link" },
];

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterModality, setFilterModality] = useState('');
  const [filterTerms, setFilterTerms] = useState('');
  const [filterProvider, setFilterDataProvider] = useState([]); 
  const [filterPersonalData, setFilterPersonalData] = useState([]); 

  const handleDataAvailabilityChange = (value) => {
    setFilterDataProvider((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handlePersonalDataChange = (value) => {
    setFilterPersonalData((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const filteredData = dataSources.filter((data) => {
    return (
      data.name.toLowerCase().includes(filterName.toLowerCase()) &&
      (!filterModality || data.modality === filterModality) &&
      (!filterTerms || data.terms === filterTerms) &&
      (filterProvider.length === 0 || filterProvider.includes(data.provider)) &&
      (filterPersonalData.length === 0 || filterPersonalData.includes(data.personalData))
    );
  });

  const handleCheckboxChange = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Data Source</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Selected</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Project</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="row">
        <aside className="col-3 border-end p-4">
          <h5>Filters</h5>
          <div className="Source ">
            <label className="form-label">Search by Data Source Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter data source name"
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
            />
          </div>

          <div className="Source">
            <label className="form-label">Filter by Modality</label>
            <select
              className="form-select"
              value={filterModality}
              onChange={(e) => setFilterModality(e.target.value)}
            >
              <option value="">Select Modality</option>
              <option value="Text">Text</option>
              <option value="Images">Images</option>
              <option value="Video">Video</option>
              <option value="Tabular">Tabular</option>
              <option value="Audio">Audio</option>
            </select>
          </div>

          <div className="Source">
            <label className="form-label">Filter by Terms (SPDX ID)</label>
            <select
              className="form-select"
              value={filterTerms}
              onChange={(e) => setFilterTerms(e.target.value)}
            >
              <option value="">Select Terms</option>
              <option value="CC0-1.0">CC0-1.0</option>
              <option value="CC0-1.1">CC0-1.1</option>
              <option value="CC0-1.3">CC0-1.3</option>
              <option value="CC0-1.4">CC0-1.4</option>
            </select>
          </div>

          <div className=" Source_check_box">

            <label className="form-label">Filter by Data Availability</label>
            <div className='form-check-box'>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="dataPublic"
                checked={filterProvider.includes("Public")}
                onChange={() => handleDataAvailabilityChange("Public")}
              />
              <label className="form-check-label" htmlFor="dataPublic">Public</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="dataGeated"
                checked={filterProvider.includes("Geated")}
                onChange={() => handleDataAvailabilityChange("Geated")}
              />
              <label className="form-check-label" htmlFor="dataGeated">Geated</label>
            </div>
            </div>
          
          </div>

          <div className="Source_check_box">
            <label className="form-label">Filter by Personal Data</label>
            <div className='form_check_data'>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="noPersonalData"
                checked={filterPersonalData.includes("No Personal Data")}
                onChange={() => handlePersonalDataChange("No Personal Data")}
              />
              <label className="form-check-label" htmlFor="noPersonalData">No Personal Data</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="anonymized"
                checked={filterPersonalData.includes("Anonymized")}
                onChange={() => handlePersonalDataChange("Anonymized")}
              />
              <label className="form-check-label" htmlFor="anonymized">Anonymized</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="pii"
                checked={filterPersonalData.includes("Personally identifiable")}
                onChange={() => handlePersonalDataChange("Personally identifiable")}
              />
              <label className="form-check-label" htmlFor="pii">Personally identifiable</label>
            </div>
            </div>
         
          </div>
        </aside>

        <main className="col-9 p-4">
          <h5>Data Sources</h5>
          <table className="table table-bordered table-hover">
            <thead className="table_color">
              <tr className='table_row'>
                <th className='head_check_box'>
                  <input
                    type="checkbox"
                    onChange={() => setSelectedItems([])}
                    checked={selectedItems.length === filteredData.length}
                  />
                </th>
                <th>Full Name</th>
                <th>Modality</th>
                <th>Data Provider</th>
                <th>Data Availability</th>
                <th>Personal Data</th>
                <th>Terms</th>
                <th>Homepage</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((data) => (
                <tr key={data.id}>
                  <td    className='head_check_box'>
                    <input
                      type="checkbox"
                   
                      checked={selectedItems.includes(data.id)}
                      onChange={() => handleCheckboxChange(data.id)}
                    />
                  </td>
                  <td>{data.name}</td>
                  <td>{data.modality}</td>
                  <td>{data.provider}</td>
                  <td>{data.dataAvailability}</td>
                  <td>{data.personalData}</td>
                  <td>{data.terms}</td>
                  <td><a href="#">{data.homepage}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-between">
            <span>Results per page: 50</span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
