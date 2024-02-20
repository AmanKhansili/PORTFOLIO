import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "E-Library",
    img: "1.jpg",
    desc: "Explore a vast digital collection at our E-library website, offering a comprehensive range of e-books all accessible at your fingertips.",
    link: "https://amankhansili.github.io/BookRack/Home.html",
  },
  {
    id: 2,
    title: "Travelling",
    img: "2.jpg",
    link: "https://amankhansili.github.io/Web_Sites/",
    desc: "Discover your next adventure with our intuitive travel website.",
  },
  {
    id: 3,
    title: "Portfolio",
    img: "3.jpg",
    link: "https://portfolioamankhansili.netlify.app/",
    desc: "An elegantly designed portfolio website showcasing a diverse range of creative works, seamlessly blending artistic flair with user-friendly navigation.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link}>
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
