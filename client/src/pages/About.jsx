import React from "react";
import Layout from "../components/Layout/Layout";

function About() {
  return (
    <Layout title="About -ecomm"  >
      <div className="container">
          <h2 className="text-center m-3">About Us</h2>
            <div className="row d-flex">
              <div className="col-md-4">
                <img
                  src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="about"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non
                elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in
                in leo. Fusce malesuada vulputate faucibus. Integer in hendrerit
                nisi.
              </p>
              <p>
                Sed varius nunc et posuere feugiat. Suspendisse vel elementum
                eros, vitae ultrices nulla. Morbi dapibus efficitur fermentum.
                Integer a urna non metus dictum blandit ac et risus. Praesent eu
                arcu ac neque placerat aliquam.
              </p>
            </div>
          </div>
            </div>
          </div>
    </Layout>
  );
}

export default About;
