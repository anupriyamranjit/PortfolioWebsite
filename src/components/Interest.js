import React, { Component } from 'react';
export default class Interest extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="interest">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Here are some of my interests</h1>
          <div id="interest-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.interests && resumeData.interests.map((item)=>{
              return(
                <div className="columns interest-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <i className={item.className}></i>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}
