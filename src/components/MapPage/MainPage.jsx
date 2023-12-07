import React from 'react';
import FinanceRatesChart from "./FinanceRatesChart.jsx";
import NavBar from '../NavBar/NavBar.jsx';
import MapComponent from "./MapComponent.jsx";
import PropertiesList from "../PropertyList/PropertiesList.jsx";
import RateChart from "./RateChart.jsx";
import InvestmentGraph from "./InvestmentGraph.jsx";
import Footer from '../Footer/Footer.jsx';

const MainPage = () => {
    return (
      <div>
        <NavBar />
        <MapComponent />
        <PropertiesList />
        <RateChart />
        <InvestmentGraph />
        <FinanceRatesChart/>
        <Footer />
      </div>
    );
  };
  
  export default MainPage;