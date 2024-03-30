import { Document, Page } from '@react-pdf/renderer';

const PDFViewer = () => (
  <Document file="../assets/torfirst_resume.pdf">
    <Page pageNumber={1} />
  </Document>
);

export default PDFViewer;