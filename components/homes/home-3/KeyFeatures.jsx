'use client';
import { features4 } from "@/data/features";
import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";

const textArray = [
  'Lead Magnet.',
  'Sales Engine.',
  'Growth Partner.',
  'Unfair Advantage.',
];

export default function KeyFeatures() {
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
<div id="key-features-section" className="key-features section panel overflow-hidden bg-gray-900 uc-dark">
      <div className="section-outer panel py-6 xl:py-9 dark:bg-gray-800">
        <div className="container sm:max-w-md lg:max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <h2
                className="title h3 lg:h2 xl:h1 m-0 text-center max-w-550px mx-auto"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
              >
                Why Outreach Panda is Your{" "}
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
              </h2>
              <div className="panel">
                <div
                  className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-3"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  {features4.map((feature, index) => (
                    <div key={index}>
                      <div className="feature-item panel p-4 border rounded-2 hover:bg-white dark:hover:bg-secondary dark:text-white dark:hover:text-gray-900 hover:scale-105 duration-150 transition-all">
                        <div className="vstack panel min-h-250px">
                          
                          <div className="vstack justify-between gap-2 h-100">
                            <i className={`icon icon-4 ${feature.icon}`} />
                            <div className="panel">
                              <div className="vstack gap-1">
                                <h3 className="title h5 m-0 text-inherit">
                                  {feature.title}
                                </h3>
                                <p className="desc fs-6 opacity-70">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </div>
                          <Link
                            href={`/page-features`}
                            className="position-cover"
                          ></Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
