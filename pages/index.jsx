import Image from 'next/image';
import Link from 'next/link';
import Landing from '../components/landing/Landing';
import projects from '../data/projects';

export default function Home() {
  return (
    <div className="font-raleway bg-black w-screen text-offWhite">
      <Landing />
      <div className="w-72 mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="py-7">
            <Link href={`/projects/${project.id}`}>
              <div className="relative w-full h-96 rounded-lg my-2">
                <Image
                  src={project.display_image}
                  fill="true"
                  className=" object-cover rounded-lg"
                />
              </div>
            </Link>
            <h1 className="font-bold text-xl">{project.name}</h1>
            <h2 className="italic font-thin">{project.roles}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
