import { useEffect, useState } from 'react';
import Landing from '../components/Landing';
import ProjectsList from '../components/ProjectsList';
import Background from '../components/Background';

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div
      className={`font-raleway bg-black w-screen text-offWhite ${
        loading ? 'h-screen overflow-hidden cursor-none' : ''
      }`}
    >
      <Background />
      {!loading && (
        <>
          <Landing />
          <ProjectsList />
        </>
      )}
    </div>
  );
}
