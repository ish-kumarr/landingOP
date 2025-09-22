"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { openMobileMenu } from "@/utlis/toggleMobileMenu";
import { navItems } from "@/data/menu";
import addScrollspy from "@/utlis/addScrollSpy";

export default function Header5() {
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledPast = currentScrollPos >= 500;

      setScrolledPast(isScrolledPast);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", addScrollspy);

    return () => {
      window.removeEventListener("scroll", addScrollspy);
    };
  }, []);
  return (
    <header
      className={`uc-header header-six uc-navbar-sticky-wrap z-999 uc-sticky ${
        scrolledPast ? " uc-sticky-below uc-sticky-fixed headerFixed" : ""
      }`}
      data-uc-sticky="start: 1200px; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;"
    >
      <nav
        className={`uc-navbar-container lg:mt-3 rounded-0 lg:rounded-pill uc-navbar-float ft-tertiary z-1 ${
          scrolledPast ? "uc-navbar-sticky" : "uc-navbar-transparent"
        } `}
        data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;"
      >
        <div className="uc-navbar-main" style={{ "--uc-nav-height": "80px" }}>
                      <div className="container max-w-full">
            <div
              className="uc-navbar min-h-64px lg:min-h-80px px-2 lg:px-0 text-gray-900 dark:text-white flex items-center justify-between w-full"
              data-uc-navbar="mode: click; animation: uc-animation-slide-top-small; duration: 150;"
            >
              <div className="uc-navbar-left">
                <div className="uc-logo" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                  <Link 
                    className="flex items-center hover:text-primary transition-colors duration-300 text-decoration-none" 
                    href={`/`}
                    style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', height: '100%' }}
                  >
                    <Image
                      alt="Outreach Panda Logo"
                      src="/assets/images/common/logo-icon.svg"
                      width="40"
                      height="40"
                      style={{ marginRight: '8px' }}
                    />
                    <span style={{ fontSize: '18px', fontWeight: '600', whiteSpace: 'nowrap', lineHeight: '1', transform: 'translateY(1px)' }}>
                      Outreach Panda
                    </span>
                  </Link>
                </div>
              </div>
              <div className="uc-navbar-center">
                <ul className="uc-navbar-nav gap-3 xl:gap-5 d-none lg:d-flex fs-5 fw-medium scrollSpyLinks">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <a
                        className={item.active ? "uc-active" : ""}
                        href={item.href}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="uc-navbar-right" style={{ display: 'flex', alignItems: 'center' }}>
                <Link
                  href={`/meet`}
                  className="btn btn-sm btn-primary px-3 d-none lg:d-inline-flex"
                >
                  <span>Get free consultation</span>
                </Link>
                <a
                  className="d-block lg:d-none uc-icon uc-navbar-toggle-icon"
                  onClick={openMobileMenu}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <rect className="line-1" y="3" width="20" height="2"></rect>
                    <rect className="line-2" y="9" width="20" height="2"></rect>
                    <rect className="line-3" y="9" width="20" height="2"></rect>
                    <rect
                      className="line-4"
                      y="15"
                      width="20"
                      height="2"
                    ></rect>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}