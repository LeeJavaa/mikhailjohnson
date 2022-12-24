import { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { CursorContext } from './CursorManager';

export default function ProjectNav(props) {
  const { navProject, navTo } = props;
  const { ref: sectionRef, inView: sectionInView } = useInView();
  const { ref: textRef, inView: textInView } = useInView();
  // context for cursor hover
  const { setSize } = useContext(CursorContext);
  return (
    <Link href={`/projects/${navProject.id}`} className=" hover:cursor-none">
      <section
        id="next-project"
        className="group relative w-screen h-screen lg:w-[500px] lg:mx-auto lg:h-[600px] 2xl:w-[600px] 2xl:h-[750px] hover:cursor-none"
        ref={sectionRef}
        onMouseEnter={() => {
          setSize('large');
        }}
        onMouseLeave={() => {
          setSize('small');
        }}
      >
        <div
          className={`opacity-0 transition-all duration-1000 ease-out absolute z-10 grid gap-2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 ${
            textInView ? 'opacity-100' : ''
          }`}
          ref={textRef}
        >
          <h3 className="text-center italic font-light text-xl 2xl:text-2xl">
            {navTo}
          </h3>
          <h1 className="text-center font-bold text-4xl 2xl:text-5xl">
            {navProject.name}
          </h1>
          <div className="w-10 h-11 mx-auto rounded-2xl border-2 border-offWhite grid place-content-center mt-2 2xl:w-12 2xl:h-14 hover:cursor-none">
            {navTo === 'next project' && <AiOutlineArrowDown />}
            {navTo === 'previous project' && <AiOutlineArrowUp />}
          </div>
        </div>
        <div
          id="next-project-image-container"
          className="relative w-full h-full overflow-hidden bg-black"
        >
          <Image
            src={navProject.display_image}
            fill="true"
            className={`base-scale duration-1000 ease-out object-cover scale-110 blur-sm opacity-80 lg:grayscale-[35%] lg:group-hover:grayscale-0 ${
              sectionInView ? 'scale-100 lg:group-hover:scale-125' : ''
            }`}
            alt="Image of project to navigate to"
          />
        </div>
      </section>
    </Link>
  );
}
