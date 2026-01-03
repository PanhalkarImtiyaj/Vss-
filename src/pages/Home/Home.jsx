import Hero from '../../components/home/Hero/Hero';
import ServicesPreview from '../../components/home/ServicesPreview/ServicesPreview';
import ProductsPortfolio from '../../components/home/ProductsPortfolio/ProductsPortfolio';
import CareerForm from '../../components/home/CareerForm/CareerForm';
import AboutPreview from '../../components/home/AboutPreview/AboutPreview';
import ContactCTA from '../../components/home/ContactCTA/ContactCTA';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <ServicesPreview />
      <ProductsPortfolio />
      <CareerForm />
      <AboutPreview />
      <ContactCTA />
    </div>
  );
};

export default Home;
