import Link from 'next/link';

export default function Navbar(props) {
  const { current } = props;
  return (
    <nav className="fixed top-0 left-0 right-0 flex mx-auto justify-between w-80 pt-6 z-10 lg:w-11/12 lg:pt-9">
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
        <Link
          href="/about"
          className="text-offWhite font-light text-lg lg:text-xl"
        >
          ab<span className="italic">o</span>ut
        </Link>
      )}
      {current === 'detail' && (
        <Link href="/" className="text-offWhite font-light text-lg lg:text-xl">
          b<span className="italic">a</span>ck
        </Link>
      )}
      {current === 'about' && (
        <Link href="/" className="text-black font-light text-lg lg:text-xl">
          w<span className="italic">o</span>rk
        </Link>
      )}
    </nav>
  );
}
