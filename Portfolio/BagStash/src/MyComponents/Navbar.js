import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark px-3 py-0">
        <a className="navbar-brand" href="index.html">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navLinks">
          <ul className="navbar-nav ml-auto">
            <li className="nav-items">
              <a className="nav-link" id="navl" href="index.html" title="Categories">Categories</a>
            </li>
            <li className="nav-items">
              <a className="nav-link" id="navl" href="index.html" title="Reviews">Reviews</a>
            </li>
            <li className="nav-items">
              <a className="nav-link" id="navl" href="index.html" title="Wishlist">Wishlist</a>
            </li>
            <li className="nav-items">
              <a className="nav-link" id="navl" href="index.html" title="Cart">Bag</a>
            </li>
            <li className="nav-items">
              <a className="nav-link" id="navl" href="index.html" title="Log in">Log in</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}


Navbar.propTypes = {
  title: PropTypes.string
}

Navbar.defaultProps = {
  title: 'BookStash.com'
}