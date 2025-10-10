import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Service from "./pages/service/service";
import Home from "./pages/home/home";
import ScrollToTop from "./scrollToTop";
import { FormProvider } from "./FormContext";
import SurveyForm from "./pages/survey/survey";

function App() {
  return (
    // FormProvider wraps the WHOLE app (outside Router)
    <FormProvider>
      <div className="container">
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Service />} />
            <Route path="/survey" element={<SurveyForm />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </FormProvider>
  );
}

export default App;
