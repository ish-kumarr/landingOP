'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const textArray = [
  'More Meetings.',
  'More Clients.',
  'More Replies.',
  'More Revenue.',
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationPhase, setAnimationPhase] = useState('enter'); // enter, shimmer1, shimmer2, exit
  const [textWidth, setTextWidth] = useState('auto');
  const textMeasureRef = useRef(null);

  useEffect(() => {
    let phaseTimeout;

    if (animationPhase === 'enter') {
      // After enter animation (0.5s), immediately start shimmer1
      phaseTimeout = setTimeout(() => {
        setAnimationPhase('shimmer1');
      }, 500); // Duration of animated-text-enter
    } else if (animationPhase === 'shimmer1') {
      // Shimmer1 for 1.5s, then start shimmer2
      phaseTimeout = setTimeout(() => {
        setAnimationPhase('shimmer2');
      }, 1500); // Duration of shimmer1
    } else if (animationPhase === 'shimmer2') {
      // Shimmer2 for 1.5s, then exit
      phaseTimeout = setTimeout(() => {
        setAnimationPhase('exit');
      }, 1500); // Duration of shimmer2
    } else if (animationPhase === 'exit') {
      // After exit animation (0.5s), change text and restart
      phaseTimeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        setAnimationPhase('enter');
      }, 500); // Duration of animated-text-exit
    }

    return () => clearTimeout(phaseTimeout);
  }, [animationPhase]);

  useEffect(() => {
    if (textMeasureRef.current) {
      // Add a small buffer to prevent text from being clipped due to sub-pixel rendering or font differences
      setTextWidth(textMeasureRef.current.scrollWidth + 5 + 'px');
    }
  }, [currentIndex, animationPhase]); // Recalculate width when text or phase changes

  let textAnimationClass = '';
  if (animationPhase === 'enter') {
    textAnimationClass = 'animated-text-enter';
  } else if (animationPhase === 'exit') {
    textAnimationClass = 'animated-text-exit';
  }

  return (
    <div
      id="hero-section"
      className="overview section panel overflow-hidden uc-dark lg:m-2 lg:rounded-3 scrollSpysection"
      style={{
        position: 'relative',
        WebkitMaskImage: 'radial-gradient(circle, white, black)',
        maskImage: 'radial-gradient(circle, white, black)',
      }}
    >
      <div
        className="position-cover bg-white dark:bg-gray-900"
        style={{ borderRadius: 'inherit', overflow: 'hidden', zIndex: -1 }}
      />
      <div
        className="position-cover opacity-70 bg-contain"
        style={{
          backgroundPosition: '50% 85%',
          borderRadius: 'inherit',
          overflow: 'hidden',
        }}
        data-src="/assets/images/template/pricing-06-bg-masked.png"
        data-uc-img=""
      />
      <div className="position-cover bg-gradient-to-t from-gray-800 via-transparent to-gray-900" />
      <div
        className="position-absolute d-inline-block w-500px h-500px rounded-circle bg-gradient-45 from-primary to-white start-50 blur-10 translate-middle blend-color-dodge"
        style={{ top: '0%' }}
      />
      <div
        className="position-absolute d-inline-block w-250px h-250px rounded-circle bg-gradient-45 from-primary to-white start-0 blur-10 translate-middle blend-color-dodge"
        style={{ top: '0%' }}
      />
      <div
        className="position-absolute d-inline-block w-250px h-250px rounded-circle bg-gradient-45 from-primary to-white start-100 blur-10 translate-middle blend-color-dodge"
        style={{ top: '0%' }}
      />
      <div className="section-outer panel pt-9 xl:pt-10">
        <div className="container xl:max-w-xl">
          <div className="section-inner panel pt-0 lg:pt-4 xl:pt-0">
            <div className="row child-cols-12 justify-center items-center g-6 xl:g-8">
              <div>
                <div
                  className="panel vstack justify-center items-center gap-3 max-w-600px lg:max-w-750px mx-auto px-2 lg:px-0 text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <div
                    className="position-absolute z-2"
                    style={{ top: '40%', right: '10%' }}
                  >
                    {/* Image comments */}
                  </div>
                  <div
                    className="position-absolute z-2"
                    style={{ bottom: '0%', left: '10%' }}
                  >
                    {/* Image comments */}
                  </div>
                  <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                    <span className="d-inline-block w-4px h-4px rounded-circle bg-primary-400" />
                    <span className="fs-8 fw-bold text-uppercase text-white">
                      Launch offer: <span className="font-bold">20% off</span> on
                      annual plans!
                    </span>
                  </div>
                  <h1 className="h1 sm:display-6 md:display-5 lg:display-4 xl:display-3 m-0 text-white">
                    Smarter Outreach.
                    <span
                      className={`shimmer-text d-inline-block rounded-1 lg:rounded-1-5 -rotate-1 lg:-rotate-2 bg-secondary px-1 text-primary ${animationPhase === 'shimmer1' || animationPhase === 'shimmer2' ? 'animate-shimmer' : ''}`}
                      style={{ position: 'relative', overflow: 'hidden', width: textWidth }}
                    >
                      <span
                        key={currentIndex}
                        className={`d-inline-block ${textAnimationClass}`}
                        style={{ whiteSpace: 'nowrap' }}
                      >
                        {textArray[currentIndex]}
                      </span>
                      <span className="shimmer-overlay"></span>
                    </span>
                    {/* Hidden span to measure text width */}
                    <span
                      ref={textMeasureRef}
                      style={{
                        position: 'absolute',
                        visibility: 'hidden',
                        whiteSpace: 'nowrap',
                        fontSize: 'inherit',
                        fontWeight: 'inherit',
                        paddingLeft: '0.25rem',
                        paddingRight: '0.25rem',
                      }}
                    >
                      {textArray[currentIndex]}
                    </span>
                    <br />
                    More Sales.
                  </h1>
                  <p className="fs-5 xl:fs-4 text-black dark:text-white d-none md:d-block">
                    Outreach on Email, LinkedIn & Instagram—plus
                    response-driven content that turns leads into meetings.
                  </p>
                  <Link
                    href={`/page-pricing`}
                    className="btn btn-md lg:btn-lg btn-primary min-w-150px mt-2"
                  >
                    <span>Get started</span>
                    <i className="icon icon-narrow unicon-arrow-right fw-bold ltr:ms-narrow rtl:rotate-180 rtl:me-narrow" />
                  </Link>
                  <p className="fs-7 text-black dark:text-white"></p>
                </div>
              </div>
              <div>
                <div
                  className="panel"
                  data-anime="targets: >*:not(.dashboard-image); scale: [0.5, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <div
                    className="dashboard-image max-w-lg mx-auto max-h-250px lg:max-h-550px"
                    data-anime="translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                  >
                    <Image
                      className=""
                      alt="app-dashboard"
                      src="/assets/images/dashboard/dashboardpc.png"
                      width="1280"
                      height="853"
                      style={{ background: 'transparent' }}
                    />
                  </div>
                  <div className="position-absolute top-50 end-0 translate-middle-y mt-2 lg:me-5">
                    <Image
                      className="w-100px text-primary lg:rounded-2 shadow-xl"
                      alt="app-dashboard-helper-1"
                      data-anime="scale: [0.5, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 250;"
                      src="/assets/images/template/app-dashboard-helper-1.png"
                      width="306"
                      height="583"
                    />
                  </div>
                  {/* Image comments */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}