import { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import projects from '../../data/projects';
import Navbar from '../../components/Navbar';
import ProjectNav from '../../components/ProjectNav';
import Gallery from '../../components/Gallery';
import TextCarousel from '../../components/TextCarousel';
import { CursorContext } from '../../components/CursorManager';

export default function Detail({ project, nextProject, prevProject }) {
  const { ref: refQuote, inView: quoteInView } = useInView();
  const { setSize } = useContext(CursorContext);
  useEffect(() => {
    setSize('small');
  }, []);

  return (
    <main className="w-screen h-fit bg-black text-offWhite">
      <div className="grid gap-6 lg:gap-10 w-80 mx-auto lg:w-10/12 2xl:gap-10">
        <div
          className="opacity-0 animate-floatInCover relative w-full h-44 rounded-lg mx-auto top-20 lg:w-full lg:h-[70vh] lg:top-24 2xl:h-[75vh]"
          style={{
            animationDelay: '0.25s',
            animationFillMode: 'forwards',
          }}
        >
          <Image
            src={project.display_image}
            fill="true"
            className="object-cover rounded-lg"
            alt="Project Main Display Image"
          />
        </div>
        <div
          className="opacity-0 animate-floatInCover lg:animate-floatIn"
          style={{
            animationDelay: '0.5s',
            animationFillMode: 'forwards',
          }}
        >
          <h1 className="font-bold text-5xl mt-16 lg:mt-20">{project.name}</h1>
          <div className="flex justify-between pt-2">
            <h3 className="font-light italic text-xl 2xl:text-2xl">
              {project.display_caption.toLowerCase()}
            </h3>
            <h4 className="font-thin italic text-xl 2xl:text-2xl">
              {project.date.toLowerCase()}
            </h4>
          </div>
        </div>
        <div
          className="opacity-0 animate-floatIn grid grid-cols-1 gap-2"
          style={{
            animationDelay: '0.75s',
            animationFillMode: 'forwards',
          }}
        >
          <h2 className="text-xl font-bold lg:text-3xl">About</h2>
          <p className="text-justify lg:text-lg lg:w-3/5">
            {project.about.toLowerCase()}
          </p>
        </div>
        <div
          className="opacity-0 animate-floatIn grid grid-cols-1 gap-2"
          style={{
            animationDelay: '0.9s',
            animationFillMode: 'forwards',
          }}
        >
          <h2 className="text-xl font-bold lg:text-3xl lg:text-right">Roles</h2>
          <div className="grid grid-cols-1 lg:text-lg lg:text-right">
            {project.roles.map((role) => (
              <p>{role.toLowerCase()}</p>
            ))}
          </div>
        </div>
        <TextCarousel project={project} />
        <div
          id="quote-container"
          className={`opacity-0 base-translate lg:base-text-translate duration-[1.5s] ease-out w-full my-12 grid gap-2 lg:w-3/5 lg:gap-6 ${
            quoteInView ? 'opacity-100 translate-y-0' : ''
          }`}
          ref={refQuote}
        >
          <h1 className="font-bold text-5xl lg:text-7xl">
            &quot;{project.quote.toLowerCase()}&quot;
          </h1>
          <p className="font-light lg:text-2xl">
            mikh<span className="italic">a</span>il
          </p>
        </div>
        <Gallery project={project} />
      </div>
      <div className="w-10/12 h-screen content-center mx-auto grid-cols-2 hidden lg:grid">
        <div>
          {prevProject && (
            <ProjectNav navProject={prevProject} navTo="previous project" />
          )}
        </div>
        <div>
          {nextProject && (
            <ProjectNav navProject={nextProject} navTo="next project" />
          )}
        </div>
      </div>
      <div className="lg:hidden">
        {nextProject && (
          <ProjectNav navProject={nextProject} navTo="next project" />
        )}
      </div>
    </main>
  );
}

Detail.getLayout = function getLayout(page) {
  return (
    <>
      <Navbar current="detail" />
      {page}
    </>
  );
};

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { id: project.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // eslint-disable-next-line prefer-destructuring
  const id = context.params.id;
  const project = projects.find((x) => x.id === parseInt(id, 10));
  const nextProject =
    projects.find((x) => x.id === parseInt(id, 10) + 1) || false;
  const prevProject =
    projects.find((x) => x.id === parseInt(id, 10) - 1) || false;
  return {
    // Passed to the page component as props
    props: { project, nextProject, prevProject },
  };
}
