import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getDevice } from "../utils/functions";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // when drawer is open, prevent body scrolling and hide scrollbar
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [open]);

  const devicePrefix = getDevice();

  console.log(devicePrefix);
  // console.log("Header rendered. Drawer open:", open);

  return (
    <header className="header">
      <div className="container header-grid">
        <div className="brand">
          {/* <div className="logo" aria-hidden="true" /> */}
          <div
            style={{
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            <span>Evolution</span>
            <span className="brand-dot" aria-hidden="true" />
          </div>
        </div>

        <nav className="nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Services
          </NavLink>
          <NavLink
            to="/job-seekers"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Job Seekers
          </NavLink>
          <NavLink
            to="/employers"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Employers
          </NavLink>
        </nav>

        <div
          className={`${open ? "mo-nav" : ""}`}
          style={{ display: "flex", gap: 16, alignItems: "center" }}
        >
          <Link
            to="/contact"
            className="btn-primary small"
            style={{ textDecoration: "none", color: "#00000" }}
          >
            Get in touch
          </Link>
          <button
            className="hamburger"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <>
          <div className="drawer-backdrop" onClick={() => setOpen(false)} />
          <aside className="drawer-panel">
            <button
              className="close-btn"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 18,
                alignItems: "flex-start",
              }}
            >
              <Link to="/" onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link to="/about" onClick={() => setOpen(false)}>
                About
              </Link>
              <Link to="/services" onClick={() => setOpen(false)}>
                Services
              </Link>
              <Link to="/job-seekers" onClick={() => setOpen(false)}>
                Job Seekers
              </Link>
              <Link to="/employers" onClick={() => setOpen(false)}>
                Employers
              </Link>
              <Link
                to="/contact"
                className="btn-primary"
                onClick={() => setOpen(false)}
              >
                Get in touch
              </Link>
            </nav>
          </aside>
        </>
      )}
    </header>
  );
}
