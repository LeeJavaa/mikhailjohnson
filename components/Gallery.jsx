import Image from 'next/image';

export default function Gallery(props) {
  const { project } = props;

  return (
    <section
      id="gallery"
      className="w-64 mx-auto grid gap-4 pb-6 lg:w-full lg:grid-cols-2"
    >
      <div
        id="image1"
        className="relative w-full h-40 rounded-lg lg:col-span-2 lg:h-[600px] 2xl:h-[70vh]"
      >
        <Image
          src={project.gallery[0]}
          fill="true"
          className="object-cover rounded-lg"
        />
      </div>
      <div
        id="image2"
        className="relative w-full h-40 rounded-lg lg:h-[300px] 2xl:h-[45vh]"
      >
        <Image
          src={project.gallery[1]}
          fill="true"
          className="object-cover rounded-lg"
        />
      </div>
      <div
        id="image3"
        className="relative w-full h-40 rounded-lg lg:h-[300px] 2xl:h-[45vh]"
      >
        <Image
          src={project.gallery[2]}
          fill="true"
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
}
