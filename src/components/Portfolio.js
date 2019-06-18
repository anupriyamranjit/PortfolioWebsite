import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div class="row">
  <div class="column">
<a href="https://medium.com/@anupriyam/basic-image-thresholding-in-opencv-5af9020f2472">
    <img className="profile-pic"  src="images/MediumThresholdingOne.jpg" alt="" />
    </a>
    <h5>Thresholding</h5>
  </div>
  <div class="column">
  <a href="https://github.com/anupriyamranjit/Portfolio/tree/master/ProjectOne">
    <img className="profile-pic"  src="images/TwitterScrapper.png" alt="" />
    </a>
    <h5>Twitter Scrapping</h5>
  </div>
  <div class="column">
  <a href="https://medium.com/@anupriyam/wtf-is-cnn-d8bdd03928b1">
    <img className="profile-pic"  src="images/CNNMedium.gif" alt="" />
    </a>
    <h5>WTF is CNN</h5>
  </div>
  <div class="column">
    <img className="profile-pic"  src="images/sample-image.jpg" alt="" />
  </div>
</div>

        </div>
      </div>
  </section>
        );
  }
}
