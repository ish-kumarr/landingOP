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
                          <div className="cstack w-96px h-96px rounded-circle mt-2 bg-gray-900 dark:bg-white bg-opacity-5 dark:bg-opacity-15">
                            {index === 0 ? (
                              <animated-icons
                                src="https://animatedicons.co/get-icon?name=Audience%20Reach&style=minimalistic&token=a566e2c2-ed78-4e8f-9adb-3283a20f035c"
                                trigger="hover"
                                attributes='{"variationThumbColour":"#536DFE","variationName":"Two Tone","variationNumber":2,"numberOfGroups":2,"backgroundIsGroup":false,"strokeWidth":0.88,"defaultColours":{"group-1":"#969696FF","group-2":"#4F9276FF","background":"#FFFFFFFF"}}'
                                height="64"
                                width="64"
                              ></animated-icons>
                            ) : index === 1 ? (
                              <animated-icons
                                src="https://animatedicons.co/get-icon?name=mail&style=minimalistic&token=e55f9897-402e-4453-b539-03e933b6d7fa"
                                trigger="hover"
                                attributes='{"variationThumbColour":"#536DFE","variationName":"Two Tone","variationNumber":2,"numberOfGroups":2,"backgroundIsGroup":false,"strokeWidth":0.88,"defaultColours":{"group-1":"#FFFFFFFF","group-2":"#4F9276FF","background":"#FFFFFF"}}'
                                height="96"
                                width="96"
                              ></animated-icons>
                            ) : index === 2 ? (
                              <animated-icons
                                src="https://animatedicons.co/get-icon?name=Alert&style=minimalistic&token=4ff92fe8-3f2e-471b-beff-2c28789b1813"
                                trigger="hover"
                                attributes='{"variationThumbColour":"#536DFE","variationName":"Two Tone","variationNumber":2,"numberOfGroups":2,"backgroundIsGroup":false,"strokeWidth":0.88,"defaultColours":{"group-1":"#969696FF","group-2":"#4F9276FF","background":"#FFFFFFFF"}}'
                                height="64"
                                width="64"
                              ></animated-icons>
                            ) : index === 3 ? (
                              <animated-icons
                                src="https://animatedicons.co/get-icon?name=Messenger&style=minimalistic&token=e351bf5e-a209-43df-8954-18453d36f82f"
                                trigger="hover"
                                attributes='{"variationThumbColour":"#536DFE","variationName":"Two Tone","variationNumber":2,"numberOfGroups":2,"backgroundIsGroup":false,"strokeWidth":0.88,"defaultColours":{"group-1":"#969696FF","group-2":"#4F9276FF","background":"#FFFFFFFF"}}'
                                height="64"
                                width="64"
                              ></animated-icons>
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
              href={`/page-features`}
              className="uc-link fw-bold d-inline-flex items-center gap-narrow text-crimson hover-text-crimson"
              style={{
                transform: "translateY(0.0097341px)",
                opacity: "0.999797",
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
