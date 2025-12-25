import { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Resume from './pages/Resume';
import PDFViewer from './pages/PDFViewer';
import NotFound from "./pages/NotFound";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Resume} />
                <Route exact path="/pdfviewer/:folder/:pdf" component={PDFViewer} />
                <Route component={NotFound} /> {/* 모든 경로에 매칭 (마지막에 배치) */}
            </Switch>
        );
    }
}

export default App;
