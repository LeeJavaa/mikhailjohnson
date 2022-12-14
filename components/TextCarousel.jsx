import Image from 'next/image';

export default function TextCarousel(props) {
  const { project } = props;
  return (
    <div id="carousel-container" className="relative h-28 lg:h-64">
      <div
        id="carousel-text"
        className="absolute flex gap-4 overflow-hidden w-full top-1/2 -translate-y-1/2 whitespace-nowrap font-bold text-4xl uppercase lg:text-5xl"
      >
        <h1
          className="animate-marque2"
          style={{
            WebkitTextFillColor: 'transparent',
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: 'white',
          }}
        >
          {project.name}
        </h1>
        <h1 className="animate-marque2">{project.name}</h1>
        <h1
          className="animate-marque2"
          style={{
            WebkitTextFillColor: 'transparent',
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: 'white',
          }}
        >
          {project.name}
        </h1>
        <h1 className="animate-marque2">{project.name}</h1>
        <h1
          className="animate-marque2"
          style={{
            WebkitTextFillColor: 'transparent',
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: 'white',
          }}
        >
          {project.name}
        </h1>
        <h1 className="animate-marque2">{project.name}</h1>
        <h1
          className="animate-marque2"
          style={{
            WebkitTextFillColor: 'transparent',
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: 'white',
          }}
        >
          {project.name}
        </h1>
        <h1 className="animate-marque2">{project.name}</h1>
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
