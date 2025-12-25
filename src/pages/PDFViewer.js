import { Component } from "react";
import { getPdfPath } from '../utils/paths';

class PDFViewer extends Component {
    render() {
        const { folder, pdf } = this.props.match.params;
        const pdfPath = getPdfPath(folder, pdf);

        return (
            <div>
                <embed src={pdfPath} type="application/pdf" />
            </div>
        );
    }
}

export default PDFViewer;