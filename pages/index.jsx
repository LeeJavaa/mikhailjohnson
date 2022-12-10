import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-raleway bg-black h-96">
      <p className="text-offWhite">Hello</p>
      <ul className=" mt-8">
        <li>
          <Link href="/projects/1/" className="font-bold text-offWhite">
            Project 1
          </Link>
        </li>
        <li>
          <Link href="/projects/2/" className="font-bold text-offWhite">
            Project 2
          </Link>
        </li>
        <li>
          <Link href="/projects/3/" className="font-bold text-offWhite">
            Project 3
          </Link>
        </li>
      </ul>
    </div>
  );
}
