import React, { Component } from 'react';
export default class Interest extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="interests">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Here are some of my interests</h1>
          <div id="interest-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.interests && resumeData.interests.map((item)=>{
              return(
                <div className="columns interests-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                    <div className="contone">
                      <i className={item.className}></i>
                    </div>
                      <h5>{item.name}</h5>
                      <p>{item.description}</p>
                      <div className="overlay">
                        <div className="interests-item-meta">
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
