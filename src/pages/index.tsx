import About2Comp from "components/About2Comp";
import AboutComp from "components/AboutComp";
import ApointmentModalComp from "components/ApointmentModalComp";
import BannerComp from "components/Banner";
import CoronaCaseComp from "components/CoronaCase";
import CoronaPreventionComp from "components/CoronaPreventionComp";
import CoronaSymptomsComp from "components/CoronaSymptomsComp";
import ContactComp from "components/FooterComp";
import ServicesComp from "components/ServicesComp";
import React from "react";
import HeaderComp from "../components/HeaderComp";

const HomePage: React.FC = () => {
  return (
    <div data-spy="scroll" data-target="#nav-part" data-offset="90">
      <ApointmentModalComp />
      {/* Header */}
      <HeaderComp />

      {/* Banner */}
      <BannerComp />

      <About2Comp />

      {/* About */}
      <AboutComp />

      {/*  Corona Virus Case Part HTML Start */}

      <CoronaCaseComp />

      {/*  CoronaVirus Symptoms Part HTML Start */}
      <CoronaSymptomsComp />

      {/* Corona Virus Prevention Part HTML Start */}
      <CoronaPreventionComp />

      {/*  Connect Doctors Part HTML Start  */}
      {/* <DoctorsComp /> */}
      <ServicesComp />

      {/* Latest Updates Part HTML Start */}
      {/* <LatestUpdateComp /> */}

      {/*   Contact Part HTML Start */}
      <ContactComp />
    </div>
  );
};

export default HomePage;
