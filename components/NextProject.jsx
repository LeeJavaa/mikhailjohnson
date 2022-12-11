import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineArrowDown } from 'react-icons/ai';

export default function NextProject(props) {
  const { nextProject } = props;
  return (
    <section id="next-project" className="relative w-screen h-screen">
      <div className="absolute z-10 grid gap-2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80">
        <h3 className="text-center italic font-light text-xl">next project</h3>
        <h1 className="text-center font-bold text-4xl">{nextProject.name}</h1>
        <Link href={`/projects/${nextProject.id}`}>
          <div className="w-10 h-11 mx-auto rounded-2xl border-2 border-offWhite grid place-content-center mt-2">
            <AiOutlineArrowDown />
          </div>
        </Link>
      </div>
      <div
        id="next-project-image-container"
        className="relative w-full h-full overflow-hidden bg-black"
      >
        <Image
          src={nextProject.display_image}
          fill="true"
          className="object-cover scale-110 blur-sm opacity-80"
        />
      </div>
    </section>
  );
}
