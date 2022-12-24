import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function Gallery(props) {
  const { project } = props;
  const { ref: refGalleryOne, inView: galleryOneInView } = useInView();
  const { ref: refGalleryTwo, inView: galleryTwoInView } = useInView();
  const { ref: refGalleryThree, inView: galleryThreeInView } = useInView();

  return (
    <section
      id="gallery"
      className="w-64 mx-auto grid gap-4 pb-6 lg:w-full lg:grid-cols-2"
    >
      <div
        id="image1"
        className={`base-translate opacity-0 transition-all duration-1000 ease-out relative w-full h-40 rounded-lg lg:col-span-2 lg:h-[600px] 2xl:h-[70vh] ${
          galleryOneInView ? 'opacity-100 translate-y-0' : ''
        }`}
        ref={refGalleryOne}
      >
        <Image
          src={project.gallery[0]}
          fill="true"
          className={`base-scale duration-1000 ease-out object-cover rounded-lg ${
            galleryOneInView ? 'scale-100' : ''
          }`}
          alt="Third Project Image"
        />
      </div>
      <div
        id="image2"
        className={`base-translate opacity-0 transition-all duration-1000 ease-out relative w-full h-40 rounded-lg lg:h-[300px] 2xl:h-[45vh] ${
          galleryTwoInView ? 'opacity-100 translate-y-0' : ''
        }`}
        ref={refGalleryTwo}
      >
        <Image
          src={project.gallery[1]}
          fill="true"
          className={`base-scale duration-1000 ease-out object-cover rounded-lg ${
            galleryTwoInView ? 'scale-100' : ''
          }`}
          alt="Fourth Project Image"
        />
      </div>
      <div
        id="image3"
        className={`base-translate opacity-0 transition-all duration-1000 ease-out  relative w-full h-40 rounded-lg lg:h-[300px] 2xl:h-[45vh] ${
          galleryThreeInView ? 'opacity-100 translate-y-0' : ''
        }`}
        ref={refGalleryThree}
      >
        <Image
          src={project.gallery[2]}
          fill="true"
          className={`base-scale duration-1000 ease-out object-cover rounded-lg ${
            galleryThreeInView ? 'scale-100' : ''
          }`}
          alt="Fifth Project Image"
        />
      </div>
    </section>
  );
}
