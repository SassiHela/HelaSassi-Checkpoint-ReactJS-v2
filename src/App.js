import React from "react";
import "./App.css";
import myImage1 from "./assets/img.jpg";
import myImage2 from "./assets/img2.jpg";
import myImage3 from "./assets/img3.jpg";
import Carousel from "react-bootstrap/Carousel";

function App() {
  return (
    <div>
      {/** Navigateur */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a
                className="nav-link"
                href="https://www.google.com/intl/fr/gmail/about/#!"
              >
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="https://www.google.com/intl/fr/gmail/about/#"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="https://www.google.com/intl/fr/gmail/about/#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/** Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={myImage1}
            alt="First slide"
            style={{ height: 550 }}
          />
          <Carousel.Caption>
            <h3>Ordinateurs et accessoires</h3>
            <p>JUSQUA'A -50%</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={myImage2}
            style={{ height: 550 }}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Ordinateurs et accessoires</h3>
            <p>JUSQUA'A -50%</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={myImage3}
            style={{ height: 550 }}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Ordinateurs et accessoires</h3>
            <p>JUSQUA'A -50%</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/** espace */}
      <br></br>

      {/** Form */}
      <h1 className="title">
        <span>Contact</span>
      </h1>
      <form className="container">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Address 2</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>
            <select id="inputState" className="form-control">
              <option defaultValue>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
      <br></br>
      {/** Navigateur au Pied du page  */}
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a
              className="page-link"
              href="https://www.google.com/intl/fr/gmail/about/#"
              tabIndex="-1"
            >
              Previous
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              href="https://www.google.com/intl/fr/gmail/about/#"
            >
              1
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              href="https://www.google.com/intl/fr/gmail/about/#"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
