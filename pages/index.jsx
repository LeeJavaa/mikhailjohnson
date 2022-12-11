import Landing from '../components/Landing';
import ProjectsList from '../components/ProjectsList';
import projects from '../data/projects';

export default function Home() {
  return (
    <div className="font-raleway bg-black w-screen text-offWhite">
      <Landing />
      <ProjectsList projects={projects} />
    </div>
  );
}
