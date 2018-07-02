import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import BoxShowcase from './Components/BoxShowcase';
import ProductRow from './Components/ProductRow';
import BannerRow from './Components/BannerRow';
import TwoColumnProduct from './Components/TwoColumnProduct';
import TabWithSlider from './Components/TabWithSlider';

class App extends Component {
  render() {
 return (
<div className="App">
  <Header/>

	<div class="page-container" id="PageContainer">
    <main class="main-content" id="MainContent" role="main">

      <BoxShowcase />
      <ProductRow />
      <BannerRow />
      <TwoColumnProduct />
      <BannerRow />
      <TabWithSlider />
      <BannerRow />
      <TabWithSlider />

    </main>
  </div>

  <Footer/>


</div>
    );
  }
}

export default App;
