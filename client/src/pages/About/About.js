import React, { Component } from "react";
import './about.css';



class About extends Component {
  render() {
    return (

      <div className="info">
        <br /><br />
        <div className="container" style={{ border: '.4' }}>
          <h1 style={{ background: 'transparent', color: 'black', border: 'black' }}>Meet Mr. Greenscapes Himself</h1>
          <br />
          <img src='./images/MrGHimself.jpg' style={{ width: '600px', opacity: 'none' }} />
        </div>

        <h3>Born James Eugene Greenscapes in 1955, James was raised in Cut And Shoot, Texas. James always had a passion for the outdoors. His parents Alice and James Sr.
          gave him a toy push mower for his 5th birthday and the rest is history. Cutting lawns professionally by twelve, James went to the University of
          Santa Cruz for a Bachelor's degree in Turf Sciences. Immediately following graduation James and his brother, Chase, founded Greenscapes in 1976
          on the foundation of hard work, inginuity, and a passion for making America's lawns the best in the world. Greenscapes still holds
          those values in high regards as we have expanded over the years. Greenscapes has over 100 office locations thoroughout the south and is
          continuing to expand every year!
        </h3>

        < br ></br >
        {/* <ItemsCarousel> */}
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 flex-center">
            <div className="jumbotron pt-3" style={{height: '200px'}}>
              <h2>Words of Wisdom from James Greenscapes</h2>
              <br />
              <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className='card-review' style={{ border: 'none' }}>
                          <h4 style={{ textAlign: 'center' }}>
                            A beautiful lawn is the key to a 
                            <br />beautiful life.
                        </h4>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className='card-review' style={{ border: 'none' }}>
                          <h4 style={{ textAlign: 'center' }}>
                            Hard work is the key to success!
                        </h4>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className='card-review' style={{ border: 'none' }}>
                          <h4 style={{ textAlign: 'center' }}>
                            One Million Lawns Saved since 1976!
                             </h4>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className='card-review' style={{ border: 'none' }}>
                          <h4 style={{ textAlign: 'center' }}>
                            Right or wrong, make a decision. 
                            <br />The road of life is paved 
                            <br />with flat squirrels who couldn't 
                            <br />make a decision.
                            </h4>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className='card-review' style={{ border: 'none' }}>
                          <h4 style={{ textAlign: 'center' }}>
                            I've never met a lawn Greenscapes 
                            <br />couldn't turn into the most beautiful 
                            <br />one on the block!
                            </h4>
                        </div>
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                <div classNameName="col-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>


    )
  }
}
export default About;