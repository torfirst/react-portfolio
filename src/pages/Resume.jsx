// import Resume from '../assets/torfirst_resume.pdf';
import PDFViewer from '../components/PDFViewer';


// const MyPDFViewer = () => (
//   <Document file="../assets/torfirst_resume.pdf">
//     <Page pageNumber={1} />
//   </Document>
// );

// export default MyPDFViewer;

export default function Resume() {
    return (
        <><div>
            <h2>Resume</h2>
<PDFViewer/>
            
            {/* <object data="../assets/torfirst_resume.pdf" type="application/pdf" width="100%" height="100%">
                <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
            </object> */}
        </div></>
    )
}

