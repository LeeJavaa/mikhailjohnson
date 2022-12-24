import React, { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import projects from '../data/projects';
import { CursorContext } from './CursorManager';

export default function ProjectsList() {
  // refs for all projects
  const { ref: ref1, inView: elmentOneVisible } = useInView();
  const { ref: ref2, inView: elmentTwoVisible } = useInView();
  const { ref: ref3, inView: elmentThreeVisible } = useInView();
  const { ref: ref4, inView: elmentFourVisible } = useInView();
  const { ref: ref5, inView: elementFiveVisible } = useInView();
  const { ref: ref6, inView: elementSixVisible } = useInView();
  const { ref: ref7, inView: elementSevenVisible } = useInView();
  const { ref: ref8, inView: elementEightVisible } = useInView();
  const { ref: ref9, inView: elementNineVisible } = useInView();
  const { ref: ref10, inView: elementTenVisible } = useInView();

  // context for cursor hover
  const { setSize } = useContext(CursorContext);

  return (
    <div className="w-fit mx-auto grid gap-14 py-7 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-24 lg:w-10/12">
      <div
        key={projects[0].id}
        className={`grid gap-2 w-72 lg:w-[450px] 2xl:w-[600px] mx-auto ${
          parseInt(projects[0].id, 10) % 2 === 0 ? 'lg:translate-y-32' : ''
        } `}
        id={`${projects[0].id}`}
      >
        <Link href={`/projects/${projects[0].id}`}>
          <div
            className={`base-translate opacity-0 transition-all duration-1000 ease-out relative w-full h-96 rounded-lg lg:h-[600px] 2xl:h-[740px] hover:cursor-none ${
              elmentOneVisible ? 'opacity-100 translate-y-0' : ''
            }`}
            ref={ref1}
            onMouseEnter={() => {
              setSize('large');
            }}
            onMouseLeave={() => {
              setSize('small');
            }}
          >
            <Image
              src={projects[0].display_image}
              fill="true"
              className={` object-cover rounded-lg base-scale duration-1000 ease-out lg:grayscale-[35%] lg:hover:grayscale-0 ${
                elmentOneVisible ? 'scale-100 lg:hover:scale-[103%]' : ''
              }`}
              alt="Project Display Image"
            />
          </div>
        </Link>
        <div
          ref={ref2}
          className={`base-text-translate opacity-0 transition-all duration-1000 ease-out ${
            elmentTwoVisible ? 'opacity-100 translate-y-0' : ''
          }`}
        >
          <h1 className="font-bold text-xl lg:text-3xl">{projects[0].name}</h1>
          <h2 className="italic font-thin lg:text-xl">
            {projects[0].roleSummary.toLowerCase()}
          </h2>
        </div>
      </div>
      <div
        key={projects[1].id}
        className={`grid gap-2 w-72 lg:w-[450px] 2xl:w-[600px] mx-auto ${
          parseInt(projects[1].id, 10) % 2 === 0 ? 'lg:translate-y-32' : ''
        } `}
        id={`${projects[1].id}`}
      >
        <Link href={`/projects/${projects[1].id}`}>
          <div
            className={`base-translate opacity-0 transition-all duration-1000 ease-out relative w-full h-96 rounded-lg lg:h-[600px] 2xl:h-[740px] hover:cursor-none ${
              elmentThreeVisible ? 'opacity-100 translate-y-0' : ''
            }`}
            ref={ref3}
            onMouseEnter={() => {
              setSize('large');
            }}
            onMouseLeave={() => {
              setSize('small');
            }}
          >
            <Image
              src={projects[1].display_image}
              fill="true"
              className={` object-cover rounded-lg base-scale duration-1000 ease-out lg:grayscale-[35%] lg:hover:grayscale-0 ${
                elmentThreeVisible ? 'scale-100 lg:hover:scale-[103%]' : ''
              }`}
              alt="Project Display Image"
            />
          </div>
        </Link>
        <div
          ref={ref4}
          className={`base-text-translate opacity-0 transition-all duration-1000 ease-out ${
            elmentFourVisible ? 'opacity-100 translate-y-0' : ''
          }`}
        >
          <h1 className="font-bold text-xl lg:text-3xl">{projects[1].name}</h1>
          <h2 className="italic font-thin lg:text-xl">
            {projects[1].roleSummary.toLowerCase()}
          </h2>
        </div>
      </div>
      <div
        key={projects[2].id}
        className={`grid gap-2 w-72 lg:w-[450px] 2xl:w-[600px] mx-auto ${
          parseInt(projects[2].id, 10) % 2 === 0 ? 'lg:translate-y-32' : ''
        } `}
        id={`${projects[2].id}`}
      >
        <Link href={`/projects/${projects[2].id}`}>
          <div
            className={`base-translate opacity-0 transition-all duration-1000 ease-out relative w-full h-96 rounded-lg lg:h-[600px] 2xl:h-[740px] hover:cursor-none ${
              elementFiveVisible ? 'opacity-100 translate-y-0' : ''
            }`}
            ref={ref5}
            onMouseEnter={() => {
              setSize('large');
            }}
            onMouseLeave={() => {
              setSize('small');
            }}
          >
            <Image
              src={projects[2].display_image}
              fill="true"
              className={` object-cover rounded-lg base-scale duration-1000 ease-out lg:grayscale-[35%] lg:hover:grayscale-0 ${
                elementFiveVisible ? 'scale-100 lg:hover:scale-[103%]' : ''
              }`}
              alt="Project Display Image"
            />
          </div>
        </Link>
        <div
          ref={ref6}
          className={`base-text-translate opacity-0 transition-all duration-1000 ease-out ${
            elementSixVisible ? 'opacity-100 translate-y-0' : ''
          }`}
        >
          <h1 className="font-bold text-xl lg:text-3xl">{projects[2].name}</h1>
          <h2 className="italic font-thin lg:text-xl">
            {projects[2].roleSummary.toLowerCase()}
          </h2>
        </div>
      </div>
      <div
        key={projects[3].id}
        className={`grid gap-2 w-72 lg:w-[450px] 2xl:w-[600px] mx-auto ${
          parseInt(projects[3].id, 10) % 2 === 0 ? 'lg:translate-y-32' : ''
        } `}
        id={`${projects[3].id}`}
      >
        <Link href={`/projects/${projects[3].id}`}>
          <div
            className={`base-translate opacity-0 transition-all duration-1000 ease-out relative w-full h-96 rounded-lg lg:h-[600px] 2xl:h-[740px] hover:cursor-none ${
              elementSevenVisible ? 'opacity-100 translate-y-0' : ''
            }`}
            ref={ref7}
            onMouseEnter={() => {
              setSize('large');
            }}
            onMouseLeave={() => {
              setSize('small');
            }}
          >
            <Image
              src={projects[3].display_image}
              fill="true"
              className={` object-cover rounded-lg base-scale duration-1000 ease-out lg:grayscale-[35%] lg:hover:grayscale-0 ${
                elementSevenVisible ? 'scale-100 lg:hover:scale-[103%]' : ''
              }`}
              alt="Project Display Image"
            />
          </div>
        </Link>
        <div
          ref={ref8}
          className={`base-text-translate opacity-0 transition-all duration-1000 ease-out ${
            elementEightVisible ? 'opacity-100 translate-y-0' : ''
          }`}
        >
          <h1 className="font-bold text-xl lg:text-3xl">{projects[3].name}</h1>
          <h2 className="italic font-thin lg:text-xl">
            {projects[3].roleSummary.toLowerCase()}
          </h2>
        </div>
      </div>
      <div
        key={projects[4].id}
        className={`grid gap-2 w-72 lg:w-[450px] 2xl:w-[600px] mx-auto ${
          parseInt(projects[4].id, 10) % 2 === 0 ? 'lg:translate-y-32' : ''
        } `}
        id={`${projects[4].id}`}
      >
        <Link href={`/projects/${projects[4].id}`}>
          <div
            className={`base-translate opacity-0 transition-all duration-1000 ease-out relative w-full h-96 rounded-lg lg:h-[600px] 2xl:h-[740px] hover:cursor-none ${
              elementNineVisible ? 'opacity-100 translate-y-0' : ''
            }`}
            ref={ref9}
            onMouseEnter={() => {
              setSize('large');
            }}
            onMouseLeave={() => {
              setSize('small');
            }}
          >
            <Image
              src={projects[4].display_image}
              fill="true"
              className={` object-cover rounded-lg base-scale duration-1000 ease-out lg:grayscale-[35%] lg:hover:grayscale-0 ${
                elementNineVisible ? 'scale-100 lg:hover:scale-[103%]' : ''
              }`}
              alt="Project Display Image"
            />
          </div>
        </Link>
        <div
          ref={ref10}
          className={`base-text-translate opacity-0 transition-all duration-1000 ease-out ${
            elementTenVisible ? 'opacity-100 translate-y-0' : ''
          }`}
        >
          <h1 className="font-bold text-xl lg:text-3xl">{projects[4].name}</h1>
          <h2 className="italic font-thin lg:text-xl">
            {projects[4].roleSummary.toLowerCase()}
          </h2>
        </div>
      </div>
    </div>
  );
}
