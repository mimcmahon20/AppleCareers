import React, { useRef, useEffect } from "react";
import "../styles/Homepage.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Homepage() {
  const videoWrapperRef = useRef(null);
  const finalVideoTextRef = useRef(null);
    const initialVideoTextRef = useRef(null);
  const videoContainerRef = useRef(null);

  useEffect(() => {
    console.log(videoContainerRef);
    let tlVideoHero = gsap.timeline({});
    let tlVideoText = gsap.timeline({});
    console.log(initialVideoTextRef.current.chilren);
    tlVideoText.fromTo(
        initialVideoTextRef.current.children,
        { opacity: 1 },
        {
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: initialVideoTextRef.current,
                start: "center center-=250",
                end: "bottom top",
                scrub: true,
                markers: true,
            }
        }
    );


    tlVideoHero.fromTo(
      videoContainerRef.current,
      { position: "fixed" },
      {
        position: "absolute",
        bottom: 0,
        duration: 1,
        scrollTrigger: {
            trigger: videoWrapperRef.current,
              start: "bottom bottom",
              end: "bottom bottom",
              scrub: true,
              markers: false,
          },
      }
    );
  }, []);

  return (
    <div className="homepage">
      <div className="hero-video-relative-container" ref={videoWrapperRef}>
        <section className="hero-video-wrapper" ref={videoContainerRef}>
          <div className="hero-video"></div>
        </section>
        <section className="hero-text-container" ref={initialVideoTextRef}>
          <h2 className="hero-text">Students</h2>
          <h1 className="hero-text">Gain more than experience.</h1>
          <h1 className="hero-text">Gain an Apple experience.</h1>
        </section>
        <section className="hero-text-container" ref={finalVideoTextRef}>
          <h1 className="hero-text">Hello!</h1>
        </section>
      </div>
    </div>
  );
}
