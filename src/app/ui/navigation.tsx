'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ThemeSwitch from './theme-switch';

export const navbarBrand = 'T-CHAIYASAT.DEV';

const Navigation = () => {

  // NOTE: useEffect() Remove in Production!
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap' as string);
  }, []);

  return (
    <Navbar expand="lg" className="sticky-top">
      <Container fluid className="m-3">
        <Link className="navbar-brand d-block-inline" href="/">
          <div className="d-flex align-items-center">
            <span>&#x1F680;</span>
            <span className="fw-bold mx-1">{navbarBrand}</span>
            <span className="badge theme mx-2">Beta</span>
          </div>
        </Link>
        <button 
          className="navbar-toggler collapsed d-flex flex-column justify-content-around"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#toggleNavigationBar"
          aria-controls="toggleNavigationBar"
          aria-expanded="false"
          aria-label="toggle navigation"
        > 
          <span className="toggler-icon__custom top__bar d-lg-none"></span>
          <span className="toggler-icon__custom mid__bar d-lg-none"></span>
          <span className="toggler-icon__custom low__bar d-lg-none"></span>
        </button>
        <div className="collapse navbar-collapse" id="toggleNavigationBar">
          <ul className="navbar-nav text-uppercase">
            <li className="nav-item mt-3 mt-md-0">
              <Link 
                className="nav-link active" 
                aria-current="page" 
                href="/"
              > home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link 
                className="nav-link" 
                aria-current="page" 
                href="/blogs"
              > blogs
              </Link>
            </li> */}
            <ThemeSwitch />
          </ul>
        </div>
      </Container>
    </Navbar>
  );
}
export default Navigation;