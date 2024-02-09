import React from 'react'
import Layout from '../components/Layout/Layout'

function Contact() {
  return (
    <Layout title="Contact -ecomm">
      <div class="container">
  <h2 class="text-center m-3">Contact Us</h2>
  <div class="row d-flex">
    <div class="col-md-4">
      <img
        src="https://plus.unsplash.com/premium_photo-1682125235036-d1ab54136ff4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="contact"
        class="img-fluid"
      />
    </div>
    <div class="col-md-8">
      <div>
        <p>
          You can contact us through the following methods:
        </p>
        <ul>
          <li>Email: example@example.com</li>
          <li>Phone: 123-456-7890</li>
          <li>Address: 123 Main Street, City, Country</li>
        </ul>
        <p>
          We look forward to hearing from you!
        </p>
      </div>
    </div>
  </div>
</div>

    </Layout>
  )
}

export default Contact