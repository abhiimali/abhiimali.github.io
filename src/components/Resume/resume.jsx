import React, { useRef, useEffect } from 'react';
import './resume.css'; // Import a CSS file for styling

const Resume = () => {
  const pdfUrl = 'src\\assets\\abhijit_mali.pdf'; // Set the static PDF URL

  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    iframe.src = pdfUrl;
  }, [pdfUrl]);

  return (
    <div className="resume-container">
      <iframe
        title="Resume Viewer"
        ref={iframeRef}
        className="resume-iframe"
        scrolling="auto"
        frameBorder="0"
        width="100%"
        height="100%"
        allowFullScreen
      />
    </div>
  );
};

export default Resume;
