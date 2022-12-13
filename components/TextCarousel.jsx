import Image from 'next/image';

export default function TextCarousel(props) {
  const { project } = props;
  return (
    <div
      id="carousel-container"
      className="relative h-28 overflow-hidden lg:h-64"
    >
      <div
        id="carousel-text"
        className="absolute flex overflow-hidden w-full top-1/2 -translate-y-1/2"
      >
        <h1
          className="whitespace-nowrap font-bold text-4xl uppercase lg:text-5xl"
          style={{
            WebkitTextFillColor: 'transparent',
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: 'white',
          }}
        >
          {project.name} -{' '}
          <span
            style={{
              WebkitTextFillColor: 'white',
              WebkitTextStrokeWidth: '0px',
              WebkitTextStrokeColor: 'white',
            }}
          >
            {project.name}
          </span>{' '}
          - {project.name} -{' '}
        </h1>
      </div>
      <div
        id="carousel-image"
        className="relative w-44 h-full rounded-lg left-32 lg:w-[410px] lg:left-[600px] 2xl:left-[55vw]"
      >
        <Image
          src={project.carousel_image}
          fill="true"
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
