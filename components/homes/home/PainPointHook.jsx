'use client';
import { features2 } from "@/data/features"; // New import
import Link from "next/link"; // New import
import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image"; // Image is used in KeyFeatures.jsx, so it's needed here

const textArray = [
  'No Replies?',
  'Low Engagement?',
  'No Meetings?',
  'Wasted Efforts?',
];

export default function PainPointHook() {
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
    <div id="pain-point-hook-section" className="pain-point-hook section panel py-6 xl:py-9">
      <div className="container sm:max-w-md lg:max-w-lg xl:max-w-xl">
        <div className="section-inner panel">
          <h2 className="h2 text-center mb-6 lg:mb-8">
            Tired of Ghosted Messages &{" "}
            <span
              className={`shimmer-text d-inline-block rounded-1 lg:rounded-1-5 -rotate-1 lg:-rotate-2 px-1 ${animationPhase === 'shimmer1' || animationPhase === 'shimmer2' ? 'animate-shimmer' : ''}`}
              style={{ position: 'relative', overflow: 'hidden', width: textWidth, backgroundColor: '#FFEBEE', color: '#F44336' }}
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
          {/* Start of copied content from KeyFeatures.jsx */}
          <div
            className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8"
            data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            {/* The h2 from KeyFeatures.jsx is intentionally omitted */}
            <div className="panel">
              <div
                className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 xl:child-cols-3 items-center justify-center col-match g-3"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                {features2.map((feature, index) => (
                  <div key={index}>
                    <div
                      className={`feature-item panel p-4 rounded-2 border border-gray-300 hover-bg-crimson dark:text-white hover:text-white hover:scale-105 duration-150 transition-all ${feature.backgroundColor}`}
                    >
                      <div className="vstack panel min-h-250px">
                        <div className="vstack items-center text-center justify-between gap-2 h-100">
                          <div className="group cstack w-96px h-96px rounded-circle mt-2 bg-gray-900 dark:bg-white bg-opacity-5 dark:bg-opacity-15">
                            {index === 0 ? (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48" height="48" className="group-hover:text-red-500"><path d="M9 17C9 17 16 18 19 21H20C20.5523 21 21 20.5523 21 20V13.937C21.8626 13.715 22.5 12.9319 22.5 12C22.5 11.0681 21.8626 10.285 21 10.063V4C21 3.44772 20.5523 3 20 3H19C16 6 9 7 9 7H5C3.89543 7 3 7.89543 3 9V15C3 16.1046 3.89543 17 5 17H6L7 22H9V17ZM11 8.6612C11.6833 8.5146 12.5275 8.31193 13.4393 8.04373C15.1175 7.55014 17.25 6.77262 19 5.57458V18.4254C17.25 17.2274 15.1175 16.4499 13.4393 15.9563C12.5275 15.6881 11.6833 15.4854 11 15.3388V8.6612ZM5 9H9V15H5V9Z"></path></svg>
                            ) : index === 1 ? (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48" height="48" className="group-hover:text-red-500"><path d="M22 14H20V7.23792L12.0718 14.338L4 7.21594V19H15V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V14ZM4.51146 5L12.0619 11.662L19.501 5H4.51146ZM21.4142 19L23.5355 21.1213L22.1213 22.5355L20 20.4142L17.8787 22.5355L16.4645 21.1213L18.5858 19L16.4645 16.8787L17.8787 15.4645L20 17.5858L22.1213 15.4645L23.5355 16.8787L21.4142 19Z"></path></svg>
                            ) : index === 2 ? (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48" height="48" className="group-hover:text-red-500"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg>
                            ) : index === 3 ? (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,0,0,1)" width="48" height="48"><path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path></svg>
                            ) : (
                              <i className={`icon icon-4 ${feature.icon}`} />
                            )}
                          </div>
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Link
              href={`/#what_we_offer`}
              className="btn text-crimson"
              style={{
                padding: '8px 16px',
              }}
            >
              <span>End Your Outreach Pain</span>
              <i className="icon icon-1 unicon-arrow-right rtl:rotate-180" />
            </Link>
          </div>
          {/* End of copied content */}
        </div>
      </div>
    </div>
  );
}
