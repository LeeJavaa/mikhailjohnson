import Landing from '../components/Landing';
import ProjectsList from '../components/ProjectsList';

export default function Home() {
  return (
    <div className="font-raleway bg-black w-screen text-offWhite">
      <Landing />
      <ProjectsList />
    </div>
  );
}
