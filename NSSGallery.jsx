import React, { useState } from "react";
import "./NSSGallery.css";

const festivals = [
  "Diwali", "Navratri and Durga Pooja", "Dussehra", "Holi",
  "Krishna Janmashtami", "Onam", "Ganesh Chaturthi", "Eid-Ul-Fitr",
  "Mahashivratri", "Gurupurab"
];

const dummyData = [
  { unique_id: "2024", docs: festivals.slice(0, 10).map((festival, i) => ({
      LOGO_PATH: `https://via.placeholder.com/200?text=${encodeURIComponent(festival)}`,
      FESTIVAL_NAME: festival,
      PDF_PATH: `https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf`,
  })) },
  { unique_id: "2023", docs: festivals.slice(0, 7).map((festival, i) => ({
      LOGO_PATH: `https://via.placeholder.com/200?text=${encodeURIComponent(festival)}`,
      FESTIVAL_NAME: festival,
      PDF_PATH: `https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf`,
  })) },
  { unique_id: "2022", docs: festivals.slice(0, 5).map((festival, i) => ({
      LOGO_PATH: `https://via.placeholder.com/200?text=${encodeURIComponent(festival)}`,
      FESTIVAL_NAME: festival,
      PDF_PATH: `https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf`,
  })) },
  { unique_id: "2021", docs: festivals.slice(0, 3).map((festival, i) => ({
      LOGO_PATH: `https://via.placeholder.com/200?text=${encodeURIComponent(festival)}`,
      FESTIVAL_NAME: festival,
      PDF_PATH: `https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf`,
  })) },
];

const NSSGallery = () => {
  const [selectedYear, setSelectedYear] = useState(dummyData[0]?.unique_id);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const selectedYearData = dummyData.find((item) => item.unique_id === selectedYear)?.docs || [];

  return (
    <div className="NG-gallery">
      <div className="NG-header">
        <h1> NSS  Gallery </h1>
        <div className="NG-year-buttons">
          {dummyData.map((year) => (
            <button
              key={year.unique_id}
              className={`NG-year-button ${selectedYear === year.unique_id ? "active" : ""}`}
              onClick={() => setSelectedYear(year.unique_id)}
            >
              {year.unique_id}
            </button>
          ))}
        </div>
      </div>

      <div className="NG-details">
        {selectedYearData.map((detail, index) => (
          <div key={index} className="NG-image-container" onClick={() => setSelectedPdf(detail.PDF_PATH)}>
            <img src={detail.LOGO_PATH} alt={detail.FESTIVAL_NAME} className="NG-image" />
            <h3>{detail.FESTIVAL_NAME}</h3>
          </div>
        ))}
      </div>

      {selectedPdf && (
        <div className="NG-popup">
          <div className="NG-overlay" onClick={() => setSelectedPdf(null)}></div>
          <div className="NG-popup-content">
            <iframe src={selectedPdf} title="Festival PDF Viewer"></iframe>
            <button className="NG-close-btn" onClick={() => setSelectedPdf(null)}>❌ Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NSSGallery;
