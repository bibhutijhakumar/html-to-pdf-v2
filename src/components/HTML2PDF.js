import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import html2pdf from 'html2pdf.js';

const ConvertToPdf = () => {
  const [inputUrl, setInputUrl] = useState('');

  const handleUrlChange = (e) => {
    setInputUrl(e.target.value);
  };

  const handleConvertToPdf = async () => {
    try {
      const response = await fetch(inputUrl); // Use inputUrl here
      const htmlContent = await response.text();

      const pdfOptions = {
        // ... PDF options ...
      };

      const pdf = await html2pdf().from(htmlContent).set(pdfOptions).outputPdf();
      const blob = new Blob([pdf], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'converted.pdf';
      link.click();

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error converting to PDF:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Convert URL to PDF</h1>
      <textarea
        className="form-control"
        rows="4"
        placeholder="Enter URL"
        value={inputUrl}
        onChange={handleUrlChange}
      />
      <button className="btn btn-primary mt-3" onClick={handleConvertToPdf}>
        Convert to PDF
      </button>
    </div>
  );
};

export default ConvertToPdf;
