import Image from 'next/image';

export default function TextCarousel(props) {
  const { project } = props;
  return (
    <div id="carousel-container" className="relative h-28 overflow-hidden mt-6">
      <div
        id="carousel-text"
        className="absolute flex overflow-hidden w-full top-1/2 -translate-y-1/2"
      >
        <h1
          className="whitespace-nowrap font-bold text-4xl uppercase"
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
        className="relative w-44 h-28 rounded-lg left-32"
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
