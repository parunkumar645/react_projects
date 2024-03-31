import React, { useState } from "react";
import "./Qrcode.css";

const Qrcode = () => {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrData, setQrData] = useState(
    "https://www.linkedin.com/in/arunkumar-p05/"
  );
  const [qrSize, setQrSize] = useState("150");

  function generate() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}*${qrSize}&data=${encodeURIComponent(
        qrData
      )}`;
      setImg(url);
    } catch (error) {
      console.error("Error generating QR code", error);
    } finally {
      setLoading(false);
    }
  }

  async function download() {
    setLoading(true);
    try {
      const response = await fetch(img);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "qrcode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading QR code", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app-container">
      <h1>QR CODE GENERATOR</h1>
      {loading && <p>Please wait....</p>}
      {img && <img src={img} className="qr-code-image" alt="QR Code" />}
      <div>
        <label htmlFor="dataInput" className="input-label">
          Data for QR code:
        </label>
        <input
          type="text"
          value={qrData}
          id="dataInput"
          placeholder="Enter Data for QR code"
          onChange={(e) => setQrData(e.target.value)}
        />
        <label htmlFor="sizeInput" className="input-label">
          Image size (e.g., 150) :
        </label>
        <input
          type="text"
          value={qrSize}
          onChange={(e) => setQrSize(e.target.value)}
          id="sizeInput"
          placeholder="Enter Image Size"
        />
        <button
          className="generate-button"
          disabled={loading}
          onClick={generate}
        >
          Generate QR Code
        </button>
        <button className="download-button" onClick={download}>
          Download QR Code
        </button>
      </div>
      <p className="footer">Designed By AK_TECH_ZONE</p>
    </div>
  );
};

export default Qrcode;
