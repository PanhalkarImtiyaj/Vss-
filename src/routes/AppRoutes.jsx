import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import ServiceDetail from '../pages/ServiceDetail/ServiceDetail';
import Portfolio from '../pages/Portfolio/Portfolio';
import Contact from '../pages/Contact/Contact';
import Team from '../pages/Team/Team';
import TalkToExperts from '../pages/TalkToExperts/TalkToExperts';
import GSAPDemo from '../components/GSAPDemo';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="talk-to-experts" element={<TalkToExperts />} />
        <Route path="gsap-test" element={<GSAPDemo />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
