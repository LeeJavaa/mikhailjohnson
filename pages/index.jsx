import Landing from '../components/Landing';
import ProjectsList from '../components/ProjectsList';
import Background from '../components/Background';

export default function Home() {
  return (
    <div className="font-raleway bg-black w-screen text-offWhite">
      <Background />
      <Landing />
      <ProjectsList />
    </div>
  );
}
