import bba from "../assets/images/bba.png";
import gga from "../assets/images/gga.png";
import dav from "../assets/images/dav.png";
import Asa from "../assets/images/Asa.png";
import net from "../assets/images/net.png";
import cyfa from "../assets/images/cyfa.png";
import best from "../assets/images/best.png";
import ggg from "../assets/images/ggg.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://cyfalytics-io-rqg5.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={best} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://cyfalytics-io-rqg5.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Cyfalytics.io</h2>
          </a>
          <p>
            A modern, real-time AI analytics dashboard built with Next.js 14
            (App Router), TailwindCSS, Recharts, and Clerk Authentication. While
            originally designed to optimize inventory and sales tracking for
            Nigerian gadget stores, the architecture is fully adaptable to any
            e-commerce business. It features a responsive UI and secure
            authentication to deliver instant data insights.
          </p>
        </div>

        <div className="project">
          <a
            href="https://cyfa-tech-gadgets-and-accessories.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={cyfa} className="zoom" alt="thumbnail" width="100%" />
          </a>

          <a
            href="https://cyfa-tech-gadgets-and-accessories.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Cyfa Tech Gadgets & Accessories</h2>
          </a>
          <p>
            A production-grade e-commerce application engineered with Next.js
            and Tailwind CSS. This platform features a scalable product
            architecture for high-volume gadget inventory and a fully integrated
            Stripe payment gateway, delivering a secure and optimized checkout
            experience.
          </p>
        </div>

        <div className="project">
          <a
            href="https://study-buddy-two-eta.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={bba} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://study-buddy-two-eta.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>StudyBuddy</h2>
          </a>
          <p>
            {" "}
            Next.js-powered learning platform that integrates GitHub's API to
            deliver courses, source code, and documentation in a unified
            interface. Provides seamless access to educational repositories with
            real-time synchronization and code browsing capabilities.
          </p>
        </div>
        <div className="project">
          <a
            href="https://c-t-recipe-finder-qsql-murex.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ggg} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://c-t-recipe-finder-qsql-murex.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>C.T Recipe Finder</h2>
          </a>
          <p>
            A Flutter-powered recipe finder app that uses TheMealDB API to
            explore meals by category, search ingredients, view detailed cooking
            instructions, and save favorites — all with a clean UI and smooth
            animations.
          </p>
        </div>
        <div className="project">
          <a
            href="https://chatterly-lbrt.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Asa} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://chatterly-lbrt.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Chatterly!</h2>
          </a>
          <p>
            A minimal Flutter chat app using Firebase involving setting up a
            Flutter project, integrating Firebase Authentication for user
            login/registration, and using Firebase Firestore for real-time
            messaging. The app would likely feature a simple UI with a list of
            users, a chat room, light & dark mode options.
          </p>
        </div>
        <div className="project">
          <a
            href="https://to-do-lou-flutter-todo-app.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={dav} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://to-do-lou-flutter-todo-app.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>to-do-LOU!</h2>
          </a>
          <p>
            A to-do list app build with flutter that allows you to store all
            yours to-dos in one place. Set reminders, due dates etc. whether for
            a “me” day or critical project deadline, don't mean much if they're
            not done in time.
          </p>
        </div>

        <div className="project">
          <a
            href="https://nosacyfa001.github.io/angular-pop-balloon-pop/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gga} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://nosacyfa001.github.io/angular-pop-balloon-pop/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Pop Ballon Pop Game</h2>
          </a>
          <p>
            This is a fast-paced balloon popping game built with Angular,
            designed for fun and interactivity. The game challenges users to pop
            as many balloons as possible within a time limit, offering an
            engaging way to demonstrate DOM manipulation, animations, and
            real-time UI updates using Angular’s reactive programming model.
          </p>
        </div>
        <div className="project">
          <a
            href="https://my-netflix-clone-iota.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={net} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://my-netflix-clone-iota.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Netflix Clone</h2>
          </a>
          <p>
            A fully responsive Netflix-inspired streaming platform built with
            React, Firebase, and TMDB API. This project replicates the core
            functionality of Netflix, including user authentication, movie
            browsing, trailers, and personalized lists.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
