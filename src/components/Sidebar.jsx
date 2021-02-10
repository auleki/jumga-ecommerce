import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const navToggle = document.querySelector('.toggle');
  const iconButton = document.querySelectorAll('.icon');

  const toggleMenu = () => {
    //do nothing for now
    // let navigation = document.querySelector('.navigation');
    // let toggle = document.querySelector('.toggle');
    // let sidebar_header = document.querySelector('.sidebar_header');
    // sidebar_header.classList.toggle('active');
    // navigation.classList.toggle('active');
    // toggle.classList.toggle('active');
  }

  // navToggle.addEventListener('click', toggleMenu);
  // iconButton.addEventListener('mouseover', toggleMenu);
  return (
    <>
      <div className="navigation">
          <ul className="navbar_section">
          <li>
              <Link to="/">
                <span className="icon">
                <i className="ri-shopping-bag-2-fill"></i>
                </span>
                <span className="target">Shopping</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <span className="icon">
                <i className="ri-bubble-chart-fill"></i>
                </span>
                <span className="target">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/products">
                <span className="icon">
                <i className="ri-stack-fill"></i>
                </span>
                <span className="target">Products</span>
              </Link>
            </li>
            <li>
              <Link to="/orders">
                <span className="icon">
                <i className="ri-shopping-cart-fill"></i>
                </span>
                <span className="target">Orders</span>
              </Link>
            </li>
            <li>
              <Link to="/wishlist">
                <span className="icon">
                <i className="ri-bookmark-3-fill"></i>
                </span>
                <span className="target">Wishlist</span>
              </Link>
            </li>
            <li>
              <Link to="/settings">
                <span className="icon">
                <i className="ri-settings-3-fill"></i>
                </span>
                <span className="target">Store Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <span className="icon">
                <i className="ri-settings-3-fill"></i>
                </span>
                <span className="target">Login</span>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <span className="icon">
                <i className="ri-settings-3-fill"></i>
                </span>
                <span className="target">Register</span>
              </Link>
            </li>
          </ul>

        </div>
        <div className="toggle"></div>
    </>   
    
  )
}

export default Sidebar