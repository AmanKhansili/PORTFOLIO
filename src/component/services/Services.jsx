import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>INTRODUCTION</h2>
          <p>"Hello,</p>
          <p>
            I'm Aman Khansili, a recent graduate with a degree in B.Tech. Though
            I'm a newcomer, my studies have equipped me with a solid foundation
            in Front-end. Eager to contribute my skills and continue learning in
            the ever-evolving world of web development."
          </p>
          <button>RESUME</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>SKILLS</h2>
          <ol>
            <li>
              <p>
                <img src="/html.png" alt="" /> HTML : Creates the structure of
                websites using HTML for a strong foundation.
              </p>
            </li>
            <li>
              <img src="/css.png" alt="" /> CSS: Designs visually appealing and
              responsive web pages with CSS.
            </li>
            <li>
              <img src="/js.png" alt="" /> JavaScript: Uses JS to add dynamic
              and interactive features to websites.
            </li>
            <li>
              <img src="/react.png" alt="" /> ReactJs: Builds modern and
              user-friendly interfaces with React.
            </li>
            <li>
              <img src="/git.png" alt="" /> Git: Manages and tracks code changes
              efficiently with Git for collaborative development.
            </li>
          </ol>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
