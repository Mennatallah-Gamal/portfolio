import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Projects from "./components/projects/projects";

function App() {
  return (
    <>
      <div className="main-container">
        <Header />
        <Hero />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Contact />
        <div className="divider" />
        <Footer />
      </div>
    </>
  );
}

export default App;
