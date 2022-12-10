import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 flex mx-auto justify-between w-80 pt-6">
      <Link href="/" className="text-offWhite font-bold text-xl">
        mikh<span className="italic">a</span>il j
        <span className="italic">o</span>hns<span className="italic">o</span>n.
      </Link>
      <Link href="/about" className="text-offWhite font-light text-lg">
        ab<span className="italic">o</span>ut
      </Link>
    </nav>
  );
}
