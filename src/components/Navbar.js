import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.text}</a>
        </li>

      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className="conatiner2">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault" />
                    <label class={`form-check-label text-${props.mode ==='light'?'dark':'light'} mx-2`} for="flexSwitchCheckDefault">Enable dark Mode</label>
                </div>
            </div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    text : PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title : "hello",
    text : "good"
}
