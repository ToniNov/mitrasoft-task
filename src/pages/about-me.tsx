import { useState } from 'react';

import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import Cv from '../assets/cv/Cv.pdf';
import { BaseButton } from '../components/BaseButton';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
  cMapUrl: 'cmaps/',
  standardFontDataUrl: 'standard_fonts/',
};

export const AboutMe = () => {
  const [numPages, setNumPages] = useState<number>();

  function onDocumentLoadSuccess({ numPages: nextNumPages }: any) {
    setNumPages(nextNumPages);
  }

  const handleDownload = () => {
    const link = document.createElement('a');

    link.href = Cv;
    link.download = 'Cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container>
      <Card className="d-flex flex-column align-items-center">
        <BaseButton variant="custom" className="w-25" onClick={handleDownload}>
          Download Cv
        </BaseButton>
        <Card.Body>
          <Document
            file="src/assets/cv/Cv.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            {Array.from(new Array(numPages), (_el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </Card.Body>
      </Card>
    </Container>
  );
};
