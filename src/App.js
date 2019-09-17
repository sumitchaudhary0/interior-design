import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import BannerCard from './Components/Banner/BannerCard/BannerCard';
import AssetBar from './Components/AssetBar/AssetBar';
import OurServices from './Components/OurServices/OurServices';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="banner-Navbar-wrapper">
          <div className="nav-wrapper">
            <Navbar />
          </div>
          <div className="banner-bg-wrapper">
            <BannerCard />
          </div>
        </div>
        <div className="Asset-Bar-Wrapper">
          <AssetBar />
        </div>
         <OurServices />
      </React.Fragment>
    )
  }
}
