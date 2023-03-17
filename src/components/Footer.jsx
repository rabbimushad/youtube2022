import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer class="site-footer bg-dark">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">@ aitools Bangladesh <i> For Future Bangladesh </i> is an initiative  to help various sectors to create variety of contents.We are still in beta.Help us to grow together.</p>
          </div>
          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><Link className='linktext'  to='#'>Education</Link></li>
              <li><Link  className='linktext' to='#'>Kisz</Link></li>
              <li><Link className='linktext'  to='#'>Business</Link></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><Link  className='linktext' to='/studynotes'>Study Notes</Link></li>
              <li><Link  className='linktext' to='/kidzsummarize'>Simple for Kidz</Link></li>
              <li><Link  className='linktext' to='/productdescription'>Product Description</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by
                <Link className='footerText' to='/'>aitools Bangladesh</Link>
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              {/* <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>    */}
            </ul>
          </div>
        </div>
      </div>
</footer>
    </>
  )
}

export default Footer