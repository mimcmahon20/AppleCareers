import React, { useRef, useEffect } from "react";
import "../styles/Homepage.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import photoonedesktop from "../assets/photoonedesktop.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Homepage() {
  const videoWrapperRef = useRef(null);
  const finalVideoTextRef = useRef(null);
  const initialVideoTextRef = useRef(null);
  const videoContainerRef = useRef(null);

  const photoOneRef = useRef(null);
  const firstTextUnderPhotoRef = useRef(null);
  const firstTextUnderPhotoContainerRef = useRef(null);

  useEffect(() => {
    let tlVideoText = gsap.timeline({});
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
          markers: false,
        },
      }
    );

    let tlVideoHero = gsap.timeline({});
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

    let tlPhotoOneText = gsap.timeline({});
    tlPhotoOneText.fromTo(
      photoOneRef.current.children[0],
      { y: 500 },
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: photoOneRef.current,
          start: "top-=250 center-=250",
          end: "center center",
          scrub: true,
          markers: false,
        },
      }
    );

    let tlTextUnderPhotoOne = gsap.timeline({});
    tlTextUnderPhotoOne.fromTo(
      firstTextUnderPhotoRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: firstTextUnderPhotoContainerRef.current,
          start: "top center",
          end: "center top",
          scrub: true,
          markers: true,
        },
      }
    );

    window.addEventListener("scroll", () => {
      if (
        firstTextUnderPhotoContainerRef.current.getBoundingClientRect().y <= 0
      ) {
        console.log("hello");
        firstTextUnderPhotoRef.current.style.position = "unset";
      } else {
        firstTextUnderPhotoRef.current.style.position = "fixed";
      }
    });
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

      <section className="section-fullscreen">
        <div className="text-section-container">
          <h1 className="large-text padding-top">
            Different Opportunities for Different Students
          </h1>
          <p className="small-text padding-bottom">
            Part-time, full-time. On campus, off campus. During summer, or all
            year long. Each of these roles helps you build a career and
            connections while you`re studying.
          </p>
          <h2 className="large-text">Apple Internships</h2>
          <p className="small-text">
            Come to Apple as an intern and you`ll be welcomed as a full
            contributor — a true part of the team — collaborating with some of
            the best minds in the world. Whether you sign on for a summer
            internship or a co-op during the academic year, you`ll do hands-on
            work on critical projects at an Apple campus. We`re open to those
            enrolled full-time and pursuing a bachelor`s degree, master`s
            degree, or doctorate, in technical or nontechnical fields, so you
            can apply what you`re studying now to your work as an Apple intern.
          </p>
          <div className="text-links">
            <button className="link">Find Available internships </button>
            <button className="link">
              Watch the film about what it`s like to become an Apple intern
            </button>
          </div>
        </div>
      </section>

      <section className="section-fullscreen">
        <div className="photo-section-container" ref={photoOneRef}>
          <section className="photo-text">
            <h1 className="photo-quote">
              “I worked on some of Apple`s newest products, so my contributions
              really meant something.”
            </h1>
            <h3 className="photo-reference">
              Desireh, Apple electrical engineer and Apple intern class of 2017
            </h3>
            <button className="photo-link">Read Desireh's Story</button>
          </section>
          <img
            src={photoonedesktop}
            alt="photoonedesktop"
            className="photo-section-image"
          />
        </div>
      </section>

      <div className="text-location" ref={firstTextUnderPhotoContainerRef}>
        <section
          className="section-fullscreen absolute-under"
          ref={firstTextUnderPhotoRef}
        >
          <div className="text-section-container fixed">
            <h1 className="large-text padding-top">Apple Campus Leader</h1>
            <p className="small-text padding-bottom">
              We look for highly motivated students to represent Apple on campus
              at participating schools. Working part-time, you’ll use your love
              of Apple products and services to bring that experience to others
              in your college community: fellow students, the campus store,
              faculty, administration — even parents. Each school is unique, so
              you’ll tailor initiatives to your own campus to drive awareness of
              offerings, sales, and special events. You’ll build connections as
              you partner with Apple groups such as our Higher Education Sales
              team, Product Marketing team, and Apple Services team, which
              includes Apple Music and Apple TV+. This role could be a great fit
              if you’re comfortable planning and presenting, and you’re already
              connected with groups and organizations at your school.
            </p>
            <div className="text-links">
              <button className="link">
                Find Available Apple Campus Leader opportunities
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
