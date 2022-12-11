import Link from 'next/link';

export default function Navbar(props) {
  const { current } = props;
  return (
    <nav className="fixed top-0 left-0 right-0 flex mx-auto justify-between w-80 pt-6 z-10">
      <Link href="/" className="text-offWhite font-bold text-xl">
        mikh<span className="italic">a</span>il j
        <span className="italic">o</span>hns<span className="italic">o</span>n.
      </Link>
      {current === 'main' && (
        <Link href="/about" className="text-offWhite font-light text-lg">
          ab<span className="italic">o</span>ut
        </Link>
      )}
      {current === 'detail' && (
        <Link href="/" className="text-offWhite font-light text-lg">
          b<span className="italic">a</span>ck
        </Link>
      )}
      {current === 'about' && (
        <Link href="/" className="text-black font-light text-lg">
          w<span className="italic">o</span>rk
        </Link>
      )}
    </nav>
  );
}
