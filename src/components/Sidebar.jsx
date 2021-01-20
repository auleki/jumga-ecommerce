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
      <div class="navigation">
          <ul class="navbar_section">
          <li>
              <Link to="/">
                <span class="icon">
                <i class="ri-shopping-bag-2-fill"></i>
                </span>
                <span class="target">Shopping</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <span class="icon">
                <i class="ri-bubble-chart-fill"></i>
                </span>
                <span class="target">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/products">
                <span class="icon">
                <i class="ri-stack-fill"></i>
                </span>
                <span class="target">Products</span>
              </Link>
            </li>
            <li>
              <Link to="/orders">
                <span class="icon">
                <i class="ri-shopping-cart-fill"></i>
                </span>
                <span class="target">Orders</span>
              </Link>
            </li>
            <li>
              <Link to="/wishlist">
                <span class="icon">
                <i class="ri-bookmark-3-fill"></i>
                </span>
                <span class="target">Wishlist</span>
              </Link>
            </li>
            <li>
              <Link to="/settings">
                <span class="icon">
                <i class="ri-settings-3-fill"></i>
                </span>
                <span class="target">Store Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <span class="icon">
                <i class="ri-settings-3-fill"></i>
                </span>
                <span class="target">Login</span>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <span class="icon">
                <i class="ri-settings-3-fill"></i>
                </span>
                <span class="target">Register</span>
              </Link>
            </li>
          </ul>

        </div>
        <div class="toggle"></div>
    </>   
    
  )
}

export default Sidebar