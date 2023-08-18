import ReactGA from "react-ga";
import { Routes, Route } from "react-router-dom";

import About from "./pages/AboutPage/AboutPage";
import Accessibility from "./pages/AccessibilityPage/AccessibilityPage";
import Admin from "./pages/AdminPage/AdminPage";
import Budget from "./pages/BudgetPage/BudgetPage";
import Calculator from "./pages/CalculatorPage/CalculatorPage";
import Careers from "./pages/CareersPage/CareersPage";
import CareersPage from "./pages/TestPage/index";
import Colleges from "./pages/CollegesPage/CollegesPage";
import Contact from "./pages/ContactPage/ContactPage";
import Feedback from "./pages/FeedbackPage/FeedbackPage";
import Home from "./pages/HomePage/HomePage";
import Login from "./pages/LoginPage/LoginPage";
import Retire from "./pages/InvestPage/InvestPage";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import Plan from "./pages/PlanPage/PlanPage";
import PrivacyPolicy from "./pages/PrivacyPolicyPage/PrivacyPolicyPage";
import SignUp from "./pages/SignUpPage/SignUpPage";
import TermsOfUse from "./pages/TermsOfUsePage/TermsOfUsePage";
import React, {useState} from "react";

function App() {

  const [selectedSubpage, setSelectedSubpage] = useState("Explore Careers");
  ReactGA.initialize("UA-000000-01");
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home selectedSubpage={selectedSubpage} setSelectedSubpage={setSelectedSubpage}/>} />
        <Route path='home' element={<Home selectedSubpage={selectedSubpage} setSelectedSubpage={setSelectedSubpage}/>} />
        <Route path='about' element={<About />} />
        <Route path='accessibility' element={<Accessibility />} />
        <Route path='admin' element={<Admin />} />
        <Route path='budget' element={<Budget />} />
        <Route path='calculator' element={<Calculator />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
        <Route path='feedback' element={<Feedback />} />
        <Route path='plan' element={<Plan selectedSubpage={selectedSubpage} setSelectedSubpage={setSelectedSubpage} />} />
        <Route path='invest' element={<Retire />} />
        <Route path='privacypolicy' element={<PrivacyPolicy />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='test' element={<CareersPage />} />
        <Route path='termsofuse' element={<TermsOfUse />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
