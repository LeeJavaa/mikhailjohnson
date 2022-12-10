import Link from 'next/link';
import projects from '../data/projects';

export default function Home() {
  return (
    <div className="font-raleway bg-black h-96">
      <p className="text-offWhite">Hello</p>
      <ul className=" mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <Link
              href={`/projects/${project.id}`}
              className="font-bold text-offWhite"
            >
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
