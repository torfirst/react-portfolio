// import PDFViewer from '../components/PDF-Viewer';
import PDF from '../assets/torfirst_resume.pdf';

export default function Resume() {
    return (
        <>
            <div className="reset">
                <h2>resume</h2>
                {/* <PDFViewer /> */}
                <a href={PDF} download>Download my resume here</a> <br /> <br />
                <object className='resumeObj' data={PDF} type="application/pdf" style={{ width: '100vw', height: '100vh', display: 'block' }}></object>
            </div>
        </>
    )
}

