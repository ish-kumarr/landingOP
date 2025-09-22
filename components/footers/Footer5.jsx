"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageSelect from "../common/LanguageSelect";
import { footerLinks4, socialLinks } from "@/data/footer";

export default function Footer5() {
  return (
    <>
      <style jsx>{`
        .tooltip-container {
          position: relative;
          display: inline-block;
        }

        .tooltip-text {
          visibility: hidden;
          width: 120px;
          background-color: #555;
          color: #fff;
          text-align: center;
          border-radius: 6px;
          padding: 5px 0;
          position: absolute;
          z-index: 1;
          bottom: 125%;
          left: 50%;
          margin-left: -60px;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .tooltip-text::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          margin-left: -5px;
          border-width: 5px;
          border-style: solid;
          border-color: #555 transparent transparent transparent;
        }

        .tooltip-container:hover .tooltip-text {
          visibility: visible;
          opacity: 1;
        }
      `}</style>
      <footer id="uc-footer" className="uc-footer panel overflow-hidden uc-dark">
        <div className="footer-outer pb-4 lg:pb-6 dark:bg-gray-800 dark:text-white m-2 rounded-2 lg:rounded-3">
          <div className="uc-footer-content pt-6 lg:pt-8">
            <div className="container xl:max-w-xl">
              <div className="uc-footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
                <div className="uc-footer-widgets panel">
                  <div className="row child-cols-6 md:child-cols col-match g-4">
                    <div className="col-12 lg:col-6">
                      <div className="panel vstack items-start gap-3 xl:gap-4 lg:max-w-1/2">
                        <div>
                          <Link href={`/`}>
                            <Image
                              className="text-primary"
                              alt="Outreach Panda logo"
                              src="/assets/images/common/logo-dark.svg"
                              width="250"
                              height="40"
                            />
                          </Link>
                          <p className="mt-2">
                            Supercharge your outreach, connect with more leads, and grow your business.
                          </p>
                        </div>
                        <div className="tooltip-container" style={{ cursor: 'not-allowed' }}>
                          <LanguageSelect />
                          <div 
                            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                          >
                            <i className="icon icon-1 unicon-lock"></i>
                          </div>
                          <span className="tooltip-text">We're working on it.</span>
                        </div>
                      </div>
                    </div>
                    {footerLinks4.map((section, index) => (
                      <div key={index} className={section.extraClass || ""}>
                        <ul className="nav-y gap-2 fw-medium">
                          <li className="fs-7 text-uppercase dark:text-gray-300">
                            {section.title}
                          </li>
                          {section.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              {link.isLink ? (
                                <Link href={link.href}>{link.text}</Link>
                              ) : (
                                <a href={link.href}>{link.text}</a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="uc-footer-bottom panel vstack lg:hstack gap-4 justify-between text-center pt-4 lg:pt-6 border-top dark:text-white">
                  <p className="opacity-60">
                    Outreach Panda © 2025, All rights reserved.
                  </p>
                  <ul className="nav-x justify-center gap-2 text-gray-300">
                    {socialLinks.map((link, index) => (
                      <li key={index}>
                        <a href={link.href}>
                          <i className={`icon icon-2 ${link.iconClass}`} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
