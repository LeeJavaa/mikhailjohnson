import { BsArrowUpRight } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <main className="font-raleway text-black w-screen h-screen lg:overflow-hidden slideDiv">
      <section className="w-80 mx-auto grid gap-3 mb-5 lg:w-11/12 lg:grid-cols-2 z-10">
        <h1
          className="font-bold text-4xl text-center mt-14 lg:text-7xl lg:col-span-2 lg:text-left animate-floatIn opacity-0"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        >
          mikh<span className="italic">a</span>il j
          <span className="italic">o</span>hns<span className="italic">o</span>
          n.
        </h1>
        <p
          className="w-full text-justify lg:col-span-2 lg:text-lg lg:w-1/2 lg:pb-4 opacity-0 animate-floatIn"
          style={{ animationDelay: '0.75s', animationFillMode: 'forwards' }}
        >
          mikhail johnson is an engineer and artist hailing from cape town,
          south africa. he has designed sets and executed installation art at
          some of the most popular festivals and events across the world.
        </p>
        <div className="grid gap-5 lg:self-start">
          <h3
            className="font-bold text-lg lg:text-2xl opacity-0 animate-floatIn"
            style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
          >
            Contact
          </h3>
          {/* eslint-disable react/jsx-no-constructed-context-values */}
          <ul className="relative grid gap-5 pl-16 lg:text-lg lg:pl-0">
            <li
              className="flex opacity-0 animate-floatIn"
              style={{ animationDelay: '1.15s', animationFillMode: 'forwards' }}
            >
              <p className="flex group hover:cursor-pointer">
                email
                <span className=" pl-1 pt-1.5 lg:pt-2.5 group-hover:rotate-45 transition-all duration-300 ease-out group-hover:pt-1.5">
                  <IconContext.Provider value={{ size: 12 }}>
                    <BsArrowUpRight />
                  </IconContext.Provider>
                </span>
              </p>
            </li>
            <li
              className="flex opacity-0 animate-floatIn"
              style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
            >
              <p className="flex group hover:cursor-pointer">
                <a href="https://www.instagram.com/mikhail_johnson/">
                  instagram
                </a>
                <span className=" pl-1 pt-1.5 lg:pt-2.5 group-hover:rotate-45 transition-all duration-300 ease-out group-hover:pt-1.5">
                  <IconContext.Provider value={{ size: 12 }}>
                    <BsArrowUpRight />
                  </IconContext.Provider>
                </span>
              </p>
            </li>
            <li
              className="flex opacity-0 animate-floatIn"
              style={{ animationDelay: '1.25s', animationFillMode: 'forwards' }}
            >
              <p className="flex group hover:cursor-pointer">
                facebook
                <span className=" pl-1 pt-1.5 lg:pt-2.5 group-hover:rotate-45 transition-all duration-300 ease-out group-hover:pt-1.5">
                  <IconContext.Provider value={{ size: 12 }}>
                    <BsArrowUpRight />
                  </IconContext.Provider>
                </span>
              </p>
            </li>
            <li
              className="flex opacity-0 animate-floatIn"
              style={{ animationDelay: '1.3s', animationFillMode: 'forwards' }}
            >
              <p className="flex group hover:cursor-pointer">
                <a href="https://www.linkedin.com/in/mikhail-johnson-1148121a1/">
                  linkedin
                </a>
                <span className=" pl-1 pt-1.5 lg:pt-2.5 group-hover:rotate-45 transition-all duration-300 ease-out group-hover:pt-1.5">
                  <IconContext.Provider value={{ size: 12 }}>
                    <BsArrowUpRight />
                  </IconContext.Provider>
                </span>
              </p>
            </li>
          </ul>
        </div>
        <div className="grid gap-5 lg:self-start">
          {/* eslint-enable react/jsx-no-constructed-context-values */}
          <h3
            className="font-bold text-lg lg:text-2xl opacity-0 animate-floatIn"
            style={{ animationDelay: '1.55s', animationFillMode: 'forwards' }}
          >
            Clients
          </h3>
          <ul className="relative grid gap-5 pl-16 lg:text-lg lg:pl-0 lg:grid-cols-2 lg:grid-rows-6">
            <li
              className="flex opacity-0 animate-floatIn"
              style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}
            >
              red bull
            </li>
            <li
              className="flex opacity-0 animate-floatIn"
              style={{ animationDelay: '1.65s', animationFillMode: 'forwards' }}
            >
              rocking the daisies
            </li>
            <li
              className="flex opacity-0 animate-floatIn"
              style={{ animationDelay: '1.7s', animationFillMode: 'forwards' }}
            >
              heiniken
            </li>
            <li
              className="flex opacity-0 animate-floatIn"
              style={{ animationDelay: '1.75s', animationFillMode: 'forwards' }}
            >
              fools gold social bar
            </li>
            <li
              className="flex opacity-0 animate-floatIn"
              style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}
            >
              we are egg
            </li>
            <li
              className="flex opacity-0 animate-floatIn"
              style={{ animationDelay: '1.85s', animationFillMode: 'forwards' }}
            >
              eden experience
            </li>
            <li
              className="flex opacity-0 animate-floatIn"
              style={{ animationDelay: '1.9s', animationFillMode: 'forwards' }}
            >
              toybox
            </li>
            <li
              className="flex opacity-0 animate-floatIn"
              style={{ animationDelay: '1.95s', animationFillMode: 'forwards' }}
            >
              sexy groovy love
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
}

About.getLayout = function getLayout(page) {
  return (
    <>
      <Navbar current="about" />
      {page}
    </>
  );
};
