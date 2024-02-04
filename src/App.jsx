import "./app.scss";
import Hero from "./component/hero/Hero";
import Navbar from "./component/navbar/Navbar";
const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero/>
      </section>
      <section id="Services">Parallax</section>
      <section>Services</section>
      <section id="Portfolio">Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
      {/* <Test />
      <Test /> */}
    </div>
  );
};

export default App;
