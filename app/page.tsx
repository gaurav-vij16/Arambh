import Navbar from "./Components/Ui/Navbar";
import LandingUi from "./Components/Ui/LandingUi";
import LandingAboutUs from "./Components/Ui/LandingAboutUs";
import ClientUi from "./Components/Ui/ClientUI";
import Portfolio from "./Components/Ui/PortFolio";
import ContactFormUi from "./Components/Ui/ContactFormUi";
import LandingPhoneServices from "./Components/Ui/LandingPhoneServices";
import LandingService from "./Components/Ui/LandingService";
import WebDevService from "./Components/Ui/WebDevService";
import ServiceMain from "./Components/Ui/ServiceMain";
import GrowthSection from "./Components/Ui/Growth";
import Contact from "./contact/page";
import Footer from "./Components/Ui/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <section id="home">
        <LandingUi />
      </section>

      <section id="about">
        <LandingAboutUs />
      </section>

      <section id="services">
        <LandingPhoneServices />
      </section>

      <section id="clients">
        <ClientUi />
      </section>

      <section id="services">
        <GrowthSection />
        <WebDevService />
        <ServiceMain />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

