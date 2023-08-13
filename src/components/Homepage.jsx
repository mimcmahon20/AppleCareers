import React, { useRef, useEffect } from "react";
import "../styles/Homepage.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import photoonedesktop from "../assets/photoonedesktop.jpg";
import phototwodesktop from "../assets/phototwodesktop.jpg";
import photothreedesktop from "../assets/photothreedesktop.jpg";
import leftgridphoto from "../assets/leftgridphoto.jpg";
import topgridphoto from "../assets/topgridphoto.jpg";
import bottomgridphoto from "../assets/bottomgridphoto.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Homepage() {
  const videoWrapperRef = useRef(null);
  const finalVideoTextRef = useRef(null);
  const initialVideoTextRef = useRef(null);
  const videoContainerRef = useRef(null);

  const firstTextUnderVideoRef = useRef(null);
  const textUnderVideoRef = useRef(null);
  const secondTextUnderVideoRef = useRef(null);

  const photoOneRef = useRef(null);
  const firstTextUnderPhotoRef = useRef(null);
  const firstTextUnderPhotoContainerRef = useRef(null);

  const photoTwoRef = useRef(null);
  const secondTextUnderPhotoRef = useRef(null);
  const secondTextUnderPhotoContainerRef = useRef(null);

  const photoThreeRef = useRef(null);
  const thirdTextUnderPhotoRef = useRef(null);
  const thirdTextUnderPhotoContainerRef = useRef(null);
  const extraTextUnderThirdPhoto = useRef(null);

  const photoGridRef = useRef(null);

  const tempSpacerRef = useRef(null);

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

    let tlTextOneUnderVideo = gsap.timeline({});
    tlTextOneUnderVideo.fromTo(
      firstTextUnderVideoRef.current,
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: textUnderVideoRef.current,
          start: "top bottom-=250",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );

    let tlTextTwoUnderVideo = gsap.timeline({});
    tlTextTwoUnderVideo.fromTo(
      secondTextUnderVideoRef.current,
      { opacity: 0, y: 250 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: textUnderVideoRef.current,
          start: "top bottom-=500",
          end: "top center-=250",
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
          markers: false,
        },
      }
    );

    let tlPhotoTwoText = gsap.timeline({});
    tlPhotoTwoText.fromTo(
      photoTwoRef.current.children[0],
      { y: 500 },
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: photoTwoRef.current,
          start: "top-=250 center-=250",
          end: "center center",
          scrub: true,
          markers: false,
        },
      }
    );

    let tlTextUnderPhotoTwo = gsap.timeline({});
    tlTextUnderPhotoTwo.fromTo(
      secondTextUnderPhotoRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: secondTextUnderPhotoContainerRef.current,
          start: "top center",
          end: "center center",
          scrub: true,
          markers: false,
        },
      }
    );

    let tlPhotoThreeText = gsap.timeline({});
    tlPhotoThreeText.fromTo(
      photoThreeRef.current.children[0],
      { y: 500 },
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: photoThreeRef.current,
          start: "top-=250 center-=250",
          end: "center center",
          scrub: true,
          markers: false,
        },
      }
    );

    let tlTextUnderPhotoThree = gsap.timeline({});
    tlTextUnderPhotoThree.fromTo(
      thirdTextUnderPhotoRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: thirdTextUnderPhotoContainerRef.current,
          start: "top center",
          end: "center center",
          scrub: true,
          markers: false,
        },
      }
    );

    let tlExtraTextUnderPhotoThree = gsap.timeline({});
    tlExtraTextUnderPhotoThree.fromTo(
      extraTextUnderThirdPhoto.current,
      { y: window.innerHeight / 2 },
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: thirdTextUnderPhotoContainerRef.current,
          start: "center center",
          end: "bottom center+=250",
          scrub: true,
          markers: false,
        },
      }
    );

    let tlphotoGridRef = gsap.timeline({});
    tlphotoGridRef.fromTo(
      photoGridRef.current,
      {
        gap: "100px 8px",
      },
      {
        gap: "8px 8px",
        duration: 1,
        scrollTrigger: {
          trigger: photoGridRef.current,
          start: "top-=250 center-=250",
          end: "center center",
          scrub: true,
          markers: true,
        },
      }
    );

    window.addEventListener("scroll", () => {
      if (
        firstTextUnderPhotoContainerRef.current.getBoundingClientRect().y <= 0
      ) {
        firstTextUnderPhotoRef.current.style.position = "unset";
        photoTwoRef.current.style.display = "block";
      } else {
        firstTextUnderPhotoRef.current.style.position = "fixed";
        photoTwoRef.current.style.display = "none";
        secondTextUnderPhotoRef.current.style.display = "none";
      }

      if (
        secondTextUnderPhotoContainerRef.current.getBoundingClientRect().y <= 0
      ) {
        secondTextUnderPhotoRef.current.style.display = "block";
        secondTextUnderPhotoRef.current.style.position = "unset";
      } else {
        secondTextUnderPhotoRef.current.style.position = "fixed";
      }
      console.log(
        thirdTextUnderPhotoContainerRef.current.getBoundingClientRect().y
      );

      if (
        thirdTextUnderPhotoContainerRef.current.getBoundingClientRect().y <=
        -window.innerHeight
      ) {
        thirdTextUnderPhotoRef.current.style.display = "block";
        thirdTextUnderPhotoRef.current.style.paddingTop =
          window.innerHeight + "px";
        thirdTextUnderPhotoRef.current.style.position = "unset";
      } else {
        thirdTextUnderPhotoRef.current.style.position = "fixed";
        thirdTextUnderPhotoRef.current.style.paddingTop = "0px";
      }
    });
  }, []);

  return (
    <div className="homepage">
      <div className="hero-video-relative-container" ref={videoWrapperRef}>
        <section className="hero-video-wrapper" ref={videoContainerRef}>
          <div className="hero-video">
            <video className="hero-video" autoPlay muted loop>
              <source src="/Videos/herovideo.mp4" type="video/mp4" />
            </video>
          </div>
        </section>
        <section className="hero-text-container" ref={initialVideoTextRef}>
          <h2 className="hero-text">Students</h2>
          <h1 className="hero-text">Gain more than experience.</h1>
          <h1 className="hero-text">Gain an Apple experience.</h1>
        </section>
        <section
          className="hero-text-container-secondary"
          ref={finalVideoTextRef}
        >
          <h1 className="hero-text">
            Set your sights high. Because experience is about more than work
            itself - it's about how you learn and who you learn from. At Apple,
            you`ll start a career doing important work with people who`ve made
            Apple what it is today. So that you can make it what it is tomorrow.
          </h1>
        </section>
      </div>

      <section className="section-fullscreen">
        <div className="text-section-container" ref={textUnderVideoRef}>
          <div className="first-text-under-video" ref={firstTextUnderVideoRef}>
            <h1 className="large-text padding-top">
              Different Opportunities for Different Students
            </h1>
            <p className="small-text padding-bottom bold">
              Part-time, full-time. On campus, off campus. During summer, or all
              year long. Each of these roles helps you build a career and
              connections while you`re studying.
            </p>
          </div>
          <div
            className="second-text-under-video"
            ref={secondTextUnderVideoRef}
          >
            <h2 className="large-text">Apple Internships</h2>
            <p className="small-text">
              Come to Apple as an intern and you`ll be welcomed as a full
              contributor — a true part of the team — collaborating with some of
              the best minds in the world. Whether you sign on for a summer
              internship or a co-op during the academic year, you`ll do hands-on
              work on critical projects at an Apple campus. We`re open to those
              enrolled full-time and pursuing a bachelor`s degree, master`s
              degree, or doctorate, in technical or nontechnical fields, so you
              can apply what you`re studying now to your work as an Apple
              intern.
            </p>
            <div className="text-links">
              <button className="link">Find Available internships </button>
              <button className="link">
                Watch the film about what it`s like to become an Apple intern
              </button>
            </div>
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
              at participating schools. Working part-time, you`ll use your love
              of Apple products and services to bring that experience to others
              in your college community: fellow students, the campus store,
              faculty, administration — even parents. Each school is unique, so
              you`ll tailor initiatives to your own campus to drive awareness of
              offerings, sales, and special events. You`ll build connections as
              you partner with Apple groups such as our Higher Education Sales
              team, Product Marketing team, and Apple Services team, which
              includes Apple Music and Apple TV+. This role could be a great fit
              if you`re comfortable planning and presenting, and you`re already
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

      <section className="section-fullscreen">
        <div className="photo-section-container" ref={photoTwoRef}>
          <section className="photo-text right">
            <h1 className="photo-quote">
              “You`re really seen as the Apple leader for your community — while
              you`re contributing to campus life.”
            </h1>
            <h3 className="photo-reference">
              Jacob, Apple Sales account executive and former Apple Campus
              Leader
            </h3>
            <button className="photo-link">Read Jacob's Story</button>
          </section>
          <img
            src={phototwodesktop}
            alt="photoonedesktop"
            className="photo-section-image"
          />
        </div>
      </section>

      <div className="text-location" ref={secondTextUnderPhotoContainerRef}>
        <section
          className="section-fullscreen absolute-under clear"
          ref={secondTextUnderPhotoRef}
        >
          <div className="text-section-container fixed">
            <h1 className="large-text padding-top">
              Apple Support College Advisor
            </h1>
            <p className="small-text padding-bottom">
              At participating universities, you can join us part-time, working
              on the team that provides world-class technical support. When
              customers contact Apple for help, Advisors are their human
              connection: friendly, thoughtful, and real. You`ll answer
              questions about our products and services, and you`ll troubleshoot
              issues. There`s no need to be a tech expert. We`ll train you, so
              you`re ready to help people get back to doing what they love. A
              big part of your training covers the professional and
              collaborative communication skills that are so important for this
              role and any career. It`s the listening skills you`ll develop that
              make it clear you`re not simply supporting technology — you`re
              supporting people.
            </p>
            <div className="text-links">
              <button className="link">
                Find Available Apple Support College Advisor opportunities
              </button>
              <button className="link">
                Learn more about the Apple Support College Advisor role
              </button>
            </div>
          </div>
        </section>
      </div>

      <section className="section-fullscreen">
        <div className="photo-section-container" ref={photoThreeRef}>
          <section className="photo-text">
            <h1 className="photo-quote">
              “I learned to be the cool and calm problem solver — even when
              things got challenging.”
            </h1>
            <h3 className="photo-reference">
              Quincy, Apple IS&T analyst and former Apple Support College
              Advisor
            </h3>
            <button className="photo-link">Read Quincy's Story</button>
          </section>
          <img
            src={photothreedesktop}
            alt="photothreedesktop"
            className="photo-section-image"
          />
        </div>
      </section>

      <div
        className="text-location final-text-location"
        ref={thirdTextUnderPhotoContainerRef}
      >
        <section
          className="section-fullscreen absolute-under clear"
          ref={thirdTextUnderPhotoRef}
        >
          <div className="text-section-container fixed">
            <h1 className="large-text padding-top">
              Apple Store and Retail Partner Store
            </h1>
            <p className="small-text padding-bottom">
              Work at an Apple Store, where different roles can support a range
              of interests and goals, or work at a retail partner store,
              ensuring that customers get a great Apple retail experience there,
              too. Both part-time and full-time positions are available, and no
              tech experience is needed. We’ll provide the training you need for
              your role and the support to help you grow both personally and
              professionally.
            </p>
            <div className="text-links">
              <button className="link">
                Find available Apple Store and retail partner store
                opportunities
              </button>
            </div>
          </div>

          <section
            className="extra-text text-section-container"
            ref={extraTextUnderThirdPhoto}
          >
            <div className="extra-text-container">
              <h1 className="large-text">
                Opportunities After You’ve Graduated
              </h1>
              <p className="small-text padding-bottom">
                We’ve always thought of Apple as the intersection of technology
                and the liberal arts. That’s why we look for a wide range of
                great minds, in technical and nontechnical fields, regardless of
                the degree. With so many ways to contribute here, chances are
                good you’ll find a way to do what you love.
              </p>
              <div className="text-links">
                <button className="link">Learn about work at Apple</button>
              </div>
            </div>
          </section>
        </section>
      </div>

      <section className="three-photo-container">
        <div className="three-photo-grid" ref={photoGridRef}>
          <div className="three-photo-item left-grid-item">
            <img src={leftgridphoto} alt="gridphoto"></img>
          </div>
          <div className="three-photo-item top-grid-item">
            <img src={topgridphoto} alt="gridphoto"></img>
          </div>
          <div className="three-photo-item bottom-grid-item">
            <img src={bottomgridphoto} alt="gridphoto"></img>
          </div>
        </div>
      </section>

      <section className="section-fullscreen">
        <div className="values-section">
          <div className="values-section-container">
            <h2 className="medium-text">Apple Values</h2>
            <h1 className="large-text">
              An Apple experience respects and reflects what’s important. To
              you.
            </h1>
            <p className="small-text">
              Each of us here is inspired to do work that aligns with our
              personal values. And we thrive in a culture that helps us feel
              supported, connected, and empowered.
            </p>
            <div className="value-link-container">
              <button className="value-link">
                Learn more about Apple Values
              </button>
              <button className="value-link">
                Learn more about Apple Values
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="spacer" ref={tempSpacerRef}></div>
    </div>
  );
}
