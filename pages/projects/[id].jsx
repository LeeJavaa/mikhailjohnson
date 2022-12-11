import { useRouter } from 'next/router';
import Image from 'next/image';
import projects from '../../data/projects';
import Navbar from '../../components/Navbar';
import NextProject from '../../components/NextProject';
import Gallery from '../../components/Gallery';
import TextCarousel from '../../components/TextCarousel';

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const project = projects.find((x) => x.id === parseInt(id, 10));
  const nextProject = projects.find((x) => x.id === parseInt(id, 10) + 1);

  return (
    <main className="w-screen h-fit bg-black text-offWhite">
      <div className="w-80 mx-auto">
        <div className="relative w-full h-44 rounded-lg mx-auto top-20">
          <Image
            src={project.display_image}
            fill="true"
            className="object-cover rounded-lg"
          />
        </div>
        <h1 className="font-bold text-5xl mt-24 ">{project.name}</h1>
        <div className="flex justify-between pt-2">
          <h3 className="font-light italic text-xl">
            {project.display_caption.toLowerCase()}
          </h3>
          <h4 className="font-thin italic text-xl">
            {project.date.toLowerCase()}
          </h4>
        </div>
        <div className="pt-6 grid grid-cols-1 gap-2">
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-justify">{project.about.toLowerCase()}</p>
        </div>
        <div className="pt-6 grid grid-cols-1 gap-2">
          <h2 className="text-xl font-bold">Roles</h2>
          <div className="grid grid-cols-1">
            {project.roles.map((role) => (
              <p>{role.toLowerCase()}</p>
            ))}
          </div>
        </div>
        <TextCarousel project={project} />
        <div id="quote-container" className="w-full my-12 grid gap-2">
          <h1 className="font-bold text-5xl">
            "{project.quote.toLowerCase()}"
          </h1>
          <p className="font-light">
            mikh<span className="italic">a</span>il
          </p>
        </div>
        <Gallery project={project} />
      </div>
      {nextProject && <NextProject nextProject={nextProject} />}
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
