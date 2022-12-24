import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { IconContext } from 'react-icons';

export default function Navbar(props) {
  const { current } = props;
  const path = useRouter().asPath;
  return (
    <nav
      className="opacity-0 animate-floatIn fixed top-0 left-0 right-0 flex mx-auto justify-between w-80 pt-6 z-10 lg:w-11/12 lg:pt-9"
      style={{
        animationDelay:
          /* eslint-disable no-nested-ternary */
          path.toLowerCase() === '/'
            ? '2.5s'
            : path.toLocaleLowerCase() === '/about'
            ? '0.5s'
            : '',
        animationFillMode: 'forwards',
      }}
    >
      {current === 'about' && (
        <Link
          href="/"
          className="text-offWhite font-bold text-xl lg:text-2xl opacity-0"
        >
          mikh<span className="italic">a</span>il j
          <span className="italic">o</span>hns<span className="italic">o</span>
          n.
        </Link>
      )}
      {current !== 'about' && (
        <Link href="/" className="text-offWhite font-bold text-xl lg:text-2xl">
          mikh<span className="italic">a</span>il j
          <span className="italic">o</span>hns<span className="italic">o</span>
          n.
        </Link>
      )}
      {current === 'main' && (
        <div className="flex group">
          {/* eslint-disable react/jsx-no-constructed-context-values */}
          <span className="pt-2 base-translate-x opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all ease-out duration-500">
            <IconContext.Provider value={{ size: 16, color: 'white' }}>
              <AiOutlineArrowRight />
            </IconContext.Provider>
          </span>
          <Link
            href="/about"
            className="text-offWhite font-light text-lg lg:text-xl group-hover:text-white"
          >
            ab<span className="italic">o</span>ut
          </Link>
        </div>
      )}
      {current === 'detail' && (
        <div className="flex group">
          {/* eslint-disable react/jsx-no-constructed-context-values */}
          <span className="pt-2 base-translate-x opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all ease-out duration-500">
            <IconContext.Provider value={{ size: 16, color: 'white' }}>
              <AiOutlineArrowRight />
            </IconContext.Provider>
          </span>
          <Link
            href="/"
            className="text-offWhite font-light text-lg lg:text-xl group-hover:text-white"
          >
            b<span className="italic">a</span>ck
          </Link>
        </div>
      )}
      {current === 'about' && (
        <div className="flex group">
          {/* eslint-disable react/jsx-no-constructed-context-values */}
          <span className="pt-2 base-translate-x opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all ease-out duration-500">
            <IconContext.Provider value={{ size: 16, color: 'black' }}>
              <AiOutlineArrowRight />
            </IconContext.Provider>
          </span>
          <Link href="/" className="text-black font-light text-lg lg:text-xl">
            w<span className="italic">o</span>rk
          </Link>
        </div>
      )}
    </nav>
  );
}
