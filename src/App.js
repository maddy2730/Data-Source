import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const dataSources = [
  { id: 1, name: "20 Newsgroups", modality: "Text", provider: "Jason Rennie", dataAvailability: "Public", personalData: "Anonymized", terms: "CC0-1.1", homepage: "Link" },
  { id: 2, name: "2018 Data Science", modality: "Images", provider: "Jason Rennie", dataAvailability: "Geated", personalData: "No Personal Data", terms: "CC0-1.3", homepage: "Link" },
  { id: 3, name: "20 Newsgroups", modality: "Video", provider: "Jason Rennie", dataAvailability: "Public", personalData: "Personally identifiable", terms: "CC0-1.1", homepage: "Link" },
  { id: 4, name: "2010 i2b2/VA", modality: "Tabular", provider: "Jason Rennie", dataAvailability: "Public", personalData: "Anonymized", terms: "CC0-1.4", homepage: "Link" },
  { id: 5, name: "2018 Data Science", modality: "Audio", provider: "Jason Rennie", dataAvailability: "Geated", personalData: "No Personal Data", terms: "CC0-1.0", homepage: "Link" },
  { id: 6, name: "20 Newsgroups", modality: "Text", provider: "Jason Rennie", dataAvailability: "Public", personalData: "Anonymized", terms: "CC0-1.1", homepage: "Link" },
  { id: 7, name: "2018 Data Science", modality: "Images", provider: "Jason Rennie", dataAvailability: "Geated", personalData: "No Personal Data", terms: "CC0-1.3", homepage: "Link" },
  { id: 8, name: "20 Newsgroups", modality: "Video", provider: "Jason Rennie", dataAvailability: "Public", personalData: "Personally identifiable", terms: "CC0-1.1", homepage: "Link" },
  
];

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterModality, setFilterModality] = useState('');
  const [filterTerms, setFilterTerms] = useState('');
  const [filterDataAvailability, setFilterDataAvailability] = useState([]); 
  const [filterPersonalData, setFilterPersonalData] = useState([]); 

  const handleDataAvailabilityChange = (value) => {
    setFilterDataAvailability((prev) =>
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
      (filterModality === '' || data.modality === filterModality) &&
      (filterTerms === '' || data.terms === filterTerms) &&
      (filterDataAvailability.length === 0 || filterDataAvailability.includes(data.dataAvailability)) &&
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
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse " id="navbarNav">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Data Source</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Selected</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Project</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      <div className="row">
        <aside className="col-3 border-end p-4">
          <h5>Filters</h5>

          <label className="form-label form-labels">Search by data source name</label>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="MINST"
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
          />
   <div className="mb-3">
            <label className="form-label form-labels">Filter by Terms spdx ID</label>
            <select
              className="form-select"
              value={filterTerms}
              onChange={(e) => setFilterTerms(e.target.value)}
            >
              <option value="">Select</option>
              <option value="CC0-1.0">CC0-1.0</option>
              <option value="CC0-1.1">CC0-1.1</option>
              <option value="CC0-1.3">CC0-1.3</option>
              <option value="CC0-1.4">CC0-1.4</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label form-labels">Filter by Modility</label>
            <select
              className="form-select"
              value={filterModality}
              onChange={(e) => setFilterModality(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Text">Text</option>
              <option value="Images">Images</option>
              <option value="Video">Video</option>
              <option value="Tabular">Tabular</option>
              <option value="Audio">Audio</option>
            </select>
          </div>

       

          <div className="mb-3">
            <label className="form-label form-labels">Filter by Terms spdx ID</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="dataPublic"
                checked={filterDataAvailability.includes("Public")}
                onChange={() => handleDataAvailabilityChange("Public")}
              />
              <label className="form-check-label" htmlFor="dataPublic">Public</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="dataGeated"
                checked={filterDataAvailability.includes("Geated")}
                onChange={() => handleDataAvailabilityChange("Geated")}
              />
              <label className="form-check-label" htmlFor="dataGeated">Geated</label>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label form-labels">Filter by Terms spdx ID</label>
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
              <label className="form-check-label" htmlFor="pii">Personally identifiable </label>
            </div>
          </div>
        </aside>

        <main className="col-9 p-4">
        <h5>Data Source</h5>
          <table className="table table-bordered table-hover">
            <thead className="table_color">
              <tr>
                <th scope="col" className='thead_first'>
                  <input
                    type="checkbox"
                    onChange={() => setSelectedItems([])}
                    checked={selectedItems.length === filteredData.length}
                  />
                </th>
                <th scope="col">Full Name</th>
                <th scope="col">Modality</th>
                <th scope="col">Data Provider</th>
                <th scope="col">Data Availability</th>
                <th scope="col">Personal Data</th>
                <th scope="col">Terms</th>
                <th scope="col">HomePage</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((data) => (
                <tr key={data.id}>
                  <td>
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
                  <td><a href="/#">{data.homepage}</a></td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="d-flex justify-content-between align-items-center">
            <span>Results per page: 50</span>
            <div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
