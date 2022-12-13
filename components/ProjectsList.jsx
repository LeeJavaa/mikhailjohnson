import Image from 'next/image';
import Link from 'next/link';
import projects from '../data/projects';

export default function ProjectsList() {
  return (
    <div className="w-fit mx-auto grid gap-14 pb-7 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-24 lg:w-10/12">
      {projects.map((project) => (
        <div
          key={project.id}
          className={`grid gap-2 w-72 lg:w-[450px] 2xl:w-[600px] mx-auto ${
            parseInt(project.id, 10) % 2 === 0 ? 'lg:translate-y-32' : ''
          }`}
        >
          <Link href={`/projects/${project.id}`}>
            <div className="relative w-full h-96 rounded-lg lg:h-[600px] 2xl:h-[740px]">
              <Image
                src={project.display_image}
                fill="true"
                className=" object-cover rounded-lg"
              />
            </div>
          </Link>
          <div>
            <h1 className="font-bold text-xl lg:text-3xl">{project.name}</h1>
            <h2 className="italic font-thin lg:text-xl">
              {project.roleSummary.toLowerCase()}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
