import React from "react";

export default function Footer() {
  return (
    <footer >
      <div className="footer-info  text-white ">
        <div className="container py-5">
          <div className="row text-center py-5">
            <div className="col-sm-4">
              <h2>LOCATION</h2>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-sm-4">
              <h2>AROUND THE WEB</h2>
              <div className="icon-footter text-white d-flex  justify-content-center">
                <div className="d-flex justify-content-center align-items-center mx-2">
                  <i className="fa-brands fa-facebook"></i>
                </div>
                <div className="d-flex justify-content-center align-items-center mx-2">
                <i className="fa-brands fa-twitter"></i>
                </div>
                <div className="d-flex justify-content-center align-items-center mx-2">
                <i className="fa-brands fa-linkedin"></i>
                </div>
                <div className="d-flex justify-content-center align-items-center mx-2">
                <i className="fa-solid fa-globe"></i>
                </div>
              </div>
            </div>
            <div className="col-sm-4 ">
              <p className="text-center   fs-3">ABOUT FREELANCER</p>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer bg-dark text-center ">
        <p className="  py-4 text-white mb-0">
          Copyright © Your Website mohamed fathy 2024
        </p>
      </div>
    </footer>
  );
}
