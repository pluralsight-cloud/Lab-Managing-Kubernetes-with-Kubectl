"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function navActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <div className="container">
        <div className="logo col-md-5 col-sm-5 col-xs-8">
          <Link href="/">
            <img src="/images/Globo-Logo-white.svg" alt="logo" />
          </Link>
          <span className="text">MANIACALLY TAKING TECH TO THE GLOBE</span>
        </div>
        <div className="mobile-togle col-md-12 col-sm-12 col-xs-12">
          <nav className="navbar navbar-default" role="navigation">
            <div className="navbar-header">
              <button
                type="button"
                id="hamburger"
                className="navbar-toggle x collapsed"
                data-toggle="collapse"
                data-target="#navbar-collapse-x"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#top" />
            </div>

            <div className="collapse navbar-collapse" id="navbar-collapse-x">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <div className="search1">
                    <button type="submit">
                      <i className="fa fa-search" />
                    </button>{" "}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                  </div>
                </li>
                <ul className="navbar-nav mr-auto">
                  <li
                    className={`nav-item ${navActive(pathname, "/our-story") ? "active" : ""}`}
                  >
                    <Link className="nav-link" href="/our-story">
                      Our story
                      <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Brands
                    </a>
                  </li>
                  <li
                    className={`nav-item ${navActive(pathname, "/robotics") ? "active" : ""}`}
                  >
                    <Link className="nav-link" href="/robotics">
                      Robotics
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${navActive(pathname, "/media") ? "active" : ""}`}
                  >
                    <Link className="nav-link" href="/media">
                      Media
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">
                      Support
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
          </nav>
        </div>

        <div className="right_section col-md-5 col-xs-12">
          <div className="search">
            <button type="submit">
              <i className="fa fa-search" />
            </button>{" "}
            <input
              type="text"
              className="form-control"
              placeholder="Search"
            />
          </div>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li
                  className={`nav-item ${navActive(pathname, "/our-story") ? "active" : ""}`}
                >
                  <Link className="nav-link" href="/our-story">
                    Our story
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Brands
                  </a>
                </li>
                <li
                  className={`nav-item ${navActive(pathname, "/robotics") ? "active" : ""}`}
                >
                  <Link className="nav-link" href="/robotics">
                    Robotics
                  </Link>
                </li>
                <li
                  className={`nav-item ${navActive(pathname, "/media") ? "active" : ""}`}
                >
                  <Link className="nav-link" href="/media">
                    Media
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="sign-in col-md-2">
          <span className="dvider" />
          <div className="sign">
            <a href="#">
              <img
                className="sign-in-img"
                src="/images/avatar.svg"
                alt="sign-in"
              />
              Sign-in
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
