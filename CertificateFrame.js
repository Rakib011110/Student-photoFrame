import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import './style.css';

const CertificateFrame = () => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [date, setDate] = useState('');
  const previewRef = useRef(null);

  const handleDownload = async () => {
    if (previewRef.current) {
      const canvas = await html2canvas(previewRef.current);
      const link = document.createElement('a');
      link.download = 'certificate.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  return (
    <div className="certificate-container">
      <div className="inputs">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={e => setCourse(e.target.value)}
        />
        <input
          type="text"
          placeholder="Date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <button onClick={handleDownload}>Download</button>
      </div>
      <div className="certificate-preview" ref={previewRef}>
        <img src={require('./image/frame.png')} alt="Frame" className="frame-bg" />
        <div className="cert-name">{name}</div>
        <div className="cert-course">{course}</div>
        <div className="cert-date">{date}</div>
      </div>
    </div>
  );
};

export default CertificateFrame;
