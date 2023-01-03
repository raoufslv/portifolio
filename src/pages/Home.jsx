import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className=" text-white">
      <Navbar />
      <div>
        <section id="Home" className=" w-screen h-screen bg-primary pt-20">
          {/* boxes */}
          <div className="bg-secondary-transparent h-1/2 w-1/6 absolute bottom-44 right-32"></div>
          <div className="bg-secondary-transparent box opacity-80 rounded absolute bottom-0 left-0 "></div>
          <div className="bg-secondary-transparent box rounded absolute bottom-10 left-10 "></div>
          <div className="bg-secondary-transparent box rounded absolute bottom-1/3 persenolize z-20"></div>
          <div className="bg-secondary-transparent h-1/6 w-24 rounded absolute persenolize2"></div>

          <div className="mt-20 ml-20">
            <h2 className="text-xl font-bold">Hello, i'm</h2>
            <h1 className=" text-9xl font-bold mt-6 flex gap-64 navbar-font">
              <span>Raouf</span>
              <span className="last-name z-10">ABDALLAH</span>
            </h1>
            <h1 className="text-4xl font-bold mt-6">Front-End Developer</h1>
            <div className="flex gap-20 my-10">
              <button className="px-6 py-4 bg-slate-500 rounded text-2xl font-semibold flex gap-4">
                Contact
                <img src="src/assets/mail.svg" className=" w-8" alt="sa" />
              </button>
              <button className="text-xl mb-1">About Me</button>
            </div>
          </div>

          <img
            src="src/assets/raouf2.png"
            className="w-1/3 absolute bottom-0 right-80 z-10"
            alt=""
          />
          <img
            src="src/assets/mouse.svg"
            className=" absolute bottom-0 left-1/2 right-1/2 mb-5"
            alt=""
          />
        </section>

        <section
          id="About"
          className=" w-screen h-screen bg-secondary relative flex gap-72 items-center pl-72"
        >
          {/* boxes */}
          <div className="bg-primary h-80 w-1/6 absolute bottom-96 rounded right-32"></div>
          <div className="bg-primary-transparent box rounded absolute bottom-0 left-0 "></div>
          <div className="bg-primary-transparent box rounded absolute bottom-10 left-10 "></div>
          <div className="bg-primary h-1/4 w-40 left-56 rounded absolute "></div>
          <div className=" bg-transparent border-4 h-1/3 w-44 left-40 z-20 top-28 absolute "></div>

          <div className="z-10">
            <div className="bg-black rounded-xl w-56 mb-60 ">
              <img src="src/assets/raouf.png" className="rounded-xl" alt="" />
            </div>
          </div>
          <div className=" z-10">
            <h3 className="text-primary text-2xl mb-5 font-semibold">
              About Me
            </h3>
            <h2 className=" text-5xl text-primary navbar-font font-medium">
              <span className="text-white">I'm</span> Raouf
              <br />
              ABDALLAH,
              <br />
              <span className="text-white">a Web</span>
              <br />
              Developer
            </h2>
            <h3 className="text-white text-2xl mt-5 font-medium">
              Based in Algiers, Algeria
            </h3>
            <p className=" w-96 mt-8 text-lg">
              I'm a Front-end web developer with 1+ year of experience in
              designing and building responsive web apps. Proficient in CSS,
              React Js as well as a good knowledge in Backend with PHP, with
              knowledge of UI, UX.
            </p>
            <button className=" bg-primary px-5 py-3 rounded mt-10 flex justify-center items-center gap-2">
              Download CV
              <img
                src="src/assets/download.svg"
                className=" w-10"
                alt="download icon"
              />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
