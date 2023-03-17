import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
      <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky">
  <div class="container-fluid mt-2 mb-2">
          <Link className="navbar-brand " to='/'>aitools BD</Link>
         
          <span class="badge rounded-pill bg-dark border m-2">Beta</span>
          <p>AI Tools Directory</p>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <Link class="nav-link" to='/'>Home</Link>
        </li>    
        <li class="nav-item">
          <Link class="nav-link" to='/about'>About</Link>
              </li>
              {/* Dropdown */}
              
              <li class="nav-item dropdown">
                    <Link class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Education</Link>
                  <div class="dropdown-menu">
                    <Link class="dropdown-item" to='/'>Study Notes</Link>
                    <Link class="dropdown-item" to='/'>Eassy Outline</Link>
                  </div>
              </li>

              {/* <li class="nav-item dropdown">
                    <Link class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Kidz</Link>
                  <div class="dropdown-menu">
                    <Link class="dropdown-item" to='/'>Simple Concepts</Link>
                  </div>
              </li> */}
              
            <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Business/Entrepreneur</Link>
                <div class="dropdown-menu">
                  <Link class="dropdown-item" to='/'>Product Description</Link>
                  <Link class="dropdown-item" to='/'>Creative Name</Link>
                  <Link class="dropdown-item" to='/adtext'>Ad text</Link>
                  {/* <div class="dropdown-divider"></div> */}
                  <Link class="dropdown-item" to='/'>Business Email</Link>
                  <Link class="dropdown-item" to='/'>Tweet</Link>
                </div>
            </li>
              
       
              {/* dropdown */}
      </ul>
          </div>
         
        </div>
</nav>
      </>
  )
}

export default Navbar