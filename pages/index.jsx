import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import projects from '../data/projects';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    initialSlide: 2,
  };
  return (
    <div className="font-raleway bg-black w-screen h-screen">
      <div id="slider">
        <Slider {...settings}>
          {projects.map((project) => (
            <Link
              href={`/projects/${project.id}`}
              className="font-bold text-offWhite"
              key={project.id}
            >
              <div className="relative w-64 h-40 mx-auto overflow-hidden rounded-lg">
                <Image
                  src={project.display_image}
                  alt="display image"
                  fill="true"
                  className=" object-cover"
                />
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}
