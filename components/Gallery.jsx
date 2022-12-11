import Image from 'next/image';

export default function Gallery(props) {
  const { project } = props;

  return (
    <section id="gallery" className="w-64 mx-auto grid gap-4 pb-6">
      <div id="image1" className="relative w-full h-40 rounded-lg">
        <Image
          src={project.gallery[0]}
          fill="true"
          className="object-cover rounded-lg"
        />
      </div>
      <div id="image2" className="relative w-full h-40 rounded-lg">
        <Image
          src={project.gallery[1]}
          fill="true"
          className="object-cover rounded-lg"
        />
      </div>
      <div id="image3" className="relative w-full h-40 rounded-lg">
        <Image
          src={project.gallery[2]}
          fill="true"
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
}
