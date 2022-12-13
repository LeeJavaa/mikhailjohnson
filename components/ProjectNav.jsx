import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

export default function ProjectNav(props) {
  const { navProject, navTo } = props;
  return (
    <section
      id="next-project"
      className="relative w-screen h-screen lg:w-[500px] lg:mx-auto lg:h-[600px] 2xl:w-[600px] 2xl:h-[750px]"
    >
      <div className="absolute z-10 grid gap-2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80">
        <h3 className="text-center italic font-light text-xl 2xl:text-2xl">
          {navTo}
        </h3>
        <h1 className="text-center font-bold text-4xl 2xl:text-5xl">
          {navProject.name}
        </h1>
        <Link href={`/projects/${navProject.id}`}>
          <div className="w-10 h-11 mx-auto rounded-2xl border-2 border-offWhite grid place-content-center mt-2 2xl:w-12 2xl:h-14">
            {navTo === 'next project' && <AiOutlineArrowDown />}
            {navTo === 'previous project' && <AiOutlineArrowUp />}
          </div>
        </Link>
      </div>
      <div
        id="next-project-image-container"
        className="relative w-full h-full overflow-hidden bg-black"
      >
        <Image
          src={navProject.display_image}
          fill="true"
          className="object-cover scale-110 blur-sm opacity-80"
        />
      </div>
    </section>
  );
}
