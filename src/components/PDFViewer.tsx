import React, { useEffect, useRef } from 'react';

const PDFViewer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Create an iframe to display the PDF
      const iframe = document.createElement('iframe');
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = 'none';
      
      // Set the PDF URL to the local PDF file
      iframe.src = "/assets/Amir_Lehmam_CV.pdf";
      
      // Append the iframe to the container
      containerRef.current.appendChild(iframe);
      
      // Clean up function
      return () => {
        if (containerRef.current && containerRef.current.contains(iframe)) {
          containerRef.current.removeChild(iframe);
        }
      };
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full rounded-lg overflow-hidden"></div>
  );
};

export default PDFViewer;