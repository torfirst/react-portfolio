import { Document, Page } from '@react-pdf/renderer';
import Resume from '../assets/torfirst_resume.pdf';

export default function PDFViewer() {
  <Document file={Resume}>
    <Page pageNumber={1} />
  </Document>
}