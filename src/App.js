import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Events from './components/Events';
import Videos from './components/Videos';
import 'react-notifications-component/dist/theme.css';
import { ReactNotifications } from 'react-notifications-component'
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapCarousel from './components/BootstrapCarousel';

function App() {
  const [currentTab, setCurrentTab] = useState("home");



  const renderTab = () => {
    switch (currentTab) {
      case "home":
        return <Home />;
      
      case "events":
        return <Events />

      case "videos":
        return <Videos />
      
      default:
        return null;
    }
  };
  return (

  <div>
  <ReactNotifications />
  
    <div>
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
      </div>
        <BootstrapCarousel />
        
        <div>
          <main>{renderTab()}</main>
          </div>
        <div>
        
      <Footer></Footer>
  </div>
    </div>
  );
}

export default App;
