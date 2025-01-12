import React, { Component } from 'react';
import '../../pages/ClientHome/style.css';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap4-modal';
import AuthContext from '../../contexts/AuthContext';
import API from '../../lib/API';
import Moment from 'react-moment';
import imageOne from '../../cssPages/ImageGallery/removal.png';
import imageTwo from '../../cssPages/ImageGallery/pineneedles.png';
import imageThree from '../../cssPages/ImageGallery/trimming.png';

class ClientHome extends Component {
  static contextType = AuthContext;
  // state = {

  // };

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      completedServices: [],
      upcomingServices: [],
      show: false,
    };
  }

  componentDidMount() {

  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  getServices = () => {
    console.log("something")
    let { authToken } = this.context
    console.log("running")
    API.Services.get(authToken)
      .then(response => {
        // response.map(service => {
        //  return () {service.date: service.date}
        // })
        this.setState({ completedServices: response.data.filter(service => service.complete) })
        this.setState({ upcomingServices: response.data.filter(service => !service.complete) })
      })
  }

  handleSubmit = event => {
    const { email, password, firstName, lastName, phone, address } = this.state;
    console.log(this.props)
    this.props.onSubmit(email, password, firstName, lastName, phone, address);
  }

  handleInputChange = event => {
    event.preventDefault()
    let { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    console.log(this.context.user);
    const firstName = this.context.user ? this.context.user.firstName : "anon"
    const lastName = this.context.user ? this.context.user.lastName : "anon"
    const email = this.context.user ? this.context.user.email : "anon"
    const phone = this.context.user ? this.context.user.phone : "anon"
    const address = this.context.user ? this.context.user.address : "anon"
    const password = this.context.user ? this.context.user.password : "anon"
    const id = this.context.user ? this.context.user.id : "anon"
    return (
      <div className="welcome container">
        <div className="row">
          <br />
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <h1 className="display-4 text-white font-weight-bold welcomeText" style={{ textAlign: 'center' }}>Welcome Back, {firstName} </h1>
          </div>
          <div className="col-sm-2"> </div>
        </div>
        <br />
        <br />

        <div className="row">

          {/* Account Info Card */}
          <div className="col-sm-4 mainButton">
            <a className="card d-flex text-center" data-toggle="modal" data-target="#exampleModalCenter">
              <div className="card-body">
                <h1 className="card-title"><i className="fas fa-user-edit"></i></h1>
                <h5 className="card-subtitle mb-2 text-muted">Account Info</h5>
                <p className="card-text">Edit your Account Information.</p>
              </div>
            </a>
            <Modal visible={false} onClickBackdrop={this.modalBackdropClicked} className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-header" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <h5 class="modal-title text-success" id="exampleModalLongTitle"><strong>Edit Account Info</strong></h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <br />
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-6">
                    <input
                      className='form-control'
                      id='firstName'
                      type='text'
                      name='firstName'
                      placeholder={firstName}
                      value={firstName}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="col-6">
                    <input
                      className="form-control"
                      id='lastName'
                      type='text'
                      name='lastName'
                      placeholder={lastName}
                      value={lastName}
                      onChange={this.handleInputChange} />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-6">
                    <input
                      className="form-control"
                      id='address'
                      type='text'
                      name='address'
                      placeholder="Address"
                      value={address}
                      onChange={this.handleInputChange} />
                  </div>
                  <div className="col-6">
                    <input
                      className="form-control"
                      id='phone'
                      type='text'
                      name='phone'
                      placeholder="Phone Number"
                      value={phone}
                      onChange={this.handleInputChange} />
                  </div>
                </div>
                <br />
                <div className="form-group text-left">
                  <label form="email">Email</label>
                  <input
                    className="form-control"
                    id='email'
                    type="email"
                    name='email'
                    aria-describedby="emailHelp"
                    placeholder="Email@provider.com"
                    value={email}
                    onChange={this.handleInputChange} />
                </div>
                <div className="form-group text-left">
                  <label form="password">Password</label>
                  <input
                    className="form-control"
                    id='password'
                    type="password"
                    name='password'
                    placeholder="Password"
                    value={password}
                    onChange={this.handleInputChange} />
                </div>
                <button type="submit" className="btn btn-success float-left">Update</button>

              </form>
            </Modal>
          </div>

          {/* Scheduled Card */}
          <div className="col-sm-4 mainButton">
            <a className="card d-flex text-center" data-toggle="modal" data-target="#upcomingModal" onClick={this.getServices}>
              <div className="card-body">
                <h1 className="card-title"><i className="fas fa-calendar-day"></i></h1>
                <h5 className="card-subtitle mb-2 text-muted">Scheduled</h5>
                <p className="card-text">View your Scheduled Services.</p>
              </div>
            </a>
            {console.log(this.state.upcomingServices)}
            <Modal upcomingServices={this.state.upcomingServices} completedServices={this.state.completedServices} visible={false} onClickBackdrop={this.modalBackdropClicked} className="upcomingModal-lg" id="upcomingModal" dialogClassName="modal-lg" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-header" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <h5 class="modal-title text-success" id="exampleModalLongTitle"><strong>Scheduled Services</strong></h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col"><strong>Date</strong></th>
                    <th scope="col"><strong>Service</strong></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.upcomingServices.map(upcomingService => {
                    return (
                      <tr>
                        <th scope="row">
                          <Moment format="MM/DD/YYYY">{upcomingService.date}</Moment>
                        </th>
                        <td>
                          {upcomingService.name}
                        </td>
                      </tr>
                    )
                  }
                  )}
                  {this.state.completedServices.map(completedService => {
                    return (
                      <tr>
                        <th scope="row">
                          <Moment format="MM/DD/YYYY">{completedService.date}</Moment>
                        </th>
                        <td>
                          {completedService.name}
                        </td>
                      </tr>
                    )
                  }
                  )}
                </tbody>
              </table>
            </Modal>
          </div>

          {/* Booking Card */}
          <div className="col-lg-4 sm-12 mainbutton">
            <div className="card text-center scheduleCard">
            <Link className='nav-link pb-.5 pt-0' to='/scheduling' onClick={this.toggleCollapse}>
              <div className="card-body">
                <h1 className="card-title"><i className="fas fa-calendar-plus"></i></h1>
                  <h5 className="card-subtitle text-muted">Booking</h5>
                <p className="card-text">Schedule a Service.</p>
              </div>
              </Link>
            </div>
          </div>

        </div>

        {/* bottom img's */}
        <div className="row">
          <div className="col-4">
            <img src={imageOne} className="bottomImg" height="320px" width="100%" alt="dundun"></img>
          </div>
          <div className="col-4">
            <img src={imageTwo} className="bottomImg" height="320px" width="100%" alt="dundun"></img>
          </div>
          <div className="col-4">
            <img src={imageThree} className="bottomImg" height="320px" width="100%" alt="dundun"></img>
          </div>
        </div>
      </div>


    );
  }
}





export default ClientHome;

{/* Completed Card */ }
{/* <div className="col-sm-3">
  <button className="card p-3 mb-5 rounded" data-toggle="modal" data-target="#completedModal" onClick={this.getServices}>
    <div className="card-body">
      <h1 className="card-title"><i className="fas fa-calendar-check"></i></h1>
      <h5 className="card-subtitle mb-2 text-muted">Completed</h5>
      <p className="card-text">View your Completed Services.</p>
    </div>
  </button>
  {console.log(this.state)}
  <Modal
    completedServices={this.state.completedServices} visible={false} onClickBackdrop={this.modalBackdropClicked} className="completedModal-lg" dialogClassName="modal-lg" id="completedModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-header" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <h5 class="modal-title text-success" id="exampleModalLongTitle"><strong>Completed Services</strong></h5>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"><strong>Date</strong></th>
            <th scope="col"><strong>Service</strong></th>
          </tr>
        </thead>
        <tbody>
          {this.state.completedServices.map(completedService => {
            return(
            <tr>
              <th scope="row">
                <Moment format="MM/DD/YYYY">{completedService.date}</Moment>
              </th>
              <td>
                {completedService.name}
              </td>
            </tr>
          )}
          )}
        </tbody>
      </table>
    </div>
  </Modal>
</div> */}
