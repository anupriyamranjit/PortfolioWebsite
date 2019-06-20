import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <h2 className="lead">
              Feel free to contact me on any of my social media or my emails if you have any question or if you would just like to chat!
              </h2>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
              <h3>
              Social Media
              </h3>
                <h4>Email: {resumeData.email}
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}
