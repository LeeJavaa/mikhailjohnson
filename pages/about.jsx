import { BsArrowUpRight } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <main className="font-raleway text-black w-screen h-screen bg-white">
      <section className="w-80 mx-auto grid gap-3 mb-5">
        <h1 className="font-bold text-4xl text-center mt-14">
          mikh<span className="italic">a</span>il j
          <span className="italic">o</span>hns<span className="italic">o</span>
          n.
        </h1>
        <p className="w-full text-justify">
          mikhail johnson is an engineer and artist hailing from cape town,
          south africa. he has designed sets and executed installation art at
          some of the most popular festivals and events across the world.
        </p>
        <h3 className="font-bold text-lg">Contact</h3>
        <ul className="relative grid gap-5 pl-16">
          <li className="flex">
            email
            <span className=" pl-1 pt-1.5">
              <IconContext.Provider value={{ size: 12 }}>
                <BsArrowUpRight />
              </IconContext.Provider>
            </span>
          </li>
          <li className="flex">
            <a href="https://www.instagram.com/mikhail_johnson/">instagram</a>
            <span className=" pl-1 pt-1.5">
              <IconContext.Provider value={{ size: 12 }}>
                <BsArrowUpRight />
              </IconContext.Provider>
            </span>
          </li>
          <li className="flex">
            facebook
            <span className=" pl-1 pt-1.5">
              <IconContext.Provider value={{ size: 12 }}>
                <BsArrowUpRight />
              </IconContext.Provider>
            </span>
          </li>
          <li className="flex">
            <a href="https://www.linkedin.com/in/mikhail-johnson-1148121a1/">
              linkedin
            </a>
            <span className=" pl-1 pt-1.5">
              <IconContext.Provider value={{ size: 12 }}>
                <BsArrowUpRight />
              </IconContext.Provider>
            </span>
          </li>
        </ul>
        <h3 className="font-bold text-lg">Clients</h3>
        <ul className="relative grid gap-5 pl-16">
          <li className="flex">red bull</li>
          <li className="flex">rocking the daisies</li>
          <li className="flex">heiniken</li>
          <li className="flex">fools gold social bar</li>
          <li className="flex">we are egg</li>
          <li className="flex">eden experience</li>
          <li className="flex">toybox</li>
          <li className="flex">sexy groovy love</li>
        </ul>
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
